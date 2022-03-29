import { Route, Routes } from "react-router-dom";
import React from "react";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Works from "./components/Works";
import Home from "./components/Home";


function App() {
  return (
    <div>
     
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skill" element={<Skill />} />
        <Route exact path="/works" element={<Works />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
     
    </div>
  );
}

export default App;
