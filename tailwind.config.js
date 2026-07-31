/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f08c00",
        black: "#0a0a0a",
        white: "#faf9f6",
      },
      keyframes: {
        pop: {
          "0%": { transform: "translateX(1.5rem) scale(0.6)" },
          "50%": { transform: "translateX(1.5rem) scale(1.3)" },
          "100%": { transform: "translateX(1.5rem) scale(1)" },
        },
      },
      animation: {
        pop: "pop 0.25s ease-out",
      },
    },
  },

  plugins: [],
};
