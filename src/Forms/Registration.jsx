import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import KeyIcon from "@mui/icons-material/Key";
import { NavLink, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailIcon from "@mui/icons-material/Email";
import { Camera } from "../faceLogin/components/Camera";
import { PictureControls } from "../faceLogin/components/PictureControls";
import { Loader } from "../faceLogin/components/Loader";
import { useSelector } from "react-redux";
import { getAuthError, getScreenshot } from "../faceLogin/features/auth/authSlice";
import { getFaces } from "../faceLogin/features/auth/facenetSlice";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const [data, setdata] = useState({
    email: "",
    password: "",
    name: "",
  });

  const screenshot = useSelector(getScreenshot)
  const error = useSelector(getAuthError)
  const faces = useSelector(getFaces)

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
    if (faces && screenshot) {
      axios
        .post("http://localhost:5001/register", {
          ...data, screenshot, descriptor: Object.values(faces[0].descriptor)
        })
        .then((res) => {
          // console.log(res);
          if (data.email !== "" && data.password !== "" && data.name !== "") {
            if (res.data.message === "This email is already taken.") {
              toast.error(res.data.message);
            } else {
              toast.success("Register successful");
              toast("Back to Login");
              setdata({
                email: "",
                password: "",
                name: "",
              });
            }
            navigate('/');
            window.location.reload();
          } else {
            toast.error("Please enter all details.");
          }
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    }
  };
  // console.log(data);
  return (
    <div className="body_reg">
      <div className="container">
        <img src="public/Images/Netflix-Logo.png" alt="logo" height="80px" />
        <ToastContainer />
        <div className="resi-wrap">
          <div className="login-html">
            <div className="text-center mb-3">
              <div style={{ height: '138px', position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Camera />
              </div>
              <hr />
              <div>
                <span className="text_format">REGISTRATION</span>
              </div>
            </div>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label for="user" className="label">
                    Name
                  </label>
                  <Box
                    className="input"
                    sx={{ display: "flex", alignItems: "flex-end" }}
                  >
                    <AccountCircle
                      sx={{ color: "white", my: 0.5, mb: "8px " }}
                    />
                    <FormControl fullWidth sx={{ mr: "6%" }}>
                      <TextField
                        sx={{
                          border: "none",
                          "& fieldset": { border: "none" },
                        }}
                        id="input-with-sx"
                        name="name"
                        value={data.name}
                        onChange={input}
                        className="Text_field"
                      />
                    </FormControl>
                  </Box>
                </div>
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
                    Capture face image
                  </label>
                  <Box
                    className="input"
                    sx={{ display: "flex", alignItems: "flex-end" }}
                  >
                    <PictureControls />
                  </Box>
                </div>

                <div className="group">
                  <button
                    type="submit"
                    className="button"
                    onClick={(e) => sign_in(e)}
                  >
                    SIGN UP
                  </button>
                </div>
                <div className="group pt-2">
                  <div
                    style={{ display: "flex", justifyContent: "end" }}
                    className="foot-lnk"
                  >
                    <NavLink to="/">You are already Customer ?</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader />
    </div>
  );
};

export default Registration;
