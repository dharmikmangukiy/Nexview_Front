import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import KeyIcon from "@mui/icons-material/Key";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PictureControls } from "../faceLogin/components/PictureControls";
import { Camera } from "../faceLogin/components/Camera";
import { useSelector } from "react-redux";
import {
  getAuthError,
  getScreenshot,
} from "../faceLogin/features/auth/authSlice";
import { getFaces } from "../faceLogin/features/auth/facenetSlice";
import { Loader } from "../faceLogin/components/Loader";

import { useDispatch } from "react-redux";
import {
  loginChnage,
  authorChnage,
} from "../ClientSite/Global/store/homeSlice";
import { Base_URL } from "../../Global";
import { CircularProgress } from "@mui/material";
const Login = () => {
  const [Processor, setProcessor] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const screenshot = useSelector(getScreenshot);
  const error = useSelector(getAuthError);
  const faces = useSelector(getFaces);
  const dispatch = useDispatch();
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const [data, setdata] = useState({
    email: "",
    password: "",
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

  function handleClick() {
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }

  const [ip, setIP] = useState("");

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    // console.log(res.data);
    setIP(res.data.ip);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleLoginSuccess = (role) => {
    localStorage.setItem("Author", role);
    console.log(role);
    axios
      .post(`${Base_URL}/me`, {
        token: JSON.parse(sessionStorage.getItem("token")),
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200) {
          if (
            res.data.type == "freeUser" &&
            res.data.paymentStatus !== "pending"
          ) {
            navigate("/home");
          } else if (res.data.paymentStatus == null) {
            navigate("/Step1");
            // handleClick();
          } else if (res.data.paymentStatus == "pending") {
            navigate("/final_pay");
            // handleClick();
          }
        }
      })
      .catch((error) => {
        console.error("Exception:", error);
        if (error.response && error.response.status === 402) {
          localStorage.setItem("login", true);
          navigate("/");
          dispatch(loginChnage(true));
          sessionStorage.clear();
          window.location.reload();
        }
      });
  };

  const sign_in = (e) => {
    e.preventDefault();
    if (activeTab == 2) {
      if (faces && screenshot) {
        setProcessor(true);
        axios
          .post(`${Base_URL}/face-login`, {
            ...data,
            screenshot,
            descriptor: Object.values(faces[0].descriptor),
            ip: ip,
          })
          .then((res) => {
            setProcessor(false);

            console.log(res);
            sessionStorage.setItem("token", JSON.stringify(res.data.token));
            handleLoginSuccess(res.data.user.role);
            dispatch(authorChnage(res?.data?.user?.role));
            dispatch(loginChnage(false));
            sessionStorage.setItem(
              "User_id",
              JSON.stringify(res.data.user._id)
            );
            toast.success("Login successful");
            localStorage.setItem("login", false);
          })
          .catch((error) => {
            console.log("An error occurred:", error);
            toast.error(error.response.data.error);
          });
      }
    } else {
      if (data.email == "" || data.password == "") {
        toast.error("Please enter both email and password.");
      } else {
        setProcessor(true);

        axios
          .post(`${Base_URL}/login`, {
            email: data.email,
            password: data.password,
            ip: ip,
          })
          .then((res) => {
            setProcessor(false);

            sessionStorage.setItem("token", JSON.stringify(res.data.token));
            if (res.data.message == "Username or password is wrong!") {
              toast.error(res.data.message);
            } else if (data.email == res.data.data.email && data.password) {
              toast.success("Login successful");
              handleLoginSuccess(res.data.data.role);
              localStorage.setItem("login", false);
              dispatch(authorChnage(res?.data?.data?.role));
              dispatch(loginChnage(false));
            }
          })
          .catch((error) => {
            console.log("An error occurred:", error);
            toast.error("An error occurred");
          });
      }
    }
  };

  return (
    <div className="body">
      <div className="container">
        <img src="public/Images/Netflix-Logo.png" alt="logo" height="80px" />
        <ToastContainer />
        <div className="login-wrap">
          <div className="login-html">
            <div className="text-center mb-3">
              <div
                style={{
                  height: "138px",
                  position: "relative",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Camera isLogin={true} />
              </div>
              <hr />
              <div>
                <span className="text_format">Welcome !</span>
              </div>
            </div>

            <div className="login-form">
              <div className="sign-in-htm">
                <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      style={{
                        fontSize: "1.4rem",
                        background: "transparent",
                        color: "white",
                      }}
                      className={`nav-link ${activeTab === 1 ? "active" : ""}`}
                      id="ex1-tab-1"
                      role="tab"
                      aria-controls="ex1-tabs-1"
                      aria-selected={activeTab === 1 ? "true" : "false"}
                      onClick={() => handleTabClick(1)}
                    >
                      Authentication
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      style={{
                        fontSize: "1.4rem",
                        background: "transparent",
                        color: "white",
                      }}
                      className={`nav-link ${activeTab === 2 ? "active" : ""}`}
                      id="ex1-tab-2"
                      role="tab"
                      aria-controls="ex1-tabs-2"
                      aria-selected={activeTab === 2 ? "true" : "false"}
                      onClick={() => handleTabClick(2)}
                    >
                      Face Recognition
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="ex1-content">
                  <div
                    className={`tab-pane fade ${
                      activeTab === 1 ? "show active" : ""
                    }`}
                    id="ex1-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-1"
                  >
                    <div className="group">
                      <label for="user" className="label">
                        Email
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
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === 2 ? "show active" : ""
                    }`}
                    id="ex1-tabs-2"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-2"
                  >
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
                  </div>
                </div>

                <div className="group pt-2">
                  <div style={{ marginLeft: "5%" }} className="foot-lnk">
                    <NavLink to="forget_password">Forgot Password ? </NavLink>
                  </div>
                </div>
                <div className="group">
                  <button
                    type="submit"
                    className="button"
                    onClick={(e) => sign_in(e)}
                  >
                    {Processor == true ? (
                      <div style={{ margin: "-10px" }}>
                        <CircularProgress color="inherit" />
                      </div>
                    ) : (
                      "SIGN IN"
                    )}
                  </button>
                </div>
                <div className="group pt-2">
                  <div
                    style={{ display: "flex", justifyContent: "end" }}
                    className="foot-lnk"
                  >
                    <NavLink to="/Registration">Create an Account ? </NavLink>
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

export default Login;
