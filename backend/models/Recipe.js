const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String }
  }],
  instructions: { type: String, required: true },
  category: { type: String }
});

module.exports = mongoose.model('Recipe', recipeSchema);