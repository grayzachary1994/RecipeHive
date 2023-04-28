import React, { Component, useState } from "react";

const RecipeCard = ({}) => {
  const [recipe, setRecipe] = useState({
    id: 1,
    title: "Pasta",
    description: "Whatever Description Pasta Has",
    image: "https://via.placeholder.com/150",
  });

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <div>
        <button className="view-button">View Recipe</button>
      </div>
    </div>
  );
};
export default RecipeCard;
