import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { baseUrl, createMetadata } from "@/utils/metadata"
import { Libre_Franklin } from "next/font/google"
import { Footer } from "../components/footer"
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
    template: "Briefkasten • %s",
    default: "Briefkasten • Docs",
  },
  description: "Bookmarks, Read-it-later, and RSS-Feeds",
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
        <Analytics />
        <RootProvider>
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  )
}
