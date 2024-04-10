import React from "react";

const Contact = () => {
  return (
    <div className="">
      <div className="flex items-center m-9 gap-3  mb-3">
        <h1 className="text-[25px] font-sans font-bold">Contact</h1>
        <div className="w-[30%] h-[1px] bg-blue-500 rounded-lg opacity-40"></div>
      </div>

      <div className="w-[100%] h-[100%] p-14 bg-gray-200">
        <div className="">
          <div className="">
            <form className="">
              <div className="flex m-3 gap-3">
                <input
                  type="text"
                  name="name"
                  className="w-[50%] border-r-amber-50 h-[30px] p-5 rounded-md shadow-md"
                  placeholder="Name"
                ></input>

                <input
                  type="email"
                  name="email"
                  className="w-[50%] h-[30px] p-5 border-none rounded-md shadow-md"
                  placeholder="Email address"
                ></input>
              </div>

              <div className="m-3">
                <input
                  type="text"
                  name="subject"
                  className="w-[100%]  h-[30px] p-5 border-none rounded-md shadow-md"
                  placeholder="Subject"
                ></input>
              </div>
              {/* Row 3 of form */}
              <div className="m-3">
                <textarea
                  rows={3}
                  name="message"
                  className="w-[100%]  h-[90px] p-3 border-none rounded-md shadow-md"
                  placeholder="Message"
                ></textarea>
              </div>
              <button className="bg-cyan-500 shadow-lg w-[99%]  hover:shadow-cyan-500/50 rounded-md gap-2 p-2 flex justify-center items-center  hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
