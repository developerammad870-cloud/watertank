import path from 'node:path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Pin the project root so a stray lockfile in a parent folder can't be mistaken for it
  turbopack: { root: path.resolve(__dirname) },
  // Serve the hero photo as AVIF where supported (smallest), WebP otherwise
  images: { formats: ['image/avif', 'image/webp'] },
}

export default nextConfig
