import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="bg-white w-[23%] h-[100%] sticky top-[70px] flex rounded-lg   justify-center ">
      <div className="absolute top-[-65px]">
        <img
          className="rounded-md w-[150px] h-[150px] shadow-xl hover:shadow-cyan-500/50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
          src="/assets/myImage.jpg"
        />
      </div>
      <div className="w-full h-full flex gap-2 flex-col items-center justify-start">
        <div className="mt-[100px] font-bold">Natwar Singh Rathor</div>
        <p className="bg-gray-100 p-2 rounded-md text-sm font-medium">
          Web Developer
        </p>
        <div className="flex gap-5">
          <Link
            className=" hover:bg-blue-600"
            target="blank"
            to="https://www.instagram.com/___nsr__/"
          >
            <AiFillInstagram
              style={{
                backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))",
              }}
              className="text-[25px] text-red-400 p-[2px] rounded-md cursor-pointer"
            />
          </Link>
          <Link
            className=" hover:bg-blue-600"
            to="https://www.linkedin.com/in/natwar-singh-rathor-617190215/"
          >
            <FaLinkedin
              style={{
                backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))",
              }}
              className="text-[25px] text-blue-500 bg-gray-100 p-[2px] rounded-md cursor-pointer"
            />
          </Link>
          <Link className=" hover:bg-blue-600">
            <FaSquareFacebook
              style={{
                backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))",
              }}
              className="text-[25px] text-blue-500 bg-gray-100 p-[2px] rounded-md cursor-pointer"
            />
          </Link>
          <Link
            className=" hover:bg-blue-600"
            target="blank"
            to="https://x.com/natwar_rathor?t=CmuaFZZYtzTwDcPcA1XzDQ&s=09"
          >
            <FaTwitter
              href="https://google.com"
              style={{
                backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))",
              }}
              className="text-[25px] text-blue-600 bg-gray-100 p-[2px] rounded-md cursor-pointer"
              //href="https://google.com"
            />
          </Link>
        </div>
        <div className="w-[80%] h-[45%] bg-gray-100 rounded-md p-5 flex flex-col gap-2">
          <div className="flex gap-2">
            <img
              src="/assets/contact.png"
              className="p-1 bg-white shadow-xl rounded-md"
              width={25}
              height={10}
            />
            <div className="flex flex-col">
              <p className="text-[8px] text-gray-400">Phone</p>
              <p className="text-[10px]">+91 9977020949</p>
            </div>
          </div>
          <div>
            <div className="w-[94%] h-[2px] bg-gray-200"></div>
          </div>

          <div>
            <div className="flex gap-2">
              <img
                src="/assets/mail.png"
                className="p-1 bg-white shadow-xl rounded-md"
                width={25}
                height={10}
              />
              <div className="flex flex-col">
                <p className="text-[8px] text-gray-400">e-Mail</p>
                <p className="text-[10px]">natwarrahtor916@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <div className="w-[94%] h-[2px] bg-gray-200"></div>
          </div>

          <div>
            <div className="flex gap-2">
              <img
                src="/assets/map.png"
                className="p-1 bg-white shadow-xl rounded-md"
                width={25}
                height={10}
              />
              <div className="flex flex-col">
                <p className="text-[8px] text-gray-400">Location</p>
                <p className="text-[10px]">Rau,Indore,Madhya Pradesh India</p>
              </div>
            </div>
          </div>

          <div>
            <div className="w-[94%] h-[2px] bg-gray-200"></div>
          </div>

          <div>
            <div className="flex gap-2">
              <img
                src="/assets/calender.png"
                className="p-1 bg-white shadow-xl rounded-md"
                width={25}
                height={10}
              />
              <div className="flex flex-col">
                <p className="text-[8px] text-gray-400">Date of birth</p>
                <p className="text-[10px]">16 August 2003</p>
              </div>
            </div>
          </div>

          <div>
            <div className="w-[94%] h-[2px] bg-gray-200"></div>
          </div>
        </div>
        <div className="cursor-pointer my-5">
          <div className="bg-cyan-500 shadow-lg hover:shadow-cyan-500/50  hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 rounded-md gap-2 p-2 flex items-center">
            <img
              src="/assets/download.png"
              width={20}
              height={20}
              className="text-white"
            />
            <p className="download font-light text-sm">Download CV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
