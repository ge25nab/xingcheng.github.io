import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}

// Get base path for static assets (for GitHub Pages subpath support)
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || ''
}

// Prefix static asset path with basePath
export function assetPath(path: string): string {
  const basePath = getBasePath()
  // Remove leading slash if basePath is empty to avoid double slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${cleanPath}`
}

