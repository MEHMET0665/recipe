module.exports = app => {
  const recipes = require("../controllers/recipe.controller.js");
  let router = require("express").Router();

  router.post("/", recipes.create); // Create a new Recipe
  router.get("/", recipes.findAll);  // Retrieve all Recipes
  router.get("/:id", recipes.findOne);  // Retrieve a single Recipe with id
  router.put("/:id", recipes.update);  // Update a Recipe with id
  router.delete("/:id", recipes.delete);  // Delete a Recipe with id
  router.delete("/", recipes.deleteAll);  // Delete all Recipes
  
app.use('/api/recipes', router);
};

