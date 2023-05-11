import React from "react";
import { useNavigate } from "react-router-dom";

export default function DropdownMenu({isOpen}) {
    const navigate = useNavigate();

    const menuStyle = isOpen ? {display: 'block'} : {display: 'none'};

    function handleViewCookbook() {
        navigate('/home')
    }

    function handleAddRecipe() {
        navigate('/add')
    }

    function handleLogout(){
        navigate('/login')
    }

    return (
        <div className="dropdown-menu" style={menuStyle}>
            <div className='dropdown-container'>
                <p onClick={handleViewCookbook}>View Cookbook</p>
                <p onClick={handleAddRecipe}>Add Recipe</p>
                <p onClick={handleLogout}>Logout</p>
            </div>
        </div>
    )
}