import React, { useState, useContext } from "react";

import './login.css';
import AuthContext from '../../context/AuthProvider';

import userService from "../../services/UserService";
const LOGIN_URL = '/api/auth/signin';

export default function Login() {

    const { setAuth } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function handleFormChange(event){
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    
    async function handleFormSubmit(event) {
        event.preventDefault();
        try {
            const response = await userService.post(LOGIN_URL, formData,
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                });
            setFormData({
                username: '',
                password: ''
            })
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <div className="login-page">
            <div className="login">
                <div className="login--field">
                    <input 
                        placeholder="Username"
                        name="username"
                        onChange={handleFormChange}
                        value={formData.username}
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleFormChange}
                        value={formData.password}
                    />
                    <button onClick={handleFormSubmit}>Log In</button>
                </div>
                <div className="login--links">
                    <a href="www.google.com">Forgot password?</a>
                    <a href="/register">Register new user!</a>
                </div>
                
            </div>
        </div>
        
    )
}