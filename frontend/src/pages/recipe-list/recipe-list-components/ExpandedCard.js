import React from "react";
import { Link } from 'react-router-dom';
import recipeService from '../../../services/RecipeService';

const DELETE_RECIPE_URL = 'api/recipe/delete/';

export default function ExpandedCard({closeViewRecipe, deleteRecipe, id, name, description, imageUrl, steps, ingredients, title, time}) {

  const listedIngredients = (ingredient, number) => (
    <li key={number}>{ingredient}</li>
  );

  const listedDirections = (step, number) => (
    <li key={number}>{step}</li>
  );

  async function handleDelete() {
    try {
      const response = await recipeService.get(DELETE_RECIPE_URL+id);
      closeViewRecipe();
      deleteRecipe(id);
    } catch(err) {
      console.log('Recipe not found.', err)
    }
  }

  return (
    <div className="expanded-card">
      <img className="expanded-image" src={imageUrl} alt={name} />
      <div className="expanded-title">
        <h2>{title}</h2>
      </div>
      <div className="expanded-details">
        <p>{description}</p>
      </div>
      <div className="expanded-ingredients">
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map(listedIngredients)}
        </ul>
      </div>
      <div className="expanded-directions">
        <h3>Steps:</h3>
        <ol>
          {steps.map(listedDirections)}
        </ol>
      </div>
      <div className="expanded-time">
        <p>{time}</p>
      </div>
      <div className="expanded-buttons">
        <Link className="edit-button" to={`/update/${id}`}>Edit</Link>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
