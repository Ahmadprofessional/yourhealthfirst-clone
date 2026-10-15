"use client";

import React from "react";

export default function CookieSettingsTrigger() {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("openCookieSettings"));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="px-5 py-2.5 rounded-lg bg-[#0c2c1d] text-cream text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#1a4732] shadow-sm transition-colors"
    >
      Open Cookie Settings
    </button>
  );
}
