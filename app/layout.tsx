import "./global.css"
import Script from "next/script"
import { Star } from "@phosphor-icons/react/dist/ssr"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { RootProvider } from "fumadocs-ui/provider"
import { baseUrl, createMetadata } from "@/utils/metadata"

import type { Viewport } from "next"
import type { ReactNode } from "react"

export const metadata = createMetadata({
  title: {
    template: "%s | Briefkasten",
    default: "Briefkasten",
  },
  description: "Read-it-later - Bookmarks and RSS-Feeds",
  metadataBase: baseUrl,
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#fff" },
  ],
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      {process.env.NODE_ENV === "production" && (
        <Script
          data-api="/a/e"
          data-domain="docs.briefkastenhq.com"
          src="/p.js"
        />
      )}
      <body>
        <RootProvider>
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  )
}

function Footer(): JSX.Element {
  return (
    <footer className="py-12 mt-auto border-t bg-card text-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end">
        <div>
          <p className="mb-1 text-sm font-semibold">Briefkasten</p>
          <p className="text-xs text-muted-foreground">
            Built with ❤️ by{" "}
            <a
              href="https://ndo.dev"
              rel="noreferrer noopener"
              target="_blank"
              className="font-medium"
            >
              ndom91
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-start items-end">
          <a
            href="https://twitter.com/ndom91"
            rel="noreferrer noopener"
            className="flex flex-row items-center text-sm transition-colors text-muted-foreground hover:text-accent-foreground"
          >
            Twitter
          </a>
          <a
            href="https://github.com/ndom91/briefkasten"
            rel="noreferrer noopener"
            className="flex flex-row items-center text-sm transition-colors text-muted-foreground hover:text-accent-foreground"
          >
            <Star className="mr-2 size-4" />
            Give us a star
          </a>
        </div>
      </div>
    </footer>
  )
}
