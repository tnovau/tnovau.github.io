import React from 'react'
import StyledComponentsRegistry from '../lib/registry'
import siteConfig from '../data/siteConfig'

export const metadata = {
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

export default function RootLayout({ children }) {
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
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                window.__onThemeChange = function() {};
                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.body.className = newTheme;
                  window.__onThemeChange(newTheme);
                }

                let preferredTheme
                try {
                  preferredTheme = localStorage.getItem('theme')
                } catch (err) {}

                window.__setPreferredTheme = newTheme => {
                  setTheme(newTheme)
                  try {
                    localStorage.setItem('theme', newTheme)
                  } catch (err) {}
                }

                let darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
                darkQuery.addListener(e => {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                })

                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
              })()
            `,
          }}
        />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
