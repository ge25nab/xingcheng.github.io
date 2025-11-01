/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const basePath = isGitHubPages ? '/xingcheng.github.io' : ''

const nextConfig = {
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig

