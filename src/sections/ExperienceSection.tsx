"use client";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { timeline } from "../data/profile";
import { SectionHeading, ease, trackGlow } from "../components/motion";

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="relative px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & education"
          subtitle="Where I've worked, what I've studied, and what I picked up along the way."
        />

        <div ref={ref} className="relative pl-10 sm:pl-14">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-line sm:left-5" />
          <motion.div
            style={{ scaleY: line }}
            className="absolute left-3 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3 sm:left-5"
          />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.org + i}
                initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease, delay: 0.1 }}
                className="relative"
              >
                <span className="absolute -left-10 top-7 grid h-6 w-6 -translate-x-[0.5px] place-items-center sm:-left-14 sm:translate-x-2">
                  <span className="absolute h-6 w-6 animate-ping rounded-full bg-accent/30" />
                  <span className="relative h-3 w-3 rounded-full bg-gradient-to-br from-accent to-accent-2 ring-4 ring-ink" />
                </span>

                <div onPointerMove={trackGlow} className="glow-card glass rounded-3xl p-7 sm:p-9">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-2">
                        {item.kind === "work" ? "Work" : "Education"}
                      </div>
                      <h3 className="text-2xl font-semibold tracking-tight text-fg">{item.title}</h3>
                      <div className="mt-1 text-muted">{item.org}</div>
                    </div>
                    {item.period && (
                      <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted">
                        {item.period}
                      </span>
                    )}
                  </div>
                  <ul className="mt-6 space-y-2.5">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-3 text-muted">
                        <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-accent-2" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-fg/80 ring-1 ring-line">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
