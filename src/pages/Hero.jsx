// src/pages/Hero.jsx
// =========================
import React, { useState, useEffect } from "react";
import { Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { nav } from "../data";

export default function Hero({ t, lang, setLang }) {
  const [glow, setGlow] = useState(false);

  const toggleLang = () => {
    const newLang = lang === "en" ? "sv" : "en";
    setLang(newLang);
    setGlow(true);
  };

  useEffect(() => {
    if (glow) {
      const timer = setTimeout(() => setGlow(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [glow]);

  // Subheadline (Opzione A)
  const subheadline =
    lang === "sv"
      ? "Frontend-utveckling med fokus på design, prestanda och flerspråkig struktur - samt digitala tjänster och fotografi."
      : "Frontend development with focus on design, performance, and multilingual structure - plus digital services and photography.";

  // Pills
  const chips =
    lang === "sv"
      ? ["Frontend", "Digitala tjänster", "Fotografi"]
      : ["Frontend", "Digital services", "Photography"];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-highlight),var(--color-accent),var(--color-base))] bg-[length:300%_300%] animate-[gradientShift_10s_ease_infinite] opacity-20"
      />

      <div className="relative z-10 w-full max-w-[1400px] px-[8vw] flex flex-col items-center justify-center gap-20">
        {/* Top Row: Logo + Name + Menu + Lang Toggle */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4">
          {/* Logo + Name */}
          <div className="flex items-center gap-3 justify-center sm:justify-start w-full sm:w-auto">
  <Cpu className="w-7 h-7 text-[var(--color-highlight)] drop-shadow-[0_0_8px_var(--color-highlight)]" />
  <h1 className="font-title text-2xl md:text-3xl tracking-[0.25em] text-[var(--color-light)]">
    <span className="bg-[var(--color-highlight)]/15 px-3 py-1 rounded-lg text-[var(--color-light)] shadow-[0_0_10px_rgba(152,215,150,0.25)]">
  BEANIES.TECH
</span>

  </h1>
</div>


          {/* Menu + Language Switch */}
          <div className="flex items-center justify-center sm:justify-end gap-8 w-full sm:w-auto">
            <nav className="flex flex-wrap justify-center gap-6 text-[var(--color-light)]/80 text-sm font-body">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="hover:text-[var(--color-highlight)] transition"
                >
                  {item.label[lang]}
                </a>
              ))}
            </nav>

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              type="button"
              className={`relative w-16 h-8 rounded-full border border-[var(--color-highlight)]/60 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]/60 ${
                glow
                  ? "shadow-[0_0_15px_var(--color-highlight)]"
                  : "shadow-[0_0_6px_rgba(0,0,0,0.4)]"
              }`}
              aria-label={lang === "sv" ? "Byt språk till engelska" : "Switch language to Swedish"}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-7 h-7 bg-[var(--color-highlight)] rounded-full transition-transform duration-500 ${
                  lang === "sv" ? "translate-x-[1.9rem]" : "translate-x-0"
                }`}
              />
              <span className="absolute inset-0 flex justify-between items-center px-2 text-[10px] font-title text-[var(--color-base)] z-10 select-none">
                <span className={`${lang === "en" ? "text-[var(--color-base)] font-bold" : "text-[var(--color-light)]/70"}`}>
                  EN
                </span>
                <span className={`${lang === "sv" ? "text-[var(--color-base)] font-bold" : "text-[var(--color-light)]/70"}`}>
                  SV
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Intro Text */}
        <div className="max-w-5xl text-center px-4 sm:px-0">

          <h2 className="font-title text-[clamp(2.8rem,5vw,4.5rem)] text-[var(--color-light)] drop-shadow-[0_0_12px_var(--color-accent)]">
            {t("hero_title")}
          </h2>

          {/* Opzione A - subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-5 text-[clamp(1rem,1.2vw,1.25rem)] text-[var(--color-accent)] font-body leading-relaxed"
          >
            {subheadline}
          </motion.p>

          {/* Pills */}
          <motion.ul
  key={lang} // 👈 forza il re-render corretto
  initial="hidden"
  animate="show"
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.35 },
    },
  }}
  className="mt-4 flex flex-wrap justify-center gap-2"
>

            {chips.map((c) => (
              <motion.li
                key={c}
                variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
                className="text-xs tracking-wide px-3 py-1 rounded-full bg-[var(--color-highlight)]/15 text-[var(--color-light)] border border-[var(--color-highlight)]/40"
              >
                {c}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}