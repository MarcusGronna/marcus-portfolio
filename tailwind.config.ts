import type { Config } from "tailwindcss";
// import aspectRatio from "@tailwindcss/aspect-ratio"; // håller bildformatet :contentReference[oaicite:1]{index=1}
// import lineClamp from "@tailwindcss/line-clamp"; // rad-klamp :contentReference[oaicite:2]{index=2}

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "brand-600": "#7d8678",
        "brand-700": "#6f786b",
        "surface-50": "#f5ede4",
      },
    },
  },
  // plugins: [aspectRatio, lineClamp],
};

export default config;
