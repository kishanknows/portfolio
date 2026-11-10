"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { profile } from "../data/profile";
import { ArrowUpRight, GitHubIcon, LinkedInIcon, XIcon } from "./icons";
import { Magnetic, ease } from "./motion";

/** The sticky identity card on the left: photo, signature, email, socials, CTA. */
export default function ProfileCard() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <motion.aside
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, ease, delay: 0.1 }}
      className="surface relative mx-auto flex w-full max-w-md flex-col rounded-[2.25rem] p-6 sm:p-7 lg:max-w-none"
    >
      <div className="flex items-center justify-between">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="text-fg"
          aria-hidden
        >
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
            {[0, 45, 90, 135].map((r) => (
              <line key={r} x1="16" y1="3" x2="16" y2="29" transform={`rotate(${r} 16 16)`} />
            ))}
            <circle cx="16" cy="16" r="3.2" fill="#000" stroke="none" />
          </svg>
        </motion.span>
        <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to <span className="text-fg">opportunities</span>
        </span>
      </div>

      {/* Photo + signature */}
      <div className="relative mt-7">
        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0 round 1.75rem)" }}
          animate={{ clipPath: "inset(0% 0 0 0 round 1.75rem)" }}
          transition={{ duration: 1.3, ease, delay: 0.35 }}
          className="group relative aspect-[5/4] overflow-hidden lg:aspect-square rounded-[1.75rem]"
        >
          <motion.div
            initial={{ scale: 1.25 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease, delay: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={profile.avatar}
              alt={profile.fullName}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 360px"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-accent/35 via-transparent to-accent-3/30 mix-blend-soft-light" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </motion.div>

        <motion.h1
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1], delay: 1.1 }}
          className="font-script pointer-events-none absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-[6.5rem] leading-none sm:-bottom-16 text-white drop-shadow-[0_6px_24px_rgb(0_0_0/0.65)] sm:text-[7.5rem]"
        >
          {profile.firstName}
        </motion.h1>
        <span className="sr-only">{profile.fullName}</span>
      </div>

      <button
        onClick={copy}
        className="mt-16 text-center text-xl text-fg/85 transition-colors hover:text-fg"
        title="Copy email"
      >
        {copied ? "Copied to clipboard ✓" : profile.email}
      </button>

      <div className="mt-5 flex justify-center gap-2.5">
        {[
          { href: profile.social.github, icon: <GitHubIcon className="h-4 w-4" />, label: "GitHub" },
          { href: profile.social.linkedin, icon: <LinkedInIcon className="h-4 w-4" />, label: "LinkedIn" },
          { href: profile.social.twitter, icon: <XIcon className="h-4 w-4" />, label: "X / Twitter" },
        ].map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 1.4 + i * 0.08 }}
            whileHover={{ y: -3 }}
            className="grid h-11 w-11 place-items-center rounded-full bg-white/[0.07] text-fg ring-1 ring-line transition-colors hover:bg-fg hover:text-ink"
          >
            {s.icon}
          </motion.a>
        ))}
      </div>

      <a
        href="#contact"
        className="group mt-8 flex items-center justify-between rounded-full border border-line bg-white/[0.02] py-1.5 pl-6 pr-1.5 text-lg text-fg/85 transition-colors hover:border-white/25 hover:text-fg"
      >
        Let&apos;s work together
        <Magnetic strength={0.25}>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-fg text-ink transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </Magnetic>
      </a>
    </motion.aside>
  );
}
