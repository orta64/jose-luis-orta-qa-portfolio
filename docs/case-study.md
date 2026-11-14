# Case Study: Bilingual AI Assistant Entry Flow

## Context

Carmen Digital uses a public assistant entry page to route prospective customers to a Spanish-language assistant (Valeria) or an English-language assistant (Claire). The assistants help visitors explore services and prepare an inquiry. The human owner remains responsible for reviewing the request and responding.

## User journey under review

1. Visitor opens the assistant entry page.
2. Visitor understands that two language options are available.
3. Visitor selects the preferred language.
4. The matching assistant experience opens.
5. The visitor can explore a service and, if they choose to continue, review what information will be shared before submitting an inquiry.

Steps 1–3 are directly observable on the public landing page. Steps 4–5 are included as planned coverage; this portfolio does not claim to have completed those interactions in production.

## QA objective

Check that a visitor can identify and select the right language, reach the matching assistant, understand the purpose of the flow, and retain control over whether to share contact details.

## Risks considered

- A language link opens the wrong experience or fails to navigate.
- Key instructions are missing or difficult to understand in one language.
- A customer is asked for contact information before understanding the next step.
- Required fields, consent, or validation behave inconsistently.
- Assistant copy presents unsupported prices, delivery dates, or guarantees.
- A mobile layout hides language choices or makes controls difficult to use.
- Keyboard or assistive-technology users cannot identify or operate the language options.

## Approach

Start with read-only checks of the public landing page, then use synthetic data in a controlled test environment for the full intake flow. Cover the main success path, invalid and missing input, language parity, privacy disclosure, keyboard access, and narrow mobile viewports. Do not submit a real lead during QA without the business owner's explicit test plan and test destination.

## Result status

**Test design prepared; execution pending.** No production defect is asserted in this case study.

