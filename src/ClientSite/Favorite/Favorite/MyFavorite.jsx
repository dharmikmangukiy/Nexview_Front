import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import MovieCard from "../Global/movieCard/MovieCard";
import Spinner from "../Global/spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

function MyFavorite() {
  const dispatch = useDispatch();
  const { mediaType } = useParams();

  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState(1);

  const [Favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
   
    axios
      .post(`${Base_URL}/me` {
        token: JSON.parse(sessionStorage.getItem("token")),
      })
      .then((res) => {
        if (res.status == 200) {
        //   console.log(res.data.favorite);
          setFavorites(res.data.favorite);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Exception:", error);
        if (error.response && error.response.status === 402) {
          localStorage.setItem("login", true);
          navigate("/");
          dispatch(loginChnage(true));
          sessionStorage.clear();
          window.location.reload();
        }
      });
  }, []);

  return (
    <div className="explorePage">
      <ContentWrapper>
        <div className="pageHeader">
          <div className="pageTitle">Favorites</div>
        </div>
        {loading && <Spinner initial={true} />}
        {!loading && (
          <>
            {Favorites?.length > 0 ? (
              <InfiniteScroll
                className="content"
                dataLength={Favorites?.length || []}
                hasMore={pageNum <= Favorites?.total_pages}
                loader={<Spinner />}
              >
                {Favorites?.map((item, index) => {
                  if (item.media_type === "person") return null;
                  return (
                    <MovieCard key={index} data={item} mediaType={item.mediaType} />
                  );
                })}
              </InfiniteScroll>
            ) : (
              <span className="resultNotFound">Sorry, Results not found!</span>
            )}
          </>
        )}
      </ContentWrapper>
    </div>
  );
}

export default MyFavorite;
