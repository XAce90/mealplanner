const express = require('express');
const router = express.Router();
const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  uploadRecipeImage
} = require('../controllers/recipes');

router.route('/')
  .get(getRecipes)
  .post(createRecipe);

router.route('/:id')
  .get(getRecipe)
  .put(updateRecipe)
  .delete(deleteRecipe)

router.route('/:id/photo')
  .put(uploadRecipeImage);

module.exports = router;