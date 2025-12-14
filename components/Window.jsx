"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Window({
  app,
  pos = { x: 100, y: 100 },
  windowRef,
  onDragStart,
  isOpen = true,
  zIndex = 100,
  onRequestClose,
  bringToFront,
}) {
  const innerRef = useRef(null);
  const startY = useRef(0);
  const currentY = useRef(0);

  const [isMobile, setIsMobile] = useState(false);
  const [dragOffsetY, setDragOffsetY] = useState(0);

  /* ================= MOBILE DETECTION ================= */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ================= SWIPE DOWN (MOBILE) ================= */
  function onPointerDown(e) {
    if (!isMobile) {
      bringToFront && bringToFront();
      return;
    }
    startY.current = e.clientY;
  }

  function onPointerMove(e) {
    if (!isMobile) return;
    currentY.current = e.clientY - startY.current;
    if (currentY.current > 0) {
      setDragOffsetY(currentY.current);
    }
  }

  function onPointerUp() {
    if (!isMobile) return;
    if (currentY.current > 120) {
      onRequestClose && onRequestClose();
    }
    setDragOffsetY(0);
    currentY.current = 0;
  }

  /* ================= POSITIONING ================= */
  const left = typeof pos.x === "number" ? `${pos.x}px` : pos.x;
  const top = typeof pos.y === "number" ? `${pos.y}px` : pos.y;

  return (
    <div
      ref={windowRef}
      role="dialog"
      aria-label={`${app?.title ?? "app"} window`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{
        left: isMobile ? 0 : left,
        top: isMobile ? "auto" : top,
        bottom: isMobile ? 0 : "auto",
        zIndex,
        transform: isMobile
          ? `translateY(${dragOffsetY}px)`
          : undefined,
        transition: isMobile
          ? "transform 0.25s ease-out"
          : "transform 0.15s ease-out, opacity 0.15s ease-out",
      }}
      className={`
        ${isMobile ? "fixed w-full h-[50vh] rounded-t-2xl" : "absolute w-[min(55vw,900px)] h-[75vh] rounded-lg"}
        bg-white border border-slate-200 shadow-2xl overflow-hidden
        select-none
      `}
    >
      {/* ================= TITLE BAR ================= */}
      <div
        onPointerDown={!isMobile ? onDragStart : undefined}
        className={`
          flex items-center justify-between px-5 py-3
          ${isMobile ? "cursor-default" : "cursor-move"}
          text-white border-b
        `}
        style={{
          backgroundColor: "var(--color-gray, #424242)",
          borderColor: "var(--color-gray-light, #a4a4a4)",
        }}
      >
        <div className="font-medium text-lg tracking-wide">
          {app?.title}
        </div>

        <button
          onClick={onRequestClose}
          aria-label="Close window"
          className="w-9 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white/20"
        >
          ✕
        </button>
      </div>

      {/* ================= CONTENT ================= */}
      <div
        ref={innerRef}
        tabIndex={-1}
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
