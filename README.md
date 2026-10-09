# Toza

Eleventy/Nunjucks marketing site deployed to the existing Cloudflare Pages project toza-site.

## English edition

The accepted English copy, authority and release gates live in projects/toza-en-editorial-revision/. The D-026 release publishes eleven English marketing pages. Hebrew marketing source is preserved but temporarily unpublished; Russian remains unpublished. Hebrew terms/privacy documents remain at the root and are labelled as Hebrew. This publication choice does not change service-language availability.

The Clear Practice visual system, approved logo and self-hosted Source Sans 3 implement the owner's round 2 A selection. See DESIGN.md. The authentic portrait and contact channels are retained. Wordmark: toza; running text: Toza. No new intake or payment system is part of this release.

## Development and checks

- npm ci installs the locked tools.
- npm run sync:copy reproduces the accepted English templates. Change presentation in scripts/clear-practice.cjs; do not hand-edit generated copy or alter accepted blocks without owner approval.
- npm run build cleans only generated _site before building, preventing unpublished files surviving a rebuild.
- npm run verify:all checks accepted-source fingerprints, generated templates, published routes, links, schema facts, retained Hebrew source and legal RTL, and CI/deploy constraints. Historical he-* command names are retained for workflow compatibility.
- Install the pinned Playwright Chromium browsers, then npm run test:rtl-visual runs desktop/mobile English and retained legal checks.
- Start a local Pages runtime with the existing Wrangler 4 tooling, then node scripts/verify-pages-runtime.mjs checks actual redirects/statuses. Default address: http://127.0.0.1:8788; override TOZA_RUNTIME_URL for release smoke checks.

Pages normalizes .html aliases to extensionless URLs; canonicals and sitemap follow those final URLs. Shared CSS/JS URLs are versioned because assets have long immutable cache lifetimes.

## Release

General PR verification does not deploy. A separate preview workflow is restricted to the same-repository codex/toza-clear-practice branch and deploys only the noindex design-a preview after all checks pass. A reviewed merge to main triggers the existing production deployment. D-027 records the owner's approval to ship direction A through the preview, review and exact-head checks. Verify production routes and rollback details after deployment.
