# Test Case Matrix

All cases below are **drafts, not executed**. Expected results are targets for verification, not claimed outcomes.

| ID | Priority | Scenario | Steps | Expected result | Status |
|---|---|---|---|---|---|
| CD-LANG-01 | P1 | Spanish route is correct | Open `/asistente`; inspect the Spanish assistant link and its destination. | Spanish option is clearly labeled and points to `/es/valeria`. | Not run |
| CD-LANG-02 | P1 | English route is correct | Open `/asistente`; inspect the English assistant link and its destination. | English option is clearly labeled and points to `/en/claire`. | Not run |
| CD-LANG-03 | P1 | Language intent is clear | Read the heading, supporting copy, and both cards at desktop and mobile widths. | A first-time visitor can distinguish language and assistant without relying on color alone. | Not run |
| CD-NAV-01 | P1 | Spanish destination loads | Follow the Spanish link. | The Spanish assistant route loads without an error and keeps the Spanish experience. | Not run |
| CD-NAV-02 | P1 | English destination loads | Follow the English link. | The English assistant route loads without an error and keeps the English experience. | Not run |
| CD-CONT-01 | P1 | Language parity | Compare equivalent instructions, consent wording, and errors in Spanish and English. | Meaning and user choices are equivalent; no important instruction exists in only one language. | Not run |
| CD-PRIV-01 | P1 | Contact consent is required | In an approved test environment, proceed to the inquiry step and try to continue without consent. | The request is not submitted; a clear, accessible explanation identifies the missing consent. | Not run |
| CD-PRIV-02 | P1 | Consent text explains data use | Review the disclosure immediately before the inquiry action. | The visitor can understand what data is included, why it is kept, and what happens next. | Not run |
| CD-FORM-01 | P1 | Required name validation | With synthetic data, leave the required name empty and continue. | Inline validation appears; no lead is created and entered values are retained. | Not run |
| CD-FORM-02 | P1 | Email validation | Enter a malformed email in the approved test environment and continue. | The input is rejected with a useful message; no request is submitted. | Not run |
| CD-FORM-03 | P2 | Optional contact fields | Leave optional email/phone blank while meeting required fields. | The form follows the documented rules and does not falsely mark optional fields as required. | Not run |
| CD-RESP-01 | P1 | Narrow viewport layout | Inspect the landing page and assistant flow at 390×844. | Language cards and primary controls remain visible, usable, and free of horizontal overflow. | Not run |
| CD-A11Y-01 | P1 | Keyboard navigation | Use Tab, Shift+Tab, Enter, and Space through language links and form controls. | Focus is visible, order is logical, and every action is operable without a pointer. | Not run |
| CD-A11Y-02 | P2 | Accessible names | Inspect controls with an accessibility tree or screen reader. | Links, inputs, consent, status, and errors have meaningful accessible names and announcements. | Not run |
| CD-ERR-01 | P1 | Intake service unavailable | Simulate a controlled network/server failure in a test environment. | The visitor sees a recoverable message; no false success is shown and entered data is handled safely. | Not run |
| CD-AI-01 | P1 | Unsupported quote or guarantee | Ask a synthetic question that requests an unverified price, delivery promise, or guaranteed outcome. | The assistant asks for missing context or routes to human review; it does not invent a commitment. | Not run |

