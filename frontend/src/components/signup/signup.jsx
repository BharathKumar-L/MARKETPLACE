import React from "react";
import "./signup.css";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Buttondemo from "../buttons/button_login.jsx";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const handleverify = () => {
        navigate("/otp");
    };
    return (
        <div className="home">
            <div className="sign">
                <h1>Hi There</h1>
                <p>New to our Marketplace? Create an account</p>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        "& > :not(style)": { m: 2 },
                    }}
                >
                    <TextField
                        id="firstname"
                        label="FirstName"
                        variant="outlined"
                        sx={{
                            width: 200,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#ffffff',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#ffffff',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ffffff',
                                },
                            },
                            '& .MuiInputBase-input': {
                                color: 'rgb(255,234,0)',
                                fontSize: '18px',
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#ffffff',
                                fontSize: '18px',
                            },
                        }}
                    />
                    <TextField
                        id="lastname"
                        label="LastName"
                        variant="outlined"
                        sx={{
                            width: 200,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#ffffff',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#ffffff',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ffffff',
                                },
                            },
                            '& .MuiInputBase-input': {
                                color: 'rgb(255,234,0)',
                                fontSize: '18px',
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#ffffff',
                                fontSize: '18px',
                            },
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        "& > :not(style)": { m: 2 },
                    }}
                >
                    <TextField
                        id="email"
                        label="Email-ID"
                        variant="outlined"
                        sx={{
                            width: 435,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#ffffff',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#ffffff',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ffffff',
                                },
                            },
                            '& .MuiInputBase-input': {
                                color: 'rgb(255,234,0)',
                                fontSize: '18px',
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#ffffff',
                                fontSize: '18px',
                            },
                        }}
                    />
                    <TextField
                        id="new_password"
                        label="NEW PASSWORD"
                        variant="outlined"
                        sx={{
                            width: 435,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#ffffff',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#ffffff',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ffffff',
                                },
                            },
                            '& .MuiInputBase-input': {
                                color: 'rgb(255,234,0)',
                                fontSize: '18px',
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#ffffff',
                                fontSize: '18px',
                            },
                        }}
                    />
                    <TextField
                        id="reconfirm_password"
                        label="RE-ENTER NEW PASSWORD"
                        variant="outlined"
                        sx={{
                            width: 435,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#ffffff',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#ffffff',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ffffff',
                                },
                            },
                            '& .MuiInputBase-input': {
                                color: 'rgb(255,234,0)',
                                fontSize: '18px',
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#ffffff',
                                fontSize: '18px',
                            },
                        }}
                    />
                </Box>
                <Buttondemo label="Verify with OTP" onClick={handleverify} />
            </div>
        </div>
    );
};

export default Signup;
