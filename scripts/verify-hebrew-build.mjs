import {
  assert,
  assertIncludes,
  assertRouteSourceSet,
  frontmatterValue,
  htmlFor,
  outputFile,
  publicPath,
  readText,
  routes,
  siteUrl,
  sourceFor,
} from "./verify-utils.mjs";

for (const locale of ["en", "he"]) {
  assertRouteSourceSet(locale);

  for (const route of routes) {
    const source = sourceFor(locale, route);
    const label = `${locale}/${route}`;
    const expectedPermalink = publicPath(locale, route);

    assert(
      frontmatterValue(source, "permalink", label) === expectedPermalink,
      `${label}: permalink must be ${expectedPermalink}`,
    );
    assert(
      frontmatterValue(source, "slug", label) === (route === "index" ? "" : route),
      `${label}: slug does not match its route`,
    );
    assert(
      frontmatterValue(source, "page_id", label) === route,
      `${label}: page_id does not match its route`,
    );

    const html = htmlFor(locale, route);
    assertIncludes(html, `<html lang="${locale}" dir="${locale === "he" ? "rtl" : "ltr"}">`, `${label} output`);
    assertIncludes(html, '<main id="main-content"', `${label} output`);
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
    assert(outputFile(locale, route).startsWith(`_site/${locale}/`), `${label}: output path escaped its locale root`);
  }
}

const eleventy = readText(".eleventy.js");
assert(!eleventy.includes('ignores.add("src/he/**")'), "Eleventy still ignores src/he/**");
assert(eleventy.includes('ignores.add("src/ru/**")'), "Russian publication guard was unexpectedly removed");

console.log("HE BUILD VERIFIED");
