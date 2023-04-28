import React from "react";

import Navbar from "../components/Navbar";
import Login from "./Login";
import RecipeCard from "../components/recipeCard";
import HamburgerButton from "../components/hamburgerButton";

export default function LoginPage() {
    return (
        <>
            <Navbar />            
            <Login />
        </>
    )
}