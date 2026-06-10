# Design Brief & Redesign Plan — approved 2026-06-07

Authoritative record of the full-restructure decisions. Supersedes prior design direction notes. Read together with the latest Session-Handoff.

## Positioning

Premium white-glove private service. Rare, high-end, by appointment. Reference feel: **Q from the Bond series** — quiet mastery, bespoke instruments, understated authority. Explicitly NOT "cybersec tech guy." HE brand essence: **personal (tailored AND secret) cyber shield**.

## Locked decisions

| Decision | Choice |
|---|---|
| Visual direction | "The Vault" — refined dark-led, de-teched, warmer |
| Imagery | **Guilloché** engraving system (certificate/banknote/passport line-work) + existing Kfir Ziv portrait. **No generic graphics** — no vaults, locks, keyboards, shields, hoodies. No stock photos. |
| Voice | "We," with Dr. Tabansky named at key trust moments |
| Copy register | Contemporary premium (HE: precise, warm-modern, zero marketing-speak; not stiff) |
| Language priority | Brand thinking Hebrew-first; **build order EN first**, then HE, then RU |
| Exclusivity posture | Quiet velvet rope — by appointment; ₪3,500 Threat Assessment as the single ever-present next step |
| Typography | Google Fonts only. Hebrew display face chosen FIRST, Latin/Cyrillic matched to it |
| Naming | **Clean-slate exploration**, service-brand only (not eponymous). Gates identity, wordmark, and copy |
| Homepage funnel | hero → stakes (vignettes) → why-us/credibility (moved up: authority before catalog) → situations → method → assessment+pricing on-ramp → FAQ → contact |
| Pricing | Dedicated `/pricing` page, 5 tiers, single prices only (never ranges) |
| Founder+method page | Stays merged; rename per new brand voice (working label "Why Us") |
| Attorneys | Quiet attorney section — Certificate of Hardening for the case file, referral path |
| RU audience | Ambidextrous: Russian-speaking Israelis AND international RU speakers |

## Brand architecture — approved 2026-06-07 (Gates N2 + D1 closed)

**Two-level brand:**
- **Formal brand** = the full phrase **מגן סייבר אישי / Personal Cyber Shield** — both the name AND the description of the service. Used in: wordmark, Certificate of Hardening, schema.org, og, footer, legal.
- **Short form** = **מגן** — sanctioned for: header at small sizes, the seal mark, spoken/internal reference.
- "Magen VIP" retires everywhere (nav, schema, og, footer, llms.txt). Domain decisions remain with Lior — out of Claude's scope.

**Copy rules:**
- Never the indefinite article: never "a personal cyber shield." Always **"your Personal Cyber Shield"** or **"the Shield."**
- The phrase is used sparingly, set as a name (brand face), not as a generic sentence fragment.
- Division of labor: the brand promises the category; **Dr. Tabansky supplies the rarity** (scarcity + authority always attach to the named person, "we" voice carries the rest).
- Tier names (Personal / Extended / Inner Circle / Sovereign Shield) stay — they cohere with the brand.
- RU descriptor decision deferred to RU adaptation stage («Персональный кибер-щит» vs «Персональная киберзащита»), with מגן as visual signature on all locales.

**Typography (D1):** David Libre (Hebrew display) + Playfair Display (Latin/Cyrillic display); body Inter + Assistant.

**Mark:** double-ring seal holding a custom **מ drawn with a shield-suggestive silhouette** — top/mid wider than the lower part; the letter remains a letter first (no generic shield graphic). Variants explored in `preview-seal-mem.html`.

## Design system — LOCKED (Gates D2 + D3 closed 2026-06-07)

