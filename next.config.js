/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
