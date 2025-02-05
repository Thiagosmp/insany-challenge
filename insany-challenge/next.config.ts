import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname: 'devblog.insanydesign.com',  
      },
      {
        protocol: "https",
        hostname: 'secure.gravatar.com',
      }
    ],
  },

  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
