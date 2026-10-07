"use client";

import React, { useState } from "react";
import { Phone, X } from "lucide-react";
import SuggestionInput from "./SuggestionInput";

export const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:right-8 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 shadow-2xl">
          <SuggestionInput />
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open contact transmission form"
        className={`retro-btn p-3 md:p-4 border-2 shadow-lg flex items-center justify-center cursor-pointer transition-all ${
          isOpen ? 'bg-[var(--accent-color)] text-white' : 'bg-[var(--window-bg)]'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
      </button>
    </div>
  );
};
