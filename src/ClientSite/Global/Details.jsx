import React, { useState } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../../Componants/hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import Header from "./Header";
import Footer from "./Footer";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";
import useFetch2 from "../../Componants/hooks/useFetch2";

const Details = () => {
  const { mediaType, id } = useParams();
  // const { data: credits } = useFetch(
  //   `/${mediaType}/${id}`
  // );


  const { data1, loading } = useFetch2(`/${mediaType}/${id}/videos`);
  const {data1: credits, loading: creditsLoading } = useFetch2(
    `/${mediaType}/${id}/credits`
  );
console.log(credits?.cast);
  return (
    <div>
      <Header />
      <DetailsBanner crew={credits?.crew} video={data1?.results?.[0]} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data1} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
      <Footer />
    </div>
  );
};

export default Details;
