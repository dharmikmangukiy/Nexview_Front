import React from 'react';
import { NavLink } from 'react-router-dom';
import AboutExtraTest from './AboutExtraTest';
const About = () => {
    return (
        <>
            <div className="heroBanner">

                <div className="backdrop-img">
                    <video width="100%" height="" controls autoPlay loop muted>
                        <source src={'test.img'} type="video/mp4" quality="high" />
                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className="opacity-layer"></div>
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
            </div>
            <AboutExtraTest/>
        </>
    );
};

export default About;