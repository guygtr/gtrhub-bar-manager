import React, { useState } from 'react';

const RecipeManager = () => {
  const [recipes, setRecipes] = useState([
    { id: 1, name: 'Martini', ingredients: ['Gin', 'Vermouth'], instructions: 'Shake and serve.' },
  ]);

  const addRecipe = (name, ingredients, instructions) => {
    setRecipes([...recipes, { id: recipes.length + 1, name, ingredients: ingredients.split(','), instructions }]);
  };

  return (
    <div>
      <h2>Recipe Manager</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <strong>{recipe.name}</strong>: {recipe.ingredients.join(', ')} - {recipe.instructions}
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault();
        addRecipe(e.target.name.value, e.target.ingredients.value, e.target.instructions.value);
      }}>
        <input name="name" placeholder="Recipe Name" />
        <input name="ingredients" placeholder="Ingredients (comma-separated)" />
        <textarea name="instructions" placeholder="Instructions" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default RecipeManager;
