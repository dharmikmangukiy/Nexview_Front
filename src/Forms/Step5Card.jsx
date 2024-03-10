import axios from "axios";
import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Base_URL } from "../../Global";
import Img from "../Componants/lazyLoadImage/Img";
function Step5Card() {
  const navigate=useNavigate()
  const [data, setdata] = useState({
    plan: "",
    name: "",
    cvv: "",
    expiration: "",
    cardnumber: "",
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
      // !data.email ||
      !data.plan ||
      !data.name ||
      !data.cvv ||
      !data.expiration ||
      !data.cardnumber
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
      <ToastContainer />
      <div className="client_conteint">
        {/* <Header /> */}
        <div
          className="text-white  contentWrapper  w-50"
          style={{ paddingTop: "100px", paddingBottom: "100px" }}
        >
          <div className="pb-2 text-center">
            <Img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png"
              alt=""
              height="75"
            />
          </div>
          <div className="pt-1 text-center">STEP 2 OF 2</div>
          <h3 className="text-center">*Set up your credit or debit card</h3>
          <div className="py-3">
            <div className="payment-title">
              <h2>
                <b>Payment Information</b>
              </h2>
            </div>
            <div className="d-flex align-items-end">
              <div className="containerrrr preload">
                <div className="creditcard">
                  <div className="front">
                    <div id="ccsingle" />
                    <svg
                      version="1.1"
                      id="cardfront"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 750 471"
                      style={{ enableBackground: "new 0 0 750 471" }}
                      xmlSpace="preserve"
                    >
                      <g id="Front">
                        <g id="CardBackground">
                          <g id="Page-1_1_">
                            <g id="amex_1_">
                              <path
                                id="Rectangle-1_1_"
                                className="lightcolor grey"
                                d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                      C0,17.9,17.9,0,40,0z"
                              />
                            </g>
                          </g>
                          <path
                            className="darkcolor greydark"
                            d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"
                          />
                        </g>
                        <text
                          transform="matrix(1 0 0 1 60.106 295.0121)"
                          id="svgnumber"
                          className="st2 st3 st4"
                        >
                          0123 4567 8910 1112
                        </text>
                        <text
                          transform="matrix(1 0 0 1 54.1064 428.1723)"
                          id="svgname"
                          className="st2 st5 st6"
                        >
                          JOHN DOE
                        </text>
                        <text
                          transform="matrix(1 0 0 1 54.1074 389.8793)"
                          className="st7 st5 st8"
                        >
                          cardholder name
                        </text>
                        <text
                          transform="matrix(1 0 0 1 479.7754 388.8793)"
                          className="st7 st5 st8"
                        >
                          expiration
                        </text>
                        <text
                          transform="matrix(1 0 0 1 65.1054 241.5)"
                          className="st7 st5 st8"
                        >
                          card number
                        </text>
                        <g>
                          <text
                            transform="matrix(1 0 0 1 574.4219 433.8095)"
                            id="svgexpire"
                            className="st2 st5 st9"
                          >
                            01/23
                          </text>
                          <text
                            transform="matrix(1 0 0 1 479.3848 417.0097)"
                            className="st2 st10 st11"
                          >
                            VALID
                          </text>
                          <text
                            transform="matrix(1 0 0 1 479.3848 435.6762)"
                            className="st2 st10 st11"
                          >
                            THRU
                          </text>
                          <polygon
                            className="st2"
                            points="554.5,421 540.4,414.2 540.4,427.9 		"
                          />
                        </g>
                        <g id="cchip">
                          <g>
                            <path
                              className="st2"
                              d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                  c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"
                            />
                          </g>
                          <g>
                            <g>
                              <rect
                                x={82}
                                y={70}
                                className="st12"
                                width="1.5"
                                height={60}
                              />
                            </g>
                            <g>
                              <rect
                                x="167.4"
                                y={70}
                                className="st12"
                                width="1.5"
                                height={60}
                              />
                            </g>
                            <g>
                              <path
                                className="st12"
                                d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                      c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                      C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                      c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                      c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"
                              />
                            </g>
                            <g>
                              <rect
                                x="82.8"
                                y="82.1"
                                className="st12"
                                width="25.8"
                                height="1.5"
                              />
                            </g>
                            <g>
                              <rect
                                x="82.8"
                                y="117.9"
                                className="st12"
                                width="26.1"
                                height="1.5"
                              />
                            </g>
                            <g>
                              <rect
                                x="142.4"
                                y="82.1"
                                className="st12"
                                width="25.8"
                                height="1.5"
                              />
                            </g>
                            <g>
                              <rect
                                x={142}
                                y="117.9"
                                className="st12"
                                width="26.2"
                                height="1.5"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g id="Back"></g>
                    </svg>
                  </div>
                  <div className="back">
                    <svg
                      version="1.1"
                      id="cardback"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 750 471"
                      style={{ enableBackground: "new 0 0 750 471" }}
                      xmlSpace="preserve"
                    >
                      <g id="Front">
                        <line
                          className="st0"
                          x1="35.3"
                          y1="10.4"
                          x2="36.7"
                          y2={11}
                        />
                      </g>
                      <g id="Back">
                        <g id="Page-1_2_">
                          <g id="amex_2_">
                            <path
                              id="Rectangle-1_2_"
                              className="darkcolor greydark"
                              d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                  C0,17.9,17.9,0,40,0z"
                            />
                          </g>
                        </g>
                        <rect
                          y="61.6"
                          className="st2"
                          width={750}
                          height={78}
                        />
                        <g>
                          <path
                            className="st3"
                            d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
              C707.1,246.4,704.4,249.1,701.1,249.1z"
                          />
                          <rect
                            x="42.9"
                            y="198.6"
                            className="st4"
                            width="664.1"
                            height="10.5"
                          />
                          <rect
                            x="42.9"
                            y="224.5"
                            className="st4"
                            width="664.1"
                            height="10.5"
                          />
                          <path
                            className="st5"
                            d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z"
                          />
                        </g>
                        <text
                          transform="matrix(1 0 0 1 621.999 227.2734)"
                          id="svgsecurity"
                          className="st6 st7"
                        >
                          985
                        </text>
                        <g className="st8">
                          <text
                            transform="matrix(1 0 0 1 518.083 280.0879)"
                            className="st9 st6 st10"
                          >
                            security code
                          </text>
                        </g>
                        <rect
                          x="58.1"
                          y="378.6"
                          className="st11"
                          width="375.5"
                          height="13.5"
                        />
                        <rect
                          x="58.1"
                          y="405.6"
                          className="st11"
                          width="421.7"
                          height="13.5"
                        />
                        <text
                          transform="matrix(1 0 0 1 59.5073 228.6099)"
                          id="svgnameback"
                          className="st12 st13"
                        >
                          John Doe
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="form-container">
                <div className="field-container">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    maxLength={20}
                    value={data.name}
                    onChange={input}
                    type="text"
                    placeholder="JOHN DOE"
                  />
                </div>

                <div className="field-container">
                  <label htmlFor="cardnumber">Card Number</label>
                  <span id="generatecard">generate random</span>
                  <input
                    id="cardnumber"
                    name="cardnumber"
                    type="text"
                    pattern="[0-9]*"
                    onChange={input}
                    inputMode="numeric"
                    placeholder="0123 4567 8910 1112"
                  />
                  <svg
                    id="ccicon"
                    className="ccicon"
                    width={750}
                    height={471}
                    viewBox="0 0 750 471"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  ></svg>
                </div>
                <div className="field-container">
                  <label htmlFor="expirationdate">Expiration (mm/yy)</label>
                  <input
                    id="expirationdate"
                    name="expiration"
                    type="text"
                    value={data.expiration}
                    onChange={input}
                    pattern="[0-9]*"
                    inputMode="numeric"
                    placeholder="01/23"
                  />
                </div>
                <div className="field-container">
                  <label htmlFor="securitycode">Security Code</label>
                  <input
                    id="securitycode"
                    name="cvv"
                    type="number"
                    value={data.cvv}
                    onChange={input}
                    pattern="[0-9]*"
                    inputMode="numeric"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
            {/* <div>
              <label htmlFor="palne">Enter Email ID</label> <br />
              <input
                name="email"
                type="text"
                className="form-control"
                placeholder="nexview@gmail.com"
                value={data.email}
                onChange={input}
              />
            </div> */}
            <div>
              <label htmlFor="palne"> Select Plan</label> <br />
              <select
                name="plan"
                id=""
                className="form-control"
                value={data.plan}
                onChange={input}
              >
                <option value="Premium"> Premium ₹ 649</option>
                <option value="Standard"> Standard ₹ 499</option>
                <option value="Basic"> Basic ₹ 199</option>
                <option value="Mobile"> Mobile ₹ 149</option>
              </select>
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
              {/* to="/final_pay"  */}
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

export default Step5Card;
