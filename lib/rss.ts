import { getSiteConfig, getPublications } from './content'

export function generateRSS() {
  const config = getSiteConfig()
  const publications = getPublications()
  const baseUrl = 'https://xingcheng.github.io'
  const siteUrl = baseUrl
  const siteTitle = config.site.title
  const siteDescription = config.site.description

  const items = publications
    .slice(0, 10)
    .map((pub) => {
      const pubUrl = pub.links.arxiv
        ? pub.links.arxiv
        : pub.links.project
        ? pub.links.project
        : pub.links.code
        ? pub.links.code
        : `${siteUrl}/publications#${pub.id}`
      const pubDate = new Date(pub.year, 0, 1).toUTCString()

      return `    <item>
        <title><![CDATA[${pub.title}]]></title>
        <link>${pubUrl}</link>
        <guid>${pubUrl}</guid>
        <pubDate>${pubDate}</pubDate>
        <description><![CDATA[${pub.authors.join(', ')} - ${pub.venue}, ${pub.year}]]></description>
      </item>`
    })
    .join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteTitle}]]></title>
    <link>${siteUrl}</link>
    <description><![CDATA[${siteDescription}]]></description>
    <language>en-us</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`

  return rss
}

