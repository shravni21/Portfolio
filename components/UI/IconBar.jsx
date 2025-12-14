"use client";

import React, { useRef } from "react";

export default function IconBar({ apps = [], openApp, openAppIds = [] }) {
  const buttonsRef = useRef({});

  function handleClick(appId, e) {
    const btn = buttonsRef.current[appId];
    const rect = btn ? btn.getBoundingClientRect() : null;
    openApp && openApp(appId, rect, e);
  }

  return (
    <div className="w-full flex justify-center mt-8 md:mt-4">
      <div className="grid grid-cols-3 gap-6 md:flex md:items-end md:gap-4 lg:gap-5">
        {apps.map((app) => {
          const isOpen = openAppIds.includes(app.id);

          return (
            <div key={app.id} className="flex flex-col items-center">
              <button
                ref={(el) => (buttonsRef.current[app.id] = el)}
                onClick={(e) => handleClick(app.id, e)}
                title={app.title}
                className="group flex flex-col items-center gap-2.5 focus:outline-none"
              >
                <div
                  className="
                    w-20 h-20 md:w-20 md:h-20
                    rounded-2xl flex items-center justify-center
                    border-2 shadow-lg bg-white
                    active:scale-95 transition
                  "
                  style={{
                    backgroundColor: "#fff7ea",
                    borderColor: isOpen
                      ? "var(--color-primary, #f59300)"
                      : "var(--color-gray-lighter, #cecece)",
                  }}
                >
                  <img
                    src={app.icon}
                    alt={app.title}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    draggable="false"
                  />
                </div>

                <div
                  className={`text-xs md:text-sm font-mono ${
                    isOpen ? "font-bold" : "font-medium"
                  }`}
                  style={{
                    color: isOpen
                      ? "var(--color-gray, #424242)"
                      : "var(--color-gray-light, #a4a4a4)",
                  }}
                >
                  {app.title}
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
