import React from 'react'
import "./login.css";
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Buttondemo from "../buttons/button_login.jsx";

const Login = () => {
    return (
        <div className='home'>
            <div className="login">
                <h2>LOGIN</h2>
                <p>Enter your credentials to login</p>
                <div className='input-group'>
                    <label htmlFor="username">Username</label>
                    <input type="text" id ="username"/>
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input type="text" id ="password"/>
                </div>
                <Buttondemo label="LOGIN" />
            </div>
        </div>
    )
}

export default Login;