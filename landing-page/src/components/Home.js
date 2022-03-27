import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Landing from "./Landing";
// import Clients from "./Clients";

import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Landing />

      <Footer />
    </div>
  );
};

export default Home;
