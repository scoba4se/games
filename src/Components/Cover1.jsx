import React from "react";
import olohunloba1 from "../assets/olohunloba1.JPG";

export const Cover1 = () => {
  return (
    <div className=" flex font-Poppins justify-center items-center w-full py-16 px-4 font-bold bg-[#075985] text-white">
      <div className="w-full mx-auto grid md:grid-cols-2 my-4">
        <img
          className="w-[250px] mx-auto rounded-full my-4"
          src={olohunloba1}
          alt="king"
        />
        <ul className="my-4 mx-auto mt-20  font-bold ">
          <h1 className="text-3xl font-bold mb-4">Aweda Ibrahim Ismaila</h1>
          <p className="text-lg  mb-6">
            I am a dedicated skilled web developer with a passion for creating
            engaging and user-friendly digital experiences. With a strong
            background in front-end development, I specialize in crafting
            dynamic and interactive user interfaces using cutting-edge
            technologies.
          </p>
        </ul>
      </div>
    </div>
  );
};
export default Cover1;
