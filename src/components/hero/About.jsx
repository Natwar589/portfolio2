import React from "react";

const About = () => {
  return (
    <div className="h-[auto] w-[100%]">
      <div className="m-9">
        <div className="flex items-center gap-3  mb-3">
          <h1 className="text-[25px] font-sans font-bold">About</h1>
          <div className="w-[30%] h-[1px] bg-blue-500 rounded-lg opacity-40"></div>
        </div>
        <div className="gap-3  font-thin opacity-50">
          Passionate web developer with a fresh perspective and a knack for
          problem-solving. Proficient in HTML, CSS, JavaScript, and eager to
          learn new technologies. Committed to creating immersive digital
          experiences and contributing to dynamic teams.
          <br />
          <br /> Ready to turn ideas into reality and make a meaningful impact
          in the world of web development.
        </div>
        <div>
          <h1 className="font-sans text-[25px] font-bold my-5">What I Do!</h1>

          <div className=" gap-2 w-[100%]">
            <div className="flex gap-4 mb-4">
              <div className="w-[60%] h-[180px] px-3 pt-3 bg-blue-100 rounded-md flex justify-start gap-2">
                <img className="w-[50px] h-[50px]" src="/assets/problem.png" />
                <div>
                  <div className="font-sans opacity-85 font-bold">
                    Problem Solving
                  </div>
                  <div className="text-sm opacity-50 text-balance">
                    Passionate about the solving the DSA problem on the diffrent
                    platforms like codechef leetcode Geeg for Geegs
                  </div>
                </div>
              </div>

              <div className="w-[60%] h-[auto] px-3 pt-3 bg-pink-100 rounded-md flex justify-start gap-2">
                <img className="w-[50px] h-[50px]" src="/assets/web.png" />
                <div>
                  <div className="font-sans opacity-85 font-bold">
                    Web Development
                  </div>
                  <div className="text-sm opacity-50 text-balance">
                    Passionate web developer with a fresh perspective and a
                    knack for problem-solving. Proficient in HTML, CSS,
                    JavaScript, and eager to learn new technologies.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[150px] gap-9 bg-gray-100 flex items-center container">
        <img
          className="w-[100px] h-[100px] bg-white rounded-md horizontal-scrolling-items"
          src="/assets/c.png"
        />
        <img
          className="w-[100px] h-[100px] bg-white rounded-md horizontal-scrolling-items"
          src="/assets/cpp.png"
        />
        <img
          className="w-[100px] h-[100px] bg-white rounded-md horizontal-scrolling-items"
          src="/assets/java.png"
        />
        <img
          className="w-[100px] h-[100px] bg-white rounded-md horizontal-scrolling-items "
          src="/assets/html.png"
        />
        <img
          className="w-[100px] h-[100px] bg-white rounded-md horizontal-scrolling-items"
          src="/assets/css.png"
        />
        <img
          className="w-[100px] h-[100px] bg-white rounded-md horizontal-scrolling-items"
          src="/assets/js.png"
        />
        <img
          className="w-[100px] h-[100px] bg-white rounded-md horizontal-scrolling-items"
          src="/assets/react.png"
        />
      </div>
    </div>
  );
};

export default About;
