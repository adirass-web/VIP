import { assert, assertIncludes, readJson, readText } from "./verify-utils.mjs";

const pkg = readJson("package.json");
for (const script of [
  "verify:he-build",
  "verify:he-copy",
  "verify:leaving-alignment",
  "verify:rtl",
  "verify:he-links",
  "verify:ci-contract",
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

console.log("CI CONTRACT VERIFIED");
const preview = readText(".github/workflows/preview.yml");
assertIncludes(preview, "pull_request:", "Preview PR trigger");
assert(!preview.includes("pull_request_target"), "Preview must not run in privileged PR-target context");
assertIncludes(preview, "head.repo.full_name == github.repository", "Preview same-repository guard");
assertIncludes(preview, "head.ref == 'codex/toza-clear-practice'", "Preview approved branch guard");
assertIncludes(preview, "ref: ${{ github.event.pull_request.head.sha }}", "Preview exact source revision");
assertIncludes(preview, "npm run verify:all", "Preview copy/build gates");
assertIncludes(preview, "npm run test:rtl-visual", "Preview browser gate");
assertIncludes(preview, "X-Robots-Tag: noindex, nofollow", "Preview indexing exclusion");
assertIncludes(preview, "--branch design-a", "Preview isolated deployment branch");
assert(!preview.includes("--branch main"), "Preview must not deploy production");
