import type { NextConfig } from "next";

export const output = "export";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [{ hostname: "res.cloudinary.com" }],
  },
  output:"export",
};

export default nextConfig;
