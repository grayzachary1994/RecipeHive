import React from "react";
import { useNavigate } from "react-router-dom";
import userService from "../../services/UserService";

export default function DropdownMenu({isOpen}) {
    const navigate = useNavigate();

    const menuStyle = isOpen ? {display: 'block'} : {display: 'none'};

    function handleLogout(){
        userService.userLogout()
        navigate('/login')
    }

    return (
        <div className="dropdown-menu" style={menuStyle}>
            <div className='dropdown-container'>
                <a href="/">View Cookbook</a>
                <a href="/add">Add Recipe</a>
                <p onClick={handleLogout}>Logout</p>
            </div>
        </div>
    )
}