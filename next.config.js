const withBoundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const basePath = process.env.NEXT_PUBLIC_BASE_PATH

/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  basePath,
  trailingSlash: true,
  typedRoutes: true,
}

module.exports = withBoundleAnalyzer(config)
