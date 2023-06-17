/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        namecard: "0px 39px 100px rgba(25, 62, 108, 0.12)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        blue: {
          100: "#F2F7FF",
          200: "#E7F6FF",
          300: "#094B72",
          400: "#193E6C",
          500: "#33475B",
        },
        grey: {
          100: "#F9F8F9",
          500: "#8B8C8C",
          600: "#4F4F4F",
          700: "#2D2F30",
        },
      },
    },
  },
  plugins: [],
};
