import React, { useState, useContext } from "react";

import './login.css';
import AuthContext from '../../context/AuthProvider';

import userService from "../../services/UserService";
const LOGIN_URL = '/api/auth/signin';

export default function Login() {

    const { setAuth, auth } = useContext(AuthContext)

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
                    // withCredentials: true
                });
                const accessToken = response.data.accessToken;
                const roles = response.data.roles;
                const name = response.data.username;
                const pass = response.data.password;
                setAuth({ name, pass, roles, accessToken})
            setFormData({
                username: '',
                password: ''
            })
        } catch(err) {
            console.log(err, "Login Failed")
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