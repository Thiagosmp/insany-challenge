import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['devblog.insanydesign.com','secure.gravatar.com'],
  },

  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
