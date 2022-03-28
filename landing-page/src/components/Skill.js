import React from "react";
import { Button } from "reactstrap";
import "../styles/skill.css";

const Skill = () => {
  return (
    <div className="container-skill">
      <div className="left-skill">
        <Button color="warning">FRONT END</Button>
        <div className="img-logos">
          <div className="img01"></div>
          <div className="img02"></div>
          <div className="img03"></div>
          <div className="img04"></div>
          <div className="img05"></div>
        </div>
      </div>
      <div className="right-skill">
        <Button color="warning" center-block>
          BACKEND
        </Button>
      </div>
    </div>
  );
};

export default Skill;
