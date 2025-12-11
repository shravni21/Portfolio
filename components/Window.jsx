"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Props:
 *  - app
 *  - pos {x,y}
 *  - windowRef
 *  - onDragStart
 *  - isOpen (boolean)
 *  - zIndex
 *  - originRect (DOMRect | null)
 *  - onRequestClose()
 *  - onCloseComplete()
 *  - bringToFront()
 */
export default function Window({
  app,
  pos,
  windowRef,
  onDragStart,
  isOpen = false,
  zIndex = 100,
  originRect = null,
  onRequestClose,
  onCloseComplete,
  bringToFront,
}) {
  const innerRef = useRef(null);
  const [initialTransform, setInitialTransform] = useState(null);

  // compute initial transform only once when originRect is present
  useEffect(() => {
    if (!originRect || !innerRef.current) {
      setInitialTransform(null);
      return;
    }

    // window center (final)
    const winRect = innerRef.current.getBoundingClientRect();
    const winCenterX = winRect.left + winRect.width / 2;
    const winCenterY = winRect.top + winRect.height / 2;
    // icon center (origin)
    const iconCenterX = originRect.left + originRect.width / 2;
    const iconCenterY = originRect.top + originRect.height / 2;

    // delta to translate from icon to window center
    const dx = iconCenterX - winCenterX;
    const dy = iconCenterY - winCenterY;

    // small initial scale
    const scale = 0.72;

    // set CSS transform values
    setInitialTransform({ dx, dy, scale });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originRect]);

  // focus on mount
  useEffect(() => {
    if (innerRef.current) innerRef.current.focus();
  }, []);

  // when animation finishes (opacity property), if isOpen === false call onCloseComplete
  function handleTransitionEnd(e) {
    if (e.propertyName === "opacity" && !isOpen) {
      onCloseComplete && onCloseComplete();
    }
  }

  function handlePointerDown(e) {
    bringToFront && bringToFront();
  }

  function handleCloseClick(e) {
    e.stopPropagation();
    onRequestClose && onRequestClose();
  }

  // animation classes (same behavior)
  const animInClass = isOpen
    ? "opacity-100 translate-y-0 scale-100"
    : "opacity-0 translate-y-3 scale-[0.98] pointer-events-none";

  // data attributes for optional transform logic (keeps compatibility with your existing CSS approach)
  const dataAttrs = initialTransform
    ? {
        "data-dx": String(initialTransform.dx),
        "data-dy": String(initialTransform.dy),
        "data-scale": String(initialTransform.scale),
      }
    : {};

  return (
    <div
      ref={windowRef}
      role="dialog"
      aria-label={`${app.title} window`}
      style={{ left: pos.x, top: pos.y, zIndex }}
      {...dataAttrs}
      className={`absolute w-[min(55vw)] h-[75vh] bg-white rounded-lg border border-slate-200 shadow-2xl overflow-hidden select-none
        transition-transform transition-opacity duration-300 ease-out ${animInClass}`}
      onTransitionEnd={handleTransitionEnd}
      onPointerDown={handlePointerDown}
    >
      {/* Titlebar */}
      <div
        onPointerDown={onDragStart}
        className="flex items-center justify-between px-6 py-3 bg-slate-800 text-white border-b border-slate-700 cursor-move select-none"
      >
        <div className="flex items-center gap-3">
          <div className="text-lg opacity-90">{app.icon}</div>
          <div className="font-medium text-lg tracking-wide">{app.title}</div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleCloseClick}
            aria-label="Close window"
            className="w-10 h-9 rounded bg-white/6 border border-slate-700/20 flex items-center justify-center text-sm font-semibold hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-slate-500"
            title="Close"
          >
            <span className="text-[0.95rem]">[x]</span>
          </button>
        </div>
      </div>

      {/* Content (innerRef used for measuring) */}
      <div
        ref={innerRef}
        tabIndex={-1}
        className="p-6 overflow-auto text-slate-700"
        style={{ maxHeight: "calc(86vh - 64px)" }}
      >
        {app.content}
      </div>
    </div>
  );
}
