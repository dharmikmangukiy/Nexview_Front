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
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewDate from "../Comman Componant/NewDate";
import { NavLink } from "react-router-dom";
const Profile = () => {
  const themes = ["orange", "purple", "green", "blue"];
  const [currentTheme, setCurrentTheme] = useState(
    themes[Math.floor(Math.random() * themes.length)]
  );

  const [isWrapperOpen, setIsWrapperOpen] = useState(false);

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

  const [data, setdata] = useState({
    name: "",
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

  const [Favorites, setFavorites] = useState([]);
  const [loadingggg, setLoadingggg] = useState();

  useEffect(() => {
    // setLoadingggg(true);
    axios
      .post("http://localhost:5001/me", {
        token: JSON.parse(sessionStorage.getItem("token")),
      })
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data);
          setFavorites(res.data);
          const filteredMovies = res.data.favorite.filter(
            (movie) => movie.id === id
          );
          // setLoadingggg(false);
          console.log(filteredMovies);
        }
      })
      .catch((error) => {
        console.error("Exception:", error);
        // localStorage.setItem("login", true);
        // navigate("/");
        // dispatch(loginChnage(true));
        // sessionStorage.clear();
        // window.location.reload();
      });
  }, [loadingggg,isWrapperOpen]);

  const toggleWrapper = () => {
    setIsWrapperOpen(!isWrapperOpen);
    setdata({
      name: Favorites?.name,
    });
    setBase64Image(Favorites?.profile)
  };

  const [base64Image, setBase64Image] = useState("");

  const convertImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const base64 = e.target.result;
        setBase64Image(base64);
      };

      reader.readAsDataURL(file);
    }
  };

  const submit = () => {
    setLoadingggg(true);
    axios
      .put("http://localhost:5001/user-profile", {
        token: JSON.parse(sessionStorage.getItem("token")),
        name: data.name,
        profileImage: base64Image,
      })
      .then((res) => {
        toast(res.data.message);
        setIsWrapperOpen(false);
      });
  };
  const myStyle = {
    // background: `#8f6ed5 url("https://cdn-icons-png.flaticon.com/512/3135/3135715.png") center center no-repeat`,
    background: Favorites?.profile
      ? `#8f6ed5 url(${Favorites.profile}) center center no-repeat`
      : `#8f6ed5 url("https://cdn-icons-png.flaticon.com/512/3135/3135715.png") center center no-repeat`,

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
      <ToastContainer />
      <Header />
      <main className="cd__main">
        <div className="profile-page">
          <div className="content">
            <div className="content__cover">
              {/* <div className="content__avatar" /> */}
              <div className="content__avatar2 containerp " style={myStyle}>
                <div style={{ display: isWrapperOpen ? "" : "none" }}>
                  <input
                    type="file"
                    className="input_image"
                    onChange={convertImage}
                  />
                  <div class="middle">
                    <AddPhotoAlternateIcon />
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
              <NavLink to="/favorite">
                <FavoriteIcon />
                <span> {Favorites?.favorite?.length}</span>
              </NavLink>
              <NavLink to="#">
                <TodayIcon />
                <span>
                  {" "}
                  <NewDate newDate={Favorites?.planEndDate} />{" "}
                </span>
              </NavLink>
            </div>
            <div className="content__title">
              <h1>
                {Favorites?.name}
                <DrawIcon
                  onClick={toggleWrapper}
                  style={{ cursor: "pointer" }}
                />
              </h1>
              <span> {Favorites?.email}</span>
            </div>
            <div className="content__description">
              <p
                style={{ textDecoration: " underline" }}
                className="pb-4 text-danger"
              >
                <b>🎊 {Favorites?.type} 🎊</b>
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
                  name="name"
                  label="User Name"
                  id="User Name"
                  variant="filled"
                  value={data.name}
                  onChange={input}
                />
              </Box>
            </div>

            <div
              className="content__button"
              style={{ display: isWrapperOpen ? "" : "none" }}
            >
              <NavLink className="button" onClick={submit}>
                <div className="button__border" />
                <div className="button__bg" />
                Submit
              </NavLink>
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
