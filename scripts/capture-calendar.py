import os
import json
from playwright.sync_api import sync_playwright

SITE_URL = "http://localhost:3333"
OUTPUT_DIR = "/home/kasifali/portfolio/public/projects/calendar-analytics"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Build mock department API response from static data
with open("/home/kasifali/amplegam/frontend/calendar-analytics-dashboard/out/data/calendar_analytics_20250101_20250731.json") as f:
    analytics = json.load(f)

dept_response = {"departments": []}
for name, info in analytics.get("by_department", {}).items():
    dept_response["departments"].append({
        "name": name,
        "users": info.get("users", 0),
        "meetings": info.get("meetings_attended", 0),
        "total_minutes": info.get("total_duration_minutes", 0),
        "hours": round(info.get("total_duration_minutes", 0) / 60, 1),
        "external_meetings": info.get("external_meetings", 0),
        "external_rate": round(info.get("external_meetings", 0) / max(info.get("meetings_attended", 1), 1) * 100, 1),
    })

MOCK_DEPT_JSON = json.dumps(dept_response)

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
        if (text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g)) {
            node.textContent = text.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g, 'user@example.com');
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

    # Mock API routes
    page.route("**/api/analytics/departments*", lambda route: route.fulfill(
        status=200, content_type="application/json", body=MOCK_DEPT_JSON))
    page.route("**/api/chat*", lambda route: route.fulfill(
        status=200, content_type="application/json",
        body='{"response": "Based on the meeting data, Customer Success has the highest meeting volume at 106,359 meetings. Engineering follows with 89,108 meetings. The cross-department collaboration rate is 8%, with Customer Success ↔ Revenue being the most frequent inter-department pairing."}'))

    print("Loading site...")
    page.goto(SITE_URL, wait_until="networkidle", timeout=60000)
    page.wait_for_timeout(6000)

    # Force dark mode
    page.evaluate("""
        document.documentElement.classList.add('dark');
        localStorage.setItem('amagi-theme', 'dark');
    """)
    page.wait_for_timeout(1000)

    # Try theme toggle
    try:
        toggle = page.query_selector('button[class*="theme"], [aria-label*="theme" i]')
        if toggle:
            bg = page.evaluate("getComputedStyle(document.body).backgroundColor")
            if '1 0 0' in bg or '255' in bg:
                toggle.click()
                page.wait_for_timeout(1500)
                print("  Toggled dark mode")
    except:
        pass

    page.evaluate(REDACTION_JS)

    # Screenshot 1: Dashboard top — KPIs + Department pie chart + Top Collaborations
    print("Screenshot 1: Dashboard overview...")
    page.screenshot(path=f"{OUTPUT_DIR}/screenshot-1-dashboard.png", full_page=False)

    # Screenshot 2: Scroll to Key Insights + Executive Summary
    print("Screenshot 2: Key Insights + Executive Summary...")
    page.evaluate("""
        const headings = document.querySelectorAll('h2, h3, [class*="heading"]');
        for (const h of headings) {
            if (h.textContent.includes('Key Insights') || h.textContent.includes('Insights')) {
                h.scrollIntoView({ block: 'start', behavior: 'instant' });
                break;
            }
        }
    """)
    page.wait_for_timeout(1000)
    page.evaluate(REDACTION_JS)
    page.screenshot(path=f"{OUTPUT_DIR}/screenshot-2-insights.png", full_page=False)

    # Screenshot 3: Click a KPI card to open insights modal
    print("Screenshot 3: KPI insights modal...")
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(500)
    # Click first KPI card (Total Meetings)
    kpi_cards = page.query_selector_all('[class*="kpi"], [class*="card"]')
    clicked = False
    for card in kpi_cards[:8]:
        text = card.inner_text()
        if 'Total Meetings' in text or 'Total Hours' in text:
            card.click()
            page.wait_for_timeout(2000)
            # Check if modal opened
            modal = page.query_selector('[role="dialog"], [class*="modal"], [class*="Dialog"]')
            if modal:
                clicked = True
                print("  Modal opened!")
                break
    if not clicked:
        print("  No modal found, trying broader click...")
        # Try clicking any clickable KPI element
        page.evaluate("""
            const cards = document.querySelectorAll('[class*="cursor-pointer"]');
            if (cards.length > 0) cards[0].click();
        """)
        page.wait_for_timeout(2000)

    page.evaluate(REDACTION_JS)
    page.screenshot(path=f"{OUTPUT_DIR}/screenshot-3-kpi-modal.png", full_page=False)

    # Close modal if open
    page.keyboard.press("Escape")
    page.wait_for_timeout(500)

    # Screenshot 4: Open chatbot
    print("Screenshot 4: AI Chatbot...")
    chatbot_btn = page.query_selector('button[class*="chat"], [class*="chatbot"], button:has(svg)')
    # Look for the floating chat button (usually bottom-right)
    page.evaluate("""
        const btns = document.querySelectorAll('button');
        for (const btn of btns) {
            const rect = btn.getBoundingClientRect();
            // Floating button is typically in bottom-right corner
            if (rect.right > window.innerWidth - 100 && rect.bottom > window.innerHeight - 100) {
                btn.click();
                break;
            }
        }
    """)
    page.wait_for_timeout(2000)

    # Type a question in the chatbot
    chat_input = page.query_selector('input[type="text"], textarea, [contenteditable="true"]')
    if chat_input:
        chat_input.fill("Which department has the most meetings?")
        page.wait_for_timeout(500)
        # Press enter or click send
        page.keyboard.press("Enter")
        page.wait_for_timeout(3000)
        print("  Chat message sent!")

    page.evaluate(REDACTION_JS)
    page.screenshot(path=f"{OUTPUT_DIR}/screenshot-4-chatbot.png", full_page=False)

    browser.close()
    print(f"\nDone! Screenshots saved to {OUTPUT_DIR}")
