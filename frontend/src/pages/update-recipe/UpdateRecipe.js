import React, { useEffect, useState } from "react";

import UserService from "../../services/UserService";
import useAuth from "../../auth/useAuth";


let nextId = 0;

export default function UpdateRecipe(props) {
  const { auth } = useAuth();

  const [recipeCopy, setRecipeCopy] = useState({
    name: "",
    description: '',
    ingredients: [],
    steps: [],
    time: ''
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientArr, setIngredientArr] = useState([]);
  const [stepStr, setStepStr] = useState('');
  const [stepArr, setStepArr] = useState([]);
  const [time, setTime] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    ingredients: [],
    steps: [],
    time: ''
  });

  useEffect(()=>{
    setRecipeCopy(props);
    setRecipeName(props.name);
    setDescription(props.description);
    setIngredientArr(props.ingredients)
    setTime(props.time);
  },[props])

  function handleRecipeNameChange(event) {
    setRecipeName(event.target.value);
  }

  function handleDescriptionChange(event) {
      setDescription(event.target.value)
  }

  function handleTimeChange(event) {
      setTime(event.target.value)
  }

  function handleIngredient(event) {
    setIngredientName(event.target.value)
  }

  function addIngredient() {
    setIngredientArr([
      ...ingredientArr,
      {id: nextId++, name: ingredientName}
    ]);
    setIngredientName('');
  }

  function handleStep(event) {
    const { value } = event.target;
    setStepStr(value)
  }

  function addStep() {
    setStepArr([
      ...stepArr,
      {id: nextId++, name: stepStr}
    ]);
    setStepStr('');
  }

//   console.log(ingredientArr)
  return (
    <div className="recipe-page">
      <div className="edit-recipe">
        <h1>Edit Your Recipe!</h1>
        <div className="edit-recipe-input">
          <label className="recipe-name">Name: </label>
          <input
            className="edit-recipe-input-field"
            type="text"
            name="recipeName"
            onChange={handleRecipeNameChange}
            value={recipeName}
          />
        </div>
        <div className="edit-recipe-input">
          <label className="recipe-description">Description: </label>
          <input
            className="edit-recipe-input-field"
            type="text"
            name="description"
            onChange={handleDescriptionChange}
            value={description}
          />
        </div>
        <div className="edit-recipe-input">
          <label className="recipe-ingredients">Ingredients: </label>
          <div className="multipleIngredient-container">
            <input
              className="edit-recipe-input-field"
              type="text"
              name="ingredient"
              onChange={handleIngredient}
              value={ingredientName}
            />
          </div>
          <button className="extraInput" onClick={addIngredient}>
            Add Ingredient
          </button>
          <ul>
            {/* {ingredientArr.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.name}
                <div className="flex-button">
                  <button
                    onClick={() => {
                      setIngredientArr(
                        ingredientArr.filter((a) => a.id !== ingredient.id)
                      );
                    }}
                  >
                    X
                  </button>
                </div>
              </li>
            ))} */}
          </ul>
        </div>
        <div className="edit-recipe-input">
          <label className="recipe-steps">Steps: </label>
          <div className="multipleSteps-container">
            <input
              className="edit-recipe-input-field"
              type="text"
              name="step"
              onChange={handleStep}
              value={stepStr}
            />
          </div>
          {/* <button className="extraInput" onClick={addStep}>
            Add Step
          </button> */}
          <ol>
            {/* {stepArr.map((step) => (
              <li key={step.id}>
                {step.name}
                <div className="flex-button">
                  <button
                    onClick={() => {
                      setStepArr(stepArr.filter((a) => a.id !== step.id));
                    }}
                  >
                    X
                  </button>
                </div>
              </li>
            ))} */}
          </ol>
        </div>
        <div className="edit-recipe-input">
          <label className="recipe-time">Time to Cook: </label>
          <input
            className="edit-recipe-input-field"
            type="text"
            name="time"
            onChange={handleTimeChange}
            value={time}
          />
        </div>
        <div className="edit-recipe-input">
          <label className="recipe-image">Upload an Image: </label>
          {/* <input type="file" onChange={fileInputChange}></input> */}
          {/* {preview && (
            <img className="preview-image" src={preview} alt="Preview" />
          )} */}
        </div>
        {/* <button onMouseEnter={handleFormData} onClick={handleFormSubmit}>
          Add Recipe to Your Hive!
        </button> */}
      </div>
    </div>
  );
}
