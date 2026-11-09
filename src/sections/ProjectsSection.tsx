"use client";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useState } from "react";
import { categories, projects, type Category, type Project } from "../data/projects";
import { ArrowUpRight, GitHubIcon, StarIcon } from "../components/icons";
import { SectionHeading, ease, staggerChild, staggerParent, trackGlow } from "../components/motion";

const gradients: Record<Category, string> = {
  Backend: "from-[#6d5dfc] via-[#3b82f6] to-[#3ee0d0]",
  Apple: "from-[#ff8fb1] via-[#a78bfa] to-[#6d5dfc]",
  Mobile: "from-[#3ee0d0] via-[#22c55e] to-[#a3e635]",
  Tools: "from-[#f59e0b] via-[#ff8fb1] to-[#a78bfa]",
  "Algorithms & ML": "from-[#38bdf8] via-[#6d5dfc] to-[#ff8fb1]",
};

/** Large featured card with 3D tilt + cursor glow. */
function FeaturedCard({ p, index }: { p: Project; index: number }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 150, damping: 18 });

  return (
    <motion.a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={staggerChild}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      onPointerMove={(e) => {
        trackGlow(e);
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      className={`glow-card glass group relative flex min-h-[22rem] flex-col overflow-hidden rounded-3xl p-8 ${
        index % 3 === 0 ? "md:col-span-2" : ""
      }`}
    >
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${gradients[p.category]} opacity-25 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-45`}
      />
      <div className="relative flex items-center justify-between">
        <span className="rounded-full bg-white/[0.06] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-fg/80 ring-1 ring-line">
          {p.category}
        </span>
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white/[0.06] text-fg ring-1 ring-line transition-all duration-500 group-hover:rotate-45 group-hover:bg-fg group-hover:text-ink">
          <ArrowUpRight />
        </span>
      </div>

      <div className="relative mt-auto pt-16">
        <div className="font-mono text-xs text-muted">{p.year}</div>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{p.title}</h3>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">{p.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-fg/80 ring-1 ring-line">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.a
      layout
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.94, filter: "blur(6px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.94, filter: "blur(6px)" }}
      transition={{ duration: 0.5, ease }}
      whileHover={{ y: -6 }}
      onPointerMove={trackGlow}
      className="glow-card glass group flex flex-col rounded-2xl p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className={`h-10 w-10 flex-none rounded-xl bg-gradient-to-br ${gradients[p.category]} p-[1px]`}>
          <div className="grid h-full w-full place-items-center rounded-[11px] bg-ink-2 text-muted transition-colors group-hover:text-fg">
            <GitHubIcon className="h-4 w-4" />
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted">
          {p.stars ? (
            <span className="inline-flex items-center gap-1 text-amber-300/90">
              <StarIcon /> {p.stars}
            </span>
          ) : null}
          <span className="font-mono">{p.year}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
        </div>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-fg">{p.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.tech.map((t) => (
          <span key={t} className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-fg/70">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const featured = projects.filter((p) => p.featured);
  const rest = projects
    .filter((p) => !p.featured)
    .filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="relative px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Things I&apos;ve <span className="text-gradient">built</span>
            </>
          }
          subtitle="Microservices, native macOS apps, Rust tooling, mobile apps and algorithms research."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-2"
          style={{ perspective: 1200 }}
        >
          {featured.map((p, i) => (
            <FeaturedCard key={p.name} p={p} index={i} />
          ))}
        </motion.div>

        <div className="mt-24 flex flex-wrap items-end justify-between gap-6">
          <h3 className="text-2xl font-semibold tracking-tight text-fg">More projects</h3>
          <div className="glass flex flex-wrap gap-1 rounded-full p-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                  filter === c ? "text-ink" : "text-muted hover:text-fg"
                }`}
              >
                {filter === c && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-fg"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {rest.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>
        {rest.length === 0 && (
          <p className="mt-8 text-center text-muted">The featured projects above cover this category.</p>
        )}

        <div className="mt-14 flex justify-center">
          <a
            href="https://github.com/kishanknows?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-fg transition-colors hover:bg-white/5"
          >
            <GitHubIcon className="h-4 w-4" /> See everything on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
