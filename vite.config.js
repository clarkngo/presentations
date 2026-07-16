import { defineConfig } from 'vite';
import { resolve } from 'path';
import { decksManifestPlugin } from './scripts/generate-decks-manifest.js';

export default defineConfig({
  plugins: [decksManifestPlugin()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        slide: resolve(__dirname, 'slide.html'),
      },
    },
  },
});
