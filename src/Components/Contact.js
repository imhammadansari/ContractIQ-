import React from 'react';
import { useLottie } from "lottie-react";
import AboutAnimation from "../assets/about-us.json";

const Contact = () => {
  const options = {
    animationData: AboutAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <>
      <div
        className="px-6 lg:px-16 py-4 flex flex-col"
        style={{
            background: "linear-gradient(to right, #f2f2f4, #cccccc)",
        }}
      >
        {/* Parent Div */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Child Div */}
          <div className="lg:w-1/2">
            {/* Form Div */}
            <h1 className="text-start text-gray-600 text-2xl font-bold">Get In Touch</h1>
            <p className="text-gray-600 text-sm text-start lg:text-base">We're here to help you!</p>
            <form className="flex flex-col gap-4 pt-4">
              <div className="flex text-gray-600 text-start flex-col">
                <h1>Full Name</h1>
                <input
                  className="p-2 text-sm lg:text-base border border-gray-600 border-opacity-35 bg-white"
                  type="text"
                  placeholder="Enter Full Name"
                />
              </div>

              <div className="flex text-gray-600 text-start flex-col">
                <h1>Email Address</h1>
                <input
                  className="p-2 text-sm lg:text-base border border-gray-600 border-opacity-35 bg-white"
                  type="text"
                  placeholder="Enter Email"
                />
              </div>

              <div className="flex text-gray-600 text-start flex-col">
                <h1>Text</h1>
                <textarea
                  className="border p-2 text-sm lg:text-base border-gray-600 border-opacity-35 bg-white"
                  rows={4}
                  cols={4}
                ></textarea>
              </div>

              <div className="">
                <button className="px-8 py-2 hover:bg-gray-300 hover:text-black text-black" style={{
            background: "linear-gradient(to right, #f2f2f4, #cccccc)",
        }}>
                  Send
                </button>
              </div>
            </form>
          </div>
          {/* Form Div */}

          <div className="flex flex-col gap-4 items-center">
            {/* Image Div */}
            <div className="w-[25rem] lg:w-[28rem]">{View}</div>
          </div>
          {/* Image Div */}
        </div>
        {/* Child Div */}
      </div>
      {/* Parent Div */}
    </>
  );
};

export default Contact;
