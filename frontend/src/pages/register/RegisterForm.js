import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom'
import './register.css';
import userService from "../../services/UserService";
const REGISTER_URL = 'api/auth/signup';

export default function RegisterForm() {

    // const navigate = useNavigate();

    const [isMatching, setIsMatching] = useState(true);
    const [verify, setVerify] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    })

    function handleFormChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleVerify(event) {
        const {value} = event.target;
        setVerify(value)
        
    }

    async function handleFormSubmit(event) {
        try {
            if (formData.password !== verify) {
                event.preventDefault();
                setIsMatching(false);
                setVerify('')
                setFormData(prevFormData => {
                    return {
                        ...prevFormData,
                        password: ''
                    }
                })
            } else {
                event.preventDefault();
                await userService.post(REGISTER_URL, formData);
                setFormData({
                    username: '',
                    email: '',
                    password: ''
                })
                setVerify('');
                // navigate('/');
            }
        }
        catch(e) {
            console.log(e)
        }
    }

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
                        onChange={handleVerify}
                        value={verify}
                    />
                    {!isMatching && <p className="error">Passwords do not match!</p>}
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