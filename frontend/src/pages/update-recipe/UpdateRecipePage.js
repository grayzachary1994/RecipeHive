import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import UpdateRecipe from "./UpdateRecipe";
import useAuth from "../../auth/useAuth";

import './updateRecipe.css';
import RecipeService from "../../services/RecipeService";
const EDIT_RECIPE_URL = '/api/recipe/edit/'

export default function UpdateRecipePage() {
    const { id } = useParams();
    const { auth } = useAuth();

    const [recipeData, setRecipeData] = useState()
    
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
                    setRecipeData(response.data)
            })
        } catch(err) {
            console.log('Recipe not found', err)
        }
    }, [])

    return (
        <div>
            <Navbar />
            <UpdateRecipe {...recipeData}/>
        </div>
    )
}