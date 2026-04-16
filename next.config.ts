import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Use AVIF + WebP for modern format delivery (Next.js Image Optimization)
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
