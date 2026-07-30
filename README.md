# Recipe List API (Assignment 7)

A small Express REST API for managing recipes. This project demonstrates Node.js fundamentals, Express routing/middleware, REST conventions, and AI-assisted development documentation.

## Tech Stack
- Node.js
- Express
- dotenv

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env` from `.env.example`:
   ```bash
   cp .env.example .env
   ```
  Optional: set `PORT` in `.env` (default is `3000` if omitted).
3. Start the server:
   ```bash
   npm start
   ```

For development watch mode:
```bash
npm run dev
```

Stop the server with `Ctrl+C`.

Server default URL: `http://localhost:3000`

## API Endpoints
- `GET /api/recipes` - list all recipes
- `GET /api/recipes?title=pasta` - filter by title
- `GET /api/recipes?tag=quick` - filter by tag
- `GET /api/recipes/search/:name` - wildcard name filter (e.g., `*pasta*`)
- `GET /api/recipes/:id` - get one recipe
- `POST /api/recipes` - create recipe
- `PUT /api/recipes/:id` - update recipe
- `DELETE /api/recipes/:id` - delete recipe

## Status Codes Used
- `200` successful GET/PUT
- `201` successful POST creation
- `204` successful DELETE with no response body
- `400` invalid input
- `404` recipe or route not found
- `500` unexpected server error

## Example Requests
### Get all recipes
```bash
curl http://localhost:3000/api/recipes
```

### Wildcard name filter
```bash
curl "http://localhost:3000/api/recipes/search/*pasta*"
```

### Create a recipe
```bash
curl -X POST http://localhost:3000/api/recipes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Avocado Toast",
    "ingredients": ["bread", "avocado", "salt"],
    "instructions": "Toast bread and spread avocado.",
    "tags": ["breakfast", "quick"]
  }'
```

### Update a recipe
```bash
curl -X PUT http://localhost:3000/api/recipes/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Tomato Pasta Deluxe",
    "ingredients": ["pasta", "tomato", "garlic", "basil"],
    "instructions": "Cook and combine ingredients.",
    "tags": ["dinner", "vegetarian"]
  }'
```

### Delete a recipe
```bash
curl -X DELETE http://localhost:3000/api/recipes/2
```
