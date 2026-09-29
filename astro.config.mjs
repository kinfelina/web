import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kinfelina.org',
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false }
  }
});
