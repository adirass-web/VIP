# Decision-Register Addendum 2026-08-28 — Visual Direction Change

Status: **LOCKED, pending merge into `docs/visual-upgrade-decision-tree.md`**
Recorded per the register's §10 change-control rule. This addendum is a change record, not a competing decision record; it must be folded into the register with the next register commit.

## Node served

§4 Desired visual experience (new §4.1A), superseding the "Visual direction: LOCKED — Evidence Ledger" gate entry and the Evidence Ledger references in the 2026-08-28 register revision.

## Preserve / refine / overturn

**Overturns** the Evidence Ledger art direction (PR #48 execution and its bone/ink/vermilion system). **Preserves** all business, offer, content-architecture, photography-direction, Hebrew, and conversion-framework decisions, which remain LOCKED and unchanged.

## Reason

PR #48 failed its positioning review (see `TOZA_GRAPHIC_DESIGN_MASTER_HANDOFF.md`, 2026-08-28): the page read as an editorial evidence report rather than a premium founder-led private service; the vermilion accent `#A63326` read as warning; hierarchy restarted per section; the offer lacked visual gravity. The Master Handoff revoked the Evidence Ledger as visual authority and prohibited red as a governing or accent color.

The owner then screened five studio reference sets (19 verified references) and selected four devices, reconciled into one system.

## The locked direction: "Controlled clarity"

Each device governs one layer; they do not compete:

1. **Skeleton — Snøhetta-grade typographic discipline.** Grid rigor, restrained semantic text roles (max six), content order without bureaucratic apparatus. Rejected: portfolio-site coldness.
2. **Section rhythm — Corient-derived tonal pacing.** Ambient color and imagery distinguish sections so the page feels composed, not stacked. Rejected: everything wealth-manager about Corient (hard-gate category; rhythm technique only).
3. **Component grammar — Cucinelli-derived tight 2-up blocks.** Two-cell photo/color components with a strong mobile collapse, used for the situation routes, the method, and the assessment offer. Rejected: fashion-commerce product-grid logic. Photography governs section boundaries; typography governs content — no full photo-first pages.
4. **Motion signature — Emergence-derived focus/dimming.** Out-of-focus ambient elements recede; elements resolve INTO clarity as the visitor engages. Brand rationale: controlled visibility — exposure is being visible to unseen eyes; Toza's work returns visibility to the client's control. Discipline: ambient photography and section transitions only; never text, never the founder portrait; clarity moves toward the visitor, never away. Implementation: IntersectionObserver + CSS opacity/filter transitions; no libraries; RTL-neutral; disabled under `prefers-reduced-motion`.

## Palette position

Bone base, 2–3 muted tonal washes, one restrained action accent. **Red remains prohibited** in any governing or accent role; gold-on-black luxury shorthand remains prohibited. Exact hues are proven in the Gate 2 calibration study, not pre-decided.

## Affected downstream nodes

- §4.2 brand DNA: "one controlled vermilion accent" is revoked; editorial serif, ink/bone base, hairlines, lowercase `toza`, LTR/RTL parity are preserved subject to Gate 2 validation.
- §5.6 image density: the 2–3 ambient-image allowance now also carries the section-rhythm role.
- §7 conversion framework and §8 page structures: unchanged; the new system must carry them.
- Photography rules §5.2–5.4: unchanged and still licensing-gated.

## Process state

- Figma-first harness replaced by owner-approved code-based harness: calibration studies as HTML/CSS on feature branches, reviewed via Cloudflare PR previews; tokens recorded in `DESIGN.md`.
- Next step: **Gate 2 calibration study** — Home hero + first transition, desktop and mobile, one tonal transition, the dimming behavior on one ambient image.

## Note on register currency

The register copy on the `design/visual-upgrade` branch (dated 2026-08-26) is behind the owner's 2026-08-28 revision. A re-sync of the register file should accompany the merge of this addendum.
