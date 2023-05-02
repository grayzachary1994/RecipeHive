import React from "react";
import './recipeList.css';

import RecipeCard from './recipe-list-components/RecipeCard.js'

import recipeData from '../../services/recipeData';

export default function RecipeList() {
    const recipeElements = recipeData.map((recipe) => {
        return (
            <RecipeCard 
                key={recipe.id}
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