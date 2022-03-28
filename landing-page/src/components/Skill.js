import React from "react";
import { Button } from "reactstrap";
import "../styles/skill.css";

const Skill = () => {
  return (
    <div className="container-skill">
      <div className="left-skill">
        <Button color="warning">FRONT END</Button>
        <div className="img-logos01">
          <div className="img01"></div>
          <div className="img02"></div>
          <div className="img03"></div>
        <div className="img04"></div>
          <div className="img05"></div>
          <div className="img06"></div>
        </div>
      </div>
      <div className="right-skill">
        <Button color="warning">BACKEND</Button>
        <div className="img-logos02">
          <div className="img07"></div>
          <div className="img08"></div>
          <div className="img09"></div>
          <div className="img10"></div>
          <div className="img11"></div>
          <div className="img12"></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
