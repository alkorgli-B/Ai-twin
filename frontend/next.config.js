/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'export' for Replit (we need server)
  images: {
    unoptimized: true,
  },
  // Remove basePath for Replit
}

module.exports = nextConfig
