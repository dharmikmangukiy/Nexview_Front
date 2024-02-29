import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../Componants/hooks/useFetch";
import "./index.css";

const Favorite = () => {
  const slideRef = useRef(null);

  const nextSlide = () => {
    const items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0].cloneNode(true));
    slideRef.current.removeChild(items[0]);
  };

  const prevSlide = () => {
    const items = slideRef.current.querySelectorAll(".item");
    slideRef.current.insertBefore(
      items[items.length - 1].cloneNode(true),
      items[0]
    );
    slideRef.current.removeChild(items[items.length - 1]);
  };

  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/discover/movie");
  const [first, setfirst] = useState();

  useEffect(() => {
    setfirst(
      data ? [...data].sort(() => Math.random() - 0.5).slice(0, 10) : []
    );
  }, [loading]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="back-blue">
      <div className="containerr">
        <div className="slide" ref={slideRef}>
          {first?.map((item) => (
            <div
              className="item"
              style={{ backgroundImage: `url(${url.backdrop}${item.poster_path})` }}
            >
              <div className="contentttt">
                <div className="name">{item.original_title}</div>
                <div className="des">
                {item.overview}
                </div>
                <button onClick={() => navigate(`/movie/${item.id}`)}>See More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="buttonn">
          <button className="prev" onClick={prevSlide}>
          🔚
          </button>
          <button className="next" onClick={nextSlide}>
          🔜
          </button>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
