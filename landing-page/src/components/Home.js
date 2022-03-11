import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SubTitle from "./SubTitle";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div>
        {" "}
        <SubTitle />
      </div>

      <div>
        <h1>aqui va el homeee</h1>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
