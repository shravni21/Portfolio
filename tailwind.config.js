// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#f59e0b" // amber-like hero
        },
        wavefrom: "#93c5fd",
        waveto: "#bfdbfe",
        cream: "#fff7ed"
      },
      fontFamily: {
        sans: ["'Roboto'", "ui-sans-serif", "system-ui"],
        mono: ["'Roboto Mono'", "ui-monospace", "SFMono-Regular"]
      },
      boxShadow: {
        window: "0 18px 40px rgba(15,23,42,0.12)",
      }
    }
  },
  plugins: []
};
