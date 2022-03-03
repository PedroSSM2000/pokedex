module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        border: "var(--border)",
        text: "var(--text)",
        "text-secondary": "var(--text-secondary)",
      },
    },
  },
  plugins: [],
};
