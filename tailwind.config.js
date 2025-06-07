/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF5722',
        darkBg: '#0d1321',
        darkBg2: '#1d2a4d',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom right, #0d1321, #1d2a4d)',
      },
    },
  },
  plugins: [],
};
