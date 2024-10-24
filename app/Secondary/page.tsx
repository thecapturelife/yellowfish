import React from 'react';
import ban1 from '@/app/assets/Group 37.png';
import { FaRupeeSign } from "react-icons/fa";
import Image from 'next/image';

const Secondary = () => {
  return (
    <div className="bg-customsec h-screen mb-14 flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
        <h1 className="ml-6 md:ml-14 mt-14 md:mt-40 text-4xl md:text-5xl font-extrabold font-poppins">
          Much enjoyable&nbsp;
          <span className="underline-effect"> sessions </span><br />
          &nbsp;wraps in
        </h1>
        <p className="ml-6 md:ml-14 mt-6 md:mt-11 text-lg md:text-xl">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />
          amet sint. Velit officia consequat duis 
        </p>
        <div className="flex items-center mt-6 md:mt-10">
          <Image
            src={ban1}
            alt="ban1"
            className="ml-6 md:ml-14"
          />
          <h2 className="ml-4 text-customPurple text-lg md:text-xl font-semibold hover:text-customYellow transition duration-300 ease-in-out">
            Certificate included
          </h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 relative h-screen flex justify-center items-center">
        <div className="bg-gradient-to-b from-[#344AC1] to-[#8a108a] h-80 md:h-96 w-full md:w-64 relative transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex text-white text-4xl md:text-5xl ml-8 md:ml-14 mt-8 md:mt-14">
            <FaRupeeSign />
            <h1 className="font-bold">199</h1>
          </div>
          <h2 className="text-white mt-4 md:mt-6 ml-10 md:ml-16 text-lg md:text-2xl">Per head</h2>
          <button className="border-2 border-button1 text-center text-yellow-300 py-2 px-4 rounded-3xl hover:bg-yellow-600 ml-10 md:ml-16 mt-6 md:mt-10">
            60% OFF
          </button>
          <div className="bg-customsec rounded-full h-5 w-5 absolute bottom-14 md:bottom-24 left-[-8px] translate-y-1/2"></div>
          <div className="w-[15rem] border-t-4 border-dashed border-customsec absolute bottom-14 md:bottom-24 ml-3"></div>
          <div className="bg-customsec rounded-full h-5 w-5 absolute bottom-14 md:bottom-24 left-[15.3rem] translate-y-1/2"></div>
          <h1 className="text-2xl md:text-3xl text-white font-mono mt-10 md:mt-[5rem] ml-8 md:ml-12 tracking-custom hover:text-customYellow transition duration-300">
            GET NOW
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Secondary;
