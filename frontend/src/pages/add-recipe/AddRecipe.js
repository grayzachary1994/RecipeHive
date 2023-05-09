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
  const [stepStr, setStepStr] = useState('');
  const [stepArr, setStepArr] = useState([]);
  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');

  const [formData, setFormData] = useState({
    recipeName: '',
    description: '',
    ingredients: [],
    steps: [],
    time: ''
  });
  
  

  const fileInputChange = (selectedImage) => {
    setSelectedFile(selectedImage.target.files[0]);
    setPreview(URL.createObjectURL(selectedImage.target.files[0]));
  };

  function handleRecipeNameChange(event) {
    const { value } = event.target;
      setRecipeName(value)
  }

  function handleDescriptionChange(event) {
    const { value } = event.target;
      setDescription(value)
  }

  function handleTimeChange(event) {
    const { value } = event.target;
      setTime(value)
  }

  function handleIngredient(event) {
    const { value } = event.target;
    setIngredientName(value)
  }

  function addIngredient() {
    setIngredientArr([
      ...ingredientArr,
      ingredientName
    ])
  }

  function handleStep(event) {
    const { value } = event.target;
    setStepStr(value)
  }

  function addStep() {
    setStepArr([
      ...stepArr,
      stepStr
    ])
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setFormData({
      recipeName: recipeName,
      description: description,
      ingredients: ingredientArr,
      steps: stepArr,
      time: time
    })
  }


  // console.log(formData)

  return (
    <div className="recipe-page">
      <div className="add-recipe">
        <h1>Buzz in a Recipe!</h1>
        <div className="add-recipe-input">
          <label className="recipe-name">Name: </label>
          <input 
            type="text"
            name="recipeName"
            onChange={handleRecipeNameChange}
            value={recipeName}
          />
        </div>
        <div className="add-recipe-input">
          <label className="recipe-description">Description: </label>
          <input 
            type="text"
            name="description"
            onChange={handleDescriptionChange}
            value={description}
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
          </div>
          <button className="extraInput" onClick={addIngredient}>Add Ingredient</button>
          <ul>
            {ingredientArr.map((ingredient, index) => (
              <>
                <li key={index}>{ingredient}</li>
                {/* <button>X</button> */}
              </>
            ))}
          </ul>
        </div>
        <div className="add-recipe-input">
          <label className="recipe-steps">Steps: </label>
          <div className="multipleSteps-container">
            <input 
              type="text" 
              name="step"
              onChange={handleStep}
              value={stepStr}
            />
          </div>
          <button className="extraInput" onClick={addStep}>Add Step</button>
          <ul>
            {stepArr.map((step, index) => (
              <>
                <li key={index}>{step}</li>
                {/* <button>X</button> */}
              </>
            ))}
          </ul>
        </div>
        <div className="add-recipe-input">
          <label className="recipe-time">Time to Cook: </label>
          <input 
            type="text" 
            name="time"
            onChange={handleTimeChange}
            value={time}
          />
        </div>
        <div className="add-recipe-input">
          <label className="recipe-image">Upload an Image: </label>
          <input type="file" onChange={fileInputChange}></input>
          {preview && <img className="preview-image"src={preview} alt="Preview"/>}
        </div>
        <button onClick={handleFormSubmit}>Add Recipe to Your Hive!</button>
      </div>
    </div>
  );
}
