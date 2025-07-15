// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://MartynRobotham.github.io/my-website/', // Important for correct routing
  base: '/my-website/', // Needed for GitHub Pages
  outDir: './dist',
  integrations: [react()]
});