import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#7d8678",
          600: "#1a1a1a",
          700: "#ededed",
        },
        surface: {
          50: "#fff",
        },
        accent: colors.amber,
      },
    },
  },
  plugins: [],
};

export default config;
