import Profile from "./components/Profile.jsx";
import Hero from "../src/components/Hero.jsx";
import LeftBar from "./components/LeftBar.jsx";
import React from "react";
import "./App.css";
function App() {
  return (
    <div className="main h-[auto] w-[100vw] pt-[70px] ">
      <div className="h-[100%] w-[100%] flex  justify-center gap-5 ">
        <Profile />
        <Hero />
        <LeftBar />
      </div>
    </div>
  );
}

export default App;
