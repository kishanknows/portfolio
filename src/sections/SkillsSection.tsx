"use client";
import { motion } from "motion/react";
import { skillGroups } from "../data/profile";
import {
  SectionHeading,
  staggerChild,
  staggerParent,
  trackGlow,
} from "../components/motion";

const all = skillGroups.flatMap((g) => g.items);

function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div className="marquee overflow-hidden py-2">
      <div
        className="marquee-track flex w-max gap-3"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {row.map((s, i) => (
          <span
            key={s + i}
            className="whitespace-nowrap rounded-full border border-line bg-white/[0.02] px-5 py-2.5 text-sm text-fg/80"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="px-5 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Toolbox"
            title={
              <>
                Technologies I <span className="text-gradient">build with</span>
              </>
            }
            subtitle="From native Apple platforms to distributed Go services. I choose the tool that fits the problem."
          />

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {skillGroups.map((g, gi) => (
              <motion.div
                key={g.title}
                variants={staggerChild}
                whileHover={{ y: -4 }}
                onPointerMove={trackGlow}
                className={`glow-card glass rounded-3xl p-7 ${gi === skillGroups.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-fg">{g.title}</h3>
                  <span className="font-mono text-xs text-muted">
                    0{gi + 1}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg bg-white/[0.04] px-3 py-1.5 text-sm text-fg/85 ring-1 ring-line transition-colors hover:bg-accent/15 hover:text-fg hover:ring-accent/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-16 space-y-3">
        <Marquee items={all} />
        <Marquee items={[...all].reverse()} reverse />
      </div>
    </section>
  );
}
