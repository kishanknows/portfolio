import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line pb-10 pt-20">
      <div className="mx-auto max-w-6xl">
        <div
          aria-hidden
          className="select-none bg-gradient-to-b from-white/[0.09] to-transparent bg-clip-text text-center text-[22vw] font-semibold leading-[0.8] tracking-[-0.06em] text-transparent lg:text-[15rem]"
        >
          kishan
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Kishan Jangde. Designed & built with Next.js.</span>
          <div className="flex gap-6">
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              GitHub
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              LinkedIn
            </a>
            <a href="#top" className="hover:text-fg">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
