import React, { useState } from "react";
import Header from "../ClientSite/Global/Header";
import Footer from "../ClientSite/Global/Footer";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import { NavLink } from "react-router-dom";

function Step3() {
  return (
    <>
      <div className="client_conteint" style={{height:"100vh"}}>
        {/* <Header /> */}
        <div
          className="text-white container contentWrapper text-center"
          style={{ paddingTop: "150px", paddingBottom: "100px" }}
        >
          <div className="pb-2">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
              alt=""
              height="75"
            />
          </div>
          <div className="pt-5">STEP 2 OF 2</div>
          <h3>One last thing</h3> 
          <div className="p-3">
            <span>
            Before we restart your membership,<br /> you'll need to set up a payment method.
            </span><br /><br />
            <span>
            As always, you can cancel online at any time.
            </span>
          </div>
          <div className="text-center pt-2">
            <NavLink to="/step4">
              <button className="Next_button">NEXT</button>
            </NavLink>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Step3;
