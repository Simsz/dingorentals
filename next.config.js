/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '.vercel/output/static',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig 