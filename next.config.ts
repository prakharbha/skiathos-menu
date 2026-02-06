import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['next-sanity', '@sanity/vision', 'sanity'],
};

export default nextConfig;
