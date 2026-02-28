const Recipe = require('../models/Recipe');

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.searchRecipes = async (req, res) => {
  const { query } = req.query;
  try {
    const recipes = await Recipe.find({ name: { $regex: query, $options: 'i' } });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};