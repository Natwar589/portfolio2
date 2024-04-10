import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="m-9">
      <div className="flex items-center gap-3  mb-3">
        <h1 className="text-[25px] font-sans font-bold">Projects</h1>
        <div className="w-[30%] h-[1px] bg-blue-500 rounded-lg opacity-40"></div>
      </div>
      <div className="grid grid-cols-2 grid-rows2 gap-4">
        <div className="h-[auto] rounded-md w-[280px] flex justify-center p-3 flex-col items-center bg-blue-100">
          <img
            className="w-[100px] h-[100px]"
            src="../src/assets/contacts.png"
          />
          <h1 className="font-serif mt-3 text-[16px] font-bold opacity-85">
            Contact Store Using FireBase
          </h1>
          <p className="text-sm font-sans opacity-50 text-center">
            A Simple Website that will help to store the contact along with
            email and phone number using FireBase Firestore
          </p>
          <div className="flex gap-4 mt-3 justify-end">
            <Link
              target=" "
              to="https://github.com/Natwar589/firebase-contact"
              className="bg-cyan-500 shadow-lg w-[80%] text-white hover:shadow-cyan-500/50 rounded-md gap-2 p-2  hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
            >
              Github
            </Link>
            <Link
              to="https://main--illustrious-lollipop-3d57b8.netlify.app/"
              target=" "
              className="bg-cyan-500 shadow-lg w-[80%] text-white hover:shadow-cyan-500/50 rounded-md gap-2 p-2  hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            >
              Demo
            </Link>
          </div>
        </div>
        <div className="h-[auto] rounded-md w-[280px] flex justify-center p-3 flex-col items-center bg-pink-100">
          <img className="w-[100px] h-[100px]" src="../src/assets/blog.png" />
          <h1 className="font-serif mt-3 text-[16px] font-bold opacity-85">
            Blog Website Using Appwrite
          </h1>
          <p className="text-sm font-sans opacity-50 text-center">
            A Simple Website that will help to share your thought with the help
            of images using appwrite backend as a service
          </p>
          <div className="flex gap-4 mt-3 justify-end">
            <Link
              to="https://github.com/Natwar589/blog"
              target=" "
              className="bg-cyan-500 shadow-lg w-[80%] text-white hover:shadow-cyan-500/50 rounded-md gap-2 p-2  hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
            >
              Github
            </Link>
            <Link
              to="https://neon-wisp-d59fa1.netlify.app/"
              target=" "
              className="bg-cyan-500 shadow-lg w-[80%] text-white hover:shadow-cyan-500/50 rounded-md gap-2 p-2  hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
            >
              Demo
            </Link>
          </div>
        </div>
        <div className="h-[auto] rounded-md w-[280px] flex justify-center p-3 flex-col items-center bg-pink-100">
          <img
            className="w-[150px] h-[100px]"
            src="../src/assets/hanoi_tower.png"
          />
          <h1 className="font-serif mt-3 text-[16px] font-bold opacity-85">
            Tower of Hanoi
          </h1>
          <p className="text-sm font-sans opacity-50 text-center">
            Simple Tower of hanoi game with the help of react
          </p>
          <div className="flex gap-4 mt-3 justify-end">
            <Link
              to="https://github.com/Natwar589/tower-of-hanoi"
              target=" "
              className="bg-cyan-500 shadow-lg w-[80%] text-white hover:shadow-cyan-500/50 rounded-md gap-2 p-2  hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
            >
              Github
            </Link>
            <Link
              to="https://rad-cuchufli-d4b69d.netlify.app"
              target=" "
              className="bg-cyan-500 shadow-lg w-[80%] text-white hover:shadow-cyan-500/50 rounded-md gap-2 p-2  hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
            >
              Demo
            </Link>
          </div>
        </div>
        <div className="h-[auto] rounded-md w-[280px] flex justify-center p-3 flex-col items-center bg-pink-100">
          <img
            className="w-[150px] h-[100px]"
            src="../src/assets/gallery.webp"
          />
          <h1 className="font-serif mt-3 text-[16px] font-bold opacity-85">
            Photo Gallery
          </h1>
          <p className="text-sm font-sans opacity-50 text-center">
            A Simple Website that will show some the places with prices
          </p>
          <div className="flex gap-4 mt-3 justify-end">
            <Link
              to="https://github.com/Natwar589/Photo-gallery"
              target=" "
              className="bg-cyan-500 shadow-lg w-[80%] text-white hover:shadow-cyan-500/50 rounded-md gap-2 p-2  hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            >
              Github
            </Link>
            <Link
              to="https://astounding-empanada-948c8e.netlify.app"
              target=" "
              className="bg-cyan-500 shadow-lg w-[80%] text-white hover:shadow-cyan-500/50 rounded-md gap-2 p-2  hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
            >
              Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
