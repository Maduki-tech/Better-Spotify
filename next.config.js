/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['is5-ssl.mzstatic.com'],
  },
}

module.exports = nextConfig

