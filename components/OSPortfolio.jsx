"use client";

import React, { useState, useRef, useEffect } from "react";
import TopBar from "./TopBar";
import Dock from "./Dock";
import Window from "./Window";
import { appsList } from "./index";
import useSound from "use-sound";
import WavesBackground from "../components/UI/WavesBackground";

export default function OSPortfolio() {
  const [mountedAppId, setMountedAppId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [originRect, setOriginRect] = useState(null); // bounding rect of clicked dock icon
  const [topZ, setTopZ] = useState(100);
  const [winZ, setWinZ] = useState(100);

  const [pos, setPos] = useState({ x: 120, y: 80 });
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const [playOpen] = useSound("/audio/mixkit-modern-technology-select-3124.mp3", { volume: 0.5 });
  const [playClose] = useSound("/audio/mixkit-fast-double-click-on-mouse-275.mp3", { volume: 0.5 });

  // center window
  useEffect(() => {
    function center() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setPos({
        x: Math.max(20, Math.round(w / 2 - 520 / 2)),
        y: Math.max(20, Math.round(h / 2 - 420 / 2)),
      });
    }
    if (mountedAppId) center();
    window.addEventListener("resize", center);
    return () => window.removeEventListener("resize", center);
  }, [mountedAppId]);

  // drag global listeners
  useEffect(() => {
    function onPointerMove(e) {
      if (!isDragging) return;
      setPos({ x: e.clientX - dragOffset.current.x, y: e.clientY - dragOffset.current.y });
    }
    function onPointerUp() {
      setIsDragging(false);
    }
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [isDragging]);

  // esc to close
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && mountedAppId) requestCloseApp();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mountedAppId]);

  function handleStartDrag(e) {
    if (!windowRef.current) return;
    setIsDragging(true);
    const rect = windowRef.current.getBoundingClientRect();
    dragOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    bringToFront();
  }

  function bringToFront() {
    const next = topZ + 1;
    setTopZ(next);
    setWinZ(next);
  }

  // openApp receives optional rect from Dock
  function openApp(id, rect) {
    setOriginRect(rect || null);

    if (mountedAppId) {
      // quick replace: close current then open new to get animation
      setIsOpen(false);
      setTimeout(() => {
        setMountedAppId(id);
        setTimeout(() => setIsOpen(true), 20);
      }, 180);
    } else {
      setMountedAppId(id);
      // tiny tick to allow mount before animating
      setTimeout(() => setIsOpen(true), 20);
    }

    try { playOpen(); } catch {}
    bringToFront();
  }

  // request close -> animate out
  function requestCloseApp() {
    setIsOpen(false);
    try { playClose(); } catch {}
  }

  // called by Window after its closing transition ends
  function onCloseComplete() {
    setMountedAppId(null);
    setOriginRect(null);
    setIsOpen(false);
  }

  const activeApp = appsList.find((a) => a.id === mountedAppId);

  return (
    <>
      <Dock apps={appsList} openApp={openApp} openAppId={mountedAppId} />

      {activeApp && (
        <Window
          key={activeApp.id}
          app={activeApp}
          pos={pos}
          windowRef={windowRef}
          onDragStart={handleStartDrag}
          isOpen={isOpen}
          zIndex={winZ}
          originRect={originRect}
          onRequestClose={requestCloseApp}
          onCloseComplete={onCloseComplete}
          bringToFront={bringToFront}
        />
      )}

      {/* small help bubble */}
      <div className="absolute right-6 bottom-6 bg-white/80 backdrop-blur px-4 py-2 rounded-lg border shadow-sm border-slate-200 text-sm">
        Click an app in the left dock to open. Drag the window by its header. Press Esc to close.
      </div>

      <WavesBackground />
    </>
  );
}
