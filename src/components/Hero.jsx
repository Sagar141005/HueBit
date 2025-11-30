import React from "react";
import { ArrowRight, Download, Layers, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function Hero({ palette, onRandomize, onExport }) {
  const colors = palette?.light
    ? [
        palette.light.background,
        palette.light.surface,
        palette.light.textMuted,
        palette.light.primary,
        palette.light.text,
      ]
    : [];

  return (
    <section className="relative pt-24 pb-20 px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-1 p-1.5 mb-8 rounded-full border border-(--text)/10 bg-(--surface)/50 backdrop-blur-sm shadow-sm"
      >
        {colors.map((color, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: 24 }}
            transition={{ delay: i * 0.1, type: "spring" }}
            className="w-8 rounded-full ring ring-(--text)/10"
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
        <div className="px-4 text-xs font-mono font-medium text-(--text-muted) hidden md:block">
          Live Palette Preview
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="lg:text-6xl text-4xl font-bold tracking-tighter text-(--text) mb-6"
      >
        Build <span className="text-(--primary)">semantic color systems</span>
        <br />
        that scale effortlessly.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="lg:text-lg text-sm text-(--text-muted) max-w-xl leading-relaxed mb-10"
      >
        HueBit generates contrast-safe, theme-ready palettes engineered for both
        designers and developers. Stop guessing hex codes — build systems with
        intention.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex items-center gap-3"
      >
        <button
          onClick={onExport}
          className="text-nowrap group flex items-center gap-2 px-5 py-2.5 rounded-full 
               bg-(--primary) text-(--on-primary) font-semibold
               shadow-sm shadow-(--primary)/20
               hover:shadow-(--primary)/30 hover:scale-[1.02]
               active:scale-95 transition-all text-sm"
        >
          <Download size={16} />
          Export Palette
        </button>

        <button
          onClick={onRandomize}
          className="text-nowrap flex items-center gap-2 px-5 py-2.5 rounded-full
               border border-(--text)/15 text-(--text-muted)
               hover:border-(--primary)/40 hover:text-(--primary)
               active:scale-95 transition-all text-sm"
        >
          Randomize
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl"
      >
        <FeatureCard
          icon={<Layers size={20} />}
          title="Scale Logic"
          desc="Automatically computes semantic roles and tone steps"
        />
        <FeatureCard
          icon={<ShieldCheck size={20} />}
          title="WCAG Guardrails"
          desc="AA/AAA Contrast checks"
        />
        <FeatureCard
          icon={<ArrowRight size={20} />}
          title="Type-Safe"
          desc="JSON, CSS & Tailwind"
        />
      </motion.div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-(--text)/5 bg-(--surface)/50 backdrop-blur-sm hover:border-(--text)/10 transition-colors text-left">
      <div className="p-2 rounded-lg bg-(--bg) border border-(--text)/5 text-(--primary)">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-bold text-(--text) tracking-tight">
          {title}
        </h3>
        <p className="text-xs text-(--text-muted)">{desc}</p>
      </div>
    </div>
  );
}
