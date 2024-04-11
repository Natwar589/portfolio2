import React from "react";
import { Link } from "react-router-dom";
const Resume = () => {
  return (
    <div className="h-[100vh] w-[100%]">
      <div className="m-9">
        <div className="flex items-center gap-3  mb-3">
          <h1 className="text-[25px] font-sans font-bold">Resume</h1>
          <div className="w-[30%] h-[1px] bg-blue-500 rounded-lg opacity-40"></div>
        </div>
        <div className="flex justify-evenly gap-3">
          <div className="">
            <div className="flex gap-2 justify-center ">
              <img
                className="w-[30px] h-[30px]"
                src="/assets/education.png"
              />
              <p className="">Education</p>
            </div>
            <div className="w-[270px] mt-3 h-[100px] px-4 pt-3 rounded-md bg-blue-100">
              <p className="font-serif opacity-85 font-bold">Graduation</p>
              <p className="font-sas opacity-50 text-[14px]">
                Bachlor of Technology - [2021-25]
              </p>
              <p className="font-sans opacity-40 text-[8px]">
                Indore Institute of Science And Technology
              </p>
            </div>
            <div className="w-[270px] px-4 pt-3 h-[100px] mt-4 rounded-md bg-pink-100">
              <p className="font-serif opacity-85 font-bold">
                Higher Education
              </p>
              <p className="font-sans opacity-50 text-[14px]">
                Gurukul Academy [2018-2020]
              </p>
              <p className="font-sans opacity-35 text-[8px]">
                Class-10 [90%] &nbsp; class-12 [81%]
              </p>
            </div>
          </div>
          <div>
            <div className="">
              <div className="flex gap-2 justify-center ">
                <img
                  className="w-[30px] h-[30px]"
                  src="/assets/education.png"
                />
                <p className="">Experiences</p>
              </div>

              <div className="w-[270px] h-[100px] mt-3 px-3 pt-2 rounded-md bg-pink-100">
                <p className="font-serif font-bold">
                  Codechef And GDSC chapter Member
                </p>
                <p className="font-sans text-sm opacity-50">
                  Work as Competitive Programming team member
                </p>
              </div>
              <div className="w-[270px] mt-4 px-3 pt-2 h-[100px] rounded-md bg-blue-100">
                <p className="font-serif font-bold">
                  Participated in Hackathon
                </p>
                <p className="font-sans text-sm opacity-50">
                  Participated in internal and smart India Hackathon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[auto] p-9 flex flex-col items-center justify-center w-[100%] bg-gray-100">
        <p className="font-serif font-bold text-[20px]">
          Solved DSA Problem On diffrent platform
        </p>
        <div className="flex gap-8 p-3">
          <Link
            to="https://www.naukri.com/code360/profile/f0a2fd8b-8bd0-4c0f-9003-480b87aa26c5"
            target=" "
          >
            <img
              className="w-[80px] h-[80px] object-fill shadow-lg p-1 rounded-full   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:shadow-cyan-500/50 bg-white"
              src="/assets/studio.webp"
            />
          </Link>
          <Link to="https://leetcode.com/nsr1078/" target=" ">
            <img
              className="w-[80px] h-[80px] object-fill shadow-lg p-1 rounded-full   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:shadow-cyan-500/50 bg-white"
              src="/assets/leetcode.png"
            />
          </Link>
          <Link to="https://www.codechef.com/users/nsr39" target=" ">
            <img
              className="w-[80px] h-[80px] object-fill shadow-lg p-1 rounded-full   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:shadow-cyan-500/50 bg-white"
              src="/assets/codechef.png"
            />
          </Link>
          <Link
            to="https://auth.geeksforgeeks.org/user/natwarrathorcs2021"
            target=" "
          >
            <img
              className="w-[80px] h-[80px] object-fill  shadow-lg p-1 rounded-full   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:shadow-cyan-500/50 bg-white"
              src="/assets/gfg.png"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
