import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'docs',
  base: '/',
  lang: 'en-US',
  title: 'Wisnuunu',
  description: 'Devlog and knowledge sharing by Wisnuunu — building things, one commit at a time.',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Wisnuunu' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],

  markdown: {
    image: { lazyLoading: true },
    lineNumbers: true
  },

  themeConfig: {
    logo: { src: '/favicon.svg', width: 28, height: 28 },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Devlog', link: '/devlog/' },
      { text: 'Notes', link: '/notes/' },
      { text: 'Projects', link: '/projects' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Site',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Projects', link: '/projects' },
          { text: 'About', link: '/about' }
        ]
      },
      {
        text: 'Devlog',
        link: '/devlog/',
        items: [{ text: 'All posts', link: '/devlog/' }]
      },
      {
        text: 'Knowledge base',
        link: '/notes/',
        items: [{ text: 'Notes home', link: '/notes/' }]
      }
    ],

    outline: { label: 'On this page', level: [2, 3] },
    docFooter: { prev: 'Previous', next: 'Next' },
    lastUpdated: { text: 'Last updated' },

    search: {
      provider: 'local',
      options: {
        detailedView: true,
        translations: {
          button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Reset search',
            displayDetails: 'Show details'
          }
        }
      }
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/Wisnuunu' }]
  }
})