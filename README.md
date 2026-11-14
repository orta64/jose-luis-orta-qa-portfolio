# QA Case Study: Carmen Digital Bilingual Assistant

**Author:** Jose Luis Orta Cicler · **Focus:** Manual QA, functional testing, UX, privacy, and test design

This portfolio project documents a QA approach for the public bilingual assistant entry point at [carmendigital.net/asistente](https://www.carmendigital.net/asistente). The page introduces Valeria in Spanish and Claire in English and routes visitors into the corresponding service experience.

## What this demonstrates

- Translating a real user journey into testable acceptance criteria.
- Risk-based manual test design for bilingual lead intake.
- Boundary, validation, privacy, navigation, and accessibility checks.
- Clear bug reporting with reproducible steps and impact.
- Responsible use of AI-assisted workflows with human verification.

## Project contents

- [`docs/case-study.md`](docs/case-study.md): context, user journey, scope, and QA approach.
- [`docs/test-plan.md`](docs/test-plan.md): risks, coverage, environments, and exit criteria.
- [`docs/test-cases.md`](docs/test-cases.md): concise test matrix with expected results and execution status.
- [`docs/bug-report-example.md`](docs/bug-report-example.md): a clearly labeled training example, not a defect observed in production.
- [`docs/ai-assisted-workflow.md`](docs/ai-assisted-workflow.md): how AI can support preparation while the tester owns decisions and evidence.
- [`tests/assistant-landing.spec.ts`](tests/assistant-landing.spec.ts): a small Playwright example for non-destructive checks of the public language-selection page.

## Evidence and limits

The public landing page was inspected on **November 14, 2026**. The visible page offers Spanish and English assistant links. The detailed service flow is documented as a **test design**, not as a completed production test run. No customer information was entered, no lead was submitted, and no defect is claimed as found.

The site has a local archived implementation in Carmen Digital's working files, but its parity with the current production version has not been confirmed. This public portfolio therefore avoids publishing source code, API details, credentials, customer data, internal pricing, and private contact information.

## Running the example

The Playwright sample is intentionally limited to read-only navigation and checks on the public language-selection page. It does not submit forms or contact the business. Install dependencies and the browser required by Playwright before running it:

```bash
npm install
npx playwright install chromium
npm test
```

The test code is a portfolio example and has **not been executed** in this repository. Record the date, browser, environment, and actual result before describing any run as completed.

## About

Jose Luis is a QA professional with enterprise banking and risk/compliance testing experience, plus game QA experience. He is developing practical automation skills through Playwright and Python coursework and hands-on practice. This project demonstrates his test reasoning and documentation without overstating professional automation experience.

