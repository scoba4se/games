import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Cover4 = () => {
  return (
    <div className="lg:hidden flex flex-col top-[45%]">
      <ul className="p-2">
        <li className="bg-blue-600 w-[160px] h-[60px] flex justify-between pr-4 rounded-[20px] items-center ml-[-122px] hover:ml-[-10px] duration-300">
          <a
            className="flex justify-between items-center w-full text-gray-300 font-bold"
            href="https://www.facebook.com"
            aria-label="Facebook"
          >
            Facebook <FaFacebook className="h-6 w-6" />
          </a>
        </li>
        <li className="bg-[#333333] w-[160px] h-[60px] flex justify-between pr-4 rounded-[20px] items-center ml-[-122px] hover:ml-[-10px] duration-300 mt-4">
          <a
            className="pl-4 flex justify-between items-center w-full text-gray-300 font-bold"
            href="https://github.com/scoba4se"
            aria-label="GitHub"
          >
            GitHub <FaGithub className="h-6 w-6 ml-4 cursor-pointer" />
          </a>
        </li>
        <li className="bg-blue-700 w-[160px] h-[60px] flex justify-between pr-4 rounded-[20px] items-center ml-[-122px] hover:ml-[-10px] duration-300 mt-4">
          <a
            className="flex justify-between items-center w-full text-gray-300 font-bold"
            href="https://www.linkedin.com/in/aweda-ibrahim-ismaila-56a0a4290/"
            aria-label="LinkedIn"
          >
            LinkedIn <FaLinkedin className="h-6 w-6 ml-4 cursor-pointer" />
          </a>
        </li>
        <li className="bg-[#6fc204] w-[160px] h-[60px] flex justify-between rounded-[20px] items-center ml-[-122px] hover:ml-[-10px] duration-300 mt-4">
          <a
            className="pl-4 flex justify-between items-center w-full text-gray-300 font-bold"
            href="https://mail.google.com/mail/u/0/#inbox"
            aria-label="Gmail"
          >
            Gmail <SiGmail className="h-6 w-6 ml-4 cursor-pointer" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Cover4;
