/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          900: "var(--color-primary-900)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
        },
      },
      fontFamily: {
        arabic: "var(--font-arabic)",
        english: "var(--font-english)",
      },
    },
  },
  plugins: [],
};