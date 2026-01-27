"use client";
import React from "react";
import Image from "next/image";
import Avatar from "@/components/images/avatar.png";
import Formal from "@/components/images/formalno.png";
import { TypeAnimation } from "react-type-animation";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const handlesubmit = () => {
    new Promise((resolve) => setTimeout(resolve, 4000)).then(() => {
      toast.success("Successfully Download!");
    });
  };

  return (
    <section
      id="home"
      className="md:h-[80vh] h-[77vh] flex items-center justify-center dark:bg-gray-950 text-gray-50 "
    >
      <div className="flex justify-center items-center max-md:px-7">
        <div className="space-y-4 ">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black dark:text-white max-md:text-center">
            <span className="text-blue-600 space-x-3">Ralph </span>
            <span>Saladino</span>
          </h1>
          <h2 className="animate-typing text-gray-800 dark:text-white max-sm:text-2xl text-3xl font-medium max-md:text-center">
            <TypeAnimation
              sequence={[
                "AI Automation Specialist",
                3000,
                "Web Developer",
                3000,
              ]}
              wrapper="span"
              speed={50}
              className="block"
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-[600px] max-sm:text-base text-xl text-justify tracking-tighter">
            I am constantly seeking to expand my knowledge in this field. I find
            the dynamic nature of AI Automation and Web Development fascinating
            and enjoy discovering new possibilities.
          </p>

          <button className="text-gray-800 dark:text-white">
            <a
              // href="https://utfs.io/f/8dfed853-d843-4c7b-8e36-d6b5c5912096-tz98mj.pdf"
              onClick={handlesubmit}
            >
              Download CV
            </a>
          </button>
        </div>
        {/* <Image
          src={Formal}
          width={450}
          height={450}
          alt="Ralph Saladino"
          className="mx-auto rounded-3xl max-md:hidden"
        /> */}
      </div>
    </section>
  );
};

export default Home;
