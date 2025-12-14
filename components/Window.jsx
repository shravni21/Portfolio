"use client";

import React, { useRef, useState } from "react";

export default function Window({
  app,
  pos = { x: 100, y: 100 },
  windowRef,
  onDragStart,
  zIndex = 100,
  onRequestClose,
  bringToFront,
  isMobile,
}) {
  const startY = useRef(0);
  const currentY = useRef(0);
  const [offsetY, setOffsetY] = useState(0);

  /* ================= MOBILE SWIPE ================= */
  const handlePointerDown = (e) => {
    if (!isMobile) return;
    startY.current = e.clientY;
  };

  const handlePointerMove = (e) => {
    if (!isMobile) return;
    currentY.current = e.clientY - startY.current;
    if (currentY.current > 0) setOffsetY(currentY.current);
  };

  const handlePointerUp = () => {
    if (!isMobile) return;
    if (currentY.current > 120) onRequestClose?.();
    setOffsetY(0);
    currentY.current = 0;
  };

  return (
    <div
      ref={windowRef}
      role="dialog"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onMouseDown={!isMobile ? bringToFront : undefined}
      style={{
        left: isMobile ? 0 : `${pos.x}px`,
        top: isMobile ? "auto" : `${pos.y}px`,
        bottom: isMobile ? 0 : "auto",
        zIndex,
        transform: isMobile ? `translateY(${offsetY}px)` : undefined,
        transition: "transform 0.25s ease",
      }}
      className={`
        ${isMobile
          ? "fixed w-full h-[50vh] rounded-t-2xl"
          : "absolute w-[min(55vw,900px)] h-[75vh] rounded-lg"}
        bg-white border border-slate-200 shadow-2xl overflow-hidden select-none
      `}
    >
      {/* ================= TITLE BAR ================= */}
      <div
        onPointerDown={!isMobile ? onDragStart : undefined}
        className={`flex items-center justify-between px-5 py-3 border-b text-white ${
          isMobile ? "" : "cursor-move"
        }`}
        style={{
          backgroundColor: "var(--color-gray, #424242)",
          borderColor: "var(--color-gray-light, #a4a4a4)",
        }}
      >
        <span className="font-medium text-lg">{app?.title}</span>
        <button
          onClick={onRequestClose}
          className="w-8 h-8 flex items-center justify-center rounded bg-white/10 hover:bg-white/20"
        >
          ✕
        </button>
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="p-6 overflow-auto text-slate-700"
        style={{
          maxHeight: isMobile
            ? "calc(50vh - 56px)"
            : "calc(75vh - 56px)",
        }}
      >
        {app?.content}
      </div>
    </div>
  );
}
