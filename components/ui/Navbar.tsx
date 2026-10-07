import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 sticky top-0 bg-[var(--bg-color)] border-b-2 border-[var(--border-color)] z-40">
      <Link className="space-x-2 md:ml-5 ml-0 flex items-center" href="#about">
        <h1 className="font-bold text-2xl font-['VT323'] uppercase tracking-widest text-[var(--fg-color)]">
          <span className="mr-2">&gt;</span>RALPH_SALADINO<span className="animate-pulse">_</span>
        </h1>
      </Link>

      <div className="flex items-center space-x-8 md:mr-5 mr-0">
        <div className="text-md hidden md:block font-['Space_Mono']">
          <ul className="flex items-center space-x-6">
            <Link className="hover:bg-[var(--border-color)] hover:text-[var(--window-bg)] px-2 py-1 transition-colors" href="#home">
              [HOME]
            </Link>
            <Link className="hover:bg-[var(--border-color)] hover:text-[var(--window-bg)] px-2 py-1 transition-colors" href="#about">
              [ABOUT]
            </Link>
            <Link className="hover:bg-[var(--border-color)] hover:text-[var(--window-bg)] px-2 py-1 transition-colors" href="#tools">
              [TOOLS]
            </Link>
            <Link className="hover:bg-[var(--border-color)] hover:text-[var(--window-bg)] px-2 py-1 transition-colors" href="#projects">
              [PROJECTS]
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
