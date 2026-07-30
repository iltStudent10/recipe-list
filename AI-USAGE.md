# AI-USAGE

## Interaction 1: Route Scaffolding
- **Prompt/context:** "Create Express Router CRUD endpoints for a `recipes` resource with status codes 200, 201, 204, 404 and try/catch with `next(error)`."
- **AI suggestion:** Generated route handlers for GET/POST/PUT/DELETE and included async/await with centralized error flow.
- **Decision:** Accepted structure, then modified ID parsing and not-found handling to return 404 through custom errors.
- **Validation:** Tested each endpoint manually with curl and checked status codes and response bodies.
- **Limitation noticed:** Initial suggestion returned 200 on delete instead of 204; corrected to align with REST conventions.

## Interaction 2: Validation Middleware
- **Prompt/context:** "Generate middleware to validate recipe payload with title string, ingredients array, optional instructions string, optional tags array."
- **AI suggestion:** Added a reusable middleware function with field checks.
- **Decision:** Accepted base checks, simplified error messages, and ensured middleware short-circuits with 400 on invalid input.
- **Validation:** Sent invalid payloads (missing title, non-array ingredients) and confirmed 400 responses.
- **Limitation noticed:** One draft over-validated optional fields and rejected valid requests; adjusted to allow omitted optional fields.

## Responsible AI Use Notes
AI suggestions accelerated scaffolding, but all generated code was manually reviewed, tested with realistic requests, and adjusted for assignment requirements. No AI output was used without verification.
