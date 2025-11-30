import React, { useState, useMemo } from "react";
import { generatePalette } from "./utils/colors";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ControlDock from "./components/ControlDock";
import ExportModal from "./components/ExportModal";
import Footer from "./components/Footer";
import { useTheme } from "./components/ThemeProvider";
import ComponentShowcase from "./components/ComponentShowcase";
import TrendingPalettes from "./components/TrendingPalettes";

function App() {
  const [baseColor, setBaseColor] = useState("#3b82f6");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const palette = useMemo(() => generatePalette(baseColor), [baseColor]);
  const theme = isDark ? palette.dark : palette.light;

  const dynamicStyles = {
    "--primary": theme.primary,
    "--on-primary": theme.onPrimary,
    "--ring": theme.ring,
    "--bg": theme.background,
    "--surface": theme.surface,
    "--text": theme.text,
    "--text-muted": theme.textMuted,
  };

  const handleRandomize = () => {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    setBaseColor(randomColor);
  };

  return (
    <div
      style={dynamicStyles}
      className="min-h-screen bg-(--bg) text-(--text) transition-colors duration-500 font-sans selection:bg-(--primary) selection:text-white pb-16 md:pb-0"
    >
      <Navbar />

      <main className="max-w-7xl mx-auto px-6">
        <Hero
          palette={palette}
          onRandomize={handleRandomize}
          onExport={() => setIsModalOpen(true)}
        />
        <Features />

        <ComponentShowcase />

        <TrendingPalettes onSelect={setBaseColor} />
      </main>

      <Footer />

      <ControlDock
        baseColor={baseColor}
        setBaseColor={setBaseColor}
        onRandomize={handleRandomize}
        onExport={() => setIsModalOpen(true)}
      />

      {isModalOpen && (
        <ExportModal palette={palette} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default App;
