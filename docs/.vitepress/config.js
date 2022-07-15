/**
 * @type {import('vitepress').UserConfig}
 */
export default {
  title: 'Briefkasten Home',
  description: 'Homepage + Docs',
  lastUpdated: true,
  lang: 'en-US',
  markdown: {
    theme: 'rose-pine',
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Briefkasten',
    lastUpdatedText: 'Updated Date',
    editLink: {
      pattern:
        'https://github.com/ndom91/briefkasten-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
      {
        text: 'Related',
        items: [
          {
            text: 'Screenshot Scraper',
            link: 'https://github.com/ndom91/briefkasten-scrape',
          },
          {
            text: 'Browser Extension',
            link: 'https://github.com/ndom91/briefkasten-extension',
          },
          {
            text: 'Screenshot API',
            link: 'https://github.com/ndom91/briefkasten-screenshot',
          },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ndom91/briefkasten' },
      { icon: 'twitter', link: 'https://twitter.com/ndom91' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/docs/' },
          { text: 'Getting Started', link: '/docs/getting-started' },
          { text: 'Selfhosting', link: '/docs/self-hosting' },
          { text: 'Development', link: '/docs/development' },
        ],
      },
    ],
  },
}
