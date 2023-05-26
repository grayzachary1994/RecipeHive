import React, { useState } from "react";
import UserService from "../../services/UserService";
import './forgotPassword.css';

const FORGOT_PASS_URL = '/api/recovery/forgot_password'

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    function handleEmailChange(event) {
        const {value} = event.target;
        setEmail(prevEmail => value)
    }
    console.log(email)
    async function handleSubmit(event) {
        event.preventDefault();
        const payload = {
            email: email
        }
        try {
            const response = await UserService.post(FORGOT_PASS_URL, payload,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                console.log(response.data)
        } catch(err) {
            console.log("Email not found")
        }
    }

    return (
        <div className="forgot-password">
            <div className="forgot-password-form">
                <p>We will be sending a password reset link to your email.</p>
                <input 
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={handleEmailChange}
                />
                <button onClick={handleSubmit}>Send Reset Email</button>
            </div>
        </div>
    )
}