# Soft Pos Website

Production-ready two-page marketing website built with React, TypeScript, Vite, and React Router.

## Architecture

- `src/app`: app entry and route setup
- `src/components`: reusable UI building blocks
- `src/constants`: central static configuration like contact details and domain
- `src/content`: editable website copy and page-level SEO content
- `src/hooks`: small hooks such as document metadata management
- `src/layouts`: shared shell used across pages
- `src/pages`: route-level page composition
- `src/styles`: global design system and responsive styling
- `src/types`: shared TypeScript models
- `public`: SEO and platform assets including `robots.txt`, `sitemap.xml`, manifest, favicon, and Open Graph image

## Main editable content

- `src/content/siteContent.ts`
- `src/constants/site.ts`

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Production build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```
