/** @type {import('next').NextConfig} */
// Use custom domain (empty basePath) by default, or GitHub Pages subpath if explicitly set
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const basePath = isGitHubPages ? '/xingcheng.github.io' : ''
// For custom domain (xingcheng-zhou.com), basePath should be empty string

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
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

module.exports = nextConfig

