import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { MdDocumentScanner } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { BiSolidContact } from "react-icons/bi";
import { Link } from "react-router-dom";
const LeftBar = () => {
  const [active, setActive] = useState("");
  const handleClick = (link) => {
    setActive(link);
  };

  return (
    <div className="bg-white rightPanel h-[80%] w-[9%] sticky top-[70px] rounded-lg flex p-3 mt-2 justify-center flex-col items-center gap-6">
      <Link
        to="/"
        className={`w-[83%] h-[68px]  bg-${
          active === "/" ? "blue-500" : "gray-200"
        } rounded-md cursor-pointer flex flex-col justify-center items-center hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}
        onClick={() => {
          handleClick("/");
        }}
      >
        <BsPerson className="text-[25px]" />
        <p className="text-[12px]">About</p>
      </Link>
      <Link
        to="/resume"
        className={`w-[83%] h-[68px]  bg-${
          active === "/resume" ? "blue-500" : "gray-200"
        } rounded-md cursor-pointer flex flex-col justify-center items-center hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}
        onClick={() => {
          handleClick("/resume");
        }}
      >
        <MdDocumentScanner className="text-[25px]" />
        <p className="text-[12px]">Resume</p>
      </Link>
      <Link
        to="/project"
        className={`w-[83%] h-[68px]  bg-${
          active === "/project" ? "blue-500" : "gray-200"
        } rounded-md cursor-pointer flex flex-col justify-center items-center hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}
        onClick={() => {
          handleClick("/project");
        }}
      >
        <GrProjects className="text-[20px]" />
        <p className="text-[12px]">My Work</p>
      </Link>
      <Link
        to="contact"
        className={`w-[83%] h-[68px]  bg-${
          active === "/contact" ? "blue-500" : "gray-200"
        } rounded-md cursor-pointer flex flex-col justify-center items-center hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}
        onClick={() => {
          handleClick("/contact");
        }}
      >
        <BiSolidContact className="text-[25px]" />
        <p className="text-[12px]">Contact</p>
      </Link>
    </div>
  );
};

export default LeftBar;
