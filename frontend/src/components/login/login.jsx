import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import Box from "@mui/material/Box";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { GoogleLogin } from '@react-oauth/google';
import * as jwt_decode from "jwt-decode"; // Correct import
import Buttondemo from "../buttons/button_login.jsx";

const Login = ({ setUser }) => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleGoogleLoginSuccess = (credentialResponse) => {
        try {
            const decoded = jwt_decode.default(credentialResponse.credential); // Use .default
            setUser(decoded); 
            navigate("/home");
        } catch (error) {
            console.error("Failed to decode JWT:", error);
        }
    };

    const handleGoogleLoginFailure = (error) => {
        console.error("Google login failed:", error);
    };

    return (
        <div className="home">
            <div className="login">
                <h1>Log In</h1>
                <p>Enter your credentials to log in!</p>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        "& > :not(style)": { m: 2 },
                    }}
                >
                    <TextField
                        id="username"
                        label="Username"
                        variant="standard"
                        sx={{
                            width: 300,
                            "& .MuiInputBase-input": {
                                color: "black",
                                fontSize: "20px",
                                paddingTop: "10px",
                            },
                            "& .MuiInput-underline:before": {
                                borderBottomColor: "#ffffff",
                            },
                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                borderBottomColor: "#ffffff",
                            },
                            "& .MuiInput-underline:after": {
                                borderBottomColor: "#ffffff",
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: "#ffffff",
                                fontSize: "20px",
                            },
                        }}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        variant="standard"
                        type={showPassword ? "text" : "password"}
                        sx={{
                            width: 300,
                            "& .MuiInputBase-input": {
                                color: "#000000",
                                fontSize: "20px",
                                paddingTop: "10px",
                            },
                            "& .MuiInput-underline:before": {
                                borderBottomColor: "#ffffff",
                            },
                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                borderBottomColor: "#ffffff",
                            },
                            "& .MuiInput-underline:after": {
                                borderBottomColor: "#ffffff",
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: "#ffffff",
                                fontSize: "20px",
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleTogglePasswordVisibility}
                                        edge="end"
                                        style={{ color: "#ffffff" }}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <Buttondemo label="LOGIN" />
                <p>or</p>
                <GoogleLogin
                    onSuccess={handleGoogleLoginSuccess}
                    onError={handleGoogleLoginFailure}
                />
                <p className="signup">
                    Don't have an account?{" "}
                    <Link className="signup-a" to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
