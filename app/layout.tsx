import "./global.css"
import Script from "next/script"
import { RootProvider } from "fumadocs-ui/provider"
import { Footer } from "@/components/footer"
import {
  UnifrakturCook,
  Noto_Sans_Mono,
  DM_Serif_Display,
  Libre_Franklin
} from "next/font/google"

import type { Viewport } from "next"
import type { ReactNode } from "react"

const baseUrl =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL(`https://${process.env.VERCEL_URL}`)

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

export const metadata = {
  title: {
    template: "Briefkasten • %s",
    default: "Briefkasten • Docs",
  },
  description: "Bookmarks, Read-it-later, and RSS-Feeds",
  metadataBase: baseUrl,
  openGraph: {
    title: "Briefkasten • Docs",
    description: "Bookmarks, Read-it-later, and RSS-Feeds",
    url: "https://docs.briefkastenhq.com",
    images: "/banner.png",
    siteName: "Briefkasten",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ndom91",
    title: "Briefkasten • Docs",
    description: "Bookmarks, Read-it-later, and RSS-Feeds",
    images: "/banner.png",
  },
  applicationName: "Briefkasten",
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-touch-icon.png"
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#fff" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1
}
