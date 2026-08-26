import path from "node:path";
import {
  assert,
  assertIncludes,
  fileExists,
  htmlFor,
  publicPath,
  readText,
  routes,
  siteUrl,
} from "./verify-utils.mjs";

function anchors(html) {
  return [...html.matchAll(/<a\b[^>]*\bhref=(?:"([^"]*)"|'([^']*)')/gi)].map((match) => match[1] || match[2]);
}

function assertHebrewTargetExists(href, label) {
  const target = href.split(/[?#]/, 1)[0];
  if (!target.startsWith("/he/")) return;

  const output = target.endsWith("/")
    ? path.join("_site", target.slice(1), "index.html")
    : path.join("_site", target.slice(1));
  assert(fileExists(output), `${label}: Hebrew href ${href} has no built target ${output}`);
}

for (const route of routes) {
  const html = htmlFor("he", route);
  const label = `he/${route}`;
  const hrefs = anchors(html);

  assert(hrefs.some((href) => href === "/he/"), `${label}: brand/home link is not localized`);
  assert(!hrefs.some((href) => href.startsWith("/en/")), `${label}: visible anchor incorrectly points to English`);
  hrefs.forEach((href) => assertHebrewTargetExists(href, label));

  assertIncludes(
    html,
    `<link rel="alternate" hreflang="en" href="${siteUrl}${publicPath("en", route, { directoryForIndex: true })}">`,
    `${label} English alternate`,
  );
  assertIncludes(
    html,
    `<link rel="alternate" hreflang="he" href="${siteUrl}${publicPath("he", route, { directoryForIndex: true })}">`,
    `${label} Hebrew alternate`,
  );
  assertIncludes(html, 'href="/terms.html" hreflang="en"', `${label} terms-language hint`);
  assertIncludes(html, 'href="/privacy.html" hreflang="en"', `${label} privacy-language hint`);
  assertIncludes(html, '"availableLanguage": ["English", "Hebrew"]', `${label} schema language list`);
}

const sitemap = readText("sitemap.xml");
for (const locale of ["en", "he"]) {
  for (const route of routes) {
    const href = `${siteUrl}${publicPath(locale, route, { directoryForIndex: true })}`;
    assertIncludes(sitemap, `<loc>${href}</loc>`, `Sitemap ${locale}/${route}`);
  }
}

const redirects = readText("_redirects");
assert(!/^\/he\/\*/m.test(redirects), "Hebrew routes are still redirected away");
assert(/^\/ru\/\*/m.test(redirects), "Russian publication guard was unexpectedly removed");
assert(!/^\/en\/why-us\.html\s+/m.test(redirects), "The local English Why Toza route is still redirected away");

assert(
  routes.every((route) => fileExists(`_site/he/${route}.html`)),
  "A Hebrew output route is missing from the build",
);

console.log("HE LINKS VERIFIED");
