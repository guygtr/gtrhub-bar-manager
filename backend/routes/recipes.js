const express = require('express');
const { getRecipes, createRecipe, searchRecipes } = require('../controllers/recipeController');

const router = express.Router();

router.get('/', getRecipes);
router.post('/', createRecipe);
router.get('/search', searchRecipes);

module.exports = router;