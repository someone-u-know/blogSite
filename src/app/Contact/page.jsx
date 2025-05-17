import React from "react";
import img1 from "../../../public/recources/Brucewebser.jpg";
import Image from "next/image";

export const metadata = {
  title: "Lama Dev Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-black mb-12">Let's Keep in Touch</h1>
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-64 md:h-96">
          <Image
            src={img1}
            alt="Contact"
            fill={true}
            className="object-contain"
          />
        </div>

        {/* Form Section */}
        <form className="flex flex-col w-full text-black md:w-1/2 gap-6">
          <input
            type="text"
            placeholder="Enter your full name"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Write your message here..."
            rows="5"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;