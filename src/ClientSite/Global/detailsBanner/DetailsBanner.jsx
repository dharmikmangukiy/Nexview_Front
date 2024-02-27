import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PosterFallback from "../../../../public/Images/no-poster.png"
import ContentWrapper from "../../contentWrapper/ContentWrapper";
import useFetch from "../../../Componants/hooks/useFetch";
import Genres from "../Genres";
import CircleRating from "../CircleRating.jsx";
import Img from "../../../Componants/lazyLoadImage/Img";
import { PlayIcon } from "./Playbtn";
import VideoPopup from "../../videoPopup/VideoPopup";
import useFetch2 from "../../../Componants/hooks/useFetch2";
import StarsIcon from '@mui/icons-material/Stars';

const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { data1 } = useFetch2(`/${mediaType}/${id}`);

  console.log(data1);

  const { url } = useSelector((state) => state.home);

  const _genres = data?.genres?.map((g) => g.id);

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner">
      {data1 ? (
        <>
          {!data ?
            <React.Fragment>
              <div className="backdrop-img">
                <Img src={url.backdrop + data1.backdrop_path} />
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    {data1.poster_path ? (
                      <Img
                        className="posterImg"
                        src={
                          url.backdrop +
                          data1.poster_path
                        }
                      />
                    ) : (
                      <Img
                        className="posterImg"
                        src={PosterFallback}
                      />
                    )}
                  </div>
                  <div className="right">
                    <div className="title">
                      {`${data1.name || data1.original_title
                        } (${dayjs(
                          data1?.release_date
                        ).format("YYYY")})`}
                    </div>
                    <div className="subtitle">
                      {data1.tagline}
                    </div>

                    <Genres data={_genres} />

                    <div className="roww">
                      <CircleRating
                        rating={data1.vote_average.toFixed(
                          1
                        )}
                      />
                      <div
                        className="playbtn"
                        onClick={() => {
                          setShow(true);
                          setVideoId(video.key);
                        }}
                      >
                        <PlayIcon />
                        <span className="text">
                          Watch Trailer
                        </span>
                      </div>
                    </div>

                    <div className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">{data1.overview}</div>
                    </div>

                    <div className="info">
                      {data1.status && (
                        <div className="infoItem">
                          <span className="text bold">
                            Status:{" "}
                          </span>
                          <span className="text">
                            {data1.status}
                          </span>
                        </div>
                      )}
                      {data1.release_date && (
                        <div className="infoItem">
                          <span className="text bold">
                            Release Date:{" "}
                          </span>
                          <span className="text">
                            {dayjs(
                              data1.release_date
                            ).format("MMM D, YYYY")}
                          </span>
                        </div>
                      )}
                      {data1.runtime && (
                        <div className="infoItem">
                          <span className="text bold">
                            Runtime:{" "}
                          </span>
                          <span className="text">
                            {toHoursAndMinutes(
                              data1.runtime
                            )}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="info">
                      {director?.length > 0 && (
                        <div className="info">
                          <span className="text bold">
                            Director:{" "}
                          </span>
                          <span className="text">
                            {director?.map((d, i) => (
                              <span key={i}>
                                {d.name}
                                {director.length -
                                  1 !==
                                  i && ", "}
                              </span>
                            ))}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="info">
                      {writer?.length > 0 && (
                        <div className="info">
                          <span className="text bold">
                            Writer:{" "}
                          </span>
                          <span className="text">
                            {writer?.map((d, i) => (
                              <span key={i}>
                                {d.name}
                                {writer.length -
                                  1 !==
                                  i && ", "}
                              </span>
                            ))}
                          </span>
                        </div>
                      )}
                    </div>

                    {data1?.created_by?.length > 0 && (
                      <div className="info">
                        <span className="text bold">
                          Creator:{" "}
                        </span>
                        <span className="text">
                          {data1?.created_by?.map(
                            (d, i) => (
                              <span key={i}>
                                {d.name}
                                {data1
                                  ?.created_by
                                  .length -
                                  1 !==
                                  i && ", "}
                              </span>
                            )
                          )}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <VideoPopup
                  show={show}
                  setShow={setShow}
                  videoId={videoId}
                  setVideoId={setVideoId}
                />
              </ContentWrapper>
            </React.Fragment>
            : (
              <React.Fragment>
                <div className="backdrop-img">
                  <Img src={url.backdrop + data.backdrop_path} />
                </div>
                <div className="opacity-layer"></div>
                <ContentWrapper>
                  <div className="content">
                    <div className="left">
                      {data.poster_path ? (
                        <Img
                          className="posterImg"
                          src={
                            url.backdrop +
                            data.poster_path
                          }
                        />
                      ) : (
                        <Img
                          className="posterImg"
                          src={PosterFallback}
                        />
                      )}
                    </div>
                    <div className="right">
                      <div className="title">
                        {`${data.name || data.original_title
                          } (${dayjs(
                            data?.release_date
                          ).format("YYYY")})`}
                        <StarsIcon style={{
                          color: "#ffc107",
                          marginLeft: '8px',
                          fontSize: '40px'
                        }} />

                      </div>

                      <div className="subtitle">
                        {data.tagline}
                      </div>

                      <Genres data={_genres} />

                      <div className="roww">
                        <CircleRating
                          rating={data.vote_average.toFixed(
                            1
                          )}
                        />
                        <div
                          className="playbtn"
                          onClick={() => {
                            setShow(true);
                            setVideoId(video.key);
                          }}
                        >
                          <PlayIcon />
                          <span className="text">
                            Watch Trailer
                          </span>
                        </div>
                      </div>

                      <div className="overview">
                        <div className="heading">Overview</div>
                        <div className="description">{data.overview}</div>
                        <div>
                          <button className="btn_custom">Add to <FavoriteBorderIcon /></button>
                          <button className="btn_custom_r1">Remove to <FavoriteBorderIcon /></button>
                        </div>
                      </div>

                      <div className="info">
                        {data.status && (
                          <div className="infoItem">
                            <span className="text bold">
                              Status:{" "}
                            </span>
                            <span className="text">
                              {data.status}
                            </span>
                          </div>
                        )}
                        {data.release_date && (
                          <div className="infoItem">
                            <span className="text bold">
                              Release Date:{" "}
                            </span>
                            <span className="text">
                              {dayjs(
                                data.release_date
                              ).format("MMM D, YYYY")}
                            </span>
                          </div>
                        )}
                        {data.runtime && (
                          <div className="infoItem">
                            <span className="text bold">
                              Runtime:{" "}
                            </span>
                            <span className="text">
                              {toHoursAndMinutes(
                                data.runtime
                              )}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="info">
                        {director?.length > 0 && (
                          <div className="info">
                            <span className="text bold">
                              Director:{" "}
                            </span>
                            <span className="text">
                              {director?.map((d, i) => (
                                <span key={i}>
                                  {d.name}
                                  {director.length -
                                    1 !==
                                    i && ", "}
                                </span>
                              ))}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="info">
                        {writer?.length > 0 && (
                          <div className="info">
                            <span className="text bold">
                              Writer:{" "}
                            </span>
                            <span className="text">
                              {writer?.map((d, i) => (
                                <span key={i}>
                                  {d.name}
                                  {writer.length -
                                    1 !==
                                    i && ", "}
                                </span>
                              ))}
                            </span>
                          </div>
                        )}
                      </div>

                      {data?.created_by?.length > 0 && (
                        <div className="info">
                          <span className="text bold">
                            Creator:{" "}
                          </span>
                          <span className="text">
                            {data?.created_by?.map(
                              (d, i) => (
                                <span key={i}>
                                  {d.name}
                                  {data
                                    ?.created_by
                                    .length -
                                    1 !==
                                    i && ", "}
                                </span>
                              )
                            )}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <VideoPopup
                    show={show}
                    setShow={setShow}
                    videoId={videoId}
                    setVideoId={setVideoId}
                  />
                </ContentWrapper>
              </React.Fragment>
            )


          }
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
