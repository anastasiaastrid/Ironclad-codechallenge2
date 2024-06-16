// tailwind.config.js
import { Anek_Devanagari, Dosis, Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        PlayfairDisplay: ["Playfair Display", "serif"],
        ZenDots: ["Zen Dots", "cursive"],
        BakbakOne: ["Bakbak One", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
        Anek_Devanagari: ["Anek Devanagari", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
