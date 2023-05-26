import React, { useState } from "react";
import './resetPassword.css'
import userService from "../../services/UserService";

const RESET_PASS_URL = '/api/recovery/reset_password';

export default function ResetPassword() {
    const [password, setPassword] = useState('');
    const [verify, setVerify] = useState('');
    const [isMatching, setIsMatching] = useState(true);
    const [errors, setErrors] = useState('');

    function handlePassword(event) {
        // const {value} = event.target;
        setPassword(event.target.value)
    }

    function handleVerify(event) {
        // const {value} = event.target;
        setVerify(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const payload = {
            password: password
        };
        try {
            if (password && verify && password === verify){
                const response = await userService.post(RESET_PASS_URL, payload,
                    {
                        headers: {
                            "Content-Type":'application/json'
                        }
                    });
                console.log(response);
                setErrors('');
            } else if (password !== verify) {
                setIsMatching(false);
                setPassword('');
                setVerify('');
                setErrors('Passwords do not match!')
            } else if (!password && !verify){
                setErrors('Password cannot be blank.')
            }
        } catch(err) {
            console.log('Password not updated.');
        }
    }
    
    return (
        <div className="reset-password">
            <div className="reset-password-form">
                {!errors && <p>Enter your new password</p>}
                {errors && <p className="errors">{errors}</p>}
                <input 
                    type="password" 
                    placeholder="New Password"
                    name="password"
                    onChange={handlePassword}
                    value={password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm New Password"
                    name="verify"
                    onChange={handleVerify}
                    value={verify}
                />
                <button onClick={handleSubmit}>Reset Password</button>
            </div>
        </div>
    )
}