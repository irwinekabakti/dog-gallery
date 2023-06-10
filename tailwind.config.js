/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
    },
    extend: {
      fontFamily: {
        titan: ["Titan One", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        unbounded: ["Unbounded", "cursive"],
      },
      keyframes: {
        "slide-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 1s ease 0s 1 normal forwards",
        "slide-in-delay": "slide-in 1s ease 0.3s 1 normal forwards",
      },
      colors: {
        primary: {
          // 100: "#06C2AE",
          100: "#f7d6d4",
          200: "#f7d6d4",
        },
        secondary: "#FF693A",
      },
    },
  },
  plugins: [],
};
