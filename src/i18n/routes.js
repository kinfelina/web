import routeMap from '@/i18n/route-map.json';

export function getLocalizedPath(language, pageId) {
  return routeMap[language][pageId];
}
