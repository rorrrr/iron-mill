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
        "slidein-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-500px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slidein-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(2000px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        "slidein-rotate":
          "slidein-rotate 2s  ease forwards var(--slidein-delay, 0ms)",
        "slidein-left":
          "slidein-left 0.8s ease forwards var(--slidein-delay, 0ms)",
        "slidein-up": "slidein-up 1s ease forwards var(--slidein-delay, 0ms)",
      },
    },
  },
  plugins: [],
};
