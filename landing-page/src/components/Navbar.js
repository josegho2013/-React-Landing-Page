import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import { VscCode, VscFileCode } from "react-icons/vsc";

//import { Nav, NavItem, NavLink, Jumbotron, Button } from "reactstrap";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <VscFileCode size="4rem" color="white" />
      <h1> MANGO DEV</h1>
      <div className="links">
        <button>Home</button>
        <button>About Me</button>
        <button>Skill</button>
        <button>Works</button>
        <button>Contact</button>

      </div>
      <VscCode size="4rem" color="white" />;
    </div>
  );
};

export default Navbar;
