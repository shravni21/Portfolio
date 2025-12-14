"use client";
import { useState } from "react";
import { appsList } from "../data/index";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl bg-white shadow mb-4 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-5 py-4 flex justify-between items-center font-semibold"
      >
        {title}
        <span className={`transition ${open ? "rotate-180" : ""}`}>⌄</span>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-[1000px] p-5" : "max-h-0 p-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function MobileAppLayout() {
  return (
    <div className="min-h-screen bg-slate-100 p-4 pb-20">
      <h1 className="text-2xl font-bold text-center mb-6">
        hi, i&apos;m shravni 👋
      </h1>

      {appsList.map((app) => (
        <Accordion key={app.id} title={app.title}>
          {app.content}
        </Accordion>
      ))}
    </div>
  );
}
