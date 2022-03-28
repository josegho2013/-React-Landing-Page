import React, { useState } from "react";
import { Button, Collapse, Alert } from "reactstrap";
import "../styles/home.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="home-container">
      <div className="left-image">
        <img
          className="imagen"
          src="https://static.wixstatic.com/media/669128_ec1c7a78e9694aec8a07c2e48b292ae1~mv2.gif"
        />
      </div>
      <div className="right-image">
        <Button
          color="primary"
          onClick={toggle}
          style={{
            marginBottom: "1rem",
          }}
        >
          Mas sobre mi
        </Button>
        <Collapse horizontal isOpen={isOpen}>
          <Alert
            style={{
              width: "500px",
            }}
          >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </Alert>
        </Collapse>
      </div>
    </div>
  );
};

export default Home;
