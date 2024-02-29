import React from 'react'
import "./extra.css"
function AboutExtra() {
  return (
    <>
  <div className="main">
    <div className="area">
      <h1>
        Unlimited movies, TV <br />
        shows, and more.
      </h1>
      {/* <h3>Watch anywhere. Cancel anytime.</h3> */}
      <div className="search">
        <input type="text" className="box" placeholder="Email" />
        <span className="try">
          Try 30 days free <i className="fas fa-chevron-right" />
        </span>
      </div>
      <h4>Ready to watch? Enter your email to create or access your account</h4>
    </div>
  </div>
  <div className="container1">
    <div className="text">
      <h1>Enjoy on your TV.</h1>
      <p>
        Watchx on Smart TVs, Playstation, Xbox, <br />
        Chromecast, Apple TV, Blu-ray players, and
        <br />
        more.
      </p>
    </div>
    <div className="image">
      <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
    </div>
  </div>
  <div className="container1">
    <div className="image">
      <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png" />
    </div>
    <div className="text">
      <h1>Download your shows to watch on the go.</h1>
      <p>Save your data and watch all your favorites offline.</p>
    </div>
  </div>
  <div className="container1">
    <div className="text">
      <h1>Watch everywhere.</h1>
      <p>
        Stream unlimited movies and TV shows on <br />
        your phone, tablet, laptop, and TV without paying more.
      </p>
    </div>
    <div className="image">
      <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
    </div>
  </div>
  <div className="question">
    <h1>Frequently Asked Questions</h1>
    <div className="quest">
      <div className="textbox">What is Netflix?</div>
      <i className="las la-plus" />
    </div>
    <div className="quest">
      <div className="textbox">How much does Netflix cost?</div>
      <i className="las la-plus" />
    </div>
    <div className="quest">
      <div className="textbox">Where can I watch?</div>
      <i className="las la-plus" />
    </div>{" "}
    <div className="quest">
      <div className="textbox">How do I cancel?</div>
      <i className="las la-plus" />
    </div>
    <div className="quest">
      <div className="textbox">What can I watch on Netflix??</div>
      <i className="las la-plus" />
    </div>
    <div className="quest">
      <div className="textbox">What is Netflix?</div>
      <i className="las la-plus" />
    </div>
    <div className="search1">
      <input type="text" className="box1" placeholder="Email" />
      <span className="try1">
        Try 30 days free <i className="fas fa-chevron-right" />
      </span>
    </div>
    <h4>Ready to watch? Enter your email to create or access your account</h4>
  </div>
</>

  )
}

export default AboutExtra