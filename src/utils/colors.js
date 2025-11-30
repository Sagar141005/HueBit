import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import a11yPlugin from "colord/plugins/a11y";

extend([mixPlugin, a11yPlugin]);

export const generatePalette = (baseColor) => {
  const brand = colord(baseColor);

  const isTooLight = brand.brightness() > 0.9;
  const isTooDark = brand.brightness() < 0.1;

  const onPrimaryLight = brand.isLight() ? "#0f172a" : "#ffffff";
  const onPrimaryDark = brand.isLight() ? "#0f172a" : "#ffffff";

  return {
    light: {
      primary: brand.toHex(),
      onPrimary: onPrimaryLight,

      ring: isTooLight ? "#e2e8f0" : "transparent",
      // 98% White mixed with 2% Brand Color (Tinted Background)
      background: colord("#ffffff").mix(brand, 0.03).toHex(),
      // Slightly darker surface
      surface: colord("#ffffff").mix(brand, 0.1).toHex(),
      // Very dark text, slightly tinted
      text: colord("#0f172a").mix(brand, 0.05).toHex(),
      textMuted: colord("#64748b").mix(brand, 0.05).toHex(),
    },
    dark: {
      // In Dark Mode, we DESATURATE and LIGHTEN the brand color
      // so it is accessible and doesn't vibrate against dark backgrounds
      primary: isTooDark
        ? "#333333"
        : brand.lighten(0.1).desaturate(0.2).toHex(),
      onPrimary: "#ffffff",
      ring: isTooDark ? "#333333" : "transparent",

      // 95% Black mixed with 5% Brand Color (Rich Dark Background)
      background: colord("#0f172a").mix(brand, 0.05).toHex(),
      surface: colord("#1e293b").mix(brand, 0.05).toHex(),
      text: "#f8fafc",
      textMuted: "#94a3b8",
    },
  };
};
