import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  // assetPrefix: "assetPrefix",
  basePath: "/biw",
  output: "export",
};

export default nextConfig;
