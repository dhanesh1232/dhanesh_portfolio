import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // ✅ Add pattern
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true, // ✅ Needed for SVG images
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // ✅ (Optional but recommended)
  },
};

export default nextConfig;
