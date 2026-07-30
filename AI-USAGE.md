# AI-USAGE

## Overview
I used AI to accelerate boilerplate creation, explore implementation options, and reduce repetitive setup time. Every generated output was critically reviewed, tested, and refined to ensure correctness, REST compliance, and alignment with assignment requirements.

## Interaction 1: Express Route Scaffolding (High Impact)
- **Prompt/context:** "Create Express Router CRUD endpoints for a `recipes` resource with status codes 200, 201, 204, 404 and try/catch with `next(error)`."
- **AI suggestion:** Produced a full router skeleton for `GET`, `POST`, `PUT`, and `DELETE` with async/await flow and error forwarding.
- **Decision and refinement:** I accepted the structural baseline, then improved ID parsing and not-found behavior to consistently return `404` through centralized error handling.
- **Validation approach:** I executed endpoint-by-endpoint manual tests with `curl`, checking status codes and response payloads for both success and failure paths.
- **Limitation encountered:** One draft returned `200` for delete success. I corrected this to `204 No Content` to match REST conventions.

## Interaction 2: Input Validation Middleware (Quality and Safety)
- **Prompt/context:** "Generate middleware to validate recipe payload with title string, ingredients array, optional instructions string, optional tags array."
- **AI suggestion:** Generated a reusable validation middleware with field-level checks.
- **Decision and refinement:** I kept the core validation logic, simplified messaging for clarity, and ensured invalid input short-circuits with `400` responses.
- **Validation approach:** I submitted invalid payload scenarios (missing title, invalid ingredient type/shape) and confirmed correct `400` behavior.
- **Limitation encountered:** An earlier draft over-constrained optional fields and rejected otherwise valid requests. I adjusted the logic to preserve flexibility while maintaining data integrity.

## Responsible AI Development Practices
- Treated AI output as a first draft, never final source of truth.
- Performed manual code review for control flow, edge cases, and error semantics.
- Verified behavior with live API calls, including negative-path tests.
- Prioritized rubric compliance over speed when AI suggestions conflicted with REST standards.

## Key Takeaway
AI meaningfully improved development velocity and structure quality, especially for repetitive scaffolding. The final implementation quality came from human validation, targeted refactoring, and standards-based decision-making.
