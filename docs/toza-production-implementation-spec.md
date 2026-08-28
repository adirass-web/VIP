# Toza Evidence Ledger: Production Implementation Specification

Status: **APPROVED FOR PHASE-ONE IMPLEMENTATION — 2026-08-28**
Date: 2026-08-28  
Applies first to: English Home, Separation/Divorce, and Business/Founder Dispute pages  
Copy authority: `docs/toza-upgrade-english-copy-spec.md`  
Decision authority: `docs/visual-upgrade-decision-tree.md`

## 1. Visual thesis

**A private exposure dossier: calm and human on the surface; governed evidence lines reveal the hidden relationships underneath.**

Category clarity governs every visual decision. Photography establishes ordinary life and personal delivery. The Evidence Ledger explains the unfamiliar problem and method. Neither decoration nor fear imagery carries meaning.

## 2. Feasibility and staged delivery

The upgrade is feasible within the existing Eleventy/Nunjucks architecture without replacing the build system or rewriting supporting pages.

### Build immediately

- Approved English content and metadata for all three pages.
- Light-first Evidence Ledger design tokens.
- Editorial grid, type roles, ruled sections, exposure-ledger component, method sequence, founder proof, two-route block, assessment offer, visit overview, and CTA system.
- Responsive behavior, keyboard/focus states, reduced-motion behavior, and RTL-safe component geometry.
- Conditional removal of the guilloche/medal treatments from upgraded pages.
- Build, copy, link, accessibility-structure, and regression checks.

### Parallel asset gate

- Select and license one Home crowd image and one tailored ambient image for each situation page.
- Verify original/non-AI provenance, advertising use, model/property releases, territory, duration, derivative crop, responsive rendition, and Hebrew-site use.
- Do not place watermarked, editorial-only, or rights-uncertain images in production.

The pages can be built and reviewed without ambient images. Production figures remain absent rather than showing placeholders until cleared assets exist. The approved founder portrait is available now.

## 3. Architecture strategy

Preserve the current Eleventy project and existing supporting pages.

### Files to add

- `assets/css/dossier.css` — scoped Evidence Ledger system.
- `src/_includes/components/exposure-ledger.njk` — semantic repeated chain structure.
- `src/_includes/components/private-conversation-cta.njk` — single CTA/reassurance pattern.
- `src/_includes/components/founder-proof.njk` — shared founder proof and portrait.
- `src/_includes/components/assessment-offer.njk` — shared price, credit, urgent and visit content with tailored surrounding copy.

### Files to revise in phase one

- `src/en/index.njk`
- `src/en/separation-divorce.njk`
- `src/en/business-dispute.njk`
- `src/_includes/layouts/vault.njk` — conditional stylesheet/font/script/CTA support only.
- `assets/css/fonts.css` only if a missing existing weight must be declared; no new font dependency is planned.
- English navigation/contact strings in the appropriate data source where the same approved wording should govern all upgraded English pages.
- Verification scripts only where necessary to assert the new English structure and preserve Hebrew behavior.

### Scoping rule

Each upgraded page receives:

```yaml
visual_system: evidence-ledger
body_class: dossier-page
```

The shared layout loads `dossier.css`, uses dossier font preloads, suppresses `guilloche.js`, and exposes the approved navigation CTA only when `visual_system == "evidence-ledger"`. Existing supporting and Hebrew pages remain on the current system until their later migration.

Do not create a second full page layout. Conditional additions to the current shared layout avoid duplicated navigation, metadata, language links, footer logic, and accessibility behavior.

## 4. Design tokens

The upgraded pages do not respond automatically to `prefers-color-scheme`. Art direction remains deliberate and light-first.

```css
.dossier-page {
  --paper: #F4F0E8;
  --paper-alt: #EAE4D9;
  --ink: #171513;
  --ink-muted: #5E5952;
  --accent: #A63326;
  --line: rgba(23, 21, 19, 0.18);
  --line-strong: rgba(23, 21, 19, 0.34);
  --focus: #A63326;
}
```

Verified contrast on `#F4F0E8`:

- Ink: approximately 16.0:1.
- Muted ink: approximately 6.1:1.
- Vermilion: approximately 5.9:1.

### Surface rules

