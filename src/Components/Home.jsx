import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="Home"
      className="w-full h-screen bg-[#075985] text-gray-300 font-Poppins"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 font-bold"> Hi, My name is</p>
        <h1 className="text-4xl sm:7xl font-bold text-[#f9fafb]">
          Aweda Ibrahim Ismaila
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold ">
          I'm a Frontend Developer.
        </h2>
        <p className=" py-4 max-w-[700px] ">
          I'm a frontend developer specializing in building and occasionally
          designing exceptional digital experiences. Currently, I'm focused on
          building responsive frontend web applications.
        </p>
        <div>
          <button className="group hover:border-[#075985] text-white border-2 px-6 py-y my-2 flex items-center hover:bg-[#222222]">
            View Work{" "}
            <span className="group-hover:rotate-90 duration-200">
              <FaArrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
