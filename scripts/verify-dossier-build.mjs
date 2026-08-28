import { assert, assertIncludes, countMatches, htmlFor, readText, sourceFor } from "./verify-utils.mjs";

const pages = [
  {
    route: "index",
    h1: "Your digital life reveals more than you realize.",
    familyCount: 3,
    family: "Identity convergence",
  },
  {
    route: "separation-divorce",
    h1: "Before separation or divorce moves, understand what your shared digital life still reveals.",
    familyCount: 1,
    family: "Trust residue",
  },
  {
    route: "business-dispute",
    h1: "You know your legal and commercial position. Do you know your digital one?",
    familyCount: 1,
    family: "Personal/work crossover",
  },
];

for (const page of pages) {
  const source = sourceFor("en", page.route);
  const html = htmlFor("en", page.route);
  const label = `en/${page.route}`;

  assertIncludes(source, 'visual_system: "evidence-ledger"', `${label} visual system`);
  assertIncludes(source, 'body_class: "dossier-page"', `${label} body class`);
  assertIncludes(html, '<body class="dossier-page">', `${label} output body`);
  assertIncludes(html, '../assets/css/dossier.css', `${label} dossier stylesheet`);
  assertIncludes(html, `<h1`, `${label} H1`);
  assertIncludes(html, page.h1, `${label} approved headline`);
  assert(countMatches(html, /<h1\b/g) === 1, `${label}: expected exactly one H1`);
  assertIncludes(html, "Request a private conversation", `${label} primary CTA`);
  assertIncludes(html, "₪3,500", `${label} assessment price`);
  assertIncludes(html, page.family, `${label} relevant exposure family`);
  assert(
    countMatches(html, /class="exposure-ledger"/g) === page.familyCount,
    `${label}: expected ${page.familyCount} exposure ledger(s)`,
  );
  assert(!html.includes("guilloche.js"), `${label}: guilloche script must be suppressed`);
  assert(!/<details\b/i.test(html), `${label}: FAQ accordions belong on the separate FAQ page`);
  assert(!/Book (?:a |the )?(?:Private Exposure )?Assessment/i.test(html), `${label}: obsolete booking CTA remains`);
  assert(!/<img[^>]+src=["']https?:\/\//i.test(html), `${label}: remote image URL entered production output`);
  assert(!/watermark/i.test(html), `${label}: watermarked asset marker entered production output`);
}

const home = htmlFor("en", "index");
for (const family of ["Identity convergence", "Trust residue", "Personal/work crossover"]) {
  assertIncludes(home, family, `Home compound exposure: ${family}`);
}

const separation = htmlFor("en", "separation-divorce");
assert(!separation.includes("Personal/work crossover"), "Separation page must not repeat the business exposure family");

const business = htmlFor("en", "business-dispute");
assert(!business.includes("Trust residue"), "Business page must not repeat the separation exposure family");

const legacy = htmlFor("en", "why-us");
assertIncludes(legacy, "guilloche.js", "Legacy-page guilloche continuity");
assert(!legacy.includes("dossier.css"), "Legacy pages must not load the dossier stylesheet yet");

const dossierCss = readText("assets/css/dossier.css");
assert(!/@media\s*\(prefers-color-scheme/i.test(dossierCss), "Dossier colors must not follow OS color scheme");

console.log("DOSSIER BUILD VERIFIED");
