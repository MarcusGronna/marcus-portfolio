import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7d8678",
          50: "#f5ede4",
          100: "#ede8df",
          200: "#d7d7c9",
          300: "#bfc0b0",
          400: "#a7a998",
          500: "#7d8678",
          600: "#5e655a",
          700: "#454a41",
          800: "#2d2f29",
          900: "#181914",
        },
        surface: {
          50: "#f5ede4",
        },
        accent: {
          400: "#7d8678",
          700: "#5e655a",
        },
        // Behåll Tailwind standardfärger
        ...colors,
      },
    },
  },
  plugins: [],
};

export default config;
