import { assert, assertIncludes, readJson, readText } from "./verify-utils.mjs";

const pkg = readJson("package.json");
for (const script of [
  "verify:he-build",
  "verify:he-copy",
  "verify:leaving-alignment",
  "verify:rtl",
  "verify:he-links",
  "verify:ci-contract",
  "verify:dossier",
  "verify:all",
  "test:rtl-visual",
]) {
  assert(typeof pkg.scripts[script] === "string", `package.json is missing the ${script} script`);
}
assert(pkg.devDependencies["@playwright/test"] === "1.52.0", "Playwright version must stay pinned for repeatable screenshots");

const ci = readText(".github/workflows/ci.yml");
assertIncludes(ci, "pull_request:", "PR CI trigger");
assertIncludes(ci, "npm ci", "PR CI dependency install");
assertIncludes(ci, "npm run verify:all", "PR CI verification suite");
assertIncludes(ci, "node node_modules/@playwright/test/cli.js install --with-deps chromium chromium-headless-shell", "PR CI browser install");
assertIncludes(ci, "npm run test:rtl-visual", "PR CI visual suite");
assertIncludes(ci, "actions/upload-artifact@v4", "PR CI test artifact upload");
assert(!/wrangler|pages deploy|cloudflare/i.test(ci), "PR CI must not deploy a preview branch");

const deploy = readText(".github/workflows/deploy.yml");
assertIncludes(deploy, "push:", "Production deploy trigger");
assertIncludes(deploy, "- main", "Production deploy main branch guard");
assertIncludes(deploy, "concurrency:", "Production deploy serialization");
assertIncludes(deploy, "npm run verify:all", "Production deploy verification suite");
assertIncludes(deploy, "node node_modules/@playwright/test/cli.js install --with-deps chromium chromium-headless-shell", "Production deploy browser install");
assertIncludes(deploy, "npm run test:rtl-visual", "Production deploy visual suite");
assertIncludes(deploy, "wrangler@4", "Production deploy pinned Wrangler major");
assert(!/pull_request:/i.test(deploy), "Production deploy must not run on pull requests");
assert(!/wrangler@latest/i.test(deploy), "Production deploy must not use an unpinned Wrangler tag");

const preview = readText(".github/workflows/preview.yml");
assertIncludes(preview, "pull_request:", "Preview pull-request trigger");
assert(!/^\s*push:/m.test(preview), "Preview workflow must never run from a push trigger");
assertIncludes(
  preview,
  "github.event.pull_request.head.repo.full_name == github.repository",
  "Preview same-repository guard",
);
assertIncludes(preview, "npm ci", "Preview dependency install");
assertIncludes(preview, "npm run verify:all", "Preview verification suite");
assertIncludes(
  preview,
  "node node_modules/@playwright/test/cli.js install --with-deps chromium chromium-headless-shell",
  "Preview browser install",
);
assertIncludes(preview, "npm run test:rtl-visual", "Preview visual suite");
assertIncludes(preview, "npx --yes wrangler@4 pages deploy _site", "Preview Wrangler deployment");
assertIncludes(preview, 'CF_PROJECT_NAME: toza-site', "Preview project isolation");
assertIncludes(
  preview,
  'CF_PREVIEW_BRANCH: pr-${{ github.event.pull_request.number }}',
  "Preview PR-scoped branch",
);
assertIncludes(preview, '--branch "$CF_PREVIEW_BRANCH"', "Preview branch deployment");
assert(!/--branch\s+["']?main\b/i.test(preview), "Preview workflow must never deploy the production branch");
assert(!/pages\/projects[^\n]*POST|pages project create/i.test(preview), "Preview workflow must not create or replace a Pages project");

console.log("CI CONTRACT VERIFIED");
