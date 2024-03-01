import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../../public/style.css";
import useFetch from "../../Componants/hooks/useFetch";
import Img from "../../Componants/lazyLoadImage/Img";

function Coursol() {
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/discover/movie");
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const carouselRef = useRef(null);
  const [first, setfirst] = useState();
  useEffect(() => {
    setfirst(
      data ? [...data].sort(() => Math.random() - 0.5).slice(0, 10) : []
    );
  }, [loading]);

  useEffect(() => {
    const runNextAuto = setTimeout(() => {
      showSlider("next");
    }, 5000);

    return () => clearTimeout(runNextAuto);
  }, [currentIndex]);

  const showSlider = (type) => {
    const SliderItemsDom = sliderRef.current.querySelectorAll(".item");
    const thumbnailItemsDom = thumbnailRef.current.querySelectorAll(".item");

    if (type === "next") {
      sliderRef.current.appendChild(SliderItemsDom[0]);
      thumbnailRef.current.appendChild(thumbnailItemsDom[0]);
      carouselRef.current.classList.add("next");
    } else {
      sliderRef.current.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailRef.current.prepend(
        thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
      carouselRef.current.classList.add("prev");
    }

    setTimeout(() => {
      carouselRef.current.classList.remove("next");
      carouselRef.current.classList.remove("prev");
      clearTimeout(runNextAuto);
    }, 5000);

    // clearTimeout(runNextAuto);
    const runNextAutoTimeout = setTimeout(() => {
      showSlider("next");
    }, 7000);
    // setCurrentIndex((prevIndex) =>
    //   type === "next"
    //     ? (prevIndex + 1) % first.length
    //     : (prevIndex - 1 + first.length) % first.length
    // );
  };

  return (
    <>
      <div className="carousell" ref={carouselRef}>
        <div className="list" ref={sliderRef}>
          {first?.map((item, index) => (
            <div
              className={`item ${index === currentIndex ? "active" : ""}`}
              key={item.id}
            >
              <img
                src={`${url.backdrop}${item.backdrop_path}`}
                alt={item.original_title}
              />
              <div className="content">
                <div className="author">NEXVIEW</div>
                <div className="title">{item.original_title}</div>
                <div className="topic">{item.release_date}</div>
                <div className="des">{item.overview}</div>
                <div className="buttons">
                  <button onClick={() => navigate(`/movie/${item.id}`)}>
                    SEE MORE
                  </button>
                  <button>SUBSCRIBE</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail" ref={thumbnailRef}>
          {first?.map((item, index) => (
            <div
              className={`item ${index === currentIndex ? "active" : ""}`}
              key={item.id}
            >
              <Img
                src={`${url.backdrop}${item.poster_path}`}
                alt={item.original_title}
              />
              <div className="content">
                <div className="title">{item.original_title}</div>
                <div className="description">Description</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" onClick={() => showSlider("prev")}>
            🔚
          </button>
          <button id="next" onClick={() => showSlider("next")}>
            🔜
          </button>
        </div>

        <div className="time"></div>
      </div>
    </>
  );
}

export default Coursol;
