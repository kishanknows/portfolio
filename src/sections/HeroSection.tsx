"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { ArrowUpRight, LinkedInIcon, MailIcon } from "../components/icons";
import { ease } from "../components/motion";

const chips = ["iOS", "Swift", "UIKit", "React Native", "Node.js", "Go", "Spring Boot", "System Debugging"];

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-grid h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={profile.roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease }}
          className="whitespace-nowrap text-accent-2"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const lines = [["Engineering", "reliable"], ["products,", "pixel", "to"], ["production."]];

/** Typographic project preview, styled like a mini website screenshot. */
const looks = [
  { name: "taskizy", word: "taskizy", glow: "from-accent/50 via-accent-3/25", font: "font-semibold tracking-[-0.04em]", tag: "Menu-bar productivity" },
  { name: "ecom-microservices", word: "ecom", glow: "from-accent-2/45 via-accent/20", font: "font-script !text-[8.5rem] !leading-[0.8]", tag: "Distributed commerce" },
];

function Preview({ i }: { i: number }) {
  const look = looks[i];
  const proj = projects.find((x) => x.name === look.name)!;
  return (
    <motion.a
      href={proj.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease, delay: 1.05 + i * 0.12 }}
      whileHover={{ y: -6 }}
      className="surface group relative h-56 overflow-hidden rounded-[1.75rem] sm:h-60"
    >
      <div className={`absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-gradient-to-tr ${look.glow} to-transparent blur-3xl transition-transform duration-700 group-hover:scale-125`} />
      {/* fake browser chrome */}
      <div className="relative flex items-center justify-between px-5 pt-4 font-mono text-[9px] uppercase tracking-widest text-muted">
        <span className="flex gap-3"><span>About</span><span>Work</span><span>Contact</span></span>
        <span className="text-fg/70">{proj.title.split(" ")[0]}</span>
        <span className="rounded-full border border-line px-2 py-0.5">Repo</span>
      </div>
      <div className="relative px-5 pt-5">
        <div className="text-lg leading-tight text-fg">{look.tag}</div>
        <div className="mt-1 max-w-[15rem] text-xs leading-snug text-muted">{proj.description.slice(0, 70)}…</div>
      </div>
      <div className={`absolute -bottom-3 left-4 text-[5.5rem] leading-none text-fg transition-transform duration-700 group-hover:-translate-y-1 ${look.font}`}>
        {look.word}
      </div>
      <span className="absolute right-4 top-14 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-fg opacity-0 backdrop-blur transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100">
        <ArrowUpRight />
      </span>
    </motion.a>
  );
}

export default function HeroSection() {
  let k = 0;
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-center py-14 lg:py-10">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.3 }}
        className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] text-fg/75"
      >
        <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-fg">
          <MailIcon className="h-4 w-4" /> {profile.email}
        </a>
        <span className="hidden h-5 w-px bg-line sm:block" />
        <span className="inline-flex items-center gap-2">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24" aria-hidden>
            <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          {profile.location}
        </span>
        <span className="hidden h-5 w-px bg-line sm:block" />
        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-fg">
          <LinkedInIcon className="h-4 w-4" /> /in/kishanknows
        </a>
      </motion.div>

      <h2 className="mt-10 text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.01em] text-fg">
        {lines.map((line, li) => (
          <span key={li} className="block">
            {line.map((w) => {
              const idx = k++;
              return (
                <span key={w} className="mr-[0.24em] inline-block overflow-hidden pb-[0.06em] align-bottom">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, ease, delay: 0.45 + idx * 0.07 }}
                    className={`inline-block ${w === "production." ? "text-gradient" : ""}`}
                  >
                    {w}
                  </motion.span>
                </span>
              );
            })}
          </span>
        ))}
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.85 }}
        className="mt-7 max-w-xl text-xl leading-snug text-muted"
      >
        {profile.role} at <span className="text-fg">{profile.company}</span>.{" "}
        <RotatingRole /> building reliable, user-facing products end to end.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.95 } } }}
        className="mt-8 flex max-w-2xl flex-wrap gap-2.5"
      >
        {chips.map((c) => (
          <motion.span
            key={c}
            variants={{ hidden: { opacity: 0, y: 12, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease } } }}
            whileHover={{ y: -2 }}
            className="cursor-default rounded-full border border-line bg-white/[0.03] px-5 py-2 text-[15px] text-fg/80 transition-colors hover:border-white/30 hover:bg-white/[0.07] hover:text-fg"
          >
            {c}
          </motion.span>
        ))}
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr_auto]">
        <Preview i={0} />
        <Preview i={1} />
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.3 }}
          whileHover={{ y: -6 }}
          className="surface group flex h-16 items-center justify-center gap-3 rounded-[1.75rem] text-xl tracking-[0.2em] text-fg sm:h-60 sm:w-20 sm:flex-col"
        >
          <span className="sm:[writing-mode:vertical-rl] sm:rotate-180">MORE</span>
          <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
        </motion.a>
      </div>
    </section>
  );
}
