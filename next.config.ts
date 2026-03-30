/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: {
      root: __dirname, // points to your project's own directory
    },
  },
};

export default nextConfig;