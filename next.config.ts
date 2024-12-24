import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: "",
  trailingSlash: true,
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "https://adsfoxy.com" : "",
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  // Add this to handle dynamic routes in static export
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      ...defaultPathMap,
      '/': { page: '/' },
    };
  },
};

export default nextConfig;
