# Current Project Status

Updated: 14 October 2026. **Production main is 81a11a1, including PR #58's footer spacing. Owner-approved marketing-02 Home, Why Toza and targeted Pricing are integrated in a separate release candidate; production publication remains a later release decision.**

## Released baseline

| Release | Main commit | Scope |
|---|---|---|
| [#52](https://github.com/adirass-web/VIP/pull/52) | ed8d06aba134132b9832e46df2771fb0aaecbdba | Approved Clear Practice design and logo |
| [#53](https://github.com/adirass-web/VIP/pull/53) | e78a85c66ac001455ae7759e5346c3a14f6113d6 | Node 24, Eleventy 3, Playwright 1.64 and maintenance |
| [#55](https://github.com/adirass-web/VIP/pull/55) | 6c525f8d948709e3e8b7ea6f6c75abc9d8e5e56f | Home, Pricing, Separation and They Know Something |
| [#57](https://github.com/adirass-web/VIP/pull/57) | d9933223984cce6a5f3c56e80e9803aa92cca788 | Batch A/B/C copy, Process stages, Home rows and Business groups |
| [#56](https://github.com/adirass-web/VIP/pull/56) | 7844b8406e040605bd8169c7935810ea8a6e7947 | Maintenance and installed Pages runtime gate |
| [#58](https://github.com/adirass-web/VIP/pull/58) | 81a11a12c49eefd124c54bd2da227e0f815b083b | Shared footer spacing and cache version |

PR #56 merged as 7844b8406e040605bd8169c7935810ea8a6e7947 with unchanged public output. Production workflow 38386253114 and eleven-page content/header/asset, 78-route and desktop/mobile verification passed; see V:/TOZA hardening biz/release-evidence/pr56-deployment. The formerly separate footer release subsequently merged through #58; its production workflow 38388147576 succeeded, confirmed against current main on 14 October. This is deployment-history evidence, not a new full live-site inspection. #51 merged earlier. PR #54's useful presentation is superseded by #55/#57; its open draft is not a missing release. This reconciliation does not close or modify it.

## Effective accepted authority

The original EN-02 approval and protected Assessment remain fingerprinted in approved/acceptance-manifest.json. Additive authority applies in order:

- approved/acceptance-amendment-2026-10-10.json (EN-03).
- approved/acceptance-amendment-2026-10-10-round-02.json (EN-04: four pages).
- approved/acceptance-amendment-2026-10-12-batch-a.json (Why Toza and Process stage map).
- approved/acceptance-amendment-2026-10-12-batch-b.json (Business, Inheritance and Attorneys).
- approved/acceptance-amendment-2026-10-13-batch-c.json (FAQ and Process links).
- approved/acceptance-amendment-2026-10-14-marketing-02.json (this review branch: exact frozen Home, Why Toza and targeted Pricing; D-049/D-050).

Use scripts/accepted-copy.cjs pages()/assertAuthority() to resolve effective sources. Historical packets and the v3 specification cannot undo later approvals. Service facts, original sources, manifests and protected Assessment remain unchanged. Eleven English pages are published; Hebrew marketing is retained but unpublished, legal documents remain accessible, and Hebrew/Russian localization is deferred.

## Current marketing release candidate

The owner selected all three frozen pages for integration. Personal Shield's typical 7–14 work hours exclude the additional Assessment; included work days remain unchanged. The current purchase-scope table stays and the approved delivery matrix is added. Purchase-decision table B and broader hardening discussion are deferred. See docs/marketing-02-release for source fingerprints, local checks, independent review, screenshots, publication sequence and business measurement.

Work is isolated from production, starting at current main81a11a1. The existing remote editorial/toza-copy-harness branch is preserved; the new PR uses codex/toza-marketing-02-release with its own noindex preview destination and exact-head gates. Seventy-five existing public files, including all eight supporting pages and the protected Assessment, remain byte-identical. No merge/publication is implied by copy acceptance or preview preparation.

## Release evidence and limits

PR #57 reviewed head 62857d15331f4c06e30d12ef2ada2d9133bc6379 and merge d993322 share the identical Git tree. The [production workflow](https://github.com/adirass-web/VIP/actions/runs/38379886644) succeeded. Recorded checks include eleven-page parity, exact Git-blob CSS, indexing/security headers, 78 live routes, 56 browser tests, four focused regressions and independent desktop/mobile inspection. Evidence resides in V:/TOZA hardening biz/release-evidence/pr57/production. This records prior release evidence rather than a new live-test claim.

The Code Review/GitHub 300-file PR-diff retrieval limit was recorded alongside complete local review. Two upstream advisories remain under the strict audit policy; this is not a vulnerability-free audit. Chromium checks do not establish Safari, physical-device, assistive-technology or conversion performance.

## PR #56 reconciliation

Development tooling, one shared 78-check gate and guidance are reconciled against #57. Retain its exact preview branch/SHA restrictions, indexing and security safeguards, focused regressions and synchronize trigger. Pin Wrangler 4.150.0, matching the recorded production tool, with local compatibility date 2026-10-06; do not change the production project compatibility setting.

Fresh install, audit, build, browser, runtime and public-output parity gates passed on a70f384. The owner separately authorized publication; PR #56 is now merged and verified. Do not bundle footer spacing, old #54 content, translations, service-fact changes or legacy-asset cleanup. No branch or PR deletion is authorized. A reviewed release revert must preserve independent maintenance; never force-reset main.
