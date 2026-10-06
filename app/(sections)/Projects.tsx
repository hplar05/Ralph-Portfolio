import React from "react";
import Image from "next/image";
import Proj1 from "@/components/images/project1.png";
import Proj2 from "@/components/images/project2.png";
import Proj3 from "@/components/images/project3.png";
import AI1 from "@/components/images/automation-sample.jpg";
import AI2 from "@/components/images/ai-consultation-workflow.jpg";
import AI3 from "@/components/images/telegram-bot.png";
import AI4 from "@/components/images/glass-fruit-workflow.png";
import CAP1 from "@/components/images/capstone-1.png";
import CAP2 from "@/components/images/capstone-2.png";
import CAP3 from "@/components/images/capstone-3.png";
import CAP4 from "@/components/images/filipono-de.png";

const Projects = () => {
  const projectList = [
    { title: "Automated Glass Fruit Video Generation", desc: "An AI Automation that create a video of Glass Fruit videos and upload it to any Social Meadia.", img: AI4 },
    { title: "Telegram AI Bot using Gemini AI", desc: "An friendly AI Agent in Telegram where you can ask anything and it will answer in friendly way.", img: AI3 },
    { title: "AI Consultation Workflow", desc: "An AI Consultation Website for providing the full roadmap of your Automation thru email for free.", img: AI2 },
    { title: "AI Consultation", desc: "An AI Consultation Website for providing the full roadmap of your Automation thru email for free.", img: AI1 },
    { title: "Soliera Logistic", desc: "A system for procuring, warehousing, assets management, and document tracking for Soliera Hotel and Restaurant.", img: CAP1 },
    { title: "ZPPSU Document Request and Tracking", desc: "An School system for requesting for Document and tracking.", img: CAP2 },
    { title: "PPLSAWARDS", desc: "An Website for displaying all awardees that has been awarded for their outstanding contribution.", img: CAP3 },
    { title: "Ranimeflixx", desc: "A mobile application that you can watch all streaming anime with no ads.", img: Proj2 },
    { title: "The Gym Street Coach", desc: "A mobile app that helps coach to track their clients fitness goals and progress.", img: Proj1 },
    { title: "AGreenNatureConnect", desc: "A web app that helps farmers to connect with the people about urban farming. This is our capstone system.", img: Proj3 },
    { title: "FILIPINO DE CUISINE", desc: "A Landing Page for showing the taste of Filipino De Cuisine.", img: CAP4 },
  ];

  return (
    <section id="projects" className="min-h-screen w-full py-12 md:py-24 lg:py-32 bg-transparent text-[var(--fg-color)]">
      <div className="container min-h-screen space-y-12 px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-['VT323'] uppercase tracking-widest sm:text-5xl text-[var(--accent-color)]">&gt; DIR /W PROJECTS</h2>
            <p className="font-['Space_Mono'] text-lg">
              Checking directory contents... {projectList.length} files found.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((proj, idx) => (
            <div key={idx} className="retro-window flex flex-col h-full group hover:-translate-y-1 transition-transform">
              <div className="retro-window-header pb-2 mb-0 px-2 py-1 flex justify-between">
                <span className="truncate pr-2 uppercase">PROJ_{idx+1}.EXE</span>
                <span className="cursor-default">X</span>
              </div>
              <div className="p-2 border-b-2 border-[var(--border-color)] relative bg-[var(--window-bg)]">
                <div className="absolute inset-0 bg-[var(--accent-color)] opacity-0 group-hover:opacity-10 transition-opacity z-10 pointer-events-none"></div>
                <Image
                  src={proj.img}
                  width={500}
                  height={400}
                  alt={proj.title}
                  className="w-full h-48 object-cover filter grayscale hover:grayscale-0 contrast-125 transition-all duration-300 border-2 border-[var(--border-color)]"
                />
              </div>
              <div className="p-4 font-['Space_Mono'] flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2 uppercase text-[var(--accent-color)]">&gt; {proj.title}</h3>
                  <p className="text-[var(--fg-color)] text-sm mb-4">
                    {proj.desc}
                  </p>
                </div>
                <button className="retro-btn w-full mt-auto">
                  [ EXECUTE ]
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
