import React from "react";

export default function Login() {
    return (
        <div className="page">
            <div className="login">
                <div className="login--field">
                    <input placeholder="Username"></input>
                    <input placeholder="Password"></input>
                    <button>Log In</button>
                </div>
                <div className="login--links">
                    <a href="www.google.com">Forgot password?</a>
                    <a href="www.google.com">Register new user!</a>
                </div>
                
            </div>
        </div>
        
    )
}