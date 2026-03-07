/**
 * Post-build script that generates per-route HTML files with correct
 * canonical URLs, meta titles, and descriptions so that crawlers
 * (which may not execute JS) see the right tags for each page.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const DIST = join(import.meta.dirname, '..', 'dist');

const ROUTES = {
  features: {
    title: 'Features - NotionGo',
    description: 'Explore NotionGo features: custom forms, multi-database management, offline mode, and a distraction-free mobile experience for Notion.',
  },
  'how-it-works': {
    title: 'How It Works - NotionGo',
    description: 'Learn how NotionGo connects to your Notion databases and simplifies data entry on mobile in three easy steps.',
  },
  contact: {
    title: 'Contact - NotionGo',
    description: 'Get in touch with the NotionGo team. We\'d love to hear your feedback and answer your questions.',
  },
  'privacy-policy': {
    title: 'Privacy Policy - NotionGo',
    description: 'Read the NotionGo privacy policy. Learn how we handle your data with a privacy-first approach.',
  },
  'terms-of-service': {
    title: 'Terms of Service - NotionGo',
    description: 'Review the NotionGo terms of service and conditions for using our app.',
  },
  'data-security': {
    title: 'Data Security - NotionGo',
    description: 'Learn about NotionGo\'s data security practices and how we protect your information.',
  },
};

const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

for (const [route, meta] of Object.entries(ROUTES)) {
  const url = `https://notiongo.app/${route}`;

  let html = template
    // Title tag
    .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
    // meta name="title"
    .replace(
      /(<meta\s+name="title"\s+content=")[^"]*(")/,
      `$1${meta.title}$2`
    )
    // meta name="description"
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${meta.description}$2`
    )
    // Canonical URL
    .replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
      `$1${url}$2`
    )
    // OG URL
    .replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      `$1${url}$2`
    )
    // OG title
    .replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
      `$1${meta.title}$2`
    )
    // OG description
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      `$1${meta.description}$2`
    )
    // Twitter URL
    .replace(
      /(<meta\s+property="twitter:url"\s+content=")[^"]*(")/,
      `$1${url}$2`
    )
    // Twitter title
    .replace(
      /(<meta\s+property="twitter:title"\s+content=")[^"]*(")/,
      `$1${meta.title}$2`
    )
    // Twitter description
    .replace(
      /(<meta\s+property="twitter:description"\s+content=")[^"]*(")/,
      `$1${meta.description}$2`
    )
    // hreflang alternate links
    .replace(
      /(<link\s+rel="alternate"\s+hreflang="en"\s+href=")[^"]*(")/,
      `$1${url}$2`
    )
    .replace(
      /(<link\s+rel="alternate"\s+hreflang="x-default"\s+href=")[^"]*(")/,
      `$1${url}$2`
    );

  const dir = join(DIST, route);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
  console.log(`  Created ${route}/index.html`);
}

console.log('Pre-rendering complete.');
