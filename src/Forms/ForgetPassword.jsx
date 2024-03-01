import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import KeyIcon from "@mui/icons-material/Key";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailIcon from "@mui/icons-material/Email";

const ForgetPassword = () => {
    const navigate = useNavigate()
    const [data, setdata] = useState({
        email: "",
        password: "",
        cpassword: "",
    });

    const input = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setdata((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            };
        });
    };
    const sign_in = (e) => {
        e.preventDefault();
      
        if (data.email === "" || data.password === "" || data.cpassword === "") {
          toast.error("Please enter all details.");
          return;
        }else  if (data.password !== data.cpassword) {
          toast.error("Password and Confirm Password do not match.");
          return;
        }else{
        axios
          .post("http://localhost:5001/", data)
          .then((res) => {
            if (res.data.message === "Email not exist") {
              toast.error(res.data.message);
            } else {
              toast.success("Password Reset successfully");
              toast.success("Back to Login"); 
              setdata({
                email: "",
                password: "",
                cpassword: "",
              });
              navigate("/");
            }
          })
          .catch((error) => {
            console.error("An error occurred:", error);
            toast.error("An error occurred while processing your request.");
          });
        }
      };

      

    // console.log(data);
    return (
        <div className="body_forg">
            <div className="container">
                <img src="public/Images/Netflix-Logo.png" alt="logo" height="80px" />
                <ToastContainer />
                <div className="login-wrap">
                    <div className="login-html">
                        <div className="text-center mb-3">
                            <img
                                class="rounded-circle shadow  rounded "
                                alt="avatar2"
                                height={110}
                                src="data:image/jpeg;base64,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"
                            />
                            <hr />
                            <div>
                                <span className="text_format">Forget Password</span>
                            </div>
                        </div>
                        <div className="login-form">
                            <div className="sign-in-htm">

                                <div className="group">
                                    <label for="user" className="label">
                                        Email
                                    </label>
                                    <Box
                                        className="input"
                                        sx={{ display: "flex", alignItems: "flex-end" }}
                                    >
                                        <EmailIcon sx={{ color: "white", my: 0.5, mb: "8px " }} />
                                        <FormControl fullWidth sx={{ mr: "6%" }}>
                                            <TextField
                                                sx={{
                                                    border: "none",
                                                    "& fieldset": { border: "none" },
                                                }}
                                                id="input-with-sx"
                                                name="email"
                                                value={data.email}
                                                onChange={input}
                                                className="Text_field"
                                            />
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="group">
                                    <label for="pass" className="label">
                                        Password
                                    </label>
                                    <Box
                                        className="input"
                                        sx={{ display: "flex", alignItems: "flex-end" }}
                                    >
                                        <KeyIcon sx={{ color: "white", my: 0.5, mb: "8px " }} />
                                        <FormControl fullWidth sx={{ mr: "6%" }}>
                                            <TextField
                                                sx={{
                                                    border: "none",
                                                    "& fieldset": { border: "none" },
                                                }}
                                                id="password"
                                                name="password"
                                                type="password"
                                                className="Text_field"
                                                value={data.password}
                                                onChange={input}
                                            />
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="group">
                                    <label for="pass" className="label">
                                        Confirm Password
                                    </label>
                                    <Box
                                        className="input"
                                        sx={{ display: "flex", alignItems: "flex-end" }}
                                    >
                                        <KeyIcon sx={{ color: "white", my: 0.5, mb: "8px " }} />
                                        <FormControl fullWidth sx={{ mr: "6%" }}>
                                            <TextField
                                                sx={{
                                                    border: "none",
                                                    "& fieldset": { border: "none" },
                                                }}
                                                id="cpassword"
                                                name="cpassword"
                                                type="password"
                                                className="Text_field"
                                                value={data.cpassword}
                                                onChange={input}
                                            />
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="group">
                                    <button
                                        type="submit"
                                        className="button"
                                        onClick={(e) => sign_in(e)}
                                    >
                                        Submit
                                    </button>
                                </div>
                                <div className="group pt-2">
                                    <div
                                        style={{ display: "flex", justifyContent: "end" }}
                                        className="foot-lnk"
                                    >
                                        <NavLink to="/">Back To Login ?</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;