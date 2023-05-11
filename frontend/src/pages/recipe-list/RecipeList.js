import React, {useState, useEffect} from "react";
import './recipeList.css';

import RecipeCard from './recipe-list-components/RecipeCard.js'

import RecipeService from "../../services/RecipeService";


export default function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    

    useEffect(() => {
        console.log(RecipeService.getRecipe())
        RecipeService.getRecipe().then(response => {
            setRecipes(response.data);
        })
        }, []);

    const recipeElements = recipes.map((recipe)=> {
        return (
            <RecipeCard
            key = {recipe.id}
            {...recipe}
            />
        )
    })

    return (
        <div className="recipeListPage">
            {recipeElements}
        </div>
    )
    }