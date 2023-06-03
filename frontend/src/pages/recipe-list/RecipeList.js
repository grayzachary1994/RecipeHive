import React, {useState, useEffect} from "react";
import './recipeList.css';

import RecipeCard from './recipe-list-components/RecipeCard.js'
import useAuth from "../../auth/useAuth";

import RecipeService from "../../services/RecipeService";
const GET_RECIPE_URL = '/api/recipe/recipe-list'


export default function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const { auth } = useAuth();

    

    useEffect(() => {
        try {
            RecipeService.get(GET_RECIPE_URL,
                {
                    headers: {
                        'Authorization': `Bearer ${auth.accessToken}`,
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {
                setRecipes(response.data);
            })

        } catch(err) {
            console.log(err, "Recipe List not found")
        }
    }, [auth.accessToken]);

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