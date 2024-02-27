import React, { useState } from "react";
import Header from "../ClientSite/Global/Header";
import Footer from "../ClientSite/Global/Footer";
import { NavLink } from "react-router-dom";

function Step5Upi() {
    return (
        <>
            <div className="client_conteint">
                {/* <Header /> */}
                <div
                    className="text-white  contentWrapper  w-50"
                    style={{ paddingTop: "100px", paddingBottom: "100px" }}
                >
                    <div className="pb-2 text-center">
                        <img
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png"
                            alt=""
                            height="75"
                        />
                    </div>
                    <div className="pt-1 text-center">STEP 2 OF 2</div>
                    <div className="py-3">

                        <div className="payment-title">
                            <h2><b>Configuring UPI AutoPay</b></h2>
                        </div>
                        <div>
                            <label htmlFor="palne"> Select Plan</label> <br />
                            <select name="plane" id="" className="form-control p-3">
                                <option value="649"> Premium ₹ 649</option>
                                <option value="499"> Standard ₹ 499</option>
                                <option value="199"> Basic ₹ 199</option>
                                <option value="149"> Mobile ₹ 149</option>

                            </select>
                        </div>
                        <div>
                            <label htmlFor="palne"> Select Your UPI App</label> <br />
                            <select name="plane" id="" className="form-control p-3">
                                <option value="Google Pay"> Google Pay</option>
                                <option value="BHIM">BHIM</option>
                                <option value="Phone Pay">Phone Pay</option>
                                <option value="Paytm"> Paytm</option>
                                <option value="Amazon Pay"> Amazon Pay</option>

                            </select>
                        </div>
                        <div>
                            <label htmlFor="palne">Enter UPI ID</label> <br />
                        <input type="text" className="form-control p-3"/>
                        </div>
                  
                        <br />
                        <div>
                            <p className="text-secondary">Any payment above ₹ 2000 shall need additional authentication.</p>
                            <p className="text-secondary">By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently ₹199/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.</p>
                        </div>
                        <div className="text-center pt-2">
                            <NavLink to="/final_pay">
                                <button className="Next_button">Start Membership</button>
                            </NavLink>
                            <p className="text-secondary">*This page is protected by Google reCAPTCHA to ensure you're not a bot. </p>
                        </div>
                    </div>

                    <div className="text-center pt-2">




                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
}

export default Step5Upi;
