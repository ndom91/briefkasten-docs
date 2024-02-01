import './global.css';
import Link from 'next/link';
import Script from "next/script"
import { Star } from 'lucide-react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { RootProvider } from 'fumadocs-ui/provider';
import { baseUrl, createMetadata } from '@/utils/metadata';

import type { Viewport } from 'next';
import type { ReactNode } from 'react';


export const metadata = createMetadata({
  title: {
    template: '%s | Fumadocs',
    default: 'Fumadocs',
  },
  description: 'The Next.js framework for building documentation sites',
  metadataBase: baseUrl,
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
<html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      {process.env.NODE_ENV === 'production' && (
    <Script data-api="/a/e" data-domain="docs.briefkastenhq.com" src="/p.js"/>
        )}
      <body>
        <RootProvider>
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}

function Footer(): JSX.Element {
  return (
    <footer className="py-12 mt-auto border-t bg-card text-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end">
        <div>
          <p className="mb-1 text-sm font-semibold">Fumadocs</p>
          <p className="text-xs">
            Built with ❤️ by{' '}
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

        <div className="flex flex-row flex-wrap gap-12 items-center">
          <a
            href="https://github.com/fuma-nama/fumadocs"
            rel="noreferrer noopener"
            className="flex flex-row items-center text-sm transition-colors text-muted-foreground hover:text-accent-foreground"
          >
            <Star className="mr-2 size-4" />
            Give us a star
          </a>
          <Link
            href="/showcase"
            className="flex flex-row items-center text-sm transition-colors text-muted-foreground hover:text-accent-foreground"
          >
            Showcase
          </Link>
        </div>
      </div>
    </footer>
  );
}
