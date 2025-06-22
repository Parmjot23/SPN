/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        counter: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#2563EB",
        accent: "#F97316",
        info: "#2088ff",
        success: "#2a9d8f",
        warn: "#ffba08",
        light: "#fdfdfd",
        darkBg: "#121212",
        darkBg2: "#1E1E1E",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(to bottom right, #0d1321, #1d2a4d)",
      },
    },
  },
  plugins: [],
};
