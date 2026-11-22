// Reemplaza los metadatos de la plantilla HTML por los de una ruta (lo usa scripts/prerender-meta.mjs).
const escape = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function replaceOnce(html, pattern, replacement, label) {
  if (!pattern.test(html)) throw new Error(`prerender-meta: no encontré ${label} en dist/index.html`)
  return html.replace(pattern, replacement)
}

export function renderMeta(html, meta) {
  const title = escape(meta.title)
  const description = escape(meta.description)
  let out = html
  out = replaceOnce(out, /<title>[^<]*<\/title>/, `<title>${title}</title>`, '<title>')
  out = replaceOnce(out, /<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${description}" />`, 'description')
  out = replaceOnce(out, /<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${meta.url}" />\n    <meta name="robots" content="${meta.robots}" />`, 'canonical')
  out = replaceOnce(out, /<meta property="og:type" content="[^"]*"\s*\/?>/, `<meta property="og:type" content="${meta.type}" />`, 'og:type')
  out = replaceOnce(out, /<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${title}" />`, 'og:title')
  out = replaceOnce(out, /<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${description}" />`, 'og:description')
  out = replaceOnce(out, /<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${meta.url}" />`, 'og:url')
  return out
}
