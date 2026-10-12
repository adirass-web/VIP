# Toza

Eleventy/Nunjucks marketing site deployed to the existing Cloudflare Pages project toza-site.

## English edition

The accepted English copy, authority and release gates live in projects/toza-en-editorial-revision/. The D-026 release publishes eleven English marketing pages. Hebrew marketing source is preserved but temporarily unpublished; Russian remains unpublished. Hebrew terms/privacy documents remain at the root and are labelled as Hebrew. This publication choice does not change service-language availability.

The Clear Practice visual system, approved logo and self-hosted Source Sans 3 implement the owner's round 2 A selection. See DESIGN.md. The authentic portrait and contact channels are retained. Wordmark: toza; running text: Toza. No new intake or payment system is part of this release.

## Development and checks

- Use Node 24 (.nvmrc), then npm ci installs the locked tools.
- npm run test:audit-policy and npm run audit:tools check the build-tool audit regression policy. Two unpatched upstream advisories remain explicitly reported; see docs/build-tool-maintenance.md for their scope and upgrade rationale.
- npm run sync:copy reproduces the accepted English templates. Change presentation in scripts/clear-practice.cjs; do not hand-edit generated copy or alter accepted blocks without owner approval.
- npm run build cleans only generated _site before building, preventing unpublished files surviving a rebuild.
- npm run verify:all checks accepted-source fingerprints, generated templates, published routes, links, schema facts, retained Hebrew source and legal RTL, and CI/deploy constraints. Historical he-* command names are retained for workflow compatibility.
- Install the pinned Playwright Chromium browsers, then npm run test:rtl-visual runs desktop/mobile English and retained legal checks.
- npm run verify:pages starts lockfile-pinned Wrangler 4.149.0 on an available loopback port, runs all 78 Pages route/status/content checks, and stops its process tree. Run after a build; CI runs this gate before deployment. Diagnostics are saved to .wrangler/pages-runtime-check.log.
- npm run pages:dev starts a persistent local Pages runtime on port 8788. For an existing or hosted runtime, node scripts/verify-pages-runtime.mjs uses TOZA_RUNTIME_URL (default http://127.0.0.1:8788).

Pages normalizes .html aliases to extensionless URLs; canonicals and sitemap follow those final URLs. Shared CSS/JS URLs are versioned because assets have long immutable cache lifetimes.

## Release

Maintenance PR #53 and the approved four-page release #55 are merged. The released baseline is 6c525f8; see [current project status](projects/toza-en-editorial-revision/state/CURRENT-STATUS.md) and the [release record](docs/four-page-copy-preview/RELEASE.md). PR #54 remains untouched.

General PR verification does not deploy. The separate preview workflow remains restricted to the same-repository codex/toza-approved-copy-preview branch and its noindex four-page-release deployment; this maintenance branch has no preview deployment authorization. A reviewed merge to main triggers production deployment using the installed, lockfile-pinned Wrangler. Verify production routes and rollback details after any deployment.

Canonical editorial instructions and skills live in the [editorial project](projects/toza-en-editorial-revision/README.md); docs/editorial and root skills provide compatibility links. See the [post-release maintenance record](docs/post-release-maintenance.md) for cleanup disposition and remaining upstream advisories.
