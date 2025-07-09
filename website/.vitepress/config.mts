import { defineConfig } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hypervisor in 1,000 Lines",
  description: "Write your first hypervisor from scratch, in 1K LoC.",
  cleanUrls: true,
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
  },
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        sidebar: [
          {
            text: 'Table of Contents',
            items: [
              { link: '/en/', text: '00. Intro' },
              { link: '/en/01-getting-started', text: '01. Getting Started' },
              { link: '/en/02-boot', text: '02. Boot' },
              { link: '/en/03-hello-world', text: '03. Hello World' },
              { link: '/en/04-memory-allocation', text: '04. Memory Allocation' },
            ]
          },
          {
            text: 'Links',
            items: [
              { link: 'https://github.com/nuta/hypervisor-in-1000-lines', text: 'GitHub repository' },
            ]
          },
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/nuta/hypervisor-in-1000-lines' }
        ]
      }
    },
  },
})
