"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 1000);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading == true) {
    return (
      <div className="bg-sky-100 flex items-center justify-center min-h-screen mt-10">
        <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-black rounded-full animate-pulse delay-75"></div>
        <div className="w-2 h-2 bg-black rounded-full animate-pulse delay-150"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between bg-gray-900 text-white py-12 px-6 lg:px-24">
      <div className="lg:w-7/12 space-y-6">
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-4xl font-bold text-green-400 mb-4">
            About <span className="text-green-300">Us</span>
          </h2>
        </div>

        <p className="text-lg text-gray-300 leading-relaxed">
          Welcome to FaizBot, where innovation meets intelligence. We are a
          leading AI solutions provider specializing in advanced chatbot
          assistants and cutting-edge natural language processing (NLP)
          projects. With a passion for technology and a commitment to
          excellence, our mission is to empower businesses with AI-driven tools
          that enhance communication, streamline operations, and elevate
          customer experiences.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          Our team brings over 4 years of experience in building AI products,
          from custom chatbots tailored to your needs to sophisticated NLP
          solutions that unlock the full potential of data. Whether you’re
          looking to automate customer support, improve user engagement, or
          harness machine learning to process and understand human language, we
          have the expertise to bring your vision to life.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          At FaizBot, we combine technical prowess with industry insights to
          design intelligent systems that are functional, intuitive, reliable,
          and scalable. We take pride in our collaborative approach, ensuring
          our solutions integrate with your platforms and drive measurable
          results.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          Let us help you lead the future of communication with AI-powered
          innovation.
        </p>

        <a
          href="/"
          target="_blank"
          className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Learn More <i className="fa fa-caret-right ml-2"></i>
        </a>
      </div>

      <div className="lg:w-5/12 mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <Image
          src="/robot-chat2.jpg"
          width={460}
          height={444}
          alt="Robot Icon"
          className="w-full max-w-xs lg:max-w-sm object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Page;
