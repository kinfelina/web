import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

const routeMap = JSON.parse(
  readFileSync(new URL('./src/i18n/route-map.json', import.meta.url), 'utf8')
);
const locales = {
  es: JSON.parse(readFileSync(new URL('./src/i18n/locales/es.json', import.meta.url), 'utf8')),
  en: JSON.parse(readFileSync(new URL('./src/i18n/locales/en.json', import.meta.url), 'utf8'))
};
const alternateLinksByUrl = new Map();

for (const pageId of Object.keys(routeMap.es)) {
  if (pageId === 'notFound') continue;

  const localizedLinks = Object.keys(routeMap).map((language) => ({
    url: new URL(routeMap[language][pageId], 'https://kinfelina.org').href,
    lang: locales[language].locale
  }));
  const links = [...localizedLinks, { url: localizedLinks[0].url, lang: 'x-default' }];

  for (const link of localizedLinks) {
    alternateLinksByUrl.set(link.url, links);
  }
}

export default defineConfig({
  site: 'https://kinfelina.org',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !new URL(page).pathname.endsWith('/404/'),
      serialize: (item) => ({
        ...item,
        links: alternateLinksByUrl.get(item.url)
      })
    })
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false }
  }
});
