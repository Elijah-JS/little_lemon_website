/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        lemon: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
        },
        olive: {
          50: "#f4f5ee",
          100: "#e3e7d4",
          200: "#c7d0a9",
          400: "#8aa15f",
          700: "#4f6225",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15,23,42,0.12)",
      },
    },
  },
  plugins: [],
};

