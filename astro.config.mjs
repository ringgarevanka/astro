import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { remarkReadingTime } from './remark-reading-time.mjs';

/* Choose One Based on your platform */
// import node from '@astrojs/node';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [
    AstroPWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Ringga Revanka Site',
        short_name: 'Ringga Site',
        description: '.',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'https://avatars.githubusercontent.com/u/99320495',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://avatars.githubusercontent.com/u/99320495',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'https://avatars.githubusercontent.com/u/99320495',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    }),
    tailwind(),
    icon(),
  ],
  output: "server",
  /* Choose One Based on your platform */
  /* adapter: node({
    mode: 'standalone',
  }), */
  adapter: netlify({
    edgeMiddleware: true
  }),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});