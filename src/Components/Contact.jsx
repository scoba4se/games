import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-[#222222] flex justify-center items-cener p-4 "
    >
      <form
        method="POST"
        action="https://getform.io/f/lbkmvrzb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or chart me on email - Scoba007@gmail.com
          </p>
        </div>
        <input
          className="bg-[#cce6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#cce6f6] my-4 p-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#cce6f6] p-2 "
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          className="text-gray-100 border-2 hover:bg-[#075985] hover:border-[#075985]
         px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's collaburate
        </button>
      </form>
    </div>
  );
};

export default Contact;
