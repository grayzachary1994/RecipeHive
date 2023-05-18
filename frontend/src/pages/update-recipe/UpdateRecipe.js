import React, { useEffect, useState } from "react";

import UserService from "../../services/UserService";
import useAuth from "../../auth/useAuth";


let nextId = 0;

export default function UpdateRecipe({recipeName, description, ingredientArr, ingredientName, stepArr, stepStr, time, handleRecipeNameChange, handleDescriptionChange, handleIngredient, setIngredientArr, setStepArr, handleStep, handleTimeChange, addIngredient, addStep, image, fileInputChange, preview}) {
  const { auth } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    ingredients: [],
    steps: [],
    time: ''
  });
 
  async function handleFormSubmit(name, description, ingredients, steps, time) {
    const formattedIngredients =  ingredients.map((ingredient)=> ingredient.name);
    const formattedSteps = steps.map((step)=> step.name)
    const payload = {
      name,
      description,
      ingredients: formattedIngredients,
      steps: formattedSteps,
      time
    }
    console.log(payload, 'You submitted!')
    // try {
    //   const response = await UserService.post(RECIPE_URL, formData,
    //     {
    //       headers: {
    //         'Authorization': `Bearer ${auth.accessToken}`,
    //         "Content-Type": 'application/json'
    //       }
    //     });
    //     console.log(response);
    // } catch(err) {
    //   console.log(err, "Recipe not updated")
    // }
  }

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
            onChange={(e)=>handleRecipeNameChange(e.target.value)}
            value={recipeName}
          />
        </div>
        <div className="edit-recipe-input">
          <label className="recipe-description">Description: </label>
          <input
            className="edit-recipe-input-field"
            type="text"
            name="description"
            onChange={(e)=>handleDescriptionChange(e.target.value)}
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
          <button className="extraInput" onClick={()=> addIngredient()}>
            Add Ingredient
          </button>
          <ul>
            {ingredientArr.map((ingredient) => (
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
            ))}
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
          <button className="extraInput" onClick={()=>addStep()}>
            Add Step
          </button>
          <ol>
            {stepArr.map((step) => (
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
            ))}
          </ol>
        </div>
        <div className="edit-recipe-input">
          <label className="recipe-time">Time to Cook: </label>
          <input
            className="edit-recipe-input-field"
            type="text"
            name="time"
            onChange={(e)=>handleTimeChange(e.target.value)}
            value={time}
          />
        </div>
        <div className="edit-recipe-input">
          <label className="recipe-image">Upload an Image: </label>
          <input type="file" onChange={fileInputChange}></input>
          {image && (
            <img className="preview-image" src={image} alt="chicken" />
          )}
          {preview && (
            <img className="preview-image" src={preview} alt="chicken" />
          )}
        </div>
        <button onClick={() => handleFormSubmit(recipeName, description, ingredientArr, stepArr, time)}>
          Add Recipe to Your Hive!
        </button>
      </div>
    </div>
  );
}