- Paper is the dominant background; paper-alt separates only consequential sections.
- Vermilion appears on the primary CTA, section index, consequence marker, focus ring, and selected rules. It never becomes a large decorative field.
- No gold, gradients, glass effects, glow, shadow-heavy cards, pills, cybersecurity blue, or automatic dark inversion.
- Border radius: 0–2px. Buttons may use 2px; editorial surfaces remain square.
- Hairlines: 1px. Thick dividers: maximum 2px and only for a named consequence or active CTA.

## 5. Grid and spacing

### Desktop, 1024px and wider

- Maximum canvas: 1200px.
- Twelve columns.
- 24px gutters.
- Outer inline margin: max(32px, 5vw).
- Reading measure: 62–68 characters.
- Hero copy: columns 1–7; portrait: columns 9–12.
- Evidence introduction: columns 1–4; ledgers: columns 5–12.
- Founder portrait: columns 1–4; proof copy: columns 6–11.

### Tablet, 700–1023px

- Six columns, 20px gutters, 28px outer margin.
- Hero may retain a 4/2 split when it remains readable; otherwise stack before 800px.
- Evidence introduction and ledgers stack but preserve aligned rules.

### Mobile, below 700px

- Four columns, 16px gutters, 20px outer margin.
- All primary content stacks in DOM reading order.
- Ledger inputs become a vertical sequence leading to a full-width consequence.
- No horizontal scrolling, clipped typography, or abbreviated consequence text.

