import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol : 'https',
        hostname: 'placehold.co',
      },
      {
        protocol : 'https',
        hostname: 'img-c.udemycdn.com',
      }
    ]
  }
};

export default nextConfig;
