import React from "react";
import { Moon, Sun, Download, RefreshCw } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";

export default function ControlDock({
  baseColor,
  setBaseColor,
  onExport,
  onRandomize,
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-fit max-w-[90vw]"
    >
      <div className="flex items-center gap-1 p-2 px-3 bg-(--surface)/90 backdrop-blur-xl border border-(--text)/10 rounded-full shadow-2xl shadow-black/20 ring-1 ring-white/10">
        <div className="relative group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden w-10 h-10 rounded-full border-2 border-(--surface) ring-1 ring-(--text)/20 cursor-pointer shadow-sm"
            style={{ backgroundColor: baseColor }}
          >
            <input
              type="color"
              value={baseColor}
              onChange={(e) => setBaseColor(e.target.value)}
              className="absolute inset-0 w-[200%] h-[200%] -top-1/2 -left-1/2 p-0 m-0 cursor-pointer opacity-0"
              aria-label="Choose Brand Color"
            />
          </motion.div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Edit Color
          </div>
        </div>

        <div className="w-px h-8 bg-(--text)/10 mx-1" />

        <DockButton onClick={toggleTheme} label="Toggle Theme">
          <motion.div
            initial={false}
            animate={{ rotate: isDark ? 0 : 180 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
          </motion.div>
        </DockButton>

        <DockButton onClick={onRandomize} label="Random Color">
          <motion.div whileTap={{ rotate: 180 }}>
            <RefreshCw size={20} />
          </motion.div>
        </DockButton>
        <div className="w-px h-8 bg-(--text)/10 mx-1" />

        <motion.button
          onClick={onExport}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-1 px-5 py-2.5 bg-(--primary) text-(--on-primary) rounded-full font-bold shadow-lg shadow-(--primary)/20 hover:brightness-110 flex items-center gap-2"
        >
          <Download size={18} strokeWidth={2.5} />
          <span className="hidden md:block text-sm">Export</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

function DockButton({ onClick, children, label }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.1,
        backgroundColor: "rgba(var(--text-rgb), 0.05)",
      }}
      whileTap={{ scale: 0.9 }}
      className="p-2.5 rounded-full text-(--text-muted) hover:text-(--primary) transition-colors relative group"
      aria-label={label}
    >
      {children}
    </motion.button>
  );
}
