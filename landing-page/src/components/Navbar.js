import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { GiGecko } from "react-icons/gi";
//import { Nav, NavItem, NavLink, Jumbotron, Button } from "reactstrap";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <h1>
        {" "}
        <GiGecko size="4rem" />
        MANGO <br />
        DEV
      </h1>
      <div className="links">
        <Link to="/Home">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
