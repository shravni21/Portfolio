import React, { useRef } from "react";

export default function Dock({ apps, openApp, openAppId }) {
  const buttonsRef = useRef({});

  function handleClick(appId) {
    const btn = buttonsRef.current[appId];
    const rect = btn ? btn.getBoundingClientRect() : null;
    openApp(appId, rect);
  }

  return (
    <aside className="absolute left-4 top-20 w-28 bg-white/70 backdrop-blur p-3 rounded-xl shadow-lg border border-slate-200">
      <div className="flex flex-col gap-2">
        {apps.map((app) => (
          <button
            key={app.id}
            ref={(el) => (buttonsRef.current[app.id] = el)}
            onClick={() => handleClick(app.id)}
            className={`flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 focus:outline-none ${openAppId === app.id ? "ring-2 ring-offset-1 ring-slate-300" : ""}`}
          >
            <div className="text-lg">{app.icon}</div>
            <div className="text-sm text-slate-700">{app.title}</div>
          </button>
        ))}
      </div>
    </aside>
  );
}
