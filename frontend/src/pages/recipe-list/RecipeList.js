import React from "react";
import './recipeList.css';

import clock from '../images/clock.png';

export default function RecipeList() {


    return (
        <div className="recipeListPage">
            <div className="recipeCard">
                <img 
                    src="https://media.istockphoto.com/id/1341564316/photo/spaghetti-and-meatballs.jpg?b=1&s=170667a&w=0&k=20&c=bSfMJCKXDP2qeFZxlfp6vZDiWCy0Uhhx6v53xZJE5HI="
                    className="recipeCard--image"
                    alt="recipe description"
                />
                <h2 className="recipeCard--title">Recipe Name</h2>
                <div className="recipeCard--details">
                    <p>Recipe Description</p>
                    <div className="recipeCard--time">
                        <img src={clock} alt="clock" />
                        <h4>Time to cook</h4>
                    </div>
                </div>
            </div>
            
        </div>
    )
}