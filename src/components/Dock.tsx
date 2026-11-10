"use client";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { ease } from "./motion";

const I = ({ d }: { d: ReactNode }) => (
  <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
    {d}
  </svg>
);

const items = [
  { id: "top", label: "Home", icon: <I d={<><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M10 21v-6h4v6" /></>} /> },
  { id: "about", label: "About", icon: <I d={<><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>} /> },
  { id: "experience", label: "Experience", icon: <I d={<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></>} /> },
  { id: "skills", label: "Skills", icon: <I d={<><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></>} /> },
  { id: "projects", label: "Projects", icon: <I d={<><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>} /> },
  { id: "coding", label: "Coding", icon: <I d={<><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></>} /> },
  { id: "contact", label: "Contact", icon: <I d={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>} /> },
];

/** Vertical icon dock on the right (desktop) / bottom bar (mobile), with scroll-spy. */
export default function Dock() {
  const [active, setActive] = useState("top");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-accent via-accent-2 to-accent-3"
      />
      <motion.nav
        aria-label="Sections"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease, delay: 0.6 }}
        className="surface fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-1 rounded-full p-1.5 lg:bottom-auto lg:left-auto lg:right-6 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:flex-col lg:gap-2 lg:p-2"
      >
        {items.map((it) => {
          const on = active === it.id;
          return (
            <a
              key={it.id}
              href={`#${it.id}`}
              aria-label={it.label}
              aria-current={on ? "true" : undefined}
              className={`group relative grid h-10 w-10 place-items-center rounded-full transition-colors lg:h-12 lg:w-12 ${
                on ? "text-ink" : "text-fg/70 hover:text-fg"
              }`}
            >
              {on && (
                <motion.span
                  layoutId="dock-pill"
                  className="absolute inset-0 rounded-full bg-fg shadow-[0_0_30px_-4px_rgb(255_255_255/0.55)]"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
              <span className="relative">{it.icon}</span>
              <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 whitespace-nowrap rounded-full border border-line bg-card px-3 py-1 text-sm text-fg opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
                {it.label}
              </span>
            </a>
          );
        })}
      </motion.nav>
    </>
  );
}
