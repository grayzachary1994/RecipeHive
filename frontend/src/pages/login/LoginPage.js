import React from "react";

import Navbar from "../components/Navbar";
import Login from "./Login";
import RecipeCard from "../components/recipeCard";

export default function LoginPage() {
    return (
        <>
            <Navbar />
            <Login />
            <div className="recipes">
            <RecipeCard></RecipeCard>
            </div>
        </>
    )
}