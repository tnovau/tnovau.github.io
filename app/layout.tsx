import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import siteConfig from '../data/siteConfig'

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.siteTitle}`,
    default: siteConfig.siteTitle,
  },
  description: siteConfig.siteDescription,
  keywords: siteConfig.keyWords,
  authors: [{ name: siteConfig.authorName }],
  openGraph: {
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    url: siteConfig.siteUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    creator: `@${siteConfig.twitterUsername}`,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {siteConfig.googleAnalyticsId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${siteConfig.googleAnalyticsId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className='light'>
        {children}
      </body>
    </html>
  )
}
