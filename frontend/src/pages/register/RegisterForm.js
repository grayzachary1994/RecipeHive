import React, { useState } from "react";
import './register.css';
import userService from "../../services/UserService";

export default function RegisterForm() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        verify: ''
    })

    function handleFormChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    async function handleFormSubmit(event) {
        try {
            event.preventDefault();
            await userService.saveUser(formData);
            setFormData({
                username: '',
                email: '',
                password: '',
                verify: ''
            })
        }
        catch(e) {
            console.log(e)
        }
    }

    console.log(formData)

    return (
        <div className="register-page">
            <div className="register">
                <h1 className="register--title">Register</h1>
                <div className="register--fields">
                    <input 
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleFormChange}
                        value={formData.username} 
                    />
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleFormChange}
                        value={formData.email} 
                    />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleFormChange}
                        value={formData.password} 
                    />
                    <input 
                        type="password"
                        name="verify"
                        placeholder="Confirm Password"
                        onChange={handleFormChange}
                        value={formData.verify}
                    />
                    <button onClick={handleFormSubmit} className="registerButton">Register</button>
                </div>
                <div className="register--links">
                    <a href="www.google.com">Forgot password?</a>
                    <a href='/login'>Already a user? Log in!</a>
                </div>
            </div>
        </div>
    )
}