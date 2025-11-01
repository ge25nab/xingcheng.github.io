import fs from 'fs'
import path from 'path'
import { generateRSS } from '../lib/rss'

async function main() {
  const rss = generateRSS()
  const publicDir = path.join(process.cwd(), 'public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  fs.writeFileSync(path.join(publicDir, 'rss.xml'), rss)
  console.log('RSS feed generated at public/rss.xml')
}

main().catch(console.error)

