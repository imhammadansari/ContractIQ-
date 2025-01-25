import React from 'react';
import { useLottie } from "lottie-react";
import AboutAnimation from "../assets/about-us-animation.json";
import Swal from 'sweetalert2'

const Contact = () => {
  const options = {
    animationData: AboutAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4c73f208-2637-41ca-a50b-d98d8925405d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      Swal.fire({
        title: "Success!",
        text: "Messsage sent Successfully!",
        icon: "success"
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <>
      <div
        className="px-6 lg:px-14 py-4 flex flex-col"
        style={{
            background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
        }}
      >
        {/* Parent Div */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Child Div */}
          <div className="lg:w-1/2">
            {/* Form Div */}
            <h1 className="text-start text-gray-600 text-2xl font-bold">Get In Touch</h1>
            <p className="text-gray-600 text-sm text-start lg:text-base">We're here to help you!</p>
            <form onSubmit={onSubmit} className="flex flex-col gap-4 pt-4">
              <div className="flex text-gray-600 text-start flex-col">
                <h1>Full Name</h1>
                <input
                  className="p-2 text-sm lg:text-base border border-gray-600 border-opacity-35 bg-white"
                  type="text"
                  name='name'
                  placeholder="Enter Full Name"
                  required
                />
              </div>

              <div className="flex text-gray-600 text-start flex-col">
  <h1>Email Address</h1>
  <input
    className="p-2 text-sm lg:text-base border border-gray-600 border-opacity-35 bg-white"
    type="text"
    name="email"
    placeholder="Enter Email"
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    title="Please enter a valid email address (e.g., example@gmail.com, user@outlook.com)"
    required
  />
</div>


              <div className="flex text-gray-600 text-start flex-col">
                <h1>Your Message</h1>
                <textarea
                name='message'
                required
                placeholder='Your message here'
                  className="border p-2 text-sm lg:text-base border-gray-600 border-opacity-35 bg-white"
                  rows={4}
                  cols={4}
                ></textarea>
              </div>

              <div className="">
                <button type='submit' className="px-8 py-2 hover:bg-gray-300 hover:text-black text-black" style={{
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
