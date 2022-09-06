import React, { useState } from "react";
import Logo from "../Assets/Logo.jpg";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo icon" style={{ width: "50px" }} />
      </div>
      {/* menu */}
      <div>
        <ul className=" hidden md:flex">
          <li>
            <Link to="home" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} offset={50} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="home"
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="about"
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              offset={50}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="work"
              smooth={true}
              offset={50}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col left-0 top-[35%]">
        <ul>
          <li className="w-[160px] h-[60px] items-center justify-between flex ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-900">
            <a
              className="justify-between text-gray-300 flex w-full items-center"
              href="https://www.linkedin.com/in/ihuoma-ifeyinwa-bb8a51170"
            >
              Linkedin <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] items-center justify-between flex ml-[-100px] hover:ml-[-10px] duration-200 bg-[#333333]">
            <a
              className="justify-between text-gray-300 flex w-full items-center"
              href="https://github.com/Franchesca02"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] items-center justify-between flex ml-[-100px] hover:ml-[-10px] duration-200 bg-[#552ad]">
            <a
              className="justify-between text-gray-300 flex w-full items-center"
              href="ihuoma.franchesca@gmail.com"
            >
              Email <HiMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] items-center justify-between flex ml-[-100px] hover:ml-[-10px] duration-200 bg-[#565f69]">
            <a
              className="justify-between text-gray-300 flex w-full items-center"
              href="https://docs.google.com/document/d/1ET0Jtq0sfzg2mzAPUulabLRHtI8Sl2Ky9tQ5Kkn9EOc/edit"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
