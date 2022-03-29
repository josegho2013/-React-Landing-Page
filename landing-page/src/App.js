import { Route, Routes } from "react-router-dom";
import React from "react";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Works from "./components/Works";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
       <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route  path="/home" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route  path="/works" element={<Works />} />
        <Route  path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
