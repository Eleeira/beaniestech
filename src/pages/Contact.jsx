// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact({ t, lang }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const formData = new FormData(e.target);
      // 👇 Sostituisci con il tuo endpoint Getform
      const res = await fetch("https://getform.io/f/bvrmnzkb", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Network response was not ok");

      setSubmitted(true);
      e.target.reset();
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(
        lang === "sv"
          ? "Något gick fel. Försök igen."
          : "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background subtle */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-highlight)_0%,transparent_70%)] opacity-[0.05]"
      />

      <div className="relative z-10 w-full max-w-[1300px] px-[8vw] grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[var(--color-surface)]/20 backdrop-blur-sm rounded-2xl border border-[var(--color-highlight)]/40 p-10 shadow-[0_0_20px_rgba(152,215,150,0.1)] text-left"
        >
          <h2 className="font-title text-3xl text-[var(--color-light)] mb-8 drop-shadow-[0_0_8px_var(--color-accent)]">
            {t("contact_title")}
          </h2>

          {/* Honeypot anti-bot (Getform lo supporta) */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          {/* (facoltativo) redirect dopo invio:
              <input type="hidden" name="_redirect" value="https://tuodominio/sent" />
           */}

          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder={t("ph_name")}
              required
              className="w-full bg-transparent border-b border-[var(--color-accent)]/50 focus:border-[var(--color-highlight)] text-[var(--color-light)] placeholder-[var(--color-accent)] py-2 outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder={t("ph_email")}
              required
              className="w-full bg-transparent border-b border-[var(--color-accent)]/50 focus:border-[var(--color-highlight)] text-[var(--color-light)] placeholder-[var(--color-accent)] py-2 outline-none transition"
            />
            <textarea
              name="message"
              placeholder={t("ph_message")}
              required
              rows="5"
              className="w-full bg-transparent border-b border-[var(--color-accent)]/50 focus:border-[var(--color-highlight)] text-[var(--color-light)] placeholder-[var(--color-accent)] py-2 outline-none resize-none transition"
            />

            {/* Stato / errori */}
            {error && (
              <p className="text-sm text-red-400" role="alert" aria-live="polite">
                {error}
              </p>
            )}

            <motion.button
              whileHover={{ scale: sending ? 1 : 1.05 }}
              whileTap={{ scale: sending ? 1 : 0.95 }}
              type="submit"
              disabled={sending}
              className={`mt-4 flex items-center justify-center gap-2 font-title px-6 py-3 rounded-full transition
                ${sending || submitted
                  ? "bg-[var(--color-accent)] text-[var(--color-base)] opacity-80 cursor-not-allowed"
                  : "bg-[var(--color-highlight)] text-[var(--color-base)] shadow-[0_0_15px_rgba(152,215,150,0.3)] hover:shadow-[0_0_25px_rgba(152,215,150,0.5)]"
                }`}
              aria-live="polite"
            >
              {submitted
                ? t("sent_label")
                : sending
                ? (lang === "sv" ? "Skickar..." : "Sending...")
                : (<>{t("send_label")} <Send size={18} /></>)}
            </motion.button>
          </div>
        </motion.form>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left md:text-right"
        >
          <h3 className="font-title text-5xl md:text-6xl text-[var(--color-light)] drop-shadow-[0_0_12px_var(--color-accent)] mb-6">
            {lang === "sv" ? (
              <>
                Låt oss skapa{" "}
                <span className="text-[var(--color-highlight)]">något tidlöst</span>.
              </>
            ) : (
              <>
                Let’s build something{" "}
                <span className="text-[var(--color-highlight)]">timeless</span>.
              </>
            )}
          </h3>
          <p className="whitespace-pre-line font-body text-[var(--color-accent)] leading-relaxed max-w-md md:ml-auto">
            {t("contact_intro_text")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
