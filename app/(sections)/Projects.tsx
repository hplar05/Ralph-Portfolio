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

// New Websites
import MiamiAgents from "@/components/images/miami-agents.png";
import MiamiAttorneys from "@/components/images/miami-attorneys.png";
import DefianceCounty from "@/components/images/defiance-county-directory.png";
import HenryCounty from "@/components/images/henry-county-directory.png";
import PodcastersDir from "@/components/images/podcasters-directory.png";
import PodcastersToday from "@/components/images/podcasters-today.png";
import ProducersToday from "@/components/images/producers-today.png";
import AttorneysToday from "@/components/images/attorneys-today.png";
import AuthorsToday from "@/components/images/authors-today.png";

const Projects = () => {
  const projectList = [
    // Websites (Priority)
    { title: "Miami Agents", desc: "Miami's Most Distinguished Real Estate Agents Directory.", img: MiamiAgents, link: "https://miamiagents.realestate/" },
    { title: "Miami Attorneys", desc: "Devoted to Justice: Search our verified legal directory for Miami's top law firms.", img: MiamiAttorneys, link: "https://miamiattorneys.legal/" },
    { title: "Defiance County Directory", desc: "Discover Defiance County local businesses and services.", img: DefianceCounty, link: "https://defiancecounty.directory/" },
    { title: "Henry County Directory", desc: "Explore and discover the best spots in Henry County.", img: HenryCounty, link: "https://www.henrycounty.directory/" },
    { title: "Podcasters Directory", desc: "Find better podcast matches faster for guests and hosts.", img: PodcastersDir, link: "https://podcasters.directory/" },
    { title: "Podcasters Today", desc: "Be featured on Podcasters Today and reach across top platforms.", img: PodcastersToday, link: "https://podcasters.today/" },
    { title: "Producers Today", desc: "The voice of producers. Share your expertise across platforms.", img: ProducersToday, link: "https://producers.today/" },
    { title: "Attorneys Today", desc: "Book your free TV interview and share your story.", img: AttorneysToday, link: "https://attorneystoday.tv/" },
    { title: "Authors Today", desc: "The voice of publishing. Emerging voices and storytelling.", img: AuthorsToday, link: "https://authorstoday.tv/" },
    
    // Mobile Apps & Others
    { title: "Ranimeflixx", desc: "A mobile application that you can watch all streaming anime with no ads.", img: Proj2, link: "" },
    { title: "The Gym Street Coach", desc: "A mobile app that helps coach to track their clients fitness goals and progress.", img: Proj1, link: "" },
    
    // AI Automations
    { title: "Automated Glass Fruit Video Generation", desc: "An AI Automation that create a video of Glass Fruit videos and upload it to any Social Meadia.", img: AI4, link: "" },
    { title: "Telegram AI Bot using Gemini AI", desc: "An friendly AI Agent in Telegram where you can ask anything and it will answer in friendly way.", img: AI3, link: "" },
    { title: "AI Consultation Workflow", desc: "An AI Consultation Website for providing the full roadmap of your Automation thru email for free.", img: AI2, link: "" },
    { title: "AI Consultation", desc: "An AI Consultation Website for providing the full roadmap of your Automation thru email for free.", img: AI1, link: "" },
    
    // Capstone / Previous Projects
    { title: "Soliera Logistic", desc: "A system for procuring, warehousing, assets management, and document tracking for Soliera Hotel and Restaurant.", img: CAP1, link: "https://log1-test.vercel.app/" },
    { title: "ZPPSU Document Request and Tracking", desc: "An School system for requesting for Document and tracking.", img: CAP2, link: "https://zppsuniversity.vercel.app/" },
    { title: "PPLSAWARDS", desc: "An Website for displaying all awardees that has been awarded for their outstanding contribution.", img: CAP3, link: "https://ppslawardees.vercel.app/" },
    { title: "AGreenNatureConnect", desc: "A web app that helps farmers to connect with the people about urban farming. This is our capstone system.", img: Proj3, link: "" },
    { title: "FILIPINO DE CUISINE", desc: "A Landing Page for showing the taste of Filipino De Cuisine.", img: CAP4, link: "" },
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
                {proj.link ? (
                  <a 
                    href={proj.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="retro-btn w-full mt-auto block text-center py-2"
                  >
                    [ EXECUTE ]
                  </a>
                ) : (
                  <button 
                    disabled 
                    className="retro-btn w-full mt-auto block text-center py-2 opacity-50 cursor-not-allowed"
                  >
                    [ NOT AVAILABLE ]
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
