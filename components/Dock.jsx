"use client";

import React from "react";
import HeroText from "./UI/HeroText";
import IconBar from "./UI/IconBar";

export default function Dock({ apps = [], openApp, openAppIds = [] }) {
  return (
    <div
      className="
        absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 
        w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[65vw] xl:w-[55vw]
        max-w-[900px] h-[85vh] sm:h-[80vh] md:h-[75vh]
        rounded-xl sm:rounded-2xl border overflow-hidden select-none 
        transition-all duration-150 ease-out z-20
        max-md:contents
      "
      style={{
        fontFamily:
          "Zen Kaku Gothic New, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        background: "var(--color-white, #ffffff)",
        borderColor: "var(--color-gray-lighter, #cecece)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
      }}
      aria-hidden
    >
      {/* Titlebar */}
      <div
        className="hidden md:block px-6 py-3.5 border-b text-lg font-medium tracking-wide"
        style={{
          backgroundColor: "var(--color-gray, #424242)",
          color: "#fff",
          borderColor: "var(--color-gray-light, #a4a4a4)",
        }}
      >
        home
      </div>

      {/* Content */}
      <div
        className="
          relative text-center flex flex-col items-center
          md:p-12 md:justify-center md:h-[calc(100%-56px)]
          p-6 max-md:min-h-screen max-md:pt-24 max-md:justify-start
        "
      >
        <HeroText />

        <IconBar
          apps={apps}
          openApp={openApp}
          openAppIds={openAppIds}
        />
      </div>
    </div>
  );
}
