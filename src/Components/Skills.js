import React from "react";
import html from "../Assets/html.png";
import Css from "../Assets/css.png";
import Github from "../Assets/github.png";
import Javascript from "../Assets/javascript.png";
import Bootstrap from "../Assets/Bootstrap.png";
import Reactjs from "../Assets/react.png";
import Next from "../Assets/nextjs-icon.webp";
import Tailwind from "../Assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] flex flex-col justify-center p-4 mx-auto w-full h-full">
        <div>
          <p className="py-4 text-4xl border-yellow-600">Skills</p>
          <p className="py-4">
            So far, these are the technologies I have worked/ work with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={html} alt="A html icon" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Css} alt="A Css icon" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={Javascript}
              alt="A Javascript icon"
              className="w-20 mx-auto"
            />
            <p className="my-4">Javascript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Github} alt="A Github icon" className="w-20 mx-auto" />
            <p className="my-4">Github</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={Bootstrap}
              alt="A Bootstrap icon"
              className="w-20 mx-auto"
            />
            <p className="my-4">Bootstrap</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Reactjs} alt="A React icon" className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Next} alt="A Next js icon" className="w-20 mx-auto" />
            <p className="my-4">Next</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={Tailwind}
              alt="A Tailwind icon"
              className="w-20 mx-auto"
            />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
