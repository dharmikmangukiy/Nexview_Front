import React, { useState } from "react";
import Header from "../ClientSite/Global/Header";
import Footer from "../ClientSite/Global/Footer";
import { useNavigate } from "react-router-dom";
import Img from "../Componants/lazyLoadImage/Img";


function Step4() {
    const navigate=useNavigate();
    return (
        <>
            <div className="client_conteint">
                {/* <Header /> */}
                <div
                    className="text-white container contentWrapper text-center"
                    style={{ paddingTop: "150px", paddingBottom: "100px" }}
                >
                    <div className="pb-2">
                        <Img
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png"
                            alt=""
                            height="75"
                        />
                    </div>
                    <div className="pt-5">STEP 2 OF 2</div>
                    <h3>Choose how to pay</h3>
                    <div className="p-3">
                        <span>
                            Your payment is encrypted and you can change your <br /> payment method at anytime.
                        </span><br /><br />
                        <span>
                            <b> Secure for peace of mind. <br />
                                Cancel easily online.</b>
                        </span>
                    </div>
                    <div className="text-end w-75">End-to-end encrypted 🔐</div>
                    <div className="text-center pt-2">

                        <div className="d-flex justify-content-center">
                            <button onClick={()=>navigate("/step5_card")} className=" align-items-center paymentTab overrides paymentPicker standardHeight default-ltr-cache-22elhg e1ff4m3w2" id="creditOrDebitCardDisplayStringId" data-uia="payment-choice+creditOrDebitOption" type="button">
                                <div className="mopNameAndLogos">
                                    <div className="paymentTab--text card-type-text">
                                        <span className="selectionLabel p-5">Credit or Debit Card</span>
                                    </div>
                                    <div className="logosContainer">
                                        <span className="logos logos-inline" data-uia="cardLogos-comp" aria-label="We accept Visa, Mastercard and Diners Club.">
                                            <Img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png" alt="Visa" className="logoIcon VISA default-ltr-cache-kg1rox e18ygst00" srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA@2x.png 2x" data-uia="logoIcon-VISA" />
                                            <Img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png" alt="Mastercard" className="logoIcon MASTERCARD default-ltr-cache-kg1rox e18ygst00" srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD@2x.png 2x" data-uia="logoIcon-MASTERCARD" />
                                            <Img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS.png" alt="Diners Club" className="logoIcon DINERS default-ltr-cache-kg1rox e18ygst00" srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS@2x.png 2x" data-uia="logoIcon-DINERS" />
                                        </span>
                                    </div>
                                </div>
                                <span className="arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" className="default-ltr-cache-4z3qvp e1svuwfo1" data-name="ChevronRight" aria-labelledby=":rc:" aria-hidden="true">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor">
                                        </path>
                                    </svg>
                                </span>
                            </button>

                        </div>

                        <div className="d-flex justify-content-center">
                            <button onClick={()=>navigate("/step5_upi")} className=" align-items-center paymentTab overrides paymentPicker standardHeight default-ltr-cache-22elhg e1ff4m3w2" id="creditOrDebitCardDisplayStringId" data-uia="payment-choice+creditOrDebitOption" type="button">
                                <div className="mopNameAndLogos">
                                    <div className="paymentTab--text card-type-text">
                                        <span className="selectionLabel p-5">UPI AutoPay</span>
                                    </div>
                                    <div className="logosContainer">
                                        <span className="logos logos-inline" data-uia="cardLogos-comp" aria-label="We accept BHIM, Paytm, PhonePe, Amazon Pay and Google Pay.">
                                            <Img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM.png" alt="BHIM" className="logoIcon BHIM default-ltr-cache-kg1rox e18ygst00" srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM@2x.png 2x" data-uia="logoIcon-BHIM"/>
                                                <Img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PAYTM.png" alt="Paytm" className="logoIcon PAYTM default-ltr-cache-kg1rox e18ygst00" srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PAYTM@2x.png 2x" data-uia="logoIcon-PAYTM" />
                                                <Img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PHONEPE.png" alt="PhonePe" className="logoIcon PHONEPE default-ltr-cache-kg1rox e18ygst00" srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PHONEPE@2x.png 2x" data-uia="logoIcon-PHONEPE" />
                                                <Img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMAZONPAY.png" alt="Amazon Pay" className="logoIcon AMAZONPAY default-ltr-cache-kg1rox e18ygst00" srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMAZONPAY@2x.png 2x" data-uia="logoIcon-AMAZONPAY" />
                                                <Img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/GPAY.png" alt="Google Pay" className="logoIcon GPAY default-ltr-cache-kg1rox e18ygst00" srcSet="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/GPAY@2x.png 2x" data-uia="logoIcon-GPAY" />
                                        </span>
                                    </div>
                                </div>
                                <span className="arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" className="default-ltr-cache-4z3qvp e1svuwfo1" data-name="ChevronRight" aria-labelledby=":rc:" aria-hidden="true">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor">
                                        </path>
                                    </svg>
                                </span>
                            </button>

                        </div>


                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
}

export default Step4;
