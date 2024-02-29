import React from 'react';
import ContentWrapper from '../ClientSite/contentWrapper/ContentWrapper';
import Footer from '../ClientSite/Global/Footer';
import Header from '../ClientSite/Global/Header';
import video_animattion from "../../public/Video/Dark Season 3 _ Official Trailer _ Netflix.mp4"
import "./sttyyle.css"
import { NavLink } from 'react-router-dom';
import AboutExtra from './AboutExtra';
const About = () => {
    return (
        <>
            <Header />

            <div className="heroBanner">

                <div className="backdrop-img">
                    <video width="100%" height="" controls autoPlay loop muted>
                        <source src={video_animattion} type="video/mp4" quality="high" />
                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className="opacity-layer"></div>
                <ContentWrapper>
                    <div className="heroBannerContent">
                        <span className="title">Watch Now</span>
                        <span className="h2">
                            Stories move us.
                            They make us feel more emotion, see new perspectives,
                            and bring us closer to each other.
                        </span>
                        <NavLink to="/home">
                            <button className="Next_button">NEXVIEW.COM </button>
                        </NavLink>
                    </div>
                </ContentWrapper>
            </div>
            <AboutExtra/>
            <Footer />
        </>
    );
};

export default About;