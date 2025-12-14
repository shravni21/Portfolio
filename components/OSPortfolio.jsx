"use client";

import React, { useState, useEffect, useRef } from "react";
import Dock from "./Dock";
import Window from "./Window";
import { appsList } from "../data/index";
import useSound from "use-sound";
import WavesBackground from "../components/UI/WavesBackground";

export default function OSPortfolio() {
  const [windows, setWindows] = useState([]);
  const [topZ, setTopZ] = useState(100);
  const [isMobile, setIsMobile] = useState(false);

  const [playOpen] = useSound(
    "/audio/mixkit-modern-technology-select-3124.mp3",
    { volume: 0.5 }
  );
  const [playClose] = useSound(
    "/audio/mixkit-fast-double-click-on-mouse-275.mp3",
    { volume: 0.5 }
  );

  /* ================= MOBILE DETECTION (ONCE) ================= */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ================= CENTER POSITION ================= */
  const getCenterPosition = (offset = 0) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    return {
      x: w / 2 - 520 / 2 + offset * 30,
      y: h / 2 - 420 / 2 + offset * 30,
    };
  };

  /* ================= OPEN APP ================= */
  const openApp = (id, rect) => {
    setWindows((current) => {
      const existing = current.find((w) => w.id === id);

      if (existing && !isMobile) {
        const nextZ = topZ + 1;
        setTopZ(nextZ);
        return current.map((w) =>
          w.uniqueId === existing.uniqueId
            ? { ...w, zIndex: nextZ }
            : w
        );
      }

      const app = appsList.find((a) => a.id === id);
      if (!app) return current;

      const nextZ = topZ + 1;
      setTopZ(nextZ);
      playOpen();

      return [
        ...current,
        {
          uniqueId: `${id}-${Date.now()}`,
          id,
          app,
          pos: getCenterPosition(current.length),
          zIndex: nextZ,
          isDragging: false,
          dragOffset: { x: 0, y: 0 },
        },
      ];
    });
  };

  /* ================= CLOSE ================= */
  const requestCloseApp = (uniqueId) => {
    playClose();
    setWindows((prev) => prev.filter((w) => w.uniqueId !== uniqueId));
  };

  /* ================= BRING TO FRONT ================= */
  const bringWindowToFront = (uniqueId) => {
    if (isMobile) return;
    const nextZ = topZ + 1;
    setTopZ(nextZ);
    setWindows((prev) =>
      prev.map((w) =>
        w.uniqueId === uniqueId ? { ...w, zIndex: nextZ } : w
      )
    );
  };

  /* ================= START DRAG ================= */
  const handleStartDrag = (uniqueId, e, windowEl) => {
    if (!windowEl || isMobile) return;

    e.preventDefault();
    const rect = windowEl.getBoundingClientRect();

    setWindows((prev) =>
      prev.map((w) =>
        w.uniqueId === uniqueId
          ? {
              ...w,
              isDragging: true,
              dragOffset: {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              },
            }
          : w
      )
    );

    bringWindowToFront(uniqueId);
  };

  /* ================= DRAG MOVE ================= */
  useEffect(() => {
    if (isMobile) return;

    const onPointerMove = (e) => {
      setWindows((prev) =>
        prev.map((w) =>
          w.isDragging
            ? {
                ...w,
                pos: {
                  x: e.clientX - w.dragOffset.x,
                  y: e.clientY - w.dragOffset.y,
                },
              }
            : w
        )
      );
    };

    const onPointerUp = () => {
      setWindows((prev) =>
        prev.map((w) =>
          w.isDragging ? { ...w, isDragging: false } : w
        )
      );
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [isMobile]);

  return (
    <>
      <Dock
        apps={appsList}
        openApp={openApp}
        openAppIds={windows.map((w) => w.id)}
      />

      {windows.map((win) => {
        const windowRef = React.createRef();

        return (
          <Window
            key={win.uniqueId}
            app={win.app}
            pos={win.pos}
            zIndex={win.zIndex}
            isMobile={isMobile}
            windowRef={windowRef}
            onDragStart={(e) =>
              handleStartDrag(win.uniqueId, e, windowRef.current)
            }
            bringToFront={() => bringWindowToFront(win.uniqueId)}
            onRequestClose={() => requestCloseApp(win.uniqueId)}
          />
        );
      })}

      <WavesBackground />
    </>
    
  );
}
