import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      <div>
        <img
          className="imagen"
          src="https://static.wixstatic.com/media/669128_ec1c7a78e9694aec8a07c2e48b292ae1~mv2.gif"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
