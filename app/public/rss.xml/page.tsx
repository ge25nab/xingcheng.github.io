import { generateRSS } from '@/lib/rss'

export default function RSSPage() {
  const rss = generateRSS()
  return (
    <pre className="whitespace-pre-wrap break-all p-4">
      {rss}
    </pre>
  )
}

