import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import recipeService from '../../../services/RecipeService';

const DELETE_RECIPE_URL = 'api/recipe/delete/';

export default function ExpandedCard(props) {

  const navigate = useNavigate();

  const listedIngredients = (ingredient, number) => (
    <li key={number}>{ingredient}</li>
  );

  const listedDirections = (step, number) => (
    <li key={number}>{step}</li>
  );

  async function handleDelete() {
    try {
      const response = await recipeService.get(DELETE_RECIPE_URL+props.id);
      console.log(response)
      navigate('/')
    } catch(err) {
      console.log('Recipe not deleted.')
    }
  }

  return (
    <div className="expanded-card">
      <img className="expanded-image" src={props.imageUrl} alt={props.name} />
      <div className="expanded-title">
        <h2>{props.title}</h2>
      </div>
      <div className="expanded-details">
        <p>{props.description}</p>
      </div>
      <div className="expanded-ingredients">
        <h3>Ingredients:</h3>
        <ul>
          {props.ingredients.map(listedIngredients)}
        </ul>
      </div>
      <div className="expanded-directions">
        <h3>Steps:</h3>
        <ol>
          {props.steps.map(listedDirections)}
        </ol>
      </div>
      <div className="expanded-time">
        <p>{props.time}</p>
      </div>
      <div className="expanded-buttons">
        <Link className="edit-button" to={`/update/${props.id}`}>Edit</Link>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
