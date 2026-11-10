"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { profile } from "../data/profile";
import { ArrowRight, GitHubIcon, LinkedInIcon, MailIcon, XIcon } from "../components/icons";
import { Magnetic, Reveal, ease } from "../components/motion";

function Field({
  name,
  label,
  type = "text",
  textarea = false,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "peer w-full rounded-2xl border border-line bg-white/[0.03] px-4 pb-3 pt-6 text-fg placeholder-transparent outline-none transition-all focus:border-accent/60 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgb(139_123_255/0.12)]";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea name={name} required rows={5} placeholder={label} className={`${cls} resize-none`} />
      ) : (
        <input name={name} type={type} required placeholder={label} className={cls} />
      )}
      <span className="pointer-events-none absolute left-4 top-2 text-xs text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-2">
        {label}
      </span>
    </label>
  );
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "");
    const email = String(f.get("email") ?? "");
    const message = String(f.get("message") ?? "");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Hello from ${name}`,
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section id="contact" className="relative px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-14">
            <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-accent-2/20 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col">
                <div className="mb-4 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-2">
                  <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent-2" />
                  Contact
                </div>
                <h2 className="text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
                  Let&apos;s build <br />
                  <span className="text-gradient">something great.</span>
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                  Have a role, a project or just want to talk shop about iOS, full-stack or algorithms? My inbox is
                  always open.
                </p>

                <button
                  onClick={copyEmail}
                  className="group mt-10 inline-flex w-fit items-center gap-3 rounded-2xl border border-line bg-white/[0.03] px-5 py-4 text-left transition-colors hover:bg-white/[0.06]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-ink">
                    <MailIcon />
                  </span>
                  <span>
                    <span className="block text-xs text-muted">{copied ? "Copied to clipboard" : "Click to copy"}</span>
                    <span className="block font-medium text-fg">{profile.email}</span>
                  </span>
                </button>

                <div className="mt-auto flex gap-2 pt-10">
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
                      className="grid h-12 w-12 place-items-center rounded-full border border-line text-muted transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-fg"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease, delay: 0.15 }}
                className="flex flex-col gap-4"
              >
                <Field name="name" label="Your name" />
                <Field name="email" label="Your email" type="email" />
                <Field name="message" label="What would you like to talk about?" textarea />
                <Magnetic strength={0.2}>
                  <button
                    type="submit"
                    className="group relative mt-2 inline-flex items-center gap-2 overflow-hidden rounded-full bg-fg px-7 py-3.5 font-medium text-ink"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative">Send message</span>
                    <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Magnetic>
              </motion.form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
