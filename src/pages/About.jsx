import React from "react";
import { motion } from "framer-motion";

export default function About({ t, lang }) {
  return (
    <section
      id="about"
      className="relative py-32 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background accent */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,var(--color-highlight)_0%,transparent_60%)] opacity-[0.05]"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[1300px] px-[8vw] grid md:grid-cols-2 gap-16 items-center"
      >


        {/* Text section */}
        <div className="text-left space-y-6">
          <h2 className="font-title text-4xl md:text-5xl text-[var(--color-light)] drop-shadow-[0_0_12px_var(--color-accent)] mb-4">
            {lang === "sv" ? "Om Beanie" : "About Beanie"}
          </h2>
                <motion.div
                  className="w-80 h-[3px] bg-[var(--color-highlight)] rounded-full mb-10 mx-none origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                />


          <p className="font-body text-[var(--color-accent)] leading-relaxed text-lg">
            {lang === "sv"
              ? "Hej! Jag heter Hildur, men du kan kalla mig Beanie (gissa varför!). BEANIES.TECH är mitt kreativa rum för digitalt arbete. Jag kombinerar front-end-utveckling, fotografi och digital support för att skapa tydliga, mänskliga och visuellt genomtänkta upplevelser."
              : "Hi! My name is Hildur, but you can call me Beanie (guess why!). BEANIES.TECH is my creative space for digital work.I combine front-end development, photography, and digital support to craft clear, human, and visually refined experiences."}
          </p>

         <p className="font-body text-[var(--color-accent)]/80 leading-relaxed max-w-2xl">
            {lang === "sv"
              ? "Mitt arbete förenar det tekniska och det konstnärliga - från funktionell kod till genomtänkta bilder - alltid med fokus på balans, precision och värme."
              : "My work bridges the technical and the artistic - from functional code to thoughtful imagery - always aiming for balance, precision, and warmth."}
          </p>

          <p className="font-body text-[var(--color-accent)]/70 leading-relaxed max-w-2xl">
            {lang === "sv"
              ? "Jag tror på att teknik och design ska samspela naturligt. Varje projekt, stort eller litet, får samma omsorg och känsla för detaljer."
              : "I believe technology and design should flow together naturally. Every project, big or small, receives the same care and attention to detail."}
          </p>


                {/* Tech & Languages tags */}
<div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
  {["React", "TailwindCSS", "Vite", "Python (learning)", "Bash"].map((tech, i) => (
    <span
      key={i}
      className="px-3 py-1 rounded-full text-[0.75rem] font-title bg-[var(--color-surface)]/50 border border-[var(--color-highlight)]/40 text-[var(--color-highlight)] shadow-[0_0_10px_rgba(152,215,150,0.15)] hover:shadow-[0_0_15px_rgba(152,215,150,0.3)] transition"
    >
      {tech}
    </span>
  ))}
</div>

<div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
  {["Italian", "English", "Français", "Svenska"].map((lang, i) => (
    <span
      key={i}
      className="px-3 py-1 rounded-full text-[0.75rem] font-body bg-[var(--color-highlight)]/15 text-[var(--color-accent)] border border-[var(--color-highlight)]/20"
    >
      {lang}
    </span>
  ))}
</div>





                <motion.a
  href="/Hildur_CV.pdf"
  download
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center gap-2 mt-8 bg-[var(--color-highlight)] text-[var(--color-base)] font-title px-6 py-3 rounded-full shadow-[0_0_15px_rgba(152,215,150,0.3)] hover:shadow-[0_0_25px_rgba(152,215,150,0.5)] transition"
>
  {lang === "sv" ? "Ladda ner CV" : "Download CV"}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
</motion.a>



        </div>

        {/* Image Frame */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[300px] h-[400px] rounded-2xl border-2 border-[var(--color-highlight)]/70 shadow-[0_0_25px_rgba(152,215,150,0.2)] overflow-hidden">
            <img
              src="bea.jpg"
              alt="beanie"
              className="object-cover w-full h-full opacity-90 hover:opacity-100 transition duration-500"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
