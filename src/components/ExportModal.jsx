import React, { useState } from "react";
import {
  X,
  Copy,
  Check,
  FileCode,
  FileJson,
  Hash,
  Figma,
  Settings2,
} from "lucide-react";
import { colord } from "colord";

export default function ExportModal({ palette = {}, onClose }) {
  const [activeTab, setActiveTab] = useState("css");
  const [format, setFormat] = useState("hex");
  const [copied, setCopied] = useState(false);

  const fmt = (color) => {
    if (!color) return "#000000";
    return format === "hsl" ? colord(color).toHslString() : color;
  };

  const { light = {}, dark = {} } = palette;

  // CSS Variables
  const cssCode = `:root {
  --primary: ${fmt(light.primary)};
  --on-primary: ${fmt(light.onPrimary)};
  --bg: ${fmt(light.background)};
  --surface: ${fmt(light.surface)};
  --text: ${fmt(light.text)};
  --text-muted: ${fmt(light.textMuted)};
  --ring: ${fmt(light.ring)};
}

.dark {
  --primary: ${fmt(dark.primary)};
  --on-primary: ${fmt(dark.onPrimary)};
  --bg: ${fmt(dark.background)};
  --surface: ${fmt(dark.surface)};
  --text: ${fmt(dark.text)};
  --text-muted: ${fmt(dark.textMuted)};
  --ring: ${fmt(dark.ring)};
}`;

  // Tailwind Config
  const tailwindCode = `// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "var(--primary)", foreground: "var(--on-primary)" },
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        muted: "var(--text-muted)",
        ring: "var(--ring)",
      },
    },
  },
} satisfies Config;`;

  // JSON
  const jsonCode = JSON.stringify(
    {
      light: Object.fromEntries(
        Object.entries(light).map(([k, v]) => [k, fmt(v)])
      ),
      dark: Object.fromEntries(
        Object.entries(dark).map(([k, v]) => [k, fmt(v)])
      ),
    },
    null,
    2
  );

  // Figma Tokens
  const figmaCode = JSON.stringify(
    {
      global: {
        primary: { value: fmt(light.primary), type: "color" },
        surface: { value: fmt(light.surface), type: "color" },
        text: { value: fmt(light.text), type: "color" },
      },
      dark: {
        primary: { value: fmt(dark.primary), type: "color" },
        surface: { value: fmt(dark.surface), type: "color" },
        text: { value: fmt(dark.text), type: "color" },
      },
    },
    null,
    2
  );

  const getCode = () => {
    switch (activeTab) {
      case "css":
        return cssCode;
      case "tailwind":
        return tailwindCode;
      case "json":
        return jsonCode;
      case "figma":
        return figmaCode;
      default:
        return "";
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-(--surface) border border-(--text)/10 rounded-2xl shadow-2xl flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-(--text)/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-(--primary)/10 text-(--primary)">
              <FileCode size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-(--text)">Export Tokens</h2>
              <p className="text-xs text-(--text-muted)">
                Production-ready code snippets.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-(--text)/5 text-(--text-muted) hover:text-(--text) transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 py-3 border-b border-(--text)/10 bg-(--bg)/30">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            <TabButton
              active={activeTab === "css"}
              onClick={() => setActiveTab("css")}
              label="CSS"
              icon={<Hash size={14} />}
            />
            <TabButton
              active={activeTab === "tailwind"}
              onClick={() => setActiveTab("tailwind")}
              label="Tailwind"
              icon={<FileCode size={14} />}
            />
            <TabButton
              active={activeTab === "json"}
              onClick={() => setActiveTab("json")}
              label="JSON"
              icon={<FileJson size={14} />}
            />
            <TabButton
              active={activeTab === "figma"}
              onClick={() => setActiveTab("figma")}
              label="Figma"
              icon={<Figma size={14} />}
            />
          </div>

          {activeTab !== "tailwind" && (
            <div className="w-fit flex items-center gap-2 bg-(--bg) p-1 rounded-lg border border-(--text)/10">
              <FormatButton
                active={format === "hex"}
                onClick={() => setFormat("hex")}
                label="HEX"
              />
              <FormatButton
                active={format === "hsl"}
                onClick={() => setFormat("hsl")}
                label="HSL"
              />
            </div>
          )}
        </div>

        <div className="relative flex-1 bg-[#0d1117] overflow-hidden group flex flex-col min-h-[300px]">
          <div className="flex-1 overflow-auto p-6 font-mono text-sm leading-relaxed">
            <code className="block whitespace-pre text-gray-300">
              {getCode()}
            </code>
          </div>
          <div className="absolute top-4 right-4">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-bold text-xs shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              {copied ? (
                <Check size={14} className="text-green-600" />
              ) : (
                <Copy size={14} />
              )}
              {copied ? "Copied" : "Copy Code"}
            </button>
          </div>
        </div>

        <div className="px-6 py-3 border-t border-(--text)/10 text-[10px] text-(--text-muted) flex justify-between items-center">
          <div className="flex gap-2">
            <span>Generated by HueBit</span>
            <span>•</span>
            <span>{format.toUpperCase()} Mode</span>
          </div>
          {activeTab === "figma" && (
            <span className="text-(--primary) flex items-center gap-1">
              <Settings2 size={10} /> Compatible with Tokens Studio
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
        active
          ? "bg-(--primary)/10 text-(--primary)"
          : "text-(--text-muted) hover:text-(--text) hover:bg-(--text)/5"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function FormatButton({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
        active
          ? "bg-(--primary) text-(--on-primary) shadow-sm"
          : "text-(--text-muted) hover:text-(--text)"
      }`}
    >
      {label}
    </button>
  );
}
