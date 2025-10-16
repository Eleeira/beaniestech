import React from "react";
import { Linkedin, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[var(--color-highlight)]/30 bg-[linear-gradient(90deg,var(--color-base),var(--color-surface),var(--color-base))] bg-[length:300%_300%] animate-[gradientShift_12s_ease_infinite] text-center py-10 overflow-hidden">
      {/* Soft radial accent */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-highlight)_0%,transparent_70%)] opacity-[0.05]"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-[var(--color-accent)]">
        <h3 className="font-title text-xl md:text-2xl tracking-[0.25em] text-[var(--color-light)] animate-[pulse_6s_ease-in-out_infinite] drop-shadow-[0_0_6px_var(--color-accent)]">
          BEANIES.TECH
        </h3>

        <div className="w-24 h-[1px] bg-[var(--color-highlight)]/50 rounded-full"></div>

        <div className="flex gap-6">

          <a
          href="https://github.com/eleeira"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--color-highlight)] transition"
        >
          <Github className="w-6 h-6" />
        </a>


          <a
            href="https://www.linkedin.com/in/adadigitalservices/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 hover:text-[var(--color-highlight)]"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:adacatucci@proton.me"
            className="transition transform hover:scale-110 hover:text-[var(--color-highlight)]"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <p className="text-xs text-[var(--color-accent)]/70 mt-4 font-body">
          © {new Date().getFullYear()} BEANIES.TECH Website designed and build by Hildur A. Catucci. All rights reserved.
        </p>
      </div>

      {/* Scrolling tech signature */}
      {/* Shimmer tech signature */}
<div className="relative mt-8 flex justify-center">
  <p
    className="text-[10px] md:text-xs font-mono text-transparent bg-clip-text 
               bg-[linear-gradient(90deg,var(--color-accent),var(--color-highlight),var(--color-accent))]
               bg-[length:200%_100%] animate-[shimmer_6s_linear_infinite]"
  >
    Built with React ⚛︎ + Vite ⚡ + TailwindCSS 💨 — BEANIES.TECH —
  </p>
</div>


    </footer>
  );
}

