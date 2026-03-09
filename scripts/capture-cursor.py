import os
from playwright.sync_api import sync_playwright

SITE_URL = "https://main.d1popz90n7goqp.amplifyapp.com"
OUTPUT_DIR = "/home/kasifali/portfolio/public/projects/cursor-analytics"
os.makedirs(OUTPUT_DIR, exist_ok=True)

REDACTION_JS = """
(function() {
    const fakeNames = [
        'Alex Chen', 'Sarah Kumar', 'James Wilson', 'Priya Patel', 'David Kim',
        'Emma Rodriguez', 'Michael Zhang', 'Anita Sharma', 'Chris Lee', 'Maya Johnson',
        'Ryan O\\'Brien', 'Nisha Gupta', 'Tom Anderson', 'Lisa Park', 'Sam Martinez',
        'Kate Brown', 'Raj Mehta', 'Amy Clark', 'Ben Taylor', 'Zara Ali'
    ];
    let nameIndex = 0;
    const nameMap = new Map();

    function getFakeName(realName) {
        if (!nameMap.has(realName)) {
            nameMap.set(realName, fakeNames[nameIndex % fakeNames.length]);
            nameIndex++;
        }
        return nameMap.get(realName);
    }

    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    // First pass: collect all potential real names (capitalized multi-word strings near emails)
    const realNames = new Set();
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g;

    let node;
    while (node = walker.nextNode()) {
        let text = node.textContent;
        // Detect names (2+ words, each capitalized, near context)
        const nameMatches = text.match(/\\b[A-Z][a-z]+ (?:[A-Z][a-z]+ ?){1,3}\\b/g);
        if (nameMatches) {
            nameMatches.forEach(n => {
                // Skip common non-name phrases
                if (!n.match(/^(Total |Plan |Ask |Code |Feature |Top |Avg |Lines |Cursor )/)) {
                    realNames.add(n.trim());
                }
            });
        }
    }

    // Second pass: replace everything
    const walker2 = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    while (node = walker2.nextNode()) {
        let text = node.textContent;
        let changed = false;

        // Replace emails
        if (text.match(emailPattern)) {
            text = text.replace(emailPattern, 'user@example.com');
            changed = true;
        }

        // Replace dollar amounts
        if (text.match(/\\$[\\d,]+\\.?\\d*k?/)) {
            text = text.replace(/\\$[\\d,]+\\.?\\d*k?/g, function(match) {
                if (match.includes('k')) return '$XX.Xk';
                if (match.includes('.')) return '$XX.XX';
                return '$XXX';
            });
            changed = true;
        }

        // Replace detected names
        for (const realName of realNames) {
            if (text.includes(realName)) {
                text = text.replace(new RegExp(realName.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'), 'g'), getFakeName(realName));
                changed = true;
            }
        }

        if (changed) {
            node.textContent = text;
        }
    }
})();
"""

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(
        viewport={"width": 1920, "height": 1080},
        device_scale_factor=2,
        color_scheme="dark",
    )
    page = context.new_page()

    print("Loading site...")
    page.goto(SITE_URL, wait_until="networkidle", timeout=90000)
    page.wait_for_timeout(5000)

    # Apply redaction
    page.evaluate(REDACTION_JS)
    page.wait_for_timeout(500)

    # Screenshot 1: Overview tab (landing page) - KPIs + Top Performers + Feature Adoption
    print("Screenshot 1: Overview tab...")
    page.screenshot(path=f"{OUTPUT_DIR}/screenshot-1-overview.png", full_page=False)

    # Screenshot 2: Scroll down on Overview to see more content
    print("Screenshot 2: Overview scrolled (Code Generation, Top Models)...")
    page.evaluate("window.scrollBy(0, 600)")
    page.wait_for_timeout(1000)
    page.evaluate(REDACTION_JS)
    page.screenshot(path=f"{OUTPUT_DIR}/screenshot-2-overview-bottom.png", full_page=False)

    # Screenshot 3: Users tab
    print("Screenshot 3: Users tab...")
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(500)
    tabs = page.query_selector_all('button, [role="tab"]')
    for tab in tabs:
        text = tab.inner_text()
        if 'Users' == text.strip():
            tab.click()
            break
    page.wait_for_timeout(3000)
    page.evaluate(REDACTION_JS)
    page.screenshot(path=f"{OUTPUT_DIR}/screenshot-3-users.png", full_page=False)

    # Screenshot 4: Analytics tab
    print("Screenshot 4: Analytics tab...")
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(500)
    tabs = page.query_selector_all('button, [role="tab"]')
    for tab in tabs:
        text = tab.inner_text()
        if 'Analytics' == text.strip():
            tab.click()
            break
    page.wait_for_timeout(3000)
    page.evaluate(REDACTION_JS)
    page.screenshot(path=f"{OUTPUT_DIR}/screenshot-4-analytics.png", full_page=False)

    # Screenshot 5: Scroll down on Analytics for more charts
    print("Screenshot 5: Analytics scrolled...")
    page.evaluate("window.scrollBy(0, 700)")
    page.wait_for_timeout(1500)
    page.evaluate(REDACTION_JS)
    page.screenshot(path=f"{OUTPUT_DIR}/screenshot-5-analytics-bottom.png", full_page=False)

    browser.close()
    print(f"\nDone! Screenshots saved to {OUTPUT_DIR}")
