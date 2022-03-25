import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, NavItem, NavLink } from 'reactstrap';
import "../styles/navbar.css";



const Navbar = () => {
  return (
    <div >
        <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
    </div>
  );
};

export default Navbar;
