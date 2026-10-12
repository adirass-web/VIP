# Current Project Status

Updated: 12 October 2026. **The English release is published. No additional merge is required to publish the four pages.**

## Released baseline

| Release | Main commit | Scope |
|---|---|---|
| [#52](https://github.com/adirass-web/VIP/pull/52) | ed8d06aba134132b9832e46df2771fb0aaecbdba | Approved Clear Practice design and logo |
| [#53](https://github.com/adirass-web/VIP/pull/53) | e78a85c66ac001455ae7759e5346c3a14f6113d6 | Node 24, Eleventy 3, Playwright 1.64 and build-tool maintenance |
| [#55](https://github.com/adirass-web/VIP/pull/55) | 6c525f8d948709e3e8b7ea6f6c75abc9d8e5e56f | Approved Home, Pricing, Separation and Divorce, and They Know Something refinements |

Main contains all three releases. #51 was merged earlier; the previous record describing it as open was stale. PR #54 remains untouched and is not another required release step.

## Accepted copy

The original EN-02 exact-copy acceptance remains recorded at aeb65a51adc3217844be9c465de69a875084b8e4 and in approved/acceptance-manifest.json. Original source fingerprints and protected Assessment authority remain immutable.

Effective authority is applied in order: original acceptance, approved/acceptance-amendment-2026-10-10.json (EN-03), then approved/acceptance-amendment-2026-10-10-round-02.json (EN-04). EN-04 governs the four pages released in #55. The other seven English pages and service facts were preserved by that release. The live decision register remains EN-REVISION-DECISION-DELTA.md in this directory.

The original editorial phases through consolidation are complete. Eleven English marketing pages are published. Hebrew marketing source is retained but unpublished; Hebrew terms/privacy documents remain accessible. Hebrew adaptation and Russian publication remain deferred.

## Release evidence and limits

The completed Business site thread, “Continue Toza editorial revision,” records successful #53 and #55 deployments, independent reviews, 52 browser tests, 78 live route checks, exact hosted content/assets, indexing/security headers and desktop/mobile verification. The final workflow and deployment evidence is recorded in [PR #55](https://github.com/adirass-web/VIP/pull/55), including the successful [production workflow](https://github.com/adirass-web/VIP/actions/runs/38241020823). This status reconciliation did not independently repeat production checks.

See [the committed release record](../../../docs/four-page-copy-preview/RELEASE.md) for scope, review gates, the corrected preview-header preparation and rollback procedure. Older local-preview READMEs, October 4 planning documents and approval packets remain historical evidence. Their then-pending merge/deployment instructions do not describe current release status.

Two documented upstream build-tool advisories remain under the reviewed audit policy: nine affected dependency nodes, no critical findings at the reviewed baseline. This is not a clean npm audit. See [build-tool maintenance](../../../docs/build-tool-maintenance.md).

## Remaining work

Align reusable cloud setup with the released toolchain; consolidate duplicate guidance through canonical links; inventory branch and asset cleanup; and automate local Pages routing checks with pinned Wrangler. Track execution and preserved items in [post-release maintenance](../../../docs/post-release-maintenance.md). No service-fact, protected-copy, translation, PR #54 or production change is part of that cleanup.

If #55 needs rollback, revert only that release through a reviewed PR, preserving #53 maintenance. Do not force-reset main.
