import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@excalidraw/excalidraw'],
  },
  turbopack: {
    // Enable Turbopack configuration
  },
  async rewrites() {
    return [
      {
        source: '/draw',
        destination: '/',
      },
    ];
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
      ],
    },
  ],
};

export default nextConfig;