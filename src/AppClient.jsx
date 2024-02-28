import React from "react";
import Header from "./ClientSite/Global/Header";
import Footer from "./ClientSite/Global/Footer";
import Home from "./ClientSite/CompoHome/Home";
import Trending from "./ClientSite/CompoHome/Trending";
import Popular from "./ClientSite/CompoHome/Popular";
import TopRated from "./ClientSite/CompoHome/TopRated";
import Coursol from "./ClientSite/CompoHome/Coursol";

const AppClient = () => {
  return (
    <>
      <div className="client_conteint">
        <Header />
        <Coursol />
        <Trending />
        <Popular />
        <TopRated />
        <Footer />
      </div>
    </>
  );
};

export default AppClient;
