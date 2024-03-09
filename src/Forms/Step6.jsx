import React, { useState } from "react";
import Header from "../ClientSite/Global/Header";
import Footer from "../ClientSite/Global/Footer";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import { NavLink, useNavigate } from "react-router-dom";

function Step6() {
    const naviagte = useNavigate();
  return (
    <>
      <div className="client_conteint" style={{height:"100vh"}}>
        {/* <Header /> */}
        <div
          className="text-white container contentWrapper text-center"
          style={{ paddingTop: "150px", paddingBottom: "100px" }}
        >
          <div className="pb-2">
            <CheckCircleOutlineRoundedIcon
              style={{
                color: "red",
                fontSize: "100px",
              }}
            />
          </div>
          <div className="pt-3">STEP 3 OF 3</div>
          <h1 className="pt-3">Your Application is Under Review</h1>
          <span className="text-secondary">*Please Login After 5 Minutes.</span>

          <div className="text-center pt-4">
            <NavLink onClick={()=>{
                      localStorage.setItem("login", true);
                      window.location.reload();
                      naviagte("/")
            }}>
              <button className="Next_button">Back To Login</button>
            </NavLink>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Step6;