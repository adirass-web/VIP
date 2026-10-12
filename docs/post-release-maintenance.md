# Post-release maintenance — 12 October 2026

Baseline: released main `6c525f8` (PR #55), following Node 24/toolchain maintenance #53. This work changes development tooling, CI and project navigation; approved source, public templates, design, service facts, legal documents and the production route contract remain unchanged.

## Reconciliation

The project README and CURRENT-STATUS now describe the published release and effective EN-02 → EN-03 → EN-04 authority. The root README describes the actual four-page preview workflow. Historical approval packets and release plans are preserved, with current entry points explaining their scope. No old approval or fingerprint-protected file is rewritten.

Eight duplicate editorial documents and four duplicate root skills now link to their complete canonical project versions. Root skill frontmatter remains discoverable. The older docs/editorial decision register is labelled historical and points to the live register. The canonical instructions, AGENTS.md, original source snapshots, skills and approval manifests retain their original fingerprints.

## Tooling and CI

Wrangler 4.149.0 is an exact devDependency with its transitive tree in package-lock.json. Both deploy workflows use `npm run pages:deploy -- ...`, resolving the installed tool rather than downloading a floating Wrangler major. The existing audit policy reports the same two residual root advisories and nine affected nodes; adding Wrangler introduced no new audit findings. Monitor [braces](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) and [sprintf-js](https://github.com/advisories/GHSA-hp3w-g68c-fv3c) through `npm run audit:tools`, and reassess compatible fixes without cross-major overrides or audit suppression.

`npm run verify:pages` starts local Wrangler on an available loopback port, waits for that process's readiness and actual English HTML, runs the existing 78-check runtime verifier, and stops its own process tree. Its exit status propagates failures. CI, production and the already-authorized preview workflow run this gate after the build and before any deployment. General PR CI has no deployment credentials or deployment step. The four-page preview's same-repository/exact-head restriction and security-header preparation remain intact.

`npm run pages:dev` starts a persistent editing runtime on port 8788. Runtime-check diagnostics are written to ignored .wrangler/pages-runtime-check.log and uploaded by verification/preview workflows. The CI contract checks the installed Wrangler pin and the ordering of build, local runtime and deployment gates.

## Cleanup disposition

- [Remote branch inventory](branch-inventory-2026-10-12.md) records actual tips, ancestry and keep/deletion-candidate disposition. No remote branches, backup refs or PRs were removed. Branches with distinct history require PR/patch review; a squash merge is not ancestry proof.
- PR #54 remains untouched. #55 already included its required Home/Pricing presentation; merging it again is not a release task.
- Duplicate node_modules ignore rules were consolidated.
- vault.css remains required by 404.html and the retained RTL verifier. It is not dead code.
- guilloche.js is no longer loaded by the published marketing layout, but is currently included in the assets passthrough. Removing shipped legacy assets is deferred to an explicit output-changing cleanup, with reference and rollback review. This maintenance preserves the full generated file set and bytes.
- All eight approved logo variants remain available. Hebrew source and legal documents, historical gallery evidence and accepted copy history remain preserved. Hebrew adaptation is a later workstream.

## Environment and publication

Use .nvmrc (Node 24), npm ci and the pinned Playwright browser install. The managed cloud setup/start instructions are saved separately from repository code; they must match this branch's scripts when it is restored. The new browser distribution redirects to storage.googleapis.com, which must be allowed in addition to the Playwright CDN. The browser redirect and GitHub API destinations are now reachable from the current instance. Draft configuration saving does not apply network changes or publish the snapshot.

This branch requires normal review and passing checks before merge. No production deployment or additional content approval is inferred from maintenance preparation.

## Validation in the cloud workspace

- Frozen dependency installation and verify:all passed on Node 24.
- All six existing audit-policy tests passed; live audit:tools reports only the two documented residual advisories.
- All 52 browser tests passed with system Chromium 154 through a local executable override; assertions and projects are unchanged. Playwright 1.64's pinned Chromium 156 is now installed through the standard verified installer; all 52 tests also passed with that exact browser.
- All 78 Pages runtime checks passed using the new wrapper and locked Wrangler. Temporarily removing only the generated Russian redirect made the gate fail with exit 1; restoring it returned all 78 checks to passing. No tracked source was changed for this negative check.
- Sending SIGTERM to the wrapper returned 143 and left no running runtime descendants.
- All 76 generated files match the released baseline byte-for-byte. Changed Markdown links resolve and git diff --check passes.

GitHub API reads confirm #53/#55 are merged and #54 remains open. No production deployment was performed by this maintenance work.
