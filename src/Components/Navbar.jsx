import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

import water from "../assets/water.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <div className=" absolute w-full flex justify-between pt-6 items-center text-gray-200  font-Poppins">
      <img className="w-12 ml-4" src={water} alt="king" />
      <ul className="hidden md:flex  w-full h-full items-center justify-center ">
        <li className="font-bold text-3xl  p-2">
          <Link to="Home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="font-bold text-3xl p-2">
          <Link to="About" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="font-bold text-3xl p-2">
          <Link to="Skills" spy={true} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="font-bold text-3xl p-2">
          <Link to="Work" spy={true} smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="font-bold text-3xl p-2">
          <Link to="Contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div
        onClick={handleNav}
        className="z-40 text-white block md:hidden cursor-pointer"
      >
        {!nav ? <HiMenuAlt3 size={40} /> : <IoMdClose size={40} />}
      </div>
      <div
        className={
          nav
            ? "ease-in duration-500 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : " absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex  flex-col fixed w-full h-full items-center justify-center ">
          <li className="font-bold text-3xl  p-4">
            <Link
              onClick={handleNav}
              to="Home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="font-bold text-3xl p-4">
            <Link
              onClick={handleNav}
              to="About"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="font-bold text-3xl p-4">
            <Link
              onClick={handleNav}
              to="Skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="font-bold text-3xl p-4">
            <Link
              onClick={handleNav}
              to="Work"
              spy={true}
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li className="font-bold text-3xl p-4">
            <Link
              onClick={handleNav}
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* mobile */}
        <div className=" hidden lg:flex flex fixed flex-col top-[40%] left-0">
          <ul>
            <li className="bg-blue-600 w-[160px] h-[60px] flex justify-between pr-4 rounded-[20px] items-center ml-[-100px] hover:ml-[-10px] duration-300">
              <a
                className="flex justify-between items-center w-full text-gray-300 font-bold "
                href="https://www.facebook.com"
              >
                Facebook <FaFacebook className="h-6 w-6" />
              </a>
            </li>
            <li className="bg-[#333333] w-[160px] h-[60px] flex justify-between pr-4 rounded-[20px] items-center ml-[-100px] hover:ml-[-10px] duration-300 mt-4">
              <a
                className=" pl-4 flex justify-between items-center w-full text-gray-300 font-bold"
                href="https://github.com/scoba4se"
              >
                GitHub <FaGithub className="h-6 w-6 ml-4 cursor-pointer" />
              </a>
            </li>
            <li className="bg-blue-700 w-[160px] h-[60px] flex justify-between pr-4 rounded-[20px] items-center ml-[-100px] hover:ml-[-10px] duration-300 mt-4">
              <a
                className="  flex justify-between items-center w-full text-gray-300 font-bold"
                href="https://www.linkedin.com/in/aweda-ibrahim-ismaila-56a0a4290/"
              >
                Linkedin <FaLinkedin className="h-6 w-6 ml-4 cursor-pointer" />
              </a>
            </li>
            <li className="bg-[#6fc204] w-[160px] h-[60px] flex justify-between  rounded-[20px] items-center ml-[-100px] hover:ml-[-10px] duration-300 mt-4">
              <a
                className="  pl-4  flex justify-between items-center w-full text-gray-300 font-bold"
                href="https://mail.google.com/mail/u/0/#inbox"
              >
                Gmail <SiGmail className="h-6 w-6 ml-4 cursor-pointer" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
