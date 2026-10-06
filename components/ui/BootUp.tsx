"use client";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function BootUp() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check session storage so it doesn't boot up on every page load
    const hasBooted = sessionStorage.getItem("booted");
    if (hasBooted) {
      setShow(false);
    }
  }, []);

  const finishBoot = () => {
    sessionStorage.setItem("booted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[var(--bg-color)] text-[var(--fg-color)] p-8 font-['VT323'] text-xl flex flex-col justify-start">
      <div className="flex-1">
        <TypeAnimation
          sequence={[
            "INIT SYSTEM...",
            500,
            "INIT SYSTEM... OK\nLOADING KERNEL...",
            500,
            "INIT SYSTEM... OK\nLOADING KERNEL... OK\nMOUNTING FILE SYSTEMS...",
            500,
            "INIT SYSTEM... OK\nLOADING KERNEL... OK\nMOUNTING FILE SYSTEMS... OK\nLOADING PORTFOLIO DATA...",
            500,
            "INIT SYSTEM... OK\nLOADING KERNEL... OK\nMOUNTING FILE SYSTEMS... OK\nLOADING PORTFOLIO DATA... OK\nWELCOME TO RALPH OS v1.0",
            1000,
            finishBoot
          ]}
          speed={70}
          cursor={true}
          style={{ whiteSpace: "pre-line", display: "block" }}
        />
      </div>
      
      <button 
        onClick={finishBoot}
        className="retro-btn self-start mt-8"
      >
        [ SKIP BOOT ]
      </button>
    </div>
  );
}
