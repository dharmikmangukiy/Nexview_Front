import React, { useEffect, useState } from "react";
import Footer from "../ClientSite/Global/Footer";
import Header from "../ClientSite/Global/Header";
import "./css/demo.css";
import "./css/style.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DrawIcon from "@mui/icons-material/Draw";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TodayIcon from "@mui/icons-material/Today";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
const Profile = () => {
  const themes = ["orange", "purple", "green", "blue"];
  const [currentTheme, setCurrentTheme] = useState(
    themes[Math.floor(Math.random() * themes.length)]
  );
  const [isWrapperOpen, setIsWrapperOpen] = useState(false);

  const toggleWrapper = () => {
    setIsWrapperOpen(!isWrapperOpen);
  };

  const switchTheme = (e) => {
    themes.forEach((theme) => {
      if (document.body.classList.contains(`theme-${theme}`)) {
        document.body.classList.remove(`theme-${theme}`);
      }
    });
    document.body.classList.add(`theme-${e}`);
    setCurrentTheme(e);
  };

  useEffect(() => {
    document.body.classList.add(`theme-${currentTheme}`);
  }, [currentTheme]);

  const myStyle = {
    background:
      '#8f6ed5 url("https://cdn-icons-png.flaticon.com/512/3135/3135715.png") center center no-repeat',
    width: "12rem", // <-- wrap the value in quotes
    height: "12rem", // <-- wrap the value in quotes
    position: "absolute", // <-- wrap the value in quotes
    bottom: 0,
    left: "50%", // <-- wrap the value in quotes
    zIndex: 2,
    transform: "translate(-50%, 50%)", // <-- wrap the value in quotes
    backgroundSize: "cover", // <-- wrap the value in quotes
    borderRadius: "50%", // <-- wrap the value in quotes
    boxShadow: "0 15px 35px rgba(50,50,93,0.1), 0 5px 15px rgba(0,0,0,0.07)", // <-- wrap the value in quotes
  };

  return (
    <div className="bodyy_profile">
      <Header />
      <main className="cd__main">
        <div className="profile-page">
          <div className="content">
            <div className="content__cover">
              {/* <div className="content__avatar" /> */}
              <div className="content__avatar2 containerp " style={myStyle}>
                <div  style={{ display: isWrapperOpen ? "" : "none" }}>
                <input type="file" className="input_image" />
                <div class="middle">
                 <AddPhotoAlternateIcon/>
                </div>
                </div>
              </div>
              <div className="content__bull">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="content__actions">
              <a href="#">
                <FavoriteIcon />
                <span>Favorie</span>
              </a>
              <a href="#">
                <TodayIcon />
                <span>End Date</span>
              </a>
            </div>
            <div className="content__title">
              <h1>
                Samantha Jones{" "}
                <DrawIcon
                  onClick={toggleWrapper}
                  style={{ cursor: "pointer" }}
                />
              </h1>
              <span>New York, United States</span>
            </div>
            <div className="content__description">
              <p
                style={{ textDecoration: " underline" }}
                className="pb-4 text-danger"
              >
                <b>🎊 Prime User 🎊</b>
              </p>

              <Box
                sx={{
                  maxWidth: "100%",
                  textAlign: "center",
                }}
                style={{ display: isWrapperOpen ? "" : "none" }}
              >
                <TextField
                  fullWidth
                  label="User Name"
                  id="User Name"
                  variant="filled"
                />
              </Box>
            </div>

            <div
              className="content__button"
              style={{ display: isWrapperOpen ? "" : "none" }}
            >
              <a className="button" href="#">
                <div className="button__border" />
                <div className="button__bg" />
                Submit
              </a>
            </div>
          </div>
          <div className="bg">
            <div>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          {/* <div
            className={`theme-switcher-wrapper ${
              isWrapperOpen ? "is-open" : ""
            }`}
            id="theme-switcher-wrapper"
          >
            <span>Themes color</span>
            <ul>
              {themes.map((theme, index) => (
                <li key={index}>
                  <em
                    className={`is-active ${
                      currentTheme === theme ? "active" : ""
                    }`}
                    data-theme={theme}
                    onClick={() => switchTheme(theme)}
                  />
                </li>
              ))}
            </ul>
          </div> */}
          {/* <div className="theme-switcher-button" id="theme-switcher-button" onClick={toggleWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                fill="currentColor"
                d="M352 0H32C14.33 0 0 14.33 0 32v224h384V32c0-17.67-14.33-32-32-32zM0 320c0 35.35 28.66 64 64 64h64v64c0 35.35 28.66 64 64 64s64-28.65 64-64v-64h64c35.34 0 64-28.65 64-64v-32H0v32zm192 104c13.25 0 24 10.74 24 24 0 13.25-10.75 24-24 24s-24-10.75-24-24c0-13.26 10.75-24 24-24z"
              />
            </svg>
          </div> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
