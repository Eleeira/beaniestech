// src/components/Modal.jsx
import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Modal({ image, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full px-4" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="gallery" className="w-full h-auto rounded-xl shadow-lg" />
        <button onClick={onClose} className="absolute top-3 right-3 bg-slate-900/80 rounded-full p-2 hover:bg-slate-800">
          <X className="h-5 w-5 text-slate-100" />
        </button>
      </div>
    </motion.div>
  );
}