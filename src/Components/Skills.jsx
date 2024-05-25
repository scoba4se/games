import React from "react";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import Reactt from "../assets/Reactt.png";
import JS from "../assets/JS.png";
import GitHub from "../assets/GitHub.png";

const Skills = () => {
  return (
    <div
      name="Skills"
      className="bg-[#075985] font-Poppins w-full h-screen text-gray-300"
    >
      {/* Containers */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            {/* These are the technologies I've worked with */}
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4">
          <div className="shadow-md shadow-[#040c36] hover:scale-120 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML" />
            <p className="py-2">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c36] hover:scale-120 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS" />
            <p className="py-2">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c36] hover:scale-120 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="JavaScript" />
            <p className="py-2">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c36] hover:scale-120 duration-500">
            <img className="w-20 mx-auto" src={Reactt} alt="React" />
            <p className="py-2">React</p>
          </div>
          <div className="shadow-md shadow-[#040c36] hover:scale-120 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub" />
            <p className="py-2">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