**Tokens v2.1 (D3) — eight colours, one hue axis 36°, constant chroma per family.** Reference: `preview-tokens-v2.html`.
```css
:root{
  --bg-0:#0B0A09; --bg-1:#131210; --bg-2:#1B1916;          /* Void · sat 8%, lightness steps only */
  --ink:#ECE9E4; --ink-dim:#9D968D; --ink-faint:#6F6A63;   /* Bone · sat ≤7% */
  --gold:#C8892A; --gold-hover:#D4A040; --gold-ink:#D9A246; /* Gold · only saturated family */
  --hairline:rgba(236,233,228,.10); --hairline-strong:rgba(236,233,228,.18);
  --hairline-gold:rgba(200,137,42,.45); --gold-wash:rgba(200,137,42,.07);
  --font-display:'Playfair Display','David Libre',Georgia,serif; /* HE flips order */
  --font-body:'Inter','Assistant',sans-serif;
  --t-hero:clamp(2.6rem,6.5vw,4.6rem); --t-h2:clamp(1.9rem,3.6vw,2.8rem);
  --t-h3:1.35rem; --t-lede:1.15rem; --t-body:1rem; --t-small:.86rem; --t-micro:.72rem;
  --s-1:.25rem;--s-2:.5rem;--s-3:.75rem;--s-4:1rem;--s-6:1.5rem;--s-8:2rem;--s-10:2.5rem;--s-12:3rem;--s-16:4rem;--s-20:5rem;--s-24:6rem;--s-32:8rem;
  --s-section:clamp(4.5rem,9vw,8rem); --r-1:2px; --r-pill:999px;
  --ease:.25s cubic-bezier(.2,.6,.2,1); --w-max:1120px; --w-prose:62ch;
}
/* light mode = ivory stationery: bg-0 #F6F2EA, bg-1 #EFEBE2, bg-2 #E6E1D7; ink #1B1916, dim #5D5850, faint #8A847A; gold #8C6218 */
```
Gold roles: `gold-ink` = text (eyebrows, links, numbers, prices); `gold` = CTA fill only (one per viewport); `hairline-gold` = rules, seal, guilloché. Headings stay ink. Contrast AA+ verified. Hue may be retuned later by changing one axis value (cooler 30° / warmer 42°) — see `preview-design-variants.html`.

**Guilloché v2 (D2) — interference between near-identical engraved lines (no rosette, no helix).** Reference: `preview-guilloche.html`. Locked parameters (current):
- **Medallion (turned disc):** groove density ~36 rings; phase drift 0.42; centre wander 3.2; gold strokes 0.5px @ ≤40% opacity. II·b peaked-roof seal knocked out at centre.
- **Band:** 16 near-parallel lines, crowd amplitude ~6; ≤32% opacity.
- **Field (hero):** grooves centred off-canvas right, ≤10% opacity.
- Rules: gold only on the two darkest surfaces; never behind body text; one motif per viewport; no motion; parametric self-hosted SVG (parameters above for regeneration).

## Production scope (approved earlier)

Self-host ALL third-party assets: Unsplash hero/og images replaced by guilloché/portrait assets, **and Google Fonts self-hosted** (fonts.googleapis.com is a third-party call contradicting the no-third-parties promise). Fix light-mode hero contrast. Full WCAG AA pass. Cross-device QA (page types × 3 locales × 3 breakpoints). Deploy/DNS remains with Lior.

## Plan and gates

- **Track 0 — Naming** (gates identity+copy): longlist → **N1** user picks 2–3 finalists → stress-test (wordmarks, HE/EN/RU rendering, domain + collision check) → **N2** name chosen → decision doc.
- **Track 1 — Design foundation** (parallel, name-agnostic): type specimens → **D1** face chosen; guilloché system → **D2** motif approved; tokens v2 → **D3** approved via preview.
- **Track 2 — Copy** (after N2): EN master → **C1** approval → HE (Lior reviews as native) + RU; new pages (/pricing, attorneys, why-us).
- **Track 3 — Build** (after C1, D1–D3): EN homepage reference → **B1** sign-off → RTL smoke-test → rollout EN→HE→RU; self-hosted assets.
- **Track 4 — Production**: SEO/domain migration if renamed; QA; WCAG. → **P1** final review.

Every gate = a reviewable artifact. All decisions recorded as .md in project root; session handoff updated at close.

## Known constraints (unchanged)

OneDrive git lock (clone to /tmp, rsync, push); single prices only; no deletions without approval; CI deploy via GitHub Actions → Cloudflare Pages `magenvip` (domain may change after naming).
