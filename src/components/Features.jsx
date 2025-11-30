import React from "react";
import { Layers, Zap, Eye, Code, Hash, Droplet } from "lucide-react";

const features = [
  {
    icon: <Layers size={24} />,
    title: "Semantic Roles",
    desc: "Colors are mapped to intent (Primary, Surface, Muted), not just arbitrary hex codes.",
  },
  {
    icon: <Zap size={24} />,
    title: "Adaptive Chroma",
    desc: "Saturation automatically decreases in dark mode to prevent visual vibration and eye strain.",
  },
  {
    icon: <Eye size={24} />,
    title: "Perceptual Contrast",
    desc: "Guaranteed WCAG AA/AAA compliance using APCA-ready contrast algorithms.",
  },
  {
    icon: <Code size={24} />,
    title: "Type-Safe Tokens",
    desc: "Export TypeScript interfaces, CSS Variables, and Tailwind configs instantly.",
  },
  {
    icon: <Droplet size={24} />,
    title: "Brand Mixing",
    desc: "Greys are tinted with 2% of your primary hue, creating a cohesive, warm atmosphere.",
  },
  {
    icon: <Hash size={24} />,
    title: "Predictable Output",
    desc: "Deterministic generation ensures the same input always yields the exact same palette.",
  },
];

export default function Features() {
  return (
    <section className="py-12 max-w-7xl mx-auto">
      <div className="mb-16 max-w-2xl mx-auto text-center">
        <h2 className="lg:text-lg text-sm font-bold uppercase tracking-wider text-(--text-muted) mb-3">
          Under the Hood
        </h2>
        <p className="text-3xl md:text-4xl font-bold tracking-tight text-(--text) leading-tight">
          A color engine built on{" "}
          <span className="text-(--text-muted)">real design systems.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-b border-(--text)/10 divide-y md:divide-y-0 lg:divide-y-0 divide-(--text)/10">
        {features.map((f, i) => (
          <div
            key={i}
            className={`
              group p-8 transition-colors hover:bg-(--text)/2
              ${i >= 3 ? "lg:border-t border-(--text)/10" : ""}
              ${i >= 2 ? "md:border-t lg:border-t-0 border-(--text)/10" : ""}
            `}
          >
            <div className="mb-6 text-(--text-muted) group-hover:text-(--primary) transition-colors duration-300">
              {f.icon}
            </div>

            <h3 className="text-lg font-bold text-(--text) mb-3 tracking-tight">
              {f.title}
            </h3>

            <p className="text-sm text-(--text-muted) leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
