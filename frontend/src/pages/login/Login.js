import React, { useState } from "react";
import useAuth from "../../auth/useAuth";
import { useNavigate, useLocation } from 'react-router-dom';

import './login.css';

import userService from "../../services/UserService";
const LOGIN_URL = '/api/auth/signin';

export default function Login() {
    const { setAuth, auth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/home';

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function handleRegisterRedirect() {
        navigate('/register')
    }

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
                    headers: { 'Content-Type': 'application/json'}
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
            navigate(from, { replace: true });
        } catch(err) {
            console.log(err, "Login Failed")
        }
    }

    // async function testToken(event) {
    //     event.preventDefault()
    //     const response = await userService.get('api/test/user',
    //         {
    //             headers: {Authorization: `Bearer ${auth.accessToken}`}
    //         });
    //     console.log(response.data)
    // }

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
                    <p onClick={handleRegisterRedirect}>Register new user!</p>
                </div>
                {/* <button onClick={testToken}>Click me</button> */}
            </div>
        </div>
        
    )
}