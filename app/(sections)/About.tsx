import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[100vh] flex-col flex items-center justify-center p-4 bg-transparent"
    >
      <div className="container max-w-4xl retro-window p-8">
        <div className="retro-window-header mb-8 pb-2 flex justify-between">
          <span>ABOUT_ME.TXT - Notepad</span>
          <div className="space-x-2 flex">
            <span className="cursor-pointer hover:bg-[var(--border-color)] hover:text-[var(--window-bg)] px-1">_</span>
            <span className="cursor-pointer hover:bg-[var(--border-color)] hover:text-[var(--window-bg)] px-1">[]</span>
            <span className="cursor-pointer hover:bg-red-500 hover:text-white px-1">X</span>
          </div>
        </div>
        
        <div className="space-y-6 font-['Space_Mono'] text-[var(--fg-color)] text-lg md:text-xl leading-relaxed">
          <p>
            &gt; Hi, my name is Ralph S. Saladino.
          </p>
          <p>
            &gt; I am a Web Developer and AI Automation Specialist with a passion for building beautiful, functional web applications and intelligent automation workflows.
          </p>
          <p className="animate-pulse">_</p>
        </div>
      </div>
    </section>
  );
};

export default About;
