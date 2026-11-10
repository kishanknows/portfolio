"use client";
import { useEffect } from "react";

/** Fixed black backdrop: a faint grid, film grain and a soft cursor spotlight. */
export default function Background() {
  useEffect(() => {
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
        document.documentElement.style.setProperty("--my", `${e.clientY}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent/[0.07] blur-[120px]" />
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="spotlight absolute inset-0" />
      <div className="noise absolute inset-0" />
    </div>
  );
}
