const fs = require("fs/promises");
const path = require("path");

const dataFilePath = path.join(__dirname, "recipes.json");

async function readRecipes() {
  try {
    const fileData = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(fileData);
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

async function writeRecipes(recipes) {
  await fs.writeFile(dataFilePath, JSON.stringify(recipes, null, 2));
}

async function getAllRecipes(filters = {}) {
  const recipes = await readRecipes();
  const { title, tag } = filters;

  return recipes.filter((recipe) => {
    const titleMatch = title
      ? recipe.title.toLowerCase().includes(String(title).toLowerCase())
      : true;

    const tagMatch = tag
      ? Array.isArray(recipe.tags) &&
        recipe.tags.some((currentTag) =>
          currentTag.toLowerCase().includes(String(tag).toLowerCase())
        )
      : true;

    return titleMatch && tagMatch;
  });
}

async function getRecipeById(id) {
  const recipes = await readRecipes();
  return recipes.find((recipe) => recipe.id === id);
}

async function createRecipe(recipeInput) {
  const recipes = await readRecipes();
  const nextId = recipes.length > 0 ? Math.max(...recipes.map((recipe) => recipe.id)) + 1 : 1;

  const newRecipe = {
    id: nextId,
    title: recipeInput.title,
    ingredients: recipeInput.ingredients,
    instructions: recipeInput.instructions || "",
    tags: recipeInput.tags || []
  };

  recipes.push(newRecipe);
  await writeRecipes(recipes);

  return newRecipe;
}

async function updateRecipe(id, recipeInput) {
  const recipes = await readRecipes();
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === id);

  if (recipeIndex === -1) {
    return null;
  }

  recipes[recipeIndex] = {
    ...recipes[recipeIndex],
    title: recipeInput.title,
    ingredients: recipeInput.ingredients,
    instructions: recipeInput.instructions || "",
    tags: recipeInput.tags || []
  };

  await writeRecipes(recipes);
  return recipes[recipeIndex];
}

async function deleteRecipe(id) {
  const recipes = await readRecipes();
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === id);

  if (recipeIndex === -1) {
    return false;
  }

  recipes.splice(recipeIndex, 1);
  await writeRecipes(recipes);
  return true;
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
};
