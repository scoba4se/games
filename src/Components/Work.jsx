import React from "react";
import taiwo3 from "../assets/taiwo3.jpg";
import Zuri from "../assets/Zuri.png";
import Todo from "../assets/Todo.png";
import caculator from "../assets/caculator.png";

const Work = () => {
  return (
    <div
      name="Work"
      className="w-full md:h-screen text-gray-300 bg-[#222222] font-Poppins"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Works
          </p>
          <p className="py-2">// Check out some of my recent works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* Grid items */}

          <div
            style={{ backgroundImage: `url(${taiwo3})` }}
            className="shadow-lg shadow-[#044c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-gray-400 tracking-wider ">
                ADDLASS HOMES PROPERTY WEBSITE
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://my-app-drab-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Demo for ADDLASS HOMES PROPERTY WEBSITE"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/scoba4se/real-estate"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Code for ADDLASS HOMES PROPERTY WEBSITE"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Zuri})` }}
            className="shadow-lg shadow-[#044c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-gray-400 tracking-wider">
                ZURI APPLICATION
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://zuri-cyan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Demo for ZURI APPLICATION"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/scoba4se/zuri"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Code for ZURI APPLICATION"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="shadow-lg shadow-[#044c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-gray-400 tracking-wider">
                TODO LIST
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://todo-ftbupo0yo-scoba4se.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Demo for TODO LIST"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/scoba4se/todo-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Code for TODO LIST"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${caculator})` }}
            className="shadow-lg shadow-[#044c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-gray-400 tracking-wider">
                Caculator
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://zuri-project-html.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Demo for Caculator"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/scoba4se/zuri-project-Html"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Code for Caaculator"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Add more projects here, ensuring each one has a unique image and description */}
        </div>
      </div>
    </div>
  );
};

export default Work;
