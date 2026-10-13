import { assert, assertIncludes, readJson, readText } from "./verify-utils.mjs";
import { createRequire } from 'node:module';
// js-yaml is already supplied by the locked Eleventy dependency tree.
const yaml = createRequire(import.meta.url)('js-yaml');
const workflow = source => yaml.safeLoad(source, {schema: yaml.JSON_SCHEMA});
const oneStep = (job, run, label) => {
  const steps = job.steps.filter(step => step.run?.trim() === run);
  assert(steps.length === 1, label + ': exactly one executable step required');
  assert(!steps[0]['continue-on-error'], label + ': failures must block later steps');
  return steps[0];
};
const before = (job, first, second, label) => assert(job.steps.indexOf(first) < job.steps.indexOf(second), label);

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
assert(pkg.devDependencies["@playwright/test"] === "1.64.0", "Playwright version must stay pinned for repeatable screenshots");

const ci = readText(".github/workflows/ci.yml");
assertIncludes(ci, "pull_request:", "PR CI trigger");
assertIncludes(ci, "npm ci", "PR CI dependency install");
assertIncludes(ci, "npm run verify:all", "PR CI verification suite");
assertIncludes(ci, "node node_modules/@playwright/test/cli.js install --with-deps chromium chromium-headless-shell", "PR CI browser install");
assertIncludes(ci, "npm run test:rtl-visual", "PR CI visual suite");
assertIncludes(ci, "actions/upload-artifact@cf430e030ddbb5b0abf93d22962f4752f3646cd9", "PR CI pinned test artifact upload");
assert(!/wrangler|pages deploy|cloudflare/i.test(ci), "PR CI must not deploy a preview branch");
const ciConfig = workflow(ci), ciJob = ciConfig.jobs.verify;
assert(ciConfig.on.pull_request.types.includes('synchronize'), 'PR CI must refresh on each new head');
const focusedRun = 'node --test scripts/visual-refinements.test.cjs';
const ciFocused = oneStep(ciJob, focusedRun, 'PR CI focused visual regressions');
const ciVerification = oneStep(ciJob, 'npm run verify:all', 'PR CI verification');
assert(ciFocused.if === undefined && ciVerification.if === undefined, 'PR CI regression/build checks must run unconditionally');
before(ciJob, ciFocused, ciVerification, 'PR CI focused regressions must run before build checks');

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
assertIncludes(preview, "pull_request:", "Preview PR trigger");
assert(!preview.includes("pull_request_target"), "Preview must not run in privileged PR-target context");
assertIncludes(preview, "head.repo.full_name == github.repository", "Preview same-repository guard");
assertIncludes(preview, "head.ref == 'codex/toza-approved-copy-preview'", "Preview approved branch guard");
assertIncludes(preview, "ref: ${{ github.event.pull_request.head.sha }}", "Preview exact source revision");
assertIncludes(preview, "npm run verify:all", "Preview copy/build gates");
assertIncludes(preview, "npm run test:rtl-visual", "Preview browser gate");
assertIncludes(preview, "node scripts/prepare-preview.cjs", "Preview indexing without duplicate global header rules");
const preparePreview = readText('scripts/prepare-preview.cjs');
for (const header of ['X-Robots-Tag: noindex, nofollow', 'X-Frame-Options: DENY', 'X-Content-Type-Options: nosniff', 'Referrer-Policy: strict-origin-when-cross-origin', 'Permissions-Policy: geolocation=(), camera=(), microphone=(), payment=()']) {
  assertIncludes(preparePreview, header, 'Preview indexing/security header preservation');
}
assertIncludes(preparePreview, "Exactly one global header rule required", 'Preview header uniqueness guard');
assertIncludes(preparePreview, "Preview indexing already configured", 'Preview duplicate indexing guard');
assert(!preview.includes('>> _site/_headers'), 'Preview must not append a duplicate global header rule');
const previewConfig = workflow(preview), previewJob = previewConfig.jobs.preview;
const branchGuard = "github.event.pull_request.head.repo.full_name == github.repository && (github.event.pull_request.head.ref == 'codex/toza-approved-copy-preview' || github.event.pull_request.head.ref == 'codex/toza-trust-process-refinement')";
assert(previewJob.if === branchGuard, 'Preview requires the exact same-repository two-branch allowlist');
assert(Object.keys(previewConfig.on).length === 1 && previewConfig.on.pull_request.branches.length === 1 && previewConfig.on.pull_request.branches[0] === 'main', 'Preview may run only for PRs targeting main');
assert(previewConfig.on.pull_request.types.includes('synchronize'), 'Preview must refresh on each new head');
assert(JSON.stringify(previewConfig.permissions) === JSON.stringify({contents: 'read'}), 'Preview token permissions must remain read-only');
assert(previewConfig.env === undefined && previewJob.env === undefined, 'Preview credentials must remain scoped to the deployment step');
const checkouts = previewJob.steps.filter(step => step.uses?.startsWith('actions/checkout@'));
assert(checkouts.length === 1 && checkouts[0].with.ref === '${{ github.event.pull_request.head.sha }}', 'Preview must check out only the exact PR head');
const previewFocused = oneStep(previewJob, focusedRun, 'Preview focused visual regressions');
assert(previewFocused.if === "github.event.pull_request.head.ref == 'codex/toza-trust-process-refinement'", 'Focused preview regressions run only for the new branch; prior exact heads may lack this file');
const previewVerification = oneStep(previewJob, 'npm run verify:all', 'Preview build verification');
const previewBrowser = oneStep(previewJob, 'npm run test:rtl-visual', 'Preview browser suite');
const previewPrepare = oneStep(previewJob, 'node scripts/prepare-preview.cjs', 'Preview noindex preparation');
const previewDeploy = oneStep(previewJob, 'npx --yes wrangler@4.149.0 pages deploy _site --project-name toza-site --branch "$PREVIEW_BRANCH" --commit-hash "$PREVIEW_SHA"', 'Pinned isolated preview deployment');
for (const step of [previewVerification, previewBrowser, previewPrepare, previewDeploy]) assert(step.if === undefined, 'Required preview gates/deployment must not bypass prior success');
assert(previewDeploy.env.PREVIEW_SHA === '${{ github.event.pull_request.head.sha }}', 'Preview deployment must record the exact reviewed SHA');
assert(previewDeploy.env.PREVIEW_BRANCH === "${{ github.event.pull_request.head.ref == 'codex/toza-trust-process-refinement' && 'trust-process-release' || 'four-page-release' }}", 'Preview destinations must be trusted fixed literals for the two allowed branches');
assert(previewDeploy.env.CLOUDFLARE_API_TOKEN === '${{ secrets.CLOUDFLARE_API_TOKEN }}', 'Preview deploy token must use the repository secret');
assert(previewJob.steps.filter(step => step.env?.CLOUDFLARE_API_TOKEN !== undefined).length === 1, 'Only the preview deployment step may receive its deploy token');
assert(previewJob.steps.every(step => !step.run?.includes('${{')), 'Untrusted event expressions must never be interpolated into shell code');
const runtimeSteps = previewJob.steps.filter(step => step.run?.includes('node scripts/verify-pages-runtime.mjs'));
assert(runtimeSteps.length === 1, 'Exactly one local Pages runtime gate is required');
const runtime = runtimeSteps[0];
assert(runtime.shell === 'bash' && runtime.if === undefined && !runtime['continue-on-error'], 'Local Pages failures must block deployment');
assert(runtime.env.TOZA_RUNTIME_URL === 'http://127.0.0.1:8788', 'Local Pages checks must target the owned loopback runtime');
for (const required of [
  'set -euo pipefail',
  'npx --yes wrangler@4.149.0 --version',
  'setsid npx --yes wrangler@4.149.0 pages dev _site --ip 127.0.0.1 --port 8788 --compatibility-date 2026-10-06 --show-interactive-dev-session=false',
  'runtime_pid=$!',
  'trap cleanup EXIT',
  "trap 'exit 130' INT",
  "trap 'exit 143' TERM",
  'kill -- -"$runtime_pid"',
  'kill -KILL -- -"$runtime_pid"',
  'wait "$runtime_pid"',
  'cat "$runtime_log"',
  'deadline=$((SECONDS + 90))',
  'while [[ "$SECONDS" -lt "$deadline" ]]',
  'curl --fail --silent --max-time 2 "$TOZA_RUNTIME_URL/en/"',
  "grep -Fq '<html lang=\"en\" dir=\"ltr\">'",
  "grep -Fq 'id=\"main-content\"'",
  'node scripts/verify-pages-runtime.mjs | tee "$runtime_checks"',
  "grep -Fxq 'PAGES RUNTIME VERIFIED: 78 route, status, content and asset checks'",
]) assertIncludes(runtime.run, required, 'Bounded pinned local Pages gate');
assert(!/\bpkill\b|\bkillall\b/.test(runtime.run), 'Runtime cleanup must target only the owned process group');
before(previewJob, previewFocused, previewVerification, 'Preview focused regressions must precede build checks');
before(previewJob, previewVerification, previewBrowser, 'Preview browser suite must follow build verification');
before(previewJob, previewBrowser, runtime, 'Local Pages checks must follow the browser/build checks');
before(previewJob, runtime, previewPrepare, 'All 78 local Pages checks must run before noindex preparation');
before(previewJob, previewPrepare, previewDeploy, 'Noindex preparation must precede preview deployment');
assert(!preview.includes("--branch main"), "Preview must not deploy production");
assert(readText('.nvmrc').trim() === '24' && pkg.engines.node === '24.x', 'Build runtime must use supported Node 24');
for (const workflow of [ci, preview, deploy]) {
  assertIncludes(workflow, 'npm run test:audit-policy && npm run audit:tools', 'Explicit build dependency audit gate');
  assertIncludes(workflow, 'runs-on: ubuntu-24.04', 'Stable runner image');
  assertIncludes(workflow, "node-version-file: '.nvmrc'", 'Shared Node version');
  assertIncludes(workflow, 'actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1', 'Pinned Node 24 checkout');
  assertIncludes(workflow, 'actions/setup-node@949feb2413d6458794dcd2491c4babbbce0c15c1', 'Pinned Node 24 setup');
  assert(!workflow.includes('ubuntu-latest') && !workflow.includes('actions/checkout@v4'), 'No deprecated runner/action defaults');
}
console.log("CI CONTRACT VERIFIED");
