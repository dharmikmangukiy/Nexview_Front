import React from 'react';

const FAQ = () => {
    return (
        <>

            <div className="heroBanner">

                <div className="backdrop-img">
                    <video width="100%" height=""  autoPlay loop>
                        <source src={'test.img'} type="video/mp4" quality="high" />
                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className="opacity-layer"></div>
                    <div className="heroBannerContent">
                        <span className="h1 "><b>How can we help ?</b></span>
                        <span className="h2">
                           <input type="text" className='ttextfielsd' placeholder='Type a question topic or issue'/>
                        </span>
                        <span className="h5"><br />
                           <p   ><b>Recommended for you</b> : How to sign up for NEXVIEW Plans and <br /> Pricing Can't sign  in to NEXVIEW</p  >
                        </span>
                    </div>
            </div>
        </>
    );
};

export default FAQ;