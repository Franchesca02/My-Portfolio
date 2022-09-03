import React from "react";
import Works from "../Assets/work.png";
import Realestate from "../Assets/realestate.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] flex flex-col justify-center p-4 mx-auto w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600">
            Work
          </p>
          <p className="py-6">Please, look up some of my works</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Works})` }}
            className="shadow-lg shadow-[#040c16] group round-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Realestate})` }}
            className="shadow-lg shadow-[#040c16] group round-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Works})` }}
            className="shadow-lg shadow-[#040c16] group round-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Realestate})` }}
            className="shadow-lg shadow-[#040c16] group round-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Works})` }}
            className="shadow-lg shadow-[#040c16] group round-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Realestate})` }}
            className="shadow-lg shadow-[#040c16] group round-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
