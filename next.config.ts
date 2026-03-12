import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['next-sanity', '@sanity/vision', 'sanity'],
  async headers() {
    return [
      {
        source: '/studio/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