### Spacing scale

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128px`

- Standard desktop section space: 96–128px.
- Mobile section space: 64–80px.
- Dense evidence relationships use 12–24px, not card padding.
- Photography receives at least 48px clear space above and below.

## 6. Typography

The documented editorial precedent uses distinct Roman, grotesk, and annotation roles. Toza implements those roles with fonts already shipped in the repository.

### Roles

- **Display/editorial:** David Libre 500/700 for English and Hebrew. This creates bilingual continuity and avoids the luxury-fashion signal of Playfair as the governing face.
- **Body/interface:** Inter 400/500/600 in English.
- **Hebrew body/interface:** the existing Hebrew body stack until the Hebrew visual migration is approved; David Libre remains the Hebrew display face.
- **Annotation:** Inter 500, tabular numerals where relevant. Do not add a faux-handwritten or decorative monospaced typeface.
- **Playfair Display:** remove from the governing dossier hierarchy; retain only on legacy pages during transition.

### Scale

- Hero H1: `clamp(3rem, 7vw, 5.75rem)`, line-height 0.98–1.02, max 13–15 words per visual line.
- Section H2: `clamp(2.1rem, 4.2vw, 3.7rem)`, line-height 1.04.
- H3/consequence: `clamp(1.35rem, 2vw, 1.75rem)`, line-height 1.15.
- Lede: `clamp(1.15rem, 1.7vw, 1.4rem)`, line-height 1.55.
- Body: 17–18px desktop, 16–17px mobile, line-height 1.65–1.75.
- Labels/indices: 12–13px, Inter 600, uppercase and 0.12em tracking in English.
- Hebrew labels: no uppercase simulation and no tracking.

Use balanced wrapping only on headings. Never justify body copy.

## 7. Evidence Ledger grammar

The ledger is not an attack diagram and does not teach an attack. It explains how ordinary conditions combine.

### Semantic structure

Each ledger is an `article` with:

1. numeric index and exposure-family label;
2. a plain-language consequence heading;
3. an ordered list of three or four ordinary contributing conditions;
4. one concluding consequence statement;
5. CSS-only rules and junction marks hidden from assistive technology.

The visible geometry always follows the same grammar:

`ordinary conditions → connection → named consequence`

Do not use icons, device illustrations, hacker imagery, network clouds, risk meters, scores, severity colors, or animated paths.

### Home ledgers

#### 01 — Identity convergence

- Public trails and repeated identifiers.
- Credentials and recovery paths reused across accounts.
- Personal and professional identities that appear separate.
- Consequence: **Separate parts of your life become reachable through one identity.**

#### 02 — Trust residue

- A romantic or household relationship.
- Devices, sessions, sharing, or recovery roles established during trust.
- Permissions that remain after the relationship changes.
- Consequence: **Access and visibility survive after trust has ended.**

#### 03 — Personal/work crossover

- Personal email or device used beneath business services.
- Shared storage, authentication, administration, or recovery.
- Public professional trails that connect the identities.
- Consequence: **Personal exposure becomes business leverage.**

Situation pages use the same component and grammar but expand only their relevant compound family. Do not repeat all three chains on each landing page.

## 8. Photography

### Existing founder portrait

- Asset: `assets/img/dr-tabansky-portrait-square-640.webp`.
- Hero placement: right side on desktop; after hero action on mobile.
- Crop: preserve the approved square portrait; do not mask into a circle.
- Treatment: natural color or a restrained single shared tonal treatment applied consistently in CSS; no duotone, blur, grain overlay, or AI modification.
- Render with explicit dimensions. Hero image loads eagerly; all ambient images load lazily.

### Ambient placements

1. **Home:** one wide crowd image between the compound-exposure introduction and the three ledgers, or aligned beside the introduction at large widths. It represents ordinary digital life.
2. **Separation/divorce:** one observational public-life image after Recognition and before Trust residue. It must not depict conflict, isolation, fear, couples, children as emotional devices, or visible distress.
3. **Business/founder dispute:** one urban commercial-life image after Recognition and before Personal/work crossover. It must not depict boardrooms, handshakes, lawyers, luxury offices, or staged executives.

### Technical treatment

- Home aspect ratio: 16:9 or 2:1.
- Situation pages: 3:2.
- Use `<picture>` with AVIF/WebP, width descriptors, explicit width/height, and a meaningful but restrained alt description.
- Target under 180KB per desktop rendition where image quality permits.
- No text baked into images and no text placed over visually complex photography.

## 9. Component rules

### Header

- Light paper surface with a single bottom hairline.
- Lowercase `toza` wordmark. Hide the vault seal on upgraded pages.
- Keep the existing essential navigation.
- Primary header CTA: **Request a private conversation**.
- Mobile menu retains native button behavior, visible focus and correct `aria-expanded`.

### Buttons and links

- One filled vermilion primary CTA.
- Secondary actions are text links with a persistent underline/rule; no competing ghost button in the hero.
- Minimum target: 44×44px.
- Every repeated primary CTA reaches the same WhatsApp/Signal choice section.

### Method

- Three full-width ruled rows: Map, Close and harden, Verify.
- First-person active copy from the approved specification.
- No cards and no floating numerals.

### Founder proof

- The approved portrait leads in the hero and is not repeated later on the same page.
- The later founder-proof section uses a compact delivery ledger plus one proof sentence and the direct-delivery promise.
- Link to Why Toza and explicit external professional profile.
- No institution logos or academic timeline.

### Situation routes

- Two equal editorial routes, not a five-card grid.
- Discreet Home labels; explicit page titles remain on the destination pages.
- Each route receives one sentence and a text link. No illustrative icon.

### Assessment offer

- Show `Private Exposure Assessment` and `₪3,500` at the same visual level.
- Present Before/After as a two-column ruled comparison on desktop and stacked sequence on mobile.
- Include the 14-day full-credit statement.
- Urgent handling remains a short subordinate note with the four-hour availability wording and surcharge disclosure.
- Visit overview uses the approved forceful intervention copy and links to the detailed visit page.
- Link to the separate FAQ; do not embed FAQ accordions on Home or the two landing pages.

### Final CTA and footer

- Final CTA is the strongest vermilion/paper contrast section but remains typographic, not banner-like.
- Retain WhatsApp/Signal as the only contact routes.
- Keep first-message guidance adjacent to the contact choice.
- Remove repeated seals and medal graphics on upgraded pages.

## 10. Page inventories

### Home

1. Hero: category headline, strategic urgency, action promise, portrait, one CTA and reassurance.
2. Compound exposure: introduction, one ambient photo when licensed, and three Evidence Ledgers.
3. Method: methodology basis plus Map, Close and harden, Verify.
4. Founder: portrait/proof treatment without institutional density.
5. Two routes: personal relationship and business interests; direct private-contact CTA.
6. Assessment and visit: ₪3,500 offer, before/after, urgent option, forceful visit overview and FAQ link.
7. Final conversion: WhatsApp/Signal contact and neutral first-message guidance.

Remove from Home: five-situation grid, embedded FAQ, separate full-boundaries band, gold medal/guilloche, competing pricing CTA, institutional proof list, and repeated trust boilerplate.

### Separation/divorce landing page

1. Hero.
2. Recognition.
3. Ambient photograph when licensed.
4. Trust-residue ledger.
5. Timing/early-intervention argument.
6. Method and full-hardening completion.
7. Founder proof.
8. ₪3,500 assessment offer and boundaries link.
9. Final CTA.

### Business/founder-dispute landing page

1. Hero.
2. Recognition.
3. Ambient photograph when licensed.
4. Personal/work-crossover ledger.
5. Timing/negotiating-position argument.
6. Method and full-hardening completion.
7. Founder proof.
8. ₪3,500 assessment offer and boundaries link.
9. Final CTA.

## 11. Responsive and RTL requirements

- Use CSS logical properties for spacing, borders, positioning and alignment.
- Geometry follows inline direction; do not use hard-coded left/right placement for meaningful sequence.
- Ledger DOM order remains logical in both languages; CSS never reverses content order.
- Avoid directional arrows. Rules and junctions communicate relation without mirroring icons.
- Isolate `Toza`, `Private Exposure Assessment`, `Personal Shield`, prices, phone numbers and URLs with `<bdi>` or existing bidi helpers where needed.
- Maintain visible focus and usable navigation at 200% zoom and 320px CSS width.
- Hebrew migration is a separate content gate, but phase-one components must be RTL-capable before English approval.

## 12. Motion

- Remove `guilloche.js` from upgraded pages.
- No scroll-triggered reveals, animated evidence paths, parallax, cursor effects or ambient loops.
- Use 120–180ms transitions only for button, link, menu and focus/hover state changes.
- Under `prefers-reduced-motion: reduce`, eliminate nonessential transitions and smooth scrolling.

## 13. Accessibility and trust

- One H1 per page and hierarchical headings without level skips.
- Evidence chains remain understandable as ordered text without CSS.
- Ambient photography receives factual alt text; do not infer emotion, identity or threat.
- All text and controls meet WCAG AA contrast; focus rings meet non-text contrast requirements.
- Links remain identifiable without relying on color alone.
- Do not hide boundaries or pricing disclosures behind interactions.
- Do not claim anonymity, encryption, legal privilege, guaranteed prevention, confirmed breach, or agency endorsement.

## 14. Performance and privacy

- No new JavaScript dependency.
- No third-party image hotlinks in production.
- Self-host licensed images and existing fonts.
- Preload only the dossier hero display font, body font and hero portrait when performance measurements justify it.
- Reserve intrinsic image space to prevent layout shift.
- Preserve the no-form WhatsApp/Signal contact model.
- Do not add analytics, session recording, trackers or CRM. Existing inactive event hooks remain inert unless a separate privacy-safe measurement specification is approved.

## 15. Verification harness

### Automated

- `npm run build`
- `npm run verify:all`
- `git diff --check`
- Assert all three English pages contain the approved H1, one primary CTA label, the correct ₪3,500 price and no embedded FAQ accordion.
- Assert the two landing pages contain their single relevant compound-exposure family.
- Assert upgraded pages do not load `guilloche.js` and legacy pages still build.
- Assert no `prefers-color-scheme` rule overrides dossier colors.
- Assert no watermarked or remote third-party image URL enters built HTML.

### Structural/manual

- Desktop, tablet and 320–390px mobile layout.
- Keyboard-only navigation, visible focus, mobile menu and skip link.
- 200% zoom/reflow.
- English LTR and representative Hebrew RTL component fixture.
- Reduced motion.
- Image-off and CSS-off evidence-chain comprehension.
- CTA consistency and WhatsApp/Signal destination behavior.
- Metadata, canonical, alternate-language and structured-data continuity.

## 16. Implementation sequence

1. Add scoped design tokens, grid, typography and shared dossier primitives.
2. Update the shared layout conditionally; preserve legacy pages.
3. Implement Home with approved copy and founder portrait.
4. Implement the shared ledger and the two situation landing pages.
5. Add verification assertions and run automated checks.
6. Review the complete no-ambient-image implementation.
7. License, optimize and insert the three ambient photographs.
8. Run final responsive, RTL, accessibility and performance QA.
9. Open a pull request for user review; do not merge or deploy production without explicit approval.

## 17. Approval boundary

Approval of this specification authorizes phase-one source implementation for the three English pages and shared conditional components. It does not authorize:

- purchasing or licensing any image;
- generating or editing images;
- migrating Hebrew copy;
- rewriting supporting pages beyond necessary shared-layout compatibility;
- adding analytics or third-party services;
- merging to `main` or deploying production.
