import React from "react";

import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-image">
        <img
          className="imagen"
          src="https://static.wixstatic.com/media/669128_ec1c7a78e9694aec8a07c2e48b292ae1~mv2.gif"
        />
      </div>
      <div className="right-image">
        <h1>holaaaa aqui va mi foto</h1>
      </div>
    </div>
  );
};

export default Home;
