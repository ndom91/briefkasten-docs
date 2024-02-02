const { createPreset } = require("fumadocs-ui/tailwind-plugin")
const plugin = require("tailwindcss/plugin")
import { StaticShadows } from "open-props/src/shadows"
import * as Gradients from "open-props/src/gradients"

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  safelist: ["gradient-*", "noise-*"],
  presets: [createPreset()],
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".gradient-1": {
          background: Gradients["--gradient-1"],
        },
        ".gradient-2": {
          background: Gradients["--gradient-2"],
        },
        ".gradient-3": {
          background: Gradients["--gradient-3"],
        },
        ".gradient-4": {
          background: Gradients["--gradient-4"],
        },
        ".gradient-5": {
          background: Gradients["--gradient-5"],
        },
        ".gradient-6": {
          background: Gradients["--gradient-6"],
        },
        ".gradient-7": {
          background: Gradients["--gradient-7"],
        },
        ".gradient-8": {
          background: Gradients["--gradient-8"],
        },
        ".gradient-9": {
          background: Gradients["--gradient-9"],
        },
        ".gradient-10": {
          background: Gradients["--gradient-10"],
        },
        ".gradient-11": {
          background: Gradients["--gradient-11"],
        },
        ".gradient-12": {
          background: Gradients["--gradient-12"],
        },
        ".gradient-13": {
          background: Gradients["--gradient-13"],
        },
        ".gradient-14": {
          background: Gradients["--gradient-14"],
        },
        ".gradient-15": {
          background: Gradients["--gradient-15"],
        },
        ".gradient-16": {
          background: Gradients["--gradient-16"],
        },
        ".gradient-17": {
          background: Gradients["--gradient-17"],
        },
        ".gradient-18": {
          background: Gradients["--gradient-18"],
        },
        ".gradient-19": {
          background: Gradients["--gradient-19"],
        },
        ".gradient-20": {
          background: Gradients["--gradient-20"],
        },
        ".gradient-21": {
          background: Gradients["--gradient-21"],
        },
        ".gradient-22": {
          background: Gradients["--gradient-22"],
        },
        ".gradient-23": {
          background: Gradients["--gradient-23"],
        },
        ".gradient-24": {
          background: Gradients["--gradient-24"],
        },
        ".gradient-25": {
          background: Gradients["--gradient-25"],
        },
        ".gradient-26": {
          background: Gradients["--gradient-26"],
        },
        ".gradient-27": {
          background: Gradients["--gradient-27"],
        },
        ".gradient-27": {
          background: Gradients["--gradient-28"],
        },
        ".gradient-29": {
          background: Gradients["--gradient-29"],
        },
        ".gradient-30": {
          background: Gradients["--gradient-30"],
        },
        ".noise-1": {
          "background-image": Gradients["--noise-1"],
        },
        ".noise-2": {
          "background-image": Gradients["--noise-2"],
        },
        ".noise-3": {
          "background-image": Gradients["--noise-3"],
        },
        ".noise-4": {
          "background-image": Gradients["--noise-4"],
        },
        ".noise-5": {
          "background-image": Gradients["--noise-5"],
        },
        ".noise-filter-1": {
          filter: Gradients["--noise-filter-1"],
        },
        ".noise-filter-2": {
          filter: Gradients["--noise-filter-2"],
        },
        ".noise-filter-3": {
          filter: Gradients["--noise-filter-3"],
        },
        ".noise-filter-4": {
          filter: Gradients["--noise-filter-4"],
        },
        ".noise-filter-5": {
          filter: Gradients["--noise-filter-5"],
        },
      })
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-google-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-google-mono)", "Ubuntu Mono", "monospace"],
        display: ["var(--font-google-display)", "Inter", "system-ui"],
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      xs: "clamp(0.64rem, 0.05vw + 0.63rem, 0.67rem)",
      sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
      base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
      lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
      xl: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
      "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
      "3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
      "4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
      "5xl": "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
      "6xl": "clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)",
    },
    boxShadow: {
      xs: StaticShadows["--shadow-1"],
      sm: StaticShadows["--shadow-2"],
      md: StaticShadows["--shadow-3"],
      lg: StaticShadows["--shadow-4"],
      xl: StaticShadows["--shadow-5"],
      "2xl": StaticShadows["--shadow-6"],
    },
  },
}
