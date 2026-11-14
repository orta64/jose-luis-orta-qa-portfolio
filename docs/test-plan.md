# Test Plan

## Scope

**Included:** public assistant entry page, language routing, service discovery, bilingual copy, form validation and consent behavior, responsive layout, keyboard access, and non-destructive error handling.

**Excluded:** production lead submission, payment, account creation, private CRM data, security penetration testing, source-code audit, load testing, and any claim that AI answers are always correct.

## Test levels

1. **Read-only smoke checks:** page loads, expected language choices are visible, links point to the intended routes.
2. **Functional checks in a safe environment:** service choice, required fields, malformed input, consent, and success/error states using synthetic data.
3. **Content and trust checks:** Spanish/English parity, clear explanation of what happens after continuing, no unsupported promise or invented quote.
4. **Usability and accessibility checks:** keyboard-only operation, visible focus, accessible names, contrast, zoom, and mobile viewport.

## Browsers and viewports

Use current stable Chrome and Firefox on desktop, plus Safari on iOS and Chrome on Android when devices are available. Suggested viewport checks: 1440×900 desktop, 768×1024 tablet, and 390×844 mobile. These are planned environments; no device coverage is claimed yet.

## Entry and exit criteria

**Entry:** approved test environment, synthetic contact data, and confirmation that test submissions cannot reach real customers.

**Exit:** all critical scenarios executed; no open blocker or critical defect; remaining issues documented with severity and owner; actual test evidence saved without personal data.

## Safety and data handling

- Use fictional names, reserved example email addresses, and synthetic phone values.
- Do not enter real customer details or attach real photographs/videos.
- Do not send a production WhatsApp message or CRM submission as a test.
- Keep screenshots free of private data and redact tokens before sharing.
- Review AI-generated test ideas manually; expected results must come from verified requirements.

