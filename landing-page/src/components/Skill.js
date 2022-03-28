import React from "react";
import { Button } from "reactstrap";
import "../styles/skill.css"

const Skill = () => {
  return (
    <div className="container-skill">
      <div className="left-skill">
        <Button>FRONT END</Button>
      </div>
      <div className="right-skill">
        <Button>BACKEND</Button>
      </div>
    </div>
  );
};

export default Skill;
