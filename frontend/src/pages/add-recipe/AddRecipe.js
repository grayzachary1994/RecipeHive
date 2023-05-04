import React, { useState } from "react";
import "./addRecipe.css";

function addInputToIngredient() {
  const inputContainer = document.querySelector(
    ".multipleIngredient-container"
  );
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

export default function AddRecipe() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const fileInputChange = (selectedImage) => {
    setSelectedFile(selectedImage.target.files[0]);
    setPreview(URL.createObjectURL(selectedImage.target.files[0]));
  };

  return (
    <div className="recipe-page">
      <div className="add-recipe">
        <h1>Buzz in a Recipe!</h1>
        <div className="add-recipe-input">
          <label className="recipe-name">Name: </label>
          <input type="text"></input>
        </div>
        <div className="add-recipe-input">
          <label className="recipe-description">Description: </label>
          <input type="text"></input>
        </div>
        <div className="add-recipe-input">
          <label className="recipe-ingredients">Ingredients: </label>
          <div className="multipleIngredient-container">
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
          </div>
          <button className="extraInput" onClick={addInputToIngredient}>
            Add Ingredient
          </button>
        </div>
        <div className="add-recipe-input">
          <label className="recipe-steps">Steps: </label>
          <div className="multipleSteps-container">
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
          </div>
          <button className="extraInput" onClick={addInputToSteps}>
            Add Step
          </button>
        </div>
        <div className="add-recipe-input">
          <label className="recipe-time">Time to Cook: </label>
          <input type="text"></input>
        </div>
        <div className="add-recipe-input">
          <label className="recipe-image">Upload an Image: </label>
          <input type="file" onChange={fileInputChange}></input>
          {preview && <img className="preview-image"src={preview} alt="Preview"/>}
        </div>
        <button>Add Recipe to Your Hive!</button>
      </div>
    </div>
  );
}
