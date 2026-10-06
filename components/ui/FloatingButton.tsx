"use client";

import React, { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SuggestionInput from "./SuggestionInput";

export const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-7 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2">
          <SuggestionInput />
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`retro-btn p-3 md:p-4 border-2 shadow-lg flex items-center justify-center ${isOpen ? 'bg-[var(--accent-color)] text-white' : ''}`}
      >
        <LocalPhoneIcon />
      </button>
    </div>
  );
};
