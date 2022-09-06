import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container  */}
      <div className="max-width-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ifeyinwa Ihuoma
        </h1>
        <h2 className="text-4xl sm:text-7xl text-[#8892b0]">
          I am a Frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a Frontend Developer who is specialized in designing and building
          excellent digital experiences. I am currently focused on building
          responsive, functional and interactive web applications.
        </p>
        <div>
          <Link to="work" smooth={true} offset={50} duration={500}>
            Work
            <button className="text-white group border-2 py-3 px-6 my-2 rounded flex items-center hover:bg-yellow-600 hover:border-yellow-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
