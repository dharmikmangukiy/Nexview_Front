import React, { useState } from "react";
import Header from "../ClientSite/Global/Header";
import Footer from "../ClientSite/Global/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Img from "../Componants/lazyLoadImage/Img";
import axios from "axios";
import { Base_URL } from "../../Global";
function Step5Upi() {
  const navigate=useNavigate()
  const [data, setdata] = useState({
    plan: "",
    application: "",
    trationId: "",
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
    const param = new FormData();
    if (
      !data.plan ||
      !data.application ||
      !data.trationId 
    ) {
      toast.error("All fields are required");
    } else {
      axios.post(`${Base_URL}/payment`, {...data,
      token: JSON.parse(sessionStorage.getItem('token')),}).then((res) => {
        if (res.data.message == "User Not Found") {
          toast.error(res.data.message);
        } else {
          toast.success("Payment success");
          navigate("/final_pay")
        }
      });
    }
  };
  return (
    <>
      <div className="client_conteint">
        <ToastContainer/>
        {/* <Header /> */}
        <div
          className="text-white  contentWrapper  w-50"
          style={{ paddingTop: "100px", paddingBottom: "100px" }}
        >
          <div className="pb-2 text-center">
            <Img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png"
              alt=""
              height="50"
            />
          </div>
          <div className="pt-1 text-center">STEP 2 OF 2</div>
          <div className="py-3">
            <div className="text-center">
              <img src="../../public/Images/QrCode.jpg" alt="" height="135" />
            </div>
            <div className="payment-title">
              <h2>
                <b>Configuring UPI AutoPay</b>
              </h2>
            </div>
            <div>
              <label htmlFor="palne"> Select Plan</label> <br />
              <select
                name="plan"
                id=""
                className="form-control p-3"
                value={data.plan}
                onChange={input}
              >
                <option value="Premium"> Premium ₹ 649</option>
                <option value="Standard"> Standard ₹ 499</option>
                <option value="Basic"> Basic ₹ 199</option>
                <option value="Mobile"> Mobile ₹ 149</option>
              </select>
            </div>
            <div>
              <label htmlFor="applicaion"> Select Your UPI App</label> <br />
              <select
                name="application"
                id=""
                className="form-control p-3"
                value={data.application}
                onChange={input}
              >
                <option value="Google Pay"> Google Pay</option>
                <option value="BHIM">BHIM</option>
                <option value="Phone Pay">Phone Pay</option>
                <option value="Paytm"> Paytm</option>
                <option value="Amazon Pay"> Amazon Pay</option>
              </select>
            </div>

            <div>
              <label htmlFor="transacion">Enter Transaction ID</label> <br />
              <input
                name="trationId"
                type="text"
                className="form-control p-3"
                placeholder="93DJ2231ADD35672D."
                value={data.trationId}
                onChange={input}
              />
            </div>
            <br />
            <div>
              <p className="text-secondary">
                Any payment above ₹ 2000 shall need additional authentication.
              </p>
              <p className="text-secondary">
                By checking the checkbox below, you agree to our Terms of Use,
                Privacy Statement, and that you are over 18. Netflix will
                automatically continue your membership and charge the membership
                fee (currently ₹199/month) to your payment method until you
                cancel. You may cancel at any time to avoid future charges.
              </p>
            </div>
            <div className="text-center pt-2">
              <NavLink onClick={(e) => sign_in(e)}>
                <button className="Next_button">Start Membership</button>
              </NavLink>
              <p className="text-secondary">
                *This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{" "}
              </p>
            </div>
          </div>

          <div className="text-center pt-2"></div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Step5Upi;
