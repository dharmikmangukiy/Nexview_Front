import React from "react";
import Header from "./ClientSite/Global/Header";
import Footer from "./ClientSite/Global/Footer";
import Home from "./ClientSite/CompoHome/Home";
import Trending from "./ClientSite/CompoHome/Trending";
import Popular from "./ClientSite/CompoHome/Popular";
import TopRated from "./ClientSite/CompoHome/TopRated";
import Coursol from "./ClientSite/CompoHome/Coursol";
import SmallSection from "./ClientSite/Global/Trending today/SmallSection";

const AppClient = () => {
  return (
    <>
      <div className="client_conteint">
        <Header />
        <Coursol />
        <SmallSection/>
        <Trending />
        <Popular />
        <TopRated />
        <Footer />
      </div>
    </>
  );
};

export default AppClient;
