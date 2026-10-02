import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // You don’t need appDir here — Next.js detects /app automatically
  allowedDevOrigins: ['172.17.208.1', '*.local-origin.dev'],
};

export default nextConfig;
