import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PassThrough } from 'node:stream';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { createServer } from 'vite';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(projectRoot, 'dist');
const origin = 'https://www.nucleoequilibrio.com.br';
const articles = JSON.parse(await fs.readFile(path.join(projectRoot, 'content/blog/posts.json'), 'utf8'));
if (!Array.isArray(articles)) throw new Error('content/blog/posts.json must contain an array.');
const seenSlugs = new Set();
for (const post of articles) {
  if (typeof post.slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) {
    throw new Error(`Invalid blog slug: ${String(post.slug)}`);
  }
  if (seenSlugs.has(post.slug)) throw new Error(`Duplicate blog slug: ${post.slug}`);
  seenSlugs.add(post.slug);
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);
}

function setTag(html, id, tagName, attributes) {
  const attrs = Object.entries(attributes)
    .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
    .join(' ');
  const replacement = `<${tagName} id="${id}" ${attrs}>`;
  const matcher = new RegExp(`<${tagName}\\s+id="${id}"[^>]*>`, 'i');
  return matcher.test(html) ? html.replace(matcher, replacement) : html.replace('</head>', `  ${replacement}\n</head>`);
}

function setSeo(html, { title, description, canonical, image, type = 'website', jsonLd }) {
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = setTag(html, 'meta-description', 'meta', { name: 'description', content: description });
  html = setTag(html, 'canonical-url', 'link', { rel: 'canonical', href: canonical });
  html = setTag(html, 'og-title', 'meta', { property: 'og:title', content: title });
  html = setTag(html, 'og-description', 'meta', { property: 'og:description', content: description });
  html = setTag(html, 'og-url', 'meta', { property: 'og:url', content: canonical });
  html = setTag(html, 'og-type', 'meta', { property: 'og:type', content: type });
  html = setTag(html, 'og-image', 'meta', { property: 'og:image', content: image });
  html = setTag(html, 'twitter-card', 'meta', { name: 'twitter:card', content: 'summary_large_image' });
  const safeJson = JSON.stringify(jsonLd).replace(/</g, '\\u003c');
  const jsonScript = `<script id="seo-jsonld" type="application/ld+json">${safeJson}</script>`;
  const jsonPattern = /<script id="seo-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/i;
  return jsonPattern.test(html) ? html.replace(jsonPattern, jsonScript) : html.replace('</head>', `  ${jsonScript}\n</head>`);
}

async function renderApp(App, pathname) {
  const previousWindow = globalThis.window;
  globalThis.window = { location: { pathname }, setTimeout, clearTimeout };
  try {
    return await new Promise((resolve, reject) => {
    const chunks = [];
    const errors = [];
    let timeout;
    let abortStream;
    const finish = (fn, value) => {
      if (timeout) clearTimeout(timeout);
      fn(value);
    };
    const stream = renderToPipeableStream(React.createElement(App), {
      onAllReady() {
        if (errors.length) {
          abortStream?.();
          finish(reject, new AggregateError(errors, `SSR failed for ${pathname}`));
          return;
        }
        const output = new PassThrough();
        output.on('data', (chunk) => chunks.push(chunk));
        output.on('error', (error) => finish(reject, error));
        output.on('end', () => finish(resolve, Buffer.concat(chunks).toString('utf8')));
        stream.pipe(output);
      },
      onShellError(error) {
        finish(reject, error);
      },
      onError(error) {
        errors.push(error);
      },
    });
    abortStream = stream.abort;
    timeout = setTimeout(() => {
      abortStream();
      finish(reject, new Error(`SSR timeout for ${pathname}`));
    }, 30000);
    });
  } finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
}

const vite = await createServer({
  configFile: path.join(projectRoot, 'vite.config.ts'),
  root: projectRoot,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const { default: App } = await vite.ssrLoadModule('/App.tsx');
  const baseHtml = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');
  const rootMarker = '<div id="root"></div>';
  if (!baseHtml.includes(rootMarker)) throw new Error('Vite output is missing the #root marker.');

  const homeUrl = `${origin}/`;
  const organizationId = `${origin}/#organization`;
  const homeMarkup = await renderApp(App, '/');
  const organization = {
    '@type': 'Organization',
    '@id': organizationId,
    name: 'Núcleo Equilíbrio',
    url: homeUrl,
    logo: `${origin}/assets/images/logo-nucleo-equilibrio.webp`,
  };
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      { '@type': 'WebSite', '@id': `${origin}/#website`, name: 'Núcleo Equilíbrio', url: homeUrl, publisher: { '@id': organizationId } },
    ],
  };
  const homeHtml = setSeo(baseHtml.replace(rootMarker, `<div id="root">${homeMarkup}</div>`), {
    title: 'Núcleo Equilíbrio | Orientação e apoio para famílias',
    description: 'Apoio, acolhimento e orientação especializada para pessoas e famílias. Atendimento reservado em Goiás, Distrito Federal e região.',
    canonical: homeUrl,
    image: `${origin}/assets/images/hero-bg-1280w.webp`,
    jsonLd: homeJsonLd,
  });
  await fs.writeFile(path.join(distDir, 'index.html'), homeHtml);

  const blogUrl = `${origin}/blog`;
  const blogMarkup = await renderApp(App, '/blog');
  const blogHtml = setSeo(baseHtml.replace(rootMarker, `<div id="root">${blogMarkup}</div>`), {
    title: 'Blog | Núcleo Equilíbrio',
    description: 'Orientações para famílias sobre cuidado, tratamento e próximos passos, com responsabilidade e acolhimento.',
    canonical: blogUrl,
    image: `${origin}/assets/images/logo-nucleo-equilibrio.webp`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Blog Núcleo Equilíbrio',
      url: blogUrl,
      publisher: { '@id': organizationId },
    },
  });
  await fs.writeFile(path.join(distDir, 'blog.html'), blogHtml);

  const sitemapUrls = [homeUrl, blogUrl];
  for (const post of articles) {
    const pathname = `/blog/${post.slug}`;
    const canonical = `${origin}${pathname}`;
    const markup = await renderApp(App, pathname);
    const postSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      image: `${origin}${post.image}`,
      mainEntityOfPage: canonical,
      publisher: { '@id': organizationId },
    };
    const articleHtml = setSeo(baseHtml.replace(rootMarker, `<div id="root">${markup}</div>`), {
      title: `${post.title} | Núcleo Equilíbrio`,
      description: post.excerpt,
      canonical,
      image: `${origin}${post.image}`,
      type: 'article',
      jsonLd: postSchema,
    });
    await fs.mkdir(path.join(distDir, 'blog'), { recursive: true });
    await fs.writeFile(path.join(distDir, 'blog', `${post.slug}.html`), articleHtml);
    sitemapUrls.push(canonical);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((url) => `  <url><loc>${escapeHtml(url)}</loc></url>`).join('\n')}\n</urlset>\n`;
  await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap);

  console.log(`SEO prerender complete: homepage, blog index, ${articles.length} articles; sitemap contains ${sitemapUrls.length} canonical URLs.`);
} finally {
  await vite.close();
}
