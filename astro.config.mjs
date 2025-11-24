import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ivochote.gob.pe',
  integrations: [react(), tailwind()],
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' }
});