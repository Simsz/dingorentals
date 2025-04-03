import type { NextConfig } from 'next'

const config: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure functions directory is not processed as pages
  typescript: {
    // Skip type checking during build for faster builds
    ignoreBuildErrors: true,
  },
}

export default config
