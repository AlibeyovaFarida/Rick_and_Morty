/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["rickandmortyapi.com"],
  },
  trailingSlash: true,
};

module.exports = nextConfig
