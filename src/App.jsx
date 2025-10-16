// src/App.jsx
// =========================
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "./pages/Hero";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import WorkPage from "./pages/Work";
import ContactPage from "./pages/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { nav, services, projects, translations } from "./data";

export default function App() {
  const [modal, setModal] = useState(null);
  const [lang, setLang] = useState(() => {
    // hydrate from localStorage if present
    const saved = typeof window !== "undefined" && localStorage.getItem("lang");
    return saved || "en";
  });

  // Auto-detect browser language on first load if no saved preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("lang");
    if (!saved) {
      const browser = (navigator.language || "en").toLowerCase();
      const preferred = browser.startsWith("sv") ? "sv" : "en";
      setLang(preferred);
      localStorage.setItem("lang", preferred);
    }
  }, []);

  // Persist language changes
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  }, [lang]);

  // Simple translator helper
  const t = useMemo(() => (key) => translations?.[lang]?.[key] ?? key, [lang]);

  // Close modal on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setModal(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 antialiased selection:bg-cyan-400/20 selection:text-cyan-100 relative overflow-hidden">
      {/* Background pattern */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-[radial-gradient(1200px_800px_at_80%_-10%,rgba(56,189,248,.18),transparent),radial-gradient(900px_600px_at_10%_10%,rgba(232,121,249,.12),transparent)]"
      />
      <div
        aria-hidden
        className="fixed inset-0 opacity-[.07] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:40px_40px]"
      />

      
      <main>
        <Hero t={t} lang={lang} setLang={setLang} />
        <About t={t} lang={lang} />
        <ServicesPage services={services} t={t} lang={lang} />
        <WorkPage projects={projects} t={t} lang={lang} onSelect={(img) => setModal(img)} />
        <ContactPage t={t} lang={lang} />

      </main>
      <Footer t={t} />

      <AnimatePresence>{modal && <Modal image={modal} onClose={() => setModal(null)} />}</AnimatePresence>
    </div>
  );
}