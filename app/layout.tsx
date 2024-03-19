import "./global.css"
import Script from "next/script"
import { Star } from "@phosphor-icons/react/dist/ssr"
import { RootProvider } from "fumadocs-ui/provider"
import { baseUrl, createMetadata } from "@/utils/metadata"
import { Libre_Franklin } from "next/font/google"
import {
  UnifrakturCook,
  Noto_Sans_Mono,
  DM_Serif_Display,
} from "next/font/google"

import type { Viewport } from "next"
import type { ReactNode } from "react"

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-google-sans",
  display: "swap",
})

const dmMono = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-google-mono",
  display: "swap",
})

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-google-display",
  display: "swap",
})

const uni = UnifrakturCook({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-google-heading",
  display: "swap",
})

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
      className={`${libreFranklin.variable} ${uni.variable} ${dmMono.variable} ${dmSerif.variable}`}
      suppressHydrationWarning
    >
      {process.env.NODE_ENV === "production" && (
        <Script
          data-api="/a/e"
          data-domain="docs.briefkastenhq.com"
          src="/p.js"
        />
      )}
      <body className="overflow-x-hidden">
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

        <div className="flex flex-col gap-2 justify-start sm:items-end">
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
