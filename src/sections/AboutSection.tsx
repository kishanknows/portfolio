"use client";
import { motion } from "motion/react";
import { profile, skillGroups } from "../data/profile";
import { projects } from "../data/projects";
import { CountUp, Reveal, SectionHeading, staggerChild, staggerParent, trackGlow } from "../components/motion";

const stats = [
  { value: projects.length, suffix: "+", label: "Projects built" },
  { value: 25, suffix: "+", label: "Public repositories" },
  { value: 3, suffix: "", label: "CP platforms" },
  { value: skillGroups.length, suffix: "", label: "Engineering domains" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              Engineer by craft, <span className="text-gradient">problem‑solver</span> by habit.
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            {profile.about.map((para, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-lg leading-relaxed text-muted first-letter:text-fg">{para}</p>
              </Reveal>
            ))}
          </div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 content-start gap-3"
          >
            {profile.highlights.map((h) => (
              <motion.div
                key={h.label}
                variants={staggerChild}
                onPointerMove={trackGlow}
                className="glow-card glass rounded-2xl p-5"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{h.label}</div>
                <div className="mt-2 font-medium text-fg">{h.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid grid-cols-2 overflow-hidden rounded-3xl border border-line md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={staggerChild}
              className={`bg-white/[0.015] p-7 sm:p-9 ${i % 2 === 0 ? "border-r border-line" : ""} ${
                i < 2 ? "border-b border-line md:border-b-0" : ""
              } ${i === 1 ? "md:border-r" : ""}`}
            >
              <div className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
