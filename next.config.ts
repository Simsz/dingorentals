import type { NextConfig } from 'next'

const config: NextConfig = {
  output: 'export',
  distDir: '.vercel/output/static',
  images: {
    unoptimized: true,
  }
}

export default config
