/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "wedding.html", "wisuda.html"],
  theme: {
    container: {
      center: true,
      padding: "16",
    },
    extend: {
      colors: {
        primary: "#f59e0b",
        dark: "#0f172a",
        secondary: "#475569",
      },
      screens: {
        "2xl": "1320",
      },
    },
  },
  plugins: [],
};
