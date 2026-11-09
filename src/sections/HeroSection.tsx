"use client";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { ArrowRight, GitHubIcon, LinkedInIcon, MailIcon, XIcon } from "../components/icons";
import { Magnetic, ease } from "../components/motion";

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-grid h-[1.25em] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={profile.roles[i]}
          initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.7, ease }}
          className="whitespace-nowrap bg-gradient-to-r from-accent via-accent-2 to-accent-3 bg-clip-text text-transparent"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const word = {
  hidden: { y: "110%" },
  show: (i: number) => ({ y: "0%", transition: { duration: 1, ease, delay: 0.35 + i * 0.08 } }),
};

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  const headline = ["Crafting", "software", "that", "feels", "effortless."];

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center px-5 pb-20 pt-32 sm:px-8"
    >
      <motion.div style={{ y, opacity, scale }} className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="glass mb-8 inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-sm text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="sm:hidden">SDE</span>
            <span className="hidden sm:inline">{profile.role}</span>
            <span>@</span> <span className="text-fg">{profile.company}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mb-3 font-mono text-sm tracking-wide text-accent-2"
          >
            {profile.greeting} 👋
          </motion.p>

          <h1 className="text-[clamp(2.6rem,7vw,5.4rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            {headline.map((w, i) => (
              <span key={w} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  custom={i}
                  variants={word}
                  initial="hidden"
                  animate="show"
                  className={`inline-block ${i === headline.length - 1 ? "text-gradient" : "text-fg"}`}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.9 }}
            className="mt-6 text-xl font-medium text-fg/90 sm:text-2xl"
          >
            <RotatingRole />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.0 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.1 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-fg px-6 py-3 font-medium text-ink shadow-[0_0_40px_-8px_rgb(139_123_255/0.7)] transition-shadow hover:shadow-[0_0_60px_-6px_rgb(139_123_255/0.9)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">View my work</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-fg transition-colors hover:bg-white/10"
              >
                <MailIcon className="h-4 w-4" /> Get in touch
              </a>
            </Magnetic>
            <div className="ml-1 flex items-center gap-1">
              {[
                { href: profile.social.github, icon: <GitHubIcon />, label: "GitHub" },
                { href: profile.social.linkedin, icon: <LinkedInIcon />, label: "LinkedIn" },
                { href: profile.social.twitter, icon: <XIcon />, label: "X / Twitter" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full text-muted transition-all hover:-translate-y-0.5 hover:bg-white/5 hover:text-fg"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.3, ease, delay: 0.4 }}
          className="relative mx-auto w-full max-w-[22rem]"
        >
          <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-accent/30 via-accent-2/20 to-accent-3/20 blur-3xl" />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] p-[2px]">
              <div className="ring-spin absolute -inset-1/2" />
              <div className="relative h-full w-full overflow-hidden rounded-[calc(2.5rem-2px)] bg-ink-2">
                <Image
                  src={profile.avatar}
                  alt={profile.firstName}
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 352px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease, delay: 1.3 }}
              className="glass absolute -left-6 bottom-10 z-10 rounded-2xl !bg-ink-2/80 px-4 py-3 shadow-2xl sm:-left-12"
            >
              <div className="text-2xl font-semibold text-fg">{projects.length}+</div>
              <div className="text-xs text-muted">projects built</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease, delay: 1.45 }}
              className="glass absolute -right-4 top-10 z-10 rounded-2xl !bg-ink-2/80 px-4 py-3 shadow-2xl sm:-right-10"
            >
              <div className="text-2xl font-semibold text-fg">25+</div>
              <div className="text-xs text-muted">public repos</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted sm:flex"
      >
        Scroll
        <span className="relative h-10 w-6 rounded-full border border-white/15">
          <motion.span
            animate={{ y: [6, 20, 6], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-fg"
          />
        </span>
      </motion.a>
    </section>
  );
}
