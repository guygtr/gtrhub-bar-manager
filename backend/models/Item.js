const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String } // e.g., drink, ingredient
});

module.exports = mongoose.model('Item', itemSchema);
