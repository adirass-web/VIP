# Toza English Editorial Revision Project

Status: **PR #59 published; approved Pricing-04 integration and release pending.**

Released main: `b4e918eeaa045cdeb5e9efc8be650aaef9dc1d47` (14 October 2026), [PR #59](https://github.com/adirass-web/VIP/pull/59): marketing-02 Home, Why Toza, targeted Pricing and compact footer. See [current status](state/CURRENT-STATUS.md), [#59 release evidence](../../docs/marketing-02-release/RELEASE.md) and the [Pricing-04 release guide](../../docs/pricing-04-release/README.md). Older review packets describe their historical stage; the latest decision register and acceptance amendments determine current authority.

## Current authority

- The original accepted EN-02 baseline and protected Assessment remain fingerprinted in [acceptance-manifest.json](approved/acceptance-manifest.json).
- The [first 10 October amendment](approved/acceptance-amendment-2026-10-10.json) records EN-03 Home/Pricing approval.
- The [round-02 amendment](approved/acceptance-amendment-2026-10-10-round-02.json) supplies the effective EN-04 Home, Pricing, Separation and Divorce, and They Know Something copy. Later Batch A/B/C amendments govern their selected pages.
- The [marketing-02 amendment](approved/acceptance-amendment-2026-10-14-marketing-02.json) supplies the published Home, Why Toza and targeted Pricing. The [Pricing-04 amendment](approved/acceptance-amendment-2026-10-15-pricing-04.json) supersedes Pricing only, including its exact visual labels, for the separately authorized new release. Acceptance is distinct from verified production publication.
- Read the [live decision register](state/EN-REVISION-DECISION-DELTA.md) with the locked instructions and source manifests. Later decisions supersede conflicting historical wording; do not edit old approvals to make them look current.

The protected Assessment, source snapshots, original manifests and approved amendment blocks remain unchanged. Eleven English marketing pages are published; Hebrew marketing is retained but unpublished, Russian remains unpublished, and Hebrew legal documents remain accessible.

## Canonical instructions and history

The canonical architecture/execution instructions are in instructions/, doctrine and workflow in harness/, and all four canonical project skills in skills/. Compatibility entry points under docs/editorial and root skills link here. These canonical files, including AGENTS.md, are fingerprint-protected; cleanup must not rewrite them. Their historical editorial-branch restriction is not a request to resume the completed release. Use an explicitly authorized branch for subsequent maintenance, following the repository contribution workflow.

The [consolidated v3 specification](TOZA-EN-COPY-SPEC-v3.md), original [acceptance review](revisions/en-02-v2/review/phase-4-5-acceptance-review.md), and [October 4 publication plan](planning/2026-10-04-publication-plan.md) remain provenance. Current release work is tracked in [current status](state/CURRENT-STATUS.md) and [Pricing-04 release evidence](../../docs/pricing-04-release/README.md); [post-release maintenance](../../docs/post-release-maintenance.md) records earlier cleanup. Preserve Pricing-03 and Pricing-04 owner-review packets, research and snapshots as historical evidence; later acceptance does not require rewriting their former pending-approval statements. PR #54 remains untouched; Hebrew adaptation is deferred.

Additive authority includes [Batch A](approved/acceptance-amendment-2026-10-12-batch-a.json) (Why Toza and Process stage map), [Batch B](approved/acceptance-amendment-2026-10-12-batch-b.json) (Business, Inheritance and Attorneys), [Batch C](approved/acceptance-amendment-2026-10-13-batch-c.json) (FAQ and Process links), then marketing-02 and Pricing-04 above. Resolve effective sources through `scripts/accepted-copy.cjs` `pages()` / `assertAuthority()`; historical candidate labels and the v3 specification cannot override later approvals. See the [root development guide](../../README.md) for renderer ownership, checks and the restricted preview branches.
