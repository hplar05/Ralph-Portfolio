"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import toast from "react-hot-toast";

const Home = () => {
  const handlesubmit = () => {
    new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      toast.success("DOWNLOAD COMPLETE!");
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-transparent"
    >
      <div className="flex justify-center items-center max-md:px-7 retro-window p-8 max-w-4xl w-full mx-4">
        <div className="w-full">
          <div className="retro-window-header mb-8 pb-2">
            <span>C:\USER\RALPH.EXE</span>
            <span className="cursor-pointer hover:text-red-500">X</span>
          </div>
          <div className="space-y-6 font-['Space_Mono']">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-['VT323'] uppercase text-[var(--accent-color)]">
              &gt; Ralph Saladino
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-[var(--fg-color)]">
              <TypeAnimation
                sequence={[
                  "EXECUTING: AI_Automation_Specialist.sh",
                  2000,
                  "EXECUTING: Web_Developer.exe",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="block"
                repeat={Infinity}
              />
            </h2>
            <div className="text-lg md:text-xl text-justify max-w-2xl leading-relaxed">
              <TypeAnimation
                sequence={[
                  "> I am constantly seeking to expand my knowledge in this field.\n> I find the dynamic nature of AI Automation and Web Development fascinating and enjoy discovering new possibilities.\n> Type 'help' or click download below..."
                ]}
                speed={80}
                cursor={false}
                style={{ whiteSpace: 'pre-line' }}
              />
            </div>

            <button className="retro-btn mt-8 text-xl" onClick={handlesubmit}>
              <a
                href="https://utfs.io/f/8dfed853-d843-4c7b-8e36-d6b5c5912096-tz98mj.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                C:\&gt; DOWNLOAD_CV.BAT
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
