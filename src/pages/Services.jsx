import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Services({ services, t, lang }) {
  const [expanded, setExpanded] = useState(null);

  const toggleCard = (index) => {
    setExpanded(expanded === index ? null : index); // apre solo una per volta
  };

  return (
    <section
      id="services"
      className="relative py-24 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background glow subtle */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-highlight)_0%,transparent_70%)] opacity-[0.05]"
      />

      <div className="relative z-10 w-full max-w-[1300px] px-[8vw]">
        <h2 className="font-title text-4xl md:text-5xl text-[var(--color-light)] mb-4 drop-shadow-[0_0_12px_var(--color-accent)]">
          {t("services_title")}
        </h2>
        <motion.div
          className="w-60 h-[3px] bg-[var(--color-highlight)] rounded-full mb-10 mx-auto origin-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={i}
              layout
              onClick={() => toggleCard(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group relative cursor-pointer rounded-2xl border border-[var(--color-highlight)]/60 bg-[var(--color-surface)]/30 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-[var(--color-surface)]/60 hover:shadow-[0_0_20px_rgba(152,215,150,0.25)] ${
                expanded === i ? "ring-1 ring-[var(--color-highlight)]" : ""
              }`}
            >
              {/* Subtle glow border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color-highlight)]/50 transition" />

              <div className="flex items-start justify-between mb-3">
                <h3 className="font-title text-xl text-[var(--color-light)] text-left">
                  {s.title[lang]}
                </h3>
                <motion.div
                  animate={{ rotate: expanded === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[var(--color-highlight)] opacity-80" />
                </motion.div>
              </div>

              <p className="font-body text-sm text-[var(--color-accent)] leading-relaxed mb-4 text-left">
                {s.text[lang]}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto justify-start">
                {s.tags?.map((tag, j) => (
                  <span
                    key={j}
                    className="text-[0.65rem] uppercase px-2 py-0.5 rounded-full bg-[var(--color-highlight)]/20 text-[var(--color-highlight)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expandable Details */}
              <AnimatePresence mode="wait">
                {expanded === i && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="mt-5 text-left"
                  >
                    {s.details?.[lang] && (
                      <ul className="list-disc list-inside text-[var(--color-accent)]/90 text-sm space-y-1">
                        {s.details[lang].map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {s.price && (
                      <p className="mt-4 font-title text-[var(--color-highlight)] text-base">
                        {s.price}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
