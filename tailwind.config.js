/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    // add other folders if you keep components elsewhere, e.g. "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        zen: ["Zen Kaku Gothic New", "sans-serif"], // class: font-zen
        mono: ["Roboto Mono Variable", "monospace"], // class: font-mono
        sans: ["var(--font-sans)", "sans-serif"],    // class: font-sans
      },

      /* Option A: use fixed hex values (fast, predictable) */
      colors: {
        primary: "#f59300",
        "primary-light": "#ffbd17",
        "primary-lighter": "#ffd969",
        gray: {
          DEFAULT: "#424242",
          light: "#a4a4a4",
          lighter: "#cecece",
          lightest: "#f5f5f5",
        },
        light: "#fff8e0",
        lighter: "#fffcf3",
      },

      /* Option B (recommended if you want to override with CSS variables at runtime):
      colors: {
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "primary-lighter": "var(--color-primary-lighter)",
        gray: {
          DEFAULT: "var(--color-gray)",
          light: "var(--color-gray-light)",
          lighter: "var(--color-gray-lighter)",
          lightest: "var(--color-gray-lightest)",
        },
        light: "var(--color-light)",
        lighter: "var(--color-lighter)",
      },
      */

      boxShadow: {
        flat: "0px 5px 0px #00000026",
        "flat-hover": "0px 8px 2px #00000026",
        tag: "0px 3px 0px #0000001a",
        star: "0px 0px 10px #ffd000cc",
      },

      borderRadius: {
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },

      animation: {
        bobbing: "bobbing 2s infinite",
      },

      keyframes: {
        bobbing: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
