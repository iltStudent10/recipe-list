function validateRecipe(req, res, next) {
  const { title, ingredients, instructions, tags } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({ error: "title is required and must be a string" });
  }

  if (!Array.isArray(ingredients) || ingredients.length === 0) {
    return res.status(400).json({ error: "ingredients is required and must be a non-empty array" });
  }

  if (instructions !== undefined && typeof instructions !== "string") {
    return res.status(400).json({ error: "instructions must be a string" });
  }

  if (tags !== undefined && !Array.isArray(tags)) {
    return res.status(400).json({ error: "tags must be an array" });
  }

  next();
}

module.exports = validateRecipe;
