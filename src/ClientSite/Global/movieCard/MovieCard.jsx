import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Img from "../../../Componants/lazyLoadImage/Img";
import CircleRating from "../../../ClientSite/Global/CircleRating";
import Genres from "../Genres";
import PosterFallback from "../../../../public/Images/no-poster.png";
const MovieCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;
  return (
    <div
      className="movieCard"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className="posterBlock">
        <Img className="posterImg" src={posterUrl} />
        {!fromSearch && (
          <React.Fragment>
            <CircleRating rating={data.vote_average.toFixed(1)} />
            <Genres data={data.genre_ids} />
            {data.isPrime == true && (
              <img
                src="https://v3img.voot.com/v3Storage/menu/jv/premium_icon.svg"
                alt=""
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "15px",
                }}
              />
            )}
          </React.Fragment>
        )}
      </div>
      <div className="textBlock">
        <span className="title">
          {data.original_title || data.original_name}
        </span>
        <span className="date">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
