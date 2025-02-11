import React, { useState, useRef } from "react";
import { TextField, Box } from "@mui/material";
import "./otp.css";
import Buttondemo from "../buttons/button_login.jsx";
import { useNavigate } from "react-router-dom";

const Otp = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = useRef([]);
    const navigate = useNavigate();

    const handleChange = (index, value) => {
        if (/^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 3) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handlelogin = () =>{
        navigate("/");
    };

    return (
        <div className="home">
        <div className="otp">
            <h2>Enter OTP</h2>
            <p>Please enter the 4-digit code sent to your email.</p>
            <Box display="flex" gap={2} justifyContent="center" mt={2}>
                {otp.map((digit, index) => (
                    <TextField
                        key={index}
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        variant="outlined"
                        inputProps={{
                            maxLength: 1,
                            style: { textAlign: "center", fontSize: "24px", width: "50px", color:'#ffffff' },
                        }}
                        inputRef={(ref) => (inputRefs.current[index] = ref)}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "white",
                              },
                              "&:hover fieldset": {
                                borderColor: "white",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "rgb(255,234,0)",
                              },
                            },
                            "& .MuiInputBase-input": {
                              color: "white",
                            },
                          }}
                    />
                ))}
            </Box>
            <Buttondemo label="Submit" onClick={handlelogin} />
        </div>
        </div>  
    );
};

export default Otp;
