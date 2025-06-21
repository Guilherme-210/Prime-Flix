import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["image.tmdb.org"],
    formats: ["image/webp", "image/avif"],
  },
}

export default nextConfig
