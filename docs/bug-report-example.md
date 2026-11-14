# Bug Report Example (Training Scenario)

> **Illustrative only. This is not a defect observed in Carmen Digital production.** Replace it with a real, reproducible finding only after testing an approved environment.

## Title

`[P1][Localization] English language card opens the Spanish assistant`

## Environment

- Build: `<test build/version>`
- Browser/device: `<browser and version / device>`
- Locale: English
- Test data: synthetic; no real contact data

## Preconditions

The bilingual assistant landing page is available in the approved test environment.

## Steps to reproduce

1. Open the assistant landing page.
2. Select “Talk with Claire”.
3. Observe the destination URL and the first assistant prompt.

## Expected result

The English-language assistant opens and displays its English welcome and instructions.

## Actual result

`<Record the observed result and exact text here. Do not leave this field blank in a real report.>`

## Impact and severity

Potentially blocks English-speaking visitors from completing the intended inquiry. Severity must be assigned after confirming frequency, scope, and business impact.

## Evidence

Attach a short recording or screenshot from the test environment, with any personal data removed. Include timestamp and route; never include a real customer's details.

## Regression coverage

Recheck both language cards, their final destinations, and the welcome message in each locale.

