/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#E0E1DD",
        "saudi-green": "#165d31",
      },

      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slidein-rotate": {
          "0%": {
            transform: "rotate(0deg)",
            opacity: "0",
          },
          "50%": {
            opacity: "",
          },
          "100%": {
            transform: "rotate(180deg)",
            opacity: "1",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        "slidein-rotate":
          "slidein-rotate 2s  ease forwards var(--slidein-delay, 0ms)",
      },
    },
    fontFamily: {
      sans: ["Gildeon", "sans-serif"],
    },
  },
  plugins: [],
};
