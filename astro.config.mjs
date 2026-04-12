// @ts-check
import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://martynrobotham.co.uk/',
  outDir: './dist',
  integrations: [
      react(),
    AstroPWA({
      registerType: 'autoUpdate', // or your preference
      includeAssets: [
        'assets/favicon/android-chrome-192x192.png',
        'assets/favicon/android-chrome-512x512.png',
        'assets/favicon/favicon.ico',
      ],
      manifest: {
        name: 'My App',
        short_name: 'App',
        start_url: '/',
        display: 'standalone',
        background_color: '#2A2A2A',
        theme_color: '#2A2A2A',
        icons: [
          {
            src: 'assets/favicon/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/favicon/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    })]
});