import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/olumidesamuel/image/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },

      // new URL("https://res.cloudinary.com/olumidesamuel/image/**"),
      // new URL("https://plus.unsplash.com/**"),
    ],
  },
};

export default nextConfig;
