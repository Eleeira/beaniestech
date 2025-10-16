import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Work({ projects, t, lang }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Chiudi con ESC
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && setSelectedImage(null);
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section
      id="work"
      className="relative py-28 flex flex-col items-center justify-center overflow-hidden"
    >
      
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_70%)] opacity-[0.05]"
      />

      <div className="relative z-10 w-full max-w-[1300px] px-[8vw]">
        <h2 className="font-title text-4xl md:text-5xl text-[var(--color-light)] mb-4 text-center drop-shadow-[0_0_12px_var(--color-accent)]">
          {t("work_title")}
        </h2>
        <motion.div
          className="w-95 h-[3px] bg-[var(--color-highlight)] rounded-full mb-10 mx-auto origin-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />



       {projects.map((p, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="grid md:grid-cols-2 gap-12 items-center mb-32"
  >
            {/* Text Section */}
<div className="order-2 md:order-1">
  <h3 className="font-title text-3xl text-[var(--color-light)] mb-4">
    {p.title[lang]}
  </h3>
  <p className="font-body text-[var(--color-accent)] leading-relaxed mb-8">
    {p.description?.[lang]}
  </p>

  {/* Stats */}
  <div className="grid grid-cols-2 gap-4 text-sm text-[var(--color-accent)]">
    {p.stats?.map((s, idx) => (
      <div key={idx}>
        <p className="font-title text-[var(--color-highlight)] text-lg">
          {s.value}
        </p>
        <p>{s.label}</p>
      </div>
    ))}
  </div>

   
{/* Action buttons */}
<div className="flex flex-wrap gap-4 mt-8">
  {p.link && (
    <motion.a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 bg-[var(--color-highlight)] text-[var(--color-base)] font-title px-5 py-2 rounded-full shadow-[0_0_10px_rgba(152,215,150,0.3)] hover:shadow-[0_0_20px_rgba(152,215,150,0.5)] transition"
    >
      Website
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5H19.5V10.5M19.5 4.5L10.5 13.5" />
      </svg>
    </motion.a>
  )}

  {p.repo && (
    <motion.a
      href={p.repo}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 border border-[var(--color-highlight)] text-[var(--color-highlight)] font-title px-5 py-2 rounded-full hover:bg-[var(--color-highlight)] hover:text-[var(--color-base)] transition"
    >
      GitHub Repo
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-4.418 0-8-3.582-8-8 0-3.528 2.29-6.505 5.47-7.585.4-.074.55.174.55.388 0 .19-.007.693-.01 1.36-2.226-.483-2.695 1.073-2.695 1.073-.364.924-.89 1.17-.89 1.17-.728.498.055.487.055.487.805-.056 1.228-.833 1.228-.833.716-1.226 1.88-.872 2.338-.667.072.52.28.873.51 1.074-1.776.2-3.644.888-3.644 3.953 0 .873.312 1.588.823 2.147-.083.202-.357 1.015.078 2.116 0 0 .67.214 2.2-.82a7.732 7.732 0 0 0 2 .269c.68 0 1.37-.092 2-.269 1.53 1.034 2.2.82 2.2.82.435-1.101.161-1.914.078-2.116.512-.559.823-1.274.823-2.147 0-3.074-1.87-3.752-3.65-3.948.29-.252.55-.753.55-1.519 0-1.096-.01-1.979-.01-2.247 0-.214.15-.462.55-.388C19.71 4.495 22 7.472 22 11c0 4.418-3.582 8-8 8z" />
      </svg>
    </motion.a>
  )}
</div>




</div>


            {/* Image Section */}
<div className="relative order-1 md:order-2 flex justify-center items-center">
  {/* Desktop image */}
  <motion.img
    src={p.image}
    alt={p.title[lang]}
    onClick={() => setSelectedImage(p.image)}
    className="cursor-pointer rounded-2xl w-full max-w-[600px] shadow-[0_0_20px_rgba(152,215,150,0.2)] transition-transform hover:scale-105"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.4 }}
  />

  {/* Mobile image */}
  {p.mobile && (
    <motion.img
      src={p.mobile}
      alt={`${p.title[lang]} mobile`}
      onClick={() => setSelectedImage(p.mobile)}
      className="cursor-pointer absolute bottom-[-40px] right-[-60px] w-[150px] rounded-xl shadow-[0_0_15px_rgba(152,215,150,0.3)] border border-[var(--color-highlight)]/30 hidden md:block hover:scale-105 transition-transform"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    />
  )}
</div>

          </motion.div>
        ))}
      </div>

      {/* Modal Image View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              alt="Full view"
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-[0_0_30px_rgba(152,215,150,0.5)] border border-[var(--color-highlight)]/50"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
