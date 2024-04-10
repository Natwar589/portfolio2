import React, { useState } from "react";
import About from "./hero/About";
import Resume from "./hero/Resume";
import Project from "./hero/Project";
import Contact from "./hero/Contact";
import { Routes, Route } from "react-router-dom";
const Hero = () => {
  return (
    <div className=" bg-white w-[50%] h-[auto] rounded-lg">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
};

export default Hero;
