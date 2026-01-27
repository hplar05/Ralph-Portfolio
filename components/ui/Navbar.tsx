import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ThemeToggler } from "./Themetoggler";

const Navbar = () => {
  return (
    <header className="flex item-center justify-between shadow-sm shadow-gray-200 dark:shadow-none p-4 sticky top-0 dark:bg-[#020817] bg-white">
      <Link className="space-x-2 md:ml-5 ml-0 flex items-center" href="#about">
        <h1 className="font font-bold text-md ">
          <span className="text-blue-600 space-x-3">RALPH </span>
          <span>SALADINO</span>
        </h1>
      </Link>

      <div className="flex items-center space-x-8 md:mr-5 mr-0">
        <div className="text-md hidden md:block">
          <ul className="flex items-center space-x-4">
            <Link className="hover:underline underline-offset-4" href="#home">
              Home
            </Link>
            {/* <Link className="hover:underline underline-offset-4" href="#about">
              About
            </Link> */}
            {/* <Link
              className="hover:underline underline-offset-4"
              href="#experience"
            >
              Experience
            </Link> */}
            <Link
              className="hover:underline underline-offset-4"
              href="#projects"
            >
              Projects
            </Link>
            {/* <Link
              className="hover:underline underline-offset-4"
              href="#contacts"
            >
              Contacts
            </Link> */}
          </ul>
        </div>

        <ThemeToggler />
      </div>
    </header>
  );
};

export default Navbar;
