/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  // darkMode: "media", membuat auto dark mode melalui tema windows
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily: {
      // namafont: ['namafont dari google harus sama']
      inter: ["Inter"],
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#64748b",
      },
      screens: {
        xl: "1048px",
        // "2xl": "1024px",
        // "2xl": "1340px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
