import React from "react";
import { Github, Eclipse } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-40 w-full border-b border-(--text)/5 bg-(--bg)/80 backdrop-blur-xl transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2.5 cursor-pointer select-none group"
          whileHover="hover"
        >
          <motion.div
            variants={{ hover: { rotate: 45 } }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="p-1.5 rounded-lg bg-(--primary) text-(--on-primary) shadow-lg shadow-(--primary)/20 ring-1 ring-white/10"
          >
            <Eclipse size={20} strokeWidth={2.5} />
          </motion.div>

          <span className="font-bold text-xl tracking-tight text-(--text) group-hover:text-(--primary) transition-colors duration-300">
            HueBit
          </span>
        </motion.div>

        <motion.a
          href="https://github.com/Sagar141005/HueBit"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-lg text-(--text-muted) hover:text-(--primary) hover:bg-(--primary)/10 transition-colors"
          aria-label="GitHub Repository"
        >
          <Github size={20} />
        </motion.a>
      </div>
    </motion.nav>
  );
}
