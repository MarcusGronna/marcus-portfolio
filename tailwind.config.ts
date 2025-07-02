import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-600': '#7d8678',
        'brand-700': '#6f786b',
        'surface-50': '#f5ede4',
        accent: colors.amber,
      },
    },
  },
  plugins: [],
};

export default config;
