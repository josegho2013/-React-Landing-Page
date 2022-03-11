import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SubTitle from "./SubTitle";
import Title from "./Title";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Title />


      <SubTitle />

     

      <Footer />
    </div>
  );
};

export default Home;
