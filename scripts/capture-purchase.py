import os
from playwright.sync_api import sync_playwright

SITE_URL = "https://main.d3p16o5qaz1tvx.amplifyapp.com"
OUTPUT_DIR = "/home/kasifali/portfolio/public/projects/purchase-dashboard"
os.makedirs(OUTPUT_DIR, exist_ok=True)

REDACTION_JS = """
(function() {
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    let node;
    while (node = walker.nextNode()) {
        let text = node.textContent;
        text = text.replace(
            /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g,
            'user@example.com'
        );
        text = text.replace(
            /\\$\\s*[\\d,]+\\.?\\d*/g,
            '$XX,XXX'
        );
        text = text.replace(
            /(?:INR|₹)\\s*[\\d,]+\\.?\\d*/g,
            'INR XX,XXX'
        );
        text = text.replace(/\\bAnjali Naik\\b/gi, 'Jane Smith');
        text = text.replace(/\\bAnjali\\b/gi, 'Jane');
        text = text.replace(/\\bM Bhaskar\\b/gi, 'Mike Johnson');
        text = text.replace(/\\bBhaskar\\b/gi, 'Mike');
        text = text.replace(/\\bMainoddin Balagar\\b/gi, 'Alex Brown');
        text = text.replace(/\\bMainoddin\\b/gi, 'Alex');
        text = text.replace(/\\bSharanabasappa Chatter\\b/gi, 'David Wilson');
        text = text.replace(/\\bSharanabasappa\\b/gi, 'David');
        node.textContent = text;
    }
})();
"""

FORCE_DARK = """
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
    localStorage.setItem('theme', 'dark');
"""

def scroll_to_heading(page, text):
    """Scroll to a heading containing the given text."""
    page.evaluate(f"""
        const headings = document.querySelectorAll('h1, h2, h3, h4, [class*="heading"], [class*="title"]');
        for (const h of headings) {{
            if (h.textContent.includes('{text}')) {{
                h.scrollIntoView({{ block: 'start', behavior: 'instant' }});
                break;
            }}
        }}
    """)
    page.wait_for_timeout(800)

def click_show_details_near(page, section_text):
    """Click the 'Show Details' button nearest to a section heading."""
    page.evaluate(f"""
        const headings = document.querySelectorAll('h1, h2, h3, h4, [class*="heading"], [class*="title"]');
        for (const h of headings) {{
            if (h.textContent.includes('{section_text}')) {{
                // Find the Show Details button in the same parent/container
                const parent = h.closest('div') || h.parentElement;
                const btn = parent.querySelector('button');
                if (btn && btn.textContent.includes('Show Details')) {{
                    btn.click();
                    break;
                }}
                // Try sibling or parent level
                const grandParent = parent.parentElement;
                if (grandParent) {{
                    const btns = grandParent.querySelectorAll('button');
                    for (const b of btns) {{
                        if (b.textContent.includes('Show Details')) {{
                            b.click();
                            break;
                        }}
                    }}
                }}
                break;
            }}
        }}
    """)
    page.wait_for_timeout(2000)


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(
        viewport={"width": 1920, "height": 1080},
        device_scale_factor=2,
        color_scheme="dark",
    )
    page = context.new_page()

    page.add_init_script("""
        document.addEventListener('DOMContentLoaded', () => {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        });
    """)

    print("Loading site...")
    page.goto(SITE_URL, wait_until="networkidle", timeout=90000)
    page.wait_for_timeout(5000)
    page.evaluate(FORCE_DARK)
    page.wait_for_timeout(2000)

    # Try clicking theme toggle for dark mode
    try:
        toggle = page.query_selector('[class*="theme"], button[aria-label*="theme" i], button[aria-label*="dark" i]')
        if toggle:
            bg = page.evaluate("getComputedStyle(document.body).backgroundColor")
            if '255' in bg or '250' in bg or '245' in bg:
                toggle.click()
                page.wait_for_timeout(1500)
                print("  Toggled dark mode via button")
    except:
        pass

    page.evaluate(FORCE_DARK)
    page.wait_for_timeout(1000)
    page.evaluate(REDACTION_JS)
    page.wait_for_timeout(500)

    # ── Screenshot 1: Dashboard header + KPIs + Charts (top of page, no expand) ──
    print("Screenshot 1: Dashboard header + KPIs + Charts...")
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(500)
    page.screenshot(path=f"{OUTPUT_DIR}/screenshot-1-dashboard.png", full_page=False)

    # ── Screenshot 2: All sections overview with collapsed metrics ──
    print("Screenshot 2: All sections overview (collapsed metrics)...")
    scroll_to_heading(page, "Vendor & Request Analytics")
    page.evaluate(REDACTION_JS)
    page.screenshot(path=f"{OUTPUT_DIR}/screenshot-2-overview-metrics.png", full_page=False)

    # ── Screenshot 3: Vendor & Request Analytics EXPANDED ──
    print("Screenshot 3: Vendor & Request Analytics (expanded)...")
    scroll_to_heading(page, "Vendor & Request Analytics")
    click_show_details_near(page, "Vendor & Request")
    page.evaluate(REDACTION_JS)
    scroll_to_heading(page, "Vendor & Request Analytics")
    page.screenshot(path=f"{OUTPUT_DIR}/screenshot-3-vendor-expanded.png", full_page=False)

    # ── Screenshot 4: Sentiment Analysis & Escalations EXPANDED ──
    print("Screenshot 4: Sentiment Analysis (expanded)...")
    scroll_to_heading(page, "Sentiment Analysis")
    click_show_details_near(page, "Sentiment Analysis")
    page.evaluate(REDACTION_JS)
    scroll_to_heading(page, "Sentiment Analysis")
    page.screenshot(path=f"{OUTPUT_DIR}/screenshot-4-sentiment-expanded.png", full_page=False)

    # ── Screenshot 5: Team Productivity EXPANDED ──
    print("Screenshot 5: Team Productivity (expanded)...")
    scroll_to_heading(page, "Team Productivity")
    click_show_details_near(page, "Team Productivity")
    page.evaluate(REDACTION_JS)
    scroll_to_heading(page, "Team Productivity")
    page.screenshot(path=f"{OUTPUT_DIR}/screenshot-5-team-expanded.png", full_page=False)

    browser.close()
    print(f"\nDone! 5 screenshots saved to {OUTPUT_DIR}")
