"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Props:
 *  - app
 *  - pos {x,y}  (numbers or CSS strings like "20px" allowed)
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
  pos = { x: 100, y: 100 },
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
  const [applyInitial, setApplyInitial] = useState(false);

  // compute initial transform only once when originRect is present
  useEffect(() => {
    if (!originRect || !innerRef.current) {
      setInitialTransform(null);
      return;
    }

    const winRect = innerRef.current.getBoundingClientRect();
    const winCenterX = winRect.left + winRect.width / 2;
    const winCenterY = winRect.top + winRect.height / 2;

    const iconCenterX = originRect.left + originRect.width / 2;
    const iconCenterY = originRect.top + originRect.height / 2;

    const dx = iconCenterX - winCenterX;
    const dy = iconCenterY - winCenterY;
    const scale = 0.72;

    setInitialTransform({ dx, dy, scale });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originRect]);

  // Trigger the entry animation: set initial transform, then remove it next frame so transition runs.
  useEffect(() => {
    if (initialTransform && isOpen) {
      // apply initial style for one frame, then remove to let CSS transition animate to final
      setApplyInitial(true);
      const raf = requestAnimationFrame(() => {
        // remove initial transform next frame, which will cause CSS transition to animate
        // use another rAF to ensure layout applied — two frames is safer cross-browser
        requestAnimationFrame(() => setApplyInitial(false));
      });

      return () => cancelAnimationFrame(raf);
    } else {
      // If not open or no initial transform, make sure we don't hold it
      setApplyInitial(false);
    }
  }, [initialTransform, isOpen]);

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

  // animation classes
  const animInClass = isOpen
    ? "opacity-100 translate-y-0 scale-100"
    : "opacity-0 translate-y-3 scale-[0.98] pointer-events-none";

  // data attributes for optional transform logic (keeps compatibility with existing CSS approach)
  const dataAttrs = initialTransform
    ? {
        "data-dx": String(initialTransform.dx),
        "data-dy": String(initialTransform.dy),
        "data-scale": String(initialTransform.scale),
      }
    : {};

  // build inline transform style for entry animation
  // when applyInitial === true we set transform to translate(dx,dy) scale(scale)
  // otherwise let CSS/utility classes handle transform (or undefined)
  const entryTransformStyle =
    initialTransform && applyInitial
      ? `translate(${initialTransform.dx}px, ${initialTransform.dy}px) scale(${initialTransform.scale})`
      : undefined;

  // Ensure left/top have units if pos.x/pos.y are numbers
  const left = typeof pos.x === "number" ? `${pos.x}px` : pos.x;
  const top = typeof pos.y === "number" ? `${pos.y}px` : pos.y;

  return (
    <div
      ref={windowRef}
      role="dialog"
      aria-label={`${app?.title ?? "app"} window`}
      style={{
        left,
        top,
        zIndex,
        transform: entryTransformStyle,
        // preserve the transform transitions declared by tailwind classes
        transitionProperty: "transform, opacity",
      }}
      {...dataAttrs}
      className={`absolute w-[min(55vw,900px)] h-[75vh] bg-white rounded-lg border border-slate-200 shadow-2xl overflow-hidden select-none transition-transform transition-opacity duration-150 ease-out ${animInClass}`}
      onTransitionEnd={handleTransitionEnd}
      onPointerDown={handlePointerDown}
    >
      {/* Titlebar */}
      <div
        onPointerDown={onDragStart}
        className="flex items-center justify-between px-6 py-3 text-white border-b cursor-move select-none"
          style={{
          backgroundColor: "var(--color-gray, #424242)",
          color: "#fff",
          borderColor: "var(--color-gray-light, #a4a4a4)",
        }}
      >
        <div className="flex items-center gap-3">
          {/* <div className="text-lg opacity-90">{app?.icon}</div> */}
          <div className="font-medium text-lg tracking-wide">{app?.title}</div>
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
        {app?.content}
      </div>
    </div>
  );
}
