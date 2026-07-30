const express = require("express");

const validateRecipe = require("../middleware/validateRecipe");
const {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
} = require("../data/recipesStore");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const recipes = await getAllRecipes({
      title: req.query.title,
      tag: req.query.tag
    });

    res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const recipe = await getRecipeById(id);

    if (!recipe) {
      const error = new Error("Recipe not found");
      error.status = 404;
      return next(error);
    }

    res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
});

router.post("/", validateRecipe, async (req, res, next) => {
  try {
    const newRecipe = await createRecipe(req.body);
    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", validateRecipe, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const updatedRecipe = await updateRecipe(id, req.body);

    if (!updatedRecipe) {
      const error = new Error("Recipe not found");
      error.status = 404;
      return next(error);
    }

    res.status(200).json(updatedRecipe);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const wasDeleted = await deleteRecipe(id);

    if (!wasDeleted) {
      const error = new Error("Recipe not found");
      error.status = 404;
      return next(error);
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
