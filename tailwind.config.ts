import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#7d8678",
          600: "#6f786b",
          700: "#5d6659",
        },
        surface: {
          50: "#f5ede4",
        },
        accent: colors.amber,
      },
    },
  },
  plugins: [],
};

export default config;
