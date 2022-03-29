import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
       <Navbar />
      <img
        className="imagen-about"
        src="https://blog.depositphotos.com/wp-content/uploads/2019/04/Depositphotos_209179682_m-2015kk.jpg.webp"
      />
       <Footer />
    </div>
  );
};

export default About;
