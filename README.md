# Kin Felina

[![Netlify Status](https://api.netlify.com/api/v1/badges/ee9ed7f0-279a-4574-9c4c-862a47c30278/deploy-status)](https://app.netlify.com/projects/kinfelina/deploys)

Web oficial de Kin Felina, asociación dedicada a la gestión ética y al bienestar de los gatos comunitarios en Sorbas, España. Está construida con Astro y genera páginas estáticas en español e inglés.

## Desarrollo

Requisitos: Node.js 24 o posterior.

```sh
npm install
npm run dev
```

## Compilación

```sh
npm run build
npm run preview
```

La salida estática se genera en `dist/` y se publica en Netlify. El español es el idioma predeterminado y usa la raíz y slugs sin prefijo (`/`, `/contacto/`). El inglés usa el prefijo `/en/` (`/en/`, `/en/contact/`).

## Estructura

- `src/i18n/locales/`: literales y slugs traducidos por idioma.
- `src/i18n/index.js`: registro y carga de idiomas.
- `src/i18n/routes.js`: construcción de rutas localizadas.
- `src/pages/`: rutas estáticas por idioma.
- `src/components/`: navegación, contenido de página y footer compartidos.
- `src/layouts/`: metadatos y estructura HTML comunes.
- `css/styles.css`: estilos base del sitio.
