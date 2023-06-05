import React, { useState, useEffect } from "react";
import "./recipeList.css";
import RecipeCard from "./recipe-list-components/RecipeCard.js";
import useAuth from "../../auth/useAuth";
import RecipeService from "../../services/RecipeService";
const GET_RECIPE_URL = "/api/recipe/recipe-list";

export default function RecipeList({ searchTerm }) {
  const [recipes, setRecipes] = useState([]);
  const { auth } = useAuth();

  function deleteRecipe(recipeToDeleteId) {
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeToDeleteId));
  }

  useEffect(() => {
    try {
      RecipeService.get(GET_RECIPE_URL, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
          "Content-Type": "application/json",
        },
      }).then((response) => {
        setRecipes(response.data);
      });
    } catch (err) {
      console.log(err, "Recipe List not found");
    }
  }, [auth.accessToken]);

  const searchedRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const recipeElements = searchedRecipes.map((recipe) => (
    <RecipeCard
      key={recipe.id}
      id={recipe.id}
      name={recipe.name}
      description={recipe.description}
      imageUrl={recipe.imageUrl}
      steps={recipe.steps}
      ingredients={recipe.ingredients}
      title={recipe.title}
      time={recipe.time}
      deleteRecipe={deleteRecipe}
    />
  ));

  return <div className="recipeListPage">{recipeElements}</div>;
}
