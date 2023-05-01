import React from "react";
import "./addRecipe.css";

function addInputToIngredient() {
  const inputContainer = document.querySelector(".multipleIngredient-container");
  const input = document.createElement("input");
  input.type = "text";
  inputContainer.appendChild(input);
}

function addInputToSteps() {
  const inputContainer = document.querySelector(".multipleSteps-container");
  const input = document.createElement("input");
  input.type = "text";
  inputContainer.appendChild(input);
}

export default function addRecipe() {
  return (
    <div className="recipe-page">
      <div className="add-recipe">
        <h1>Buzz in a Recipe!</h1>
        <div className="add-recipe-input">
          <label className="recipe-step">Name: </label>
          <input type="text"></input>
        </div>
        <div className="add-recipe-input">
 
          <label className="recipe-step">Description: </label>
          <input type="text"></input>
        </div>
        <div className="add-recipe-input">

          <label className="recipe-step">Ingredients: </label>
          <div className="multipleIngredient-container">
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
          </div>
          <button className="extraInput" onClick={addInputToIngredient}>Add Ingredient</button>
        </div>
        <div class="add-recipe-input">
          <label className="recipe-step">Steps: </label>
          <div className="multipleSteps-container">
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
          </div>
          <button className="extraInput" onClick={addInputToSteps}>Add Step</button>
        </div>
        <div>
          <label className="recipe-step">Time to Cook: </label>
          <input type="text"></input>
        </div>
        <button>Add Recipe to Your Hive!</button>
      </div>
    </div>
  );
}
