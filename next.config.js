/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.totalwine.com"],
  },
};

module.exports = nextConfig;
