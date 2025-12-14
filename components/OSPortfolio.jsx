"use client";

import React, { useState, useEffect, useRef } from "react";
import TopBar from "./TopBar";
import Dock from "./Dock";
import Window from "./Window";
import { appsList } from "../data/index";
import useSound from "use-sound";
import WavesBackground from "../components/UI/WavesBackground";

export default function OSPortfolio() {
  const [windows, setWindows] = useState([]);
  const [topZ, setTopZ] = useState(100);

  const [playOpen] = useSound("/audio/mixkit-modern-technology-select-3124.mp3", { volume: 0.5 });
  const [playClose] = useSound("/audio/mixkit-fast-double-click-on-mouse-275.mp3", { volume: 0.5 });

  // Calculate centered position for new window
  const getCenterPosition = (offset = 0) => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
    const h = typeof window !== 'undefined' ? window.innerHeight : 768;
    const baseX = Math.max(20, Math.round(w / 2 - 520 / 2));
    const baseY = Math.max(20, Math.round(h / 2 - 420 / 2));
    
    return {
      x: baseX + offset * 30,
      y: baseY + offset * 30
    };
  };

  // Open or focus app
  const openApp = (id, rect) => {
    setWindows(currentWindows => {
      const existingWindow = currentWindows.find(w => w.id === id);
      
      // If app already open, bring to front
      if (existingWindow) {
        const nextZ = topZ + 1;
        setTopZ(nextZ);
        return currentWindows.map(w => 
          w.uniqueId === existingWindow.uniqueId 
            ? { ...w, zIndex: nextZ } 
            : w
        );
      }

      // Create new window
      const uniqueId = `${id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const app = appsList.find(a => a.id === id);
      
      if (!app) {
        console.error(`App with id "${id}" not found`);
        return currentWindows;
      }

      const nextZ = topZ + 1;
      setTopZ(nextZ);

      const newWindow = {
        uniqueId,
        id,
        app,
        pos: getCenterPosition(currentWindows.length),
        zIndex: nextZ,
        isOpen: false,
        originRect: rect || null,
        isDragging: false,
        dragOffset: { x: 0, y: 0 }
      };

      // Play open sound
      try { playOpen(); } catch (e) { console.error('Sound error:', e); }

      // Add window and schedule animation
      setTimeout(() => {
        setWindows(prev => prev.map(w => 
          w.uniqueId === uniqueId ? { ...w, isOpen: true } : w
        ));
      }, 50);

      return [...currentWindows, newWindow];
    });
  };

  // Request to close window (start close animation)
  const requestCloseApp = (uniqueId) => {
    setWindows(prev => prev.map(w => 
      w.uniqueId === uniqueId ? { ...w, isOpen: false } : w
    ));
    try { playClose(); } catch (e) { console.error('Sound error:', e); }
    
    // Remove window after animation completes (300ms to match CSS transition)
    setTimeout(() => {
      setWindows(prev => prev.filter(w => w.uniqueId !== uniqueId));
    }, 350);
  };

  // Bring window to front
  const bringWindowToFront = (uniqueId) => {
    const nextZ = topZ + 1;
    setTopZ(nextZ);
    setWindows(prev => prev.map(w => 
      w.uniqueId === uniqueId ? { ...w, zIndex: nextZ } : w
    ));
  };

  // Start dragging window
  const handleStartDrag = (uniqueId, e, windowElement) => {
    if (!windowElement) return;
    
    e.preventDefault();
    const rect = windowElement.getBoundingClientRect();
    const offset = { 
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top 
    };
    
    setWindows(prev => prev.map(w => 
      w.uniqueId === uniqueId 
        ? { ...w, isDragging: true, dragOffset: offset } 
        : w
    ));
    
    bringWindowToFront(uniqueId);
  };

  // Global pointer move handler for dragging
  useEffect(() => {
    function onPointerMove(e) {
      setWindows(prev => prev.map(w => {
        if (w.isDragging) {
          return {
            ...w,
            pos: {
              x: Math.max(0, Math.min(window.innerWidth - 100, e.clientX - w.dragOffset.x)),
              y: Math.max(0, Math.min(window.innerHeight - 100, e.clientY - w.dragOffset.y))
            }
          };
        }
        return w;
      }));
    }

    function onPointerUp() {
      setWindows(prev => prev.map(w => 
        w.isDragging ? { ...w, isDragging: false } : w
      ));
    }

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  // ESC key to close topmost window
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape" && windows.length > 0) {
        e.preventDefault();
        const topWindow = windows.reduce((max, w) => 
          w.zIndex > max.zIndex ? w : max
        , windows[0]);
        requestCloseApp(topWindow.uniqueId);
      }
    }
    
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [windows]);

  // Handle window resize - recenter all windows
  useEffect(() => {
    let resizeTimer;
    
    function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setWindows(prev => prev.map((win, index) => ({
          ...win,
          pos: getCenterPosition(index)
        })));
      }, 100);
    }
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Get list of open app IDs for dock indicators
  const openAppIds = windows.map(w => w.id);

  return (
    <>
      <Dock 
        apps={appsList} 
        openApp={openApp} 
        openAppIds={openAppIds} 
      />

      {windows.map((win) => {
        const windowRef = React.createRef();
        
        return (
          <Window
            key={win.uniqueId}
            app={win.app}
            pos={win.pos}
            windowRef={windowRef}
            onDragStart={(e) => handleStartDrag(win.uniqueId, e, windowRef.current)}
            isOpen={win.isOpen}
            zIndex={win.zIndex}
            originRect={win.originRect}
            onRequestClose={() => requestCloseApp(win.uniqueId)}
            bringToFront={() => bringWindowToFront(win.uniqueId)}
          />
        );
      })}

      <WavesBackground />
    </>
  );
}