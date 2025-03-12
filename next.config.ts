import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "img-c.udemycdn.com",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
      { protocol: "https", hostname: "nxtshiksha.com" },
      { protocol: "https", hostname: "wedevs.academy" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "courses.wscubetech.com" },
    ],
  },
};

export default nextConfig;
