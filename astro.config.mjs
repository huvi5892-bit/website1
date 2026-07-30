// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['he', 'en'],
    defaultLocale: 'he',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    build: {
      // conservative target so media queries stay as legacy `@media (max-width)`
      // syntax that older phone browsers understand (not the `width <=` range form)
      cssTarget: ['chrome87', 'safari13', 'firefox78', 'edge88'],
    },
  },
});
