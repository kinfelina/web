import { locales } from '@/i18n/index.js';

export function getLocalizedPath(language, pageId) {
  const prefix = language === 'es' ? '' : `/${language}`;
  if (pageId === 'home') return prefix ? `${prefix}/` : '/';
  if (pageId === 'notFound') return '/404.html';
  const policyRoutes = {
    legalNotice: language === 'en' ? '/en/legal-notice/' : '/aviso-legal/',
    privacy: language === 'en' ? '/en/privacy/' : '/privacidad/',
    cookies: language === 'en' ? '/en/cookies/' : '/cookies/'
  };
  if (policyRoutes[pageId]) return policyRoutes[pageId];
  const route = locales[language].navigation.find((item) => item.id === pageId);
  return `${prefix}/${route.slug}/`;
}
