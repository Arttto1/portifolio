"use client";

import { useEffect, useRef } from "react";

export default function MouseCircle() {
  const circleRef = useRef(null);

  function moveCircle(e) {
    if (circleRef.current) {
      circleRef.current.style.transform = `translate(${e.clientX - 24}px, ${e.clientY - 24}px)`;
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", moveCircle);

    return () => window.removeEventListener("mousemove", moveCircle);
  });

  return (
    <div
      ref={circleRef}
      className={`fixed top-0 left-0 z-50 w-12 h-12 bg-white pointer-events-none rounded-full transition-transform duration-500 ease-out mix-blend-difference`}
    ></div>
  );
}
