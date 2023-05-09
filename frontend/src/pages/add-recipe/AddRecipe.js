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
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientArr, setIngredientArr] = useState([]);
  const [formData, setFormData] = useState({
    recipeName: '',
    description: '',
    ingredients: ingredientArr,
    steps: [],
    time: ''
  });
  
  // console.log(ingredientName)
  console.log(formData)
  // console.log(ingredientArr)

  const fileInputChange = (selectedImage) => {
    setSelectedFile(selectedImage.target.files[0]);
    setPreview(URL.createObjectURL(selectedImage.target.files[0]));
  };

  function handleFormChange(event) {
    const { name, value } = event.target;
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [name]: value
        }
      })
  }

  function handleIngredient(event) {
    const { value } = event.target;
    setIngredientName((prevIngredientName) => {
      return value
      
    })
  }

  function addIngredient() {
    setIngredientArr([
      ...ingredientArr,
      ingredientName
    ])
  }

  return (
    <div className="recipe-page">
      <div className="add-recipe">
        <h1>Buzz in a Recipe!</h1>
        <div className="add-recipe-input">
          <label className="recipe-name">Name: </label>
          <input 
            type="text"
            name="recipeName"
            onChange={handleFormChange}
            value={formData.recipeName}
          />
        </div>
        <div className="add-recipe-input">
          <label className="recipe-description">Description: </label>
          <input 
            type="text"
            name="description"
            onChange={handleFormChange}
            value={formData.description}
          />
        </div>
        <div className="add-recipe-input">
          <label className="recipe-ingredients">Ingredients: </label>
          <div className="multipleIngredient-container">
            <input 
              type="text" 
              name="ingredient"
              onChange={handleIngredient}
              value={ingredientName}
            />
            {/* <input type="text" />
            <input type="text" /> */}
          </div>
          {/* <button className="extraInput" onClick={addInputToIngredient}>
            Add Ingredient
          </button> */}
          <button className="extraInput" onClick={addIngredient}>Add Ingredient</button>
          <ul>
            {ingredientArr.map(ingredient => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="add-recipe-input">
          <label className="recipe-steps">Steps: </label>
          <div className="multipleSteps-container">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <button className="extraInput" onClick={addInputToSteps}>
            Add Step
          </button>
        </div>
        <div className="add-recipe-input">
          <label className="recipe-time">Time to Cook: </label>
          <input 
            type="text" 
            name="time"
            onChange={handleFormChange}
            value={formData.time}
          />
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
