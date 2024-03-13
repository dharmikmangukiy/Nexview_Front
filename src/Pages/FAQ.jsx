import React from 'react';
import ContentWrapper from '../ClientSite/contentWrapper/ContentWrapper';
import Footer from '../ClientSite/Global/Footer';
import Header from '../ClientSite/Global/Header';
import video_animattion from "../../public/Video/Netflix Logo 2023.mp4"
import "./sttyyle.css"
import { NavLink } from 'react-router-dom';
const FAQ = () => {
    return (
        <>
            <Header />

            <div className="heroBanner">

                <div className="backdrop-img">
                    <video width="100%" height=""  autoPlay loop>
                        <source src={video_animattion} type="video/mp4" quality="high" />
                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className="opacity-layer"></div>
                <ContentWrapper>
                    <div className="heroBannerContent">
                        <span className="h1 "><b>How can we help ?</b></span>
                        <span className="h2">
                           <input type="text" className='ttextfielsd' placeholder='Type a question topic or issue'/>
                        </span>
                        <span className="h5"><br />
                           <p   ><b>Recommended for you</b> : How to sign up for NEXVIEW Plans and <br /> Pricing Can't sign  in to NEXVIEW</p  >
                        </span>
                    </div>
                </ContentWrapper>
            </div>
            <Footer />
        </>
    );
};

export default FAQ;