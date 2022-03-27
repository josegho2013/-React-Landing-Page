import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { VscCode, VscFileCode } from "react-icons/vsc";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <VscFileCode size="4rem" color="white" />
      <h1> MANGO DEV</h1>
      <div className="links">
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About Me</button>
        </Link>

        <Link to="/skill">
          <button>Skill</button>
        </Link>

        <Link to="/works">
          <button>Works</button>
        </Link>

        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
      <VscCode size="4rem" color="white" />;
    </div>
  );
};

export default Navbar;
