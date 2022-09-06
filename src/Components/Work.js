import React from "react";
import Agent from "../Assets/agent.png";
import Health from "../Assets/health.png";
import Food from "../Assets/food.png";
import Todo from "../Assets/todo.png";
import Gym from "../Assets/gym.png";
import Project from "../Assets/project.png";

const Work = () => {
  return (
    <div name="work" className="w-full bg-[#0a192f] text-gray-300">
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
            style={{ backgroundImage: `url(${Health})` }}
            className="shadow-lg shadow-[#040c16] group round-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.fyngramhealth.com/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Agent})` }}
            className="shadow-lg shadow-[#040c16] group round-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://enrolledagent.com/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Gym})` }}
            className="shadow-lg shadow-[#040c16] group round-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://fitness-app-by-ify.netlify.app/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Demo
                  </button>
                </a>
                <a href="https://github.com/Franchesca02/Fitness-App">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Food})` }}
            className="shadow-lg shadow-[#040c16] group round-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://food-recipes-with-ify.netlify.app/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Demo
                  </button>
                </a>
                <a href="https://github.com/Franchesca02/Food-Recipe-App">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="shadow-lg shadow-[#040c16] group round-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://franchesca-to-do-app.netlify.app/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Demo
                  </button>
                </a>
                <a href="https://github.com/Franchesca02/To-Do-App">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Project})` }}
            className="shadow-lg shadow-[#040c16] group round-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://franchesca02.github.io/Portfolio/">
                  <button className="text rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Demo
                  </button>
                </a>
                <a href="https://github.com/Franchesca02/Portfolio">
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
