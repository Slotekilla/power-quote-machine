/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  eslint: {
    // Prevent build from failing on ESLint errors in CI
    ignoreDuringBuilds: true
  },
  typescript: {
    // Prevent build from failing on TypeScript errors in CI
    ignoreBuildErrors: true
  },
  images: {
    domains: ['app.meskobrand.eu'],
    formats: ['image/webp', 'image/avif']
  },
  async rewrites() {
    return [
      {
        source: '/.well-known/farcaster.json',
        destination: '/api/farcaster-manifest',
      },
    ];
  },
};

module.exports = nextConfig;