import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useFetch from "../../Componants/hooks/useFetch";
import Img from "../../Componants/lazyLoadImage/Img";
import Genres from "../Global/Genres";
import "./style.css";
import video_animattion from "../../../public/Video/Netflix Logo 2023.mp4";

function NewCoursol() {
  const { data, loading } = useFetch("/discover/movie");
  const [first, setfirst] = useState();
  const { url } = useSelector((state) => state.home);
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(false);
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Cleanup function to clear the timer on unmount or rerender
  }, [currentIndex]);

  useEffect(() => {
    setfirst(
      data ? [...data].sort(() => Math.random() - 0.5).slice(0, 20) : []
    );
  }, [loading]);

  const handleScrollLeft = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.scrollLeft -= 140;
    }
  };

  const handleScrollRight = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.scrollLeft += 140;
    }
  };

  return (
    <>
      {!!loading ? (
        <div
          className="text-center p-5 d-flex align-items-center justify-content-center"
          style={{ height: "98vh" }}
        >
          <img src="../../../public/Images/Animation.gif" alt="" />
        </div>
      ) : (
        <div className="bodyyyyy">
          <header className="headerrrrr">
            {showVideo ? (
              <video autoPlay loop muted>
                <source
                  src={video_animattion}
                  type="video/mp4"
                  quality="high"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              first?.map((ele, index) => {
                if (index === currentIndex || (!currentIndex && index === 0)) {
                  return (
                    <div className="backdrop-img">
                      <img src={`${url.backdrop}${ele.backdrop_path}`} style={{width:"100%",position:"absolute"}}/>
                    </div>
                  );
                }
              })
            )}
            <nav>
              <div className="logo_ul"></div>
            </nav>

            {first?.map((ele, index) => {
              if (index == currentIndex || (!currentIndex && index == 0)) {
                return (
                  <div className="content" key={ele.id}>
                    <h1 id="title" className="title">{ele.original_title}</h1>
                    <p style={{fontSize:"15px"}}>{ele.overview}</p>
                    <div className="details">
                      {/* <h6>{ele.tagline}</h6> */}
                      <h5 id="gen">
                        {" "}
                        <Genres data={ele.genre_ids} />
                      </h5>
                      <h4 id="date">{ele.release_date}</h4>
                      <h3 id="rate">
                        <span>IMDB</span>
                        <i className="bi bi-star-fill" /> {ele.vote_average}
                      </h3>
                    </div>
                    <div className="btns">
                      <NavLink to={`/movie/${ele.id}`} id="play">
                        Watch Now<i className="bi bi-play-fill" />
                      </NavLink>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}

            <section>
              <h4>Popular</h4>
              <i className="bi bi-chevron-left" onClick={handleScrollLeft}>
                🔚
              </i>
              <i className="bi bi-chevron-right" onClick={handleScrollRight}>
                🔜
              </i>
              <div className="cards" ref={thumbnailRef}>
                {first?.map((ele, index) => (
                  // to={`/movie/${ele.id}`}
                  <div
                    className={`item ${index === currentIndex ? "active" : ""}`}
                    key={ele.id}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <NavLink className="card" key={index.id}>
                      <Img
                        src={`${url.backdrop}${ele.poster_path}`}
                        alt={ele.original_title}
                        className="poster"
                      />
                      <div className="rest_card">
                        <Img
                          src={`${url.backdrop}${ele.backdrop_path}`}
                          alt=""
                        />
                        <div className="cont">
                          <h4>{ele.original_title}</h4>
                          <div className="sub">
                            <p>
                              {ele.original_language?.toUpperCase()},{" "}
                              {ele.release_date}
                            </p>
                            <h3>
                              <span>IMDB</span>
                              <i className="bi bi-star-fill" />{" "}
                              {ele.vote_average}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                ))}
              </div>
            </section>
          </header>
        </div>
      )}
    </>
  );
}

export default NewCoursol;
