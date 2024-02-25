import React from 'react';
import Footer from '../ClientSite/Global/Footer';
import Header from '../ClientSite/Global/Header';
import "./sttyyle.css"
const Privacy = () => {
    return (
        <>
            <Header />


            <div className='container' style={{ paddingTop: "100px" }}>
                <div className='otherpage mb-5'>
                    <header>
                        <h1 className='fontts'>Help Center</h1>
                    </header>
                    <main>
                        <section>
                            <h3 className='fontts'>Wait time for live help is longer than usual</h3>
                            <p>Check back later, or search our Help Center for answers.</p>
                        </section>
                        {/* ... other sections ... */}
                    </main>
                </div>
                <h1 className='fontts'>Privacy Statement</h1>
                <span>NEXVIEW provides a personalized subscription service that allows our members to access entertainment content ("NEXVIEWcontent") over the Internet on certain Internet-connected TVs, computers and other devices ("NEXVIEWready devices").</span><br /><br />
                <span>These Terms of Use govern your use of our service. As used in these Terms of Use, "NEXVIEWservice", "our service" or "the service" means the personalized service provided by NEXVIEWfor discovering and accessing NEXVIEWcontent, including all features and functionalities, recommendations and reviews, our websites, and user interfaces, as well as all content and software associated with our service. References to 'you' in these Terms of Use indicate the member who created the NEXVIEWaccount and whose payment method is charged.</span>
                <br /><br /><div>
                    <h4 className='fontts'>Contacting Us
                    </h4>
                    <span>If you have general questions about your account or how to contact customer service for assistance, please visit our online help center at help.netflix.com. For questions specifically about this Privacy Statement, or our use of your personal information, cookies or similar technologies, please contact our Data Protection Officer/Privacy Office by email at privacy@netflix.com.</span>
                </div>
                <div>
                    <h4 className='fontts'>Use of Information
                    </h4>
                    <span>NEXVIEW provides a personalized subscription service that allows our members to access entertainment content ("NEXVIEWcontent") over the Internet on certain Internet-connected TVs, computers and other devices ("NEXVIEWready devices").</span><br /><br />

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Privacy;