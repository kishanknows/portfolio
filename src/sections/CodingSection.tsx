"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "../components/icons";
import { CountUp, SectionHeading, staggerChild, staggerParent, trackGlow } from "../components/motion";

type Stat = number | null | "error";

function useCodeforces(handle: string) {
  const [s, setS] = useState<{ rating: Stat; maxRating: Stat; rank: string | null }>({
    rating: null,
    maxRating: null,
    rank: null,
  });
  useEffect(() => {
    fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
      .then((r) => r.json())
      .then((d) => {
        const u = d?.result?.[0];
        if (d.status === "OK" && u) setS({ rating: u.rating ?? "error", maxRating: u.maxRating ?? "error", rank: u.rank ?? null });
        else throw new Error();
      })
      .catch(() => setS({ rating: "error", maxRating: "error", rank: null }));
  }, [handle]);
  return s;
}

function useLeetCode(username: string) {
  const [s, setS] = useState<{ solved: Stat; easy: Stat; medium: Stat; hard: Stat }>({
    solved: null,
    easy: null,
    medium: null,
    hard: null,
  });
  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.totalSolved !== "number") throw new Error();
        setS({ solved: d.totalSolved, easy: d.easySolved, medium: d.mediumSolved, hard: d.hardSolved });
      })
      .catch(() => setS({ solved: "error", easy: "error", medium: "error", hard: "error" }));
  }, [username]);
  return s;
}

function Value({ v }: { v: Stat }) {
  if (v === null) return <span className="inline-block h-[0.8em] w-16 animate-pulse rounded bg-white/10 align-middle" />;
  if (v === "error") return <span className="text-muted">—</span>;
  return <CountUp to={v} />;
}

type Card = {
  name: string;
  handle: string;
  url: string;
  color: string;
  glyph: string;
  primary: { label: string; value: Stat };
  rows: { label: string; value: Stat | string }[];
};

export default function CodingSection() {
  const cf = useCodeforces("aniksh");
  const lc = useLeetCode("kishanknows");

  const cards: Card[] = [
    {
      name: "Codeforces",
      handle: "aniksh",
      url: "https://codeforces.com/profile/aniksh",
      color: "#3b82f6",
      glyph: "CF",
      primary: { label: "Current rating", value: cf.rating },
      rows: [
        { label: "Max rating", value: cf.maxRating },
        { label: "Rank", value: cf.rank ?? (cf.rating === "error" ? "—" : "…") },
      ],
    },
    {
      name: "LeetCode",
      handle: "kishanknows",
      url: "https://leetcode.com/u/kishanknows/",
      color: "#ffa116",
      glyph: "LC",
      primary: { label: "Problems solved", value: lc.solved },
      rows: [
        { label: "Easy", value: lc.easy },
        { label: "Medium", value: lc.medium },
        { label: "Hard", value: lc.hard },
      ],
    },
    {
      name: "CodeChef",
      handle: "blunderer",
      url: "https://www.codechef.com/users/blunderer",
      color: "#c08457",
      glyph: "CC",
      primary: { label: "Profile", value: null },
      rows: [],
    },
  ];

  return (
    <section id="coding" className="relative px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Competitive programming"
          title={
            <>
              Sharpened on <span className="text-gradient">hard problems</span>
            </>
          }
          subtitle="Live stats from the platforms where I practise algorithms and data structures."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 lg:grid-cols-3"
        >
          {cards.map((c) => (
            <motion.a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerChild}
              whileHover={{ y: -6 }}
              onPointerMove={trackGlow}
              className="glow-card glass group relative flex flex-col overflow-hidden rounded-3xl p-8"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                style={{ background: c.color }}
              />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl font-mono text-sm font-bold text-white"
                    style={{ background: c.color }}
                  >
                    {c.glyph}
                  </span>
                  <div>
                    <div className="font-semibold text-fg">{c.name}</div>
                    <div className="font-mono text-xs text-muted">@{c.handle}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
              </div>

              {c.rows.length ? (
                <>
                  <div className="relative mt-10">
                    <div className="text-5xl font-semibold tracking-tight text-fg">
                      <Value v={c.primary.value} />
                    </div>
                    <div className="mt-1 text-sm text-muted">{c.primary.label}</div>
                  </div>
                  <div className="relative mt-8 grid grid-cols-3 gap-3 border-t border-line pt-6">
                    {c.rows.map((r) => (
                      <div key={r.label}>
                        <div className="truncate font-medium capitalize text-fg">
                          {typeof r.value === "string" && r.value !== "error" ? r.value : <Value v={r.value as Stat} />}
                        </div>
                        <div className="text-xs text-muted">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="relative mt-10 flex flex-1 flex-col justify-end">
                  <p className="text-muted">
                    Contest history, rating graph and star rating on my CodeChef profile.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-fg">
                    View profile <ArrowUpRight />
                  </span>
                </div>
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
