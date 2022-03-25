import React from "react";
import "../styles/footer.css";
import { VscCode, VscFileCode } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="footer_container">
      <VscFileCode size="4rem" color="white" />
      <h1>MANGO DEV</h1>
      <VscCode size="4rem" color="white" />;
    </div>
  );
};

export default Footer;
