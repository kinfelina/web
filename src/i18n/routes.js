import { locales } from './index.js';

export function getLocalizedPath(language, pageId) {
  const prefix = language === 'es' ? '' : `/${language}`;
  if (pageId === 'home') return prefix ? `${prefix}/` : '/';
  const route = locales[language].navigation.find((item) => item.id === pageId);
  return `${prefix}/${route.slug}/`;
}