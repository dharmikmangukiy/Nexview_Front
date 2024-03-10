import React, { useState } from "react";
import Header from "../ClientSite/Global/Header";
import Footer from "../ClientSite/Global/Footer";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { Base_URL } from "../../Global";

function Step1() {
  const navigate = useNavigate();
  const Update = (e) => {
    e.preventDefault();
    axios
      .put(`${Base_URL}/free-user`, {
        type: "freeUser",
        token: JSON.parse(sessionStorage.getItem("token")),
      })
      .then((res) => {
        // if (res.message == "User Converted  to Free Plan Successfully") {
        //   navigate("/home");
        // }
        navigate("/home");

      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  return (
    <>
      <div className="client_conteint" style={{ height: "100vh" }}>
        {/* <Header /> */}
        <div
          className="text-white container contentWrapper text-center"
          style={{ paddingTop: "150px", paddingBottom: "100px" }}
        >
          <div className="pb-2">
            <CheckCircleOutlineRoundedIcon
              style={{
                color: "red",
                fontSize: "50px",
              }}
            />
          </div>
          <div className="pt-3">STEP 1 OF 3</div>
          <h3>Choose your plan.</h3>
          <div className="p-3">
            <div className="pb-2">
              <DoneAllRoundedIcon
                style={{
                  color: "red",
                  fontSize: "30px",
                  paddingRight: "8px",
                }}
              />
              No ads and no extra fees. Ever
            </div>
            <div className="pb-2">
              <DoneAllRoundedIcon
                style={{
                  color: "red",
                  fontSize: "30px",
                  paddingRight: "8px",
                }}
              />
              No commitments, cancel anytime.
            </div>
            <div className="pb-2">
              <DoneAllRoundedIcon
                style={{
                  color: "red",
                  fontSize: "30px",
                  paddingRight: "8px",
                }}
              />
              Everything on Netflix for one low price.
            </div>
          </div>
          <div className="text-center pt-4">
            {/* to="/home" */}
            <NavLink onClick={(e) => Update(e)}>
              <button className="Next_button">Free Trail</button>
            </NavLink>
            <NavLink to="/PlanForm">
              <button className="Next_button">NEXT</button>
            </NavLink>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Step1;
