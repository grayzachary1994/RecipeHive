import React from "react";
import './register.css';

export default function RegisterForm() {
    return (
        <div className="register-page">
            <div className="register">
                <h1 className="register--title">Register</h1>
                <div className="register--fields">
                    <input type="text" placeholder="Username" />
                    <input placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button className="registerButton">Register</button>
                </div>
                <div className="register--links">
                    <a href="www.google.com">Forgot password?</a>
                    <a href='/login'>Already a user? Log in!</a>
                </div>
            </div>
        </div>
    )
}