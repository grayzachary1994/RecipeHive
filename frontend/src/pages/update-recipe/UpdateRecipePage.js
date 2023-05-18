import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import UpdateRecipe from "./UpdateRecipe";
import useAuth from "../../auth/useAuth";

import './updateRecipe.css';
import RecipeService from "../../services/RecipeService";
const EDIT_RECIPE_URL = '/api/recipe/edit/'

let nextId = 0;

export default function UpdateRecipePage() {
    const { id } = useParams();
    const { auth } = useAuth();

    const [recipeId, setRecipeId] = useState(null);
    const [recipeName, setRecipeName] = useState("");
    const [description, setDescription] = useState("");
    const [ingredientName, setIngredientName] = useState('');
    const [ingredientArr, setIngredientArr] = useState([]);
    const [stepStr, setStepStr] = useState('');
    const [stepArr, setStepArr] = useState([]);
    const [time, setTime] = useState('');

    const [preview, setPreview] = useState(null);
    const [image, setImage] = useState('');

    const fileInputChange = (selectedImage) => {
        setPreview(URL.createObjectURL(selectedImage.target.files[0]));
      };

    function handleRecipeNameChange(value) {
          setRecipeName(value)
      }

      function handleDescriptionChange(value) {
          setDescription(value)
      }
    
      function handleTimeChange(value) {
          setTime(value)
      }
    
      function handleIngredient(value) {
        setIngredientName(value)
      }

      function addIngredient() {
        setIngredientArr([
          ...ingredientArr,
          {id: nextId++, name: ingredientName}
        ]);
        setIngredientName('');
      }

      function handleStep(value) {
        setStepStr(value)
      }

      function addStep() {
        setStepArr([
          ...stepArr,
          {id: nextId++, name: stepStr}
        ]);
        setStepStr('');
      }
    
    useEffect(() => {
        try {
            RecipeService.get(EDIT_RECIPE_URL+id,
                {
                    headers: {
                        'Authorization': `Bearer ${auth.accessToken}`,
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {
                    // console.log(response.data)
                    setRecipeId(response.data.id)
                    setRecipeName(response.data.name)
                    setDescription(response.data.description)
                    setIngredientArr(response.data.ingredients.map(((ingredient, index) => ({id:index, name:ingredient}))))
                    setStepArr(response.data.steps.map((step, index) => ({id:index, name:step})))
                    setTime(response.data.time)
                    //pretend path response
                    setImage('../../../images/big-oof.jpg')
            })
        } catch(err) {
            console.log('Recipe not found', err)
        }
    }, [])

    return (
        <div>
            <Navbar />
            <UpdateRecipe 
                recipeId={recipeId}
                recipeName={recipeName}
                description={description}
                ingredientArr={ingredientArr}
                ingredientName={ingredientName}
                stepArr={stepArr}
                stepStr={stepStr}
                time={time}
                handleRecipeNameChange={handleRecipeNameChange}
                handleDescriptionChange={handleDescriptionChange}
                handleIngredient={handleIngredient}
                setIngredientArr={setIngredientArr}
                setStepArr={setStepArr}
                handleStep={handleStep}
                handleTimeChange={handleTimeChange}

                addIngredient={addIngredient}
                addStep={addStep}

                image={image}
                fileInputChange={fileInputChange}
                preview={preview}
                // obj={{recipeName, }}
                />
        </div>
    )
}