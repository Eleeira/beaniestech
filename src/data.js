// =========================
// src/data.js
// =========================

export const nav = [
  { id: 'about', label: { en: 'About', sv: 'Om mig' } },
  { id: 'services', label: { en: 'Services', sv: 'Tjänster' } },
  { id: 'work', label: { en: 'Work', sv: 'Projekt' } },
  { id: 'contact', label: { en: 'Contact', sv: 'Kontakt' } },
];


export const services = [
  {
    title: { en: "Frontend", sv: "Frontend" },
    text: {
      en: "Clean, responsive websites built with modern frameworks.",
      sv: "Rena, responsiva webbplatser byggda med moderna ramverk.",
    },
    details: {
      en: ["React, Vite, TailwindCSS", "Responsive layouts", "SEO-friendly structure"],
      sv: ["React, Vite, TailwindCSS", "Responsiv layout", "SEO-anpassad struktur"],
    },
    price: "from 7000 SEK",
  },
  {
    title: { en: "Photography", sv: "Fotografi" },
    text: {
      en: "Creative photography for web, social media, and print.",
      sv: "Kreativ fotografering för webben, sociala medier och tryck.",
    },
    details: {
      en: ["Portrait & editorial", "Product & brand", "Post-production"],
      sv: ["Porträtt & editorial", "Produkt & varumärke", "Efterbearbetning"],
    },
    price: "from 2000 SEK / session",
  },
  {
    title: { en: "Digital Support", sv: "Digital support" },
    text: {
      en: "Help with office setup, websites, and tech maintenance.",
      sv: "Hjälp med kontorsuppsättning, webbplatser och tekniskt underhåll.",
    },
    details: {
      en: ["Office configuration", "Cloud setup", "Email & hosting"],
      sv: ["Kontorskonfiguration", "Molnuppsättning", "E-post & hosting"],
    },
    price: "from 500 SEK / h",
  },
];




export const projects = [
  {
    title: { en: "Legacy UI", sv: "Legacy UI" },
    description: {
      en: "A high-performance, visually clean and cyberpunk interface designed for both desktop and mobile experiences. Page Speed Insight",
      sv: "Ett snabbt, visuellt rent gränssnitt utformat för både dator och mobil.",
    },
    stats: [
      { value: "70", label: "Performance" },
      { value: "100", label: "Accessibility" },
      { value: "100", label: "Best Practices" },
      { value: "92", label: "SEO Score" },
    ],
    image: "/images/work/legacy1.png",
    mobile: "/images/work/mobilelegacy1.png",
    link: "https://adacatucci.com",
    repo: "https://github.com/Eleeira/adacatucci"
  },
  {
    title: { en: "dataguard.se - Restyling", sv: "dataguard.se - Omformning" },
    description: {
      en: "Restyling of the dataguard.se website. Smoother, more modern and minimal, with a palette consistent with the brand. Disclaimer: This is not the official website - all rights belong to the rightful owner.",
      sv: "Omdesign av webbplatsen dataguard.se. Mer flytande, modern och minimalistisk, med en färgpalett som följer varumärket. Ansvarsfriskrivning: Detta är inte den officiella webbplatsen - alla rättigheter tillhör den rättmätige ägaren.",
    },
    stats: [
      { value: "Animated UI", label: "Modern UI and animated effects" },
      { value: "Layout Fidelity", label: "Same layout to help users navigate easily." },
      { value: "Responsive", label: "Optimized for all screen sizes - from desktop to mobile." },
      { value: "Original Brand Palette", label: "Preserved the original brand palette for visual continuity." },
    ],
    image: "/images/work/after.png",
    mobile: "/images/work/before.png",
    repo: ""
    
  },

   {
    title: { en: "Fantasiateljé", sv: "Fantasiateljé" },
    description: {
      en: "A refined e-commerce redesign focused on clarity and conversion.",
      sv: "En förfinad e-handelsdesign med fokus på tydlighet och konvertering.",
    },
    stats: [
      { value: "76", label: "Performance" },
      { value: "100", label: "Accessibility" },
      { value: "100", label: "Best Practices" },
      { value: "91", label: "SEO Score" },
    ],
    image: "/images/work/fanta1.png",
    mobile: "/images/work/fanta2.png",
    link: "https://fantasiatelje.se",
    repo: "https://github.com/Eleeira/fantasiatelje"
  },

  {
    title: { en: "Job Tracker Experiment", sv: "Job Tracker Experiment" },
    description: {
      en: "A minimalist, privacy-friendly Kanban app to track job applications. Built with React, Vite, and Tailwind - no accounts, no servers, everything stored locally in the browser (IndexedDB). Multilingual (EN/SV) with light and dark modes for an accessible user experience.",
      sv: "En minimalistisk, integritetsvänlig Kanban-app för att hålla koll på jobbansökningar. Byggd med React, Vite och Tailwind - inga konton, inga servrar, allt sparas lokalt i webbläsaren (IndexedDB). Fler­språkig (EN/SV) med ljust och mörkt läge för en tillgänglig användarupplevelse.",
    },
    stats: [
      { value: "100", label: "Performance" },
      { value: "92", label: "Accessibility" },
      { value: "100", label: "Best Practices" },
      { value: "90", label: "SEO Score" },
    ],
    image: "/images/work/job1.png",
    mobile: "/images/work/job2.png",
    link: "https://eleeira.github.io/job-tracker/",
    repo: "https://github.com/Eleeira/job-tracker"
  },

];






export const translations = {
  en: {
    services_title: "Services",
    work_title: "Selected Work",
    hero_title: "Building websites and digital solutions with precision and style.",
    hero_text:
      "Frontend development with focus on design, performance, and multilingual structure.",
    contact_title: "Let’s collaborate",
    // NEW ↓
    contact_intro_title: "Let’s build something timeless.",
    contact_intro_text:
      "For a digital experience, a brand system, or an art direction project.\n\nDrop a message, let’s shape your next vision together.",
    ph_name: "Your name",
    ph_email: "Your email",
    ph_message: "Your message",
    send_label: "Send",
    sent_label: "✓ Sent",
  },
  sv: {
    services_title: "Tjänster",
    work_title: "Utvalda projekt",
    hero_title: "Jag bygger webbplatser och digitala lösningar med precision och stil.",
    hero_text:
      "Frontend-utveckling med fokus på design, prestanda och flerspråkig struktur.",
    contact_title: "Låt oss samarbeta",
    // NEW ↓ (svenska naturlig och flytande)
    contact_intro_title: "Låt oss skapa något tidlöst.",
    contact_intro_text:
      "Oavsett om det gäller en digital upplevelse, ett varumärkessystem eller ett art direction-projekt förvandlar ADA Digital Services idéer till genomarbetade helheter.\n\nSkriv några rader – så formar vi din nästa vision tillsammans.",
    ph_name: "Ditt namn",
    ph_email: "Din e-post",
    ph_message: "Ditt meddelande",
    send_label: "Skicka",
    sent_label: "✓ Skickat",
  },
};
