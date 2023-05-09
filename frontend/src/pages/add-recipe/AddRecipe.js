import React, { useState } from "react";
import "./addRecipe.css";

let nextId = 0;
let nextStep = 0;

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
      {id: nextId++, name: ingredientName}
    ])
  }

  function handleStep(event) {
    const { value } = event.target;
    setStepStr(value)
  }

  function addStep() {
    setStepArr([
      ...stepArr,
      {id: nextStep++, name: stepStr}
    ])
  }

  function handleFormData(event) {
    setFormData({
      recipeName: recipeName,
      description: description,
      ingredients: ingredientArr,
      steps: stepArr,
      time: time
    })
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formData, 'You submitted!')
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
            {ingredientArr.map((ingredient) => (
                <li key={ingredient.id}>
                  {ingredient.name}
                  <button onClick={() => {
                    setIngredientArr(
                      ingredientArr.filter(a => a.id !== ingredient.id)
                    )
                  }}>X</button>
                </li>
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
          <ol>
            {stepArr.map((step) => (
                <li key={step.id}>{step.name}
                  <button onClick={() => {
                    setStepArr(
                      stepArr.filter(a => a.id !== step.id)
                    )
                  }}>X</button>
                </li>
            ))}
          </ol>
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
        <button 
        onMouseEnter={handleFormData}
        onClick={handleFormSubmit}>Add Recipe to Your Hive!</button>
      </div>
    </div>
  );
}
