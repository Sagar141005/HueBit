import React from "react";

const trends = [
  { name: "Classic Blue", color: "#0d6efd" },
  { name: "Neo Mint", color: "#a6f0c6" },
  { name: "Vivid Sky", color: "#00cfff" },
  { name: "Digital Lavender", color: "#c8a2ff" },
  { name: "Sunset Orange", color: "#ff6b35" },
  { name: "Hot Pink", color: "#ff4081" },
  { name: "Slate Gray", color: "#64748b" },
  { name: "Cyber Yellow", color: "#ffd500" },
  { name: "Soft Peach", color: "#ffb997" },
  { name: "Mint Green", color: "#3ad29f" },
  { name: "Coral Red", color: "#ff4d6d" },
  { name: "Deep Navy", color: "#1e3a8a" },
  { name: "Cherry Lacquer", color: "#b62625" },
  { name: "Mocha Mousse", color: "#A47864" },
  { name: "Future Dusk", color: "#484b6a" },
  { name: "Martini Olive", color: "#bab86c" },
  { name: "Moonlit Grey", color: "#d2d4e1" },
  { name: "Bio Lime", color: "#cbf078" },
];

export default function TrendingPalettes({ onSelect }) {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="mb-8 max-w-2xl mx-auto text-center">
          <h2 className="text-md font-medium uppercase tracking-wider text-(--text-muted) mb-2">
            Inspiration
          </h2>
          <p className="text-3xl md:text-4xl font-bold tracking-tight text-(--text) leading-tight">
            Trending palettes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {trends.map((t) => (
          <button
            key={t.name}
            onClick={() => onSelect(t.color)}
            className="group relative flex flex-col gap-3 p-4 rounded-xl border border-(--text)/10 bg-(--surface)/50 backdrop-blur-sm hover:border-(--primary)/30 transition-all text-left"
          >
            <div
              className="w-full aspect-square rounded-lg shadow-inner ring-1 ring-black/5"
              style={{ backgroundColor: t.color }}
            />

            <div>
              <h3 className="font-bold text-sm text-(--text) group-hover:text-(--primary) transition-colors">
                {t.name}
              </h3>
              <p className="text-xs text-(--text-muted) font-mono mt-1 opacity-70">
                {t.color}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
