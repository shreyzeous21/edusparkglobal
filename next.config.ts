import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // output: "export",
  // trailingSlash: true,  // Important for static export
  // reactStrictMode: true,
  
  // // Increase static generation timeout if needed
  // staticPageGenerationTimeout: 60
}; 

export default nextConfig;
