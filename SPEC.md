# Recipe List API - Project Spec

## 1. Project Overview
Build a small Node.js + Express REST API that manages a `recipes` resource. The goal is to demonstrate Express routing and middleware, REST API design, Node.js fundamentals, and responsible AI-assisted development practices.

## 2. Scope
### In Scope
- Express server with CRUD endpoints for recipes
- In-memory array or JSON file persistence (no database required)
- Route organization using Express Router
- Custom middleware and centralized error handling
- Query parameter support for filtering/search
- Documentation of AI-assisted development usage
- Written technical rationale

### Out of Scope
- Frontend/UI implementation
- Database integration
- Authentication/authorization
- Deployment requirements

## 3. Functional Requirements
### FR-1: Recipes CRUD API
Implement full CRUD for `recipes` using REST conventions:
- `GET /api/recipes` → list recipes (`200`)
- `GET /api/recipes/:id` → get one recipe (`200`, `404`)
- `POST /api/recipes` → create recipe (`201`, `400`)
- `PUT` or `PATCH /api/recipes/:id` → update recipe (`200`, `400`, `404`)
- `DELETE /api/recipes/:id` → delete recipe (`204`, `404`)

### FR-2: Filtering/Search Query Parameter
Provide at least one query parameter filter, e.g.:
- `GET /api/recipes?title=pasta`
- `GET /api/recipes?tag=quick`

### FR-3: JSON Request/Response
- Accept JSON request bodies for create/update
- Return JSON for successful responses (except `204`) and errors

## 4. Technical Requirements (Node.js Fundamentals)
- Use CommonJS modules (`require/module.exports`)
- Use environment variables via `dotenv` (e.g., `PORT`)
- Use async patterns (`async/await` or Promises)
- Use file system or path utilities (`fs`, `fs/promises`, `path`)
- Organize code into separate files for routes, middleware, and data layer

## 5. Middleware & Error Handling
- At least one custom middleware function (examples: request logging, validation)
- Centralized error-handling middleware
- Correct middleware order in Express pipeline
- Return proper status codes/messages for invalid input, missing resources, and server errors

## 6. Non-Functional Requirements
- Clear, readable code structure and naming
- Consistent status code usage
- Reproducible local setup with documented commands
- Manual endpoint verification via curl/Postman acceptable

## 7. Documentation Requirements
### DR-1: README
README must include:
- Project purpose
- Setup instructions (`npm install`, `npm start`)
- Environment variable note (`PORT`)
- Endpoint list
- Example API calls (curl commands or screenshots)

### DR-2: AI Usage Documentation
In `AI-USAGE.md` (or README section), include at least **two** documented AI interactions:
- Prompt/context provided to AI
- What AI suggested
- Whether suggestion was accepted/modified/rejected
- How output was validated
- Any limitations/hallucinations and handling

### DR-3: Written Rationale (200–400 words)
In `RATIONALE.md` (or README section), explain:
- API design decisions (resource choice, URL structure, status codes)
- Route/middleware organization and why
- Error/edge-case handling strategy
- AI usage reflection (benefits, limits, lessons learned)

## 8. Deliverables
- GitHub repository URL (accessible to reviewers)
- Working Express CRUD API
- Custom middleware
- Express Router organization
- Centralized error handling
- Query parameter filtering/search
- `AI-USAGE.md` with 2+ interactions
- `RATIONALE.md` (200–400 words)
- README with setup + API examples

## 9. Acceptance Criteria Checklist
- [ ] API runs locally with documented commands
- [ ] All CRUD endpoints implemented and functional
- [ ] Status codes align with REST expectations (`200/201/204/400/404/500`)
- [ ] At least one query filter works
- [ ] Custom middleware is implemented and used
- [ ] Centralized error handling is implemented
- [ ] Node fundamentals demonstrated (modules, dotenv, async, fs/path)
- [ ] AI usage documentation includes at least two detailed examples
- [ ] Rationale is 200–400 words and addresses required topics
- [ ] Repository is pushed and accessible

## 10. Suggested Test Cases
- Create recipe with valid body → `201`
- Create recipe with invalid body → `400`
- Fetch existing recipe by id → `200`
- Fetch missing recipe by id → `404`
- Update existing recipe → `200`
- Update missing recipe → `404`
- Delete existing recipe → `204`
- Delete missing recipe → `404`
- Filter by query returns expected subset → `200`
