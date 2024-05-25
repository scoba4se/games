import React from "react";

export const About = () => {
  return (
    <div
      name="About"
      className="bg-[#222222]  font-Poppins  w-full h-screen text-gray-300  "
    >
      <div className="   justify-center items-center  flex flex-col w-full h-full ">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right sm:text-4xl font-bold ">
            <p>
              Hi I'm Aweda Ibrahim Ismaila, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div className="">
            <p>
              Am accomplished frontend developer with a passion for crafting
              engaging user experiences. With a proven track record of
              delivering high-quality web applications, Aweda combines technical
              expertise with a creative mindset to bring designs to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
