import { Config } from 'tailwindcss';

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
        ZenDots: ["Zen Dots", "cursive"],
        BakbakOne: ["Bakbak One", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
        AnekDevanagari: ["Anek Devanagari", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
