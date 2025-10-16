// src/components/Header.jsx
import React from "react";
import { Cpu } from "lucide-react";

export default function Header({ nav, lang, setLang }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#070B14]/80 border-b border-slate-800/60">
      <div className="mx-auto max-w-6xl px-4 flex h-16 items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2">
          <Cpu className="h-6 w-6 text-cyan-400" />
          <span className="text-sm font-semibold tracking-widest text-slate-200">ADA DIGITAL SERVICES</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm text-slate-300 hover:text-cyan-300 transition">
              {n.label[lang]}
            </a>
          ))}
        </nav>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="bg-transparent border border-cyan-400/40 rounded-md px-2 py-1 text-cyan-300 text-xs"
        >
          <option value="en">EN</option>
          <option value="sv">SV</option>
        </select>
      </div>
    </header>
  );
}