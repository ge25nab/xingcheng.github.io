import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { assetPath } from '@/lib/utils'
import { getSiteConfig } from '@/lib/content'

const inter = Inter({ subsets: ['latin'] })

const siteConfig = getSiteConfig()

export const metadata: Metadata = {
  title: siteConfig.site.title,
  description: siteConfig.site.description,
  keywords: siteConfig.site.keywords.split(', '),
  authors: [{ name: siteConfig.author.name }],
  icons: {
    icon: assetPath('/favicon.ico'),
    shortcut: assetPath('/favicon.ico'),
    apple: assetPath('/favicon.ico'),
  },
  openGraph: {
    title: siteConfig.site.title,
    description: siteConfig.site.description,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.site.title,
    description: siteConfig.site.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

