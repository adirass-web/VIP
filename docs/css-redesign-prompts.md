# Magen VIP — CSS Redesign Execution Prompts

## Context

Premium in-person cybersecurity hardening service for HNW individuals in Israel.
Static HTML site, 3 languages (EN/HE/RU), RTL support for Hebrew.
28 HTML pages (18 unique + 6 RU duplicates + root redirect + 404 + terms + privacy).
No build tools, no frameworks, no dependencies. Pure CSS + vanilla JS.

## Design Decisions (Locked)

- **Palette:** "Cool Void" — cool blue-black surfaces, ember accent `#c2650a`
- **Color budget:** 10 colors total (3 surfaces, 2 text, 2 accent, 2 accent-alpha, 1 white-alpha)
- **Type scale:** 8 sizes on 1.25x major-third ratio, Heebo 400/700/900
- **Spacing:** 6 values (4/8/16/24/48/64 px)
- **Radii:** 2 (8px general, 999px pill)
- **Shadow:** 0 tokens (hardcode on 1-2 elements if needed)
- **Transition:** 1 (`--ease: 0.25s ease`)
- **Max-width:** 1080px
- **Header:** Solid background (no frosted glass)
- **Mobile nav:** Dropdown panel
- **Mobile pricing:** Horizontal scroll with snap
- **Founder page:** Conforms to main design system
- **Light mode:** Yes, via `prefers-color-scheme: light`
- **Total tokens:** 30

## Guiding Principles

From W3C Design Principles:
- Content visible and accessible by default
- Properties cascade independently
- Text styling inherited by default

From UX Designer Skill:
- Simplicity through reduction: every element justifies its existence
- Material honesty: buttons communicate through color/spacing/type, not shadows
- Functional layering: hierarchy through scale, weight, color — not elevation
- Coherent design language: nothing feels arbitrary

From Tilda/HubSpot:
- Proximity principle: spatial arrangement = perceived relationships
- Fitts's Law: critical targets large and reachable
- Consistency: same color = same meaning throughout
- Hick's Law: limit choices to reduce decision fatigue

From Typography Skill:
- Curly quotes, proper dashes (en/em), no straight quotes
- font-feature-settings: "kern" 1, "liga" 1
- hyphens: none on headings
- text-wrap: balance on headings (progressive enhancement)

---

## Prompt 1 — Tokens + Reset + Base

### Instruction

Write the first section of the new M.css file from scratch.

**Design tokens (`:root`):**
10 colors in the "Cool Void" palette:
- Surfaces: `#0c0c0e` (dark), `#16161a` (medium), `#22222a` (light)
- Text: `#eaeaee` (primary), `#9898a8` (secondary)
- Accent: `#c2650a` (base/ember), `#e88d2e` (hover/lighter)
- Accent-alpha: `rgba(194,101,10, 0.08)` (subtle), `rgba(194,101,10, 0.35)` (strong)
- White-alpha: `rgba(255,255,255, 0.10)` (border-and-overlay)

8 type sizes (1.25x major-third scale):
- `--text-xs`: 0.75rem
- `--text-sm`: 0.85rem
- `--text-base`: 1rem
- `--text-md`: 1.15rem
- `--text-lg`: 1.35rem
- `--text-xl`: 1.6rem
- `--text-2xl`: clamp(1.8rem, 5vw, 2.5rem)
- `--text-3xl`: clamp(2.2rem, 6vw, 3.5rem)

3 line heights: `--leading-tight: 1.2`, `--leading-normal: 1.5`, `--leading-relaxed: 1.7`

6 spacing values: `--space-1: 0.25rem` (4px), `--space-2: 0.5rem` (8px), `--space-4: 1rem` (16px), `--space-6: 1.5rem` (24px), `--space-12: 3rem` (48px), `--space-16: 4rem` (64px)

2 radii: `--radius: 8px`, `--radius-pill: 999px`

1 transition: `--ease: 0.25s ease`

Layout: `--max-width: 1080px`

Font: `--font-family: 'Heebo', sans-serif`

**Light mode block:**
`@media (prefers-color-scheme: light)` override on `:root` — flip surfaces to off-white/warm-gray (`#faf8f6`, `#f0eeec`, `#e4e2e0`), text to near-black (`#1a1a1e`, `#5a5a68`), keep accent ember as-is, adjust accent-alpha/white-alpha opacities for light backgrounds.

**Reset:**
Universal box-sizing, zero margin/padding, html scroll-behavior, -webkit-text-size-adjust.

**Body base:**
- Font: Heebo, weights 400/700/900 only
- Color: `--color-text-primary` on `--color-bg-dark`
- Line-height: `--leading-relaxed`
- font-feature-settings: "kern" 1, "liga" 1
- -webkit-font-smoothing: antialiased
- overflow-x: hidden
- Static dark gradient (mobile): `linear-gradient(-45deg, #0c0c0e, #12121a, #0e0e14, #16161a)`
- Animated gradient (desktop 768px+): `background-size: 400% 400%, animation: gradientBG 20s ease infinite`
- prefers-reduced-motion: kill ALL animation/transition globally

### Output

CSS from line 1 through end of body/base section. Comment each subsection.

### Quality Gate

Before moving to Prompt 2:
- Verify brace balance
- Verify all 30 tokens are present
- Programmatic WCAG AA contrast check: every text color against every surface
- Verify light mode flips are correct

---

## Prompt 2 — Typography

### Instruction

Write the Typography section.

**Headings (h1-h4):**
- h1: `--text-3xl`, weight 900, `--color-text-primary`, `--leading-tight`
- h2: `--text-2xl`, weight 900, `--color-accent`, `--leading-tight`
- h3: `--text-xl`, weight 700, `--color-text-primary`, `--leading-tight`
- h4: `--text-lg`, weight 700, `--color-accent`, `--leading-tight`
- All headings: `hyphens: none`, `text-wrap: balance`, `margin-bottom: --space-4`

**Body text:**
- `p`: `margin-bottom: --space-4`, `color: --color-text-secondary`
- NO global `max-width` on `p`

**Prose container:**
- `.prose p`: `max-width: 65ch`
- `.prose`: applied by HTML where long-form readability is needed

**Links:**
- `a`: `color: --color-accent`, no underline, `transition: color var(--ease)`
- `a:hover, a:focus`: `color: --color-accent-hover`

**Focus rings (all interactive):**
- `a, button, summary, input, textarea, select, [role="button"]` — `:focus-visible` only
- `outline: 2px solid var(--color-accent)`, `outline-offset: 3px`

**Lists:**
- `ul`: `list-style-position: inside`, `padding-inline-start: --space-6`
- `li`: `margin-bottom: --space-2`, `color: --color-text-secondary`

**Inline:**
- `strong`: `color: --color-text-primary`, weight 700
- `em`: inherit color

**Utilities (2 only):**
- `.uppercase`: `text-transform: uppercase`, `letter-spacing: 0.05em`
- `.tabular`: `font-variant-numeric: tabular-nums lining-nums`

### Output

Append to M.css after base section.

### Quality Gate

- Count all font-size declarations — must be exactly 8 (4 headings using tokens + 0 hardcoded)
- Count all font-weight declarations — must use only 400, 700, 900
- Count all letter-spacing values — must be exactly 3 (-0.02em, 0, 0.05em) or fewer
- Verify no `max-width` on bare `p`

---

## Prompt 3 — Layout + Header + Footer

### Instruction

Write the Layout section.

**Container:**
- `.container`: `width: 90%`, `max-width: var(--max-width)` (1080px), `margin: 0 auto`
- Mobile padding: `--space-4` top/bottom (16px)
- Desktop (768px+): `--space-12` top/bottom (48px)

**Section base:**
- `section`: `text-align: center`
- `main > section:not(.hero) .container`: flex column, align-items center

**CTA/footer extra breathing room:**
- `.cta .container, .site-footer .container`: extra top padding — `--space-6` mobile (24px), `--space-16` desktop (64px)

**Skip link + .sr-only:**
- Standard accessible skip link pattern
- `.sr-only`: clipped, 1px, overflow hidden

**Header:**
- `.site-header`: sticky (mobile), fixed (desktop 769px+)
- Solid background: `var(--color-bg-medium)` — NO backdrop-filter, NO blur
- `z-index: 1000`
- `.site-header .container`: padding `--space-2` top/bottom (8px)
- `main`: no padding-top (mobile, sticky), 56px offset (desktop, fixed)

**Logo:**
- `.site-logo`: `--text-lg`, weight 900, `--color-text-primary`, `letter-spacing: -0.02em`
- `.site-logo-accent`: `color: --color-accent`

**Header layout:**
- `.header-content`: flex, space-between, align-items center, wrap
- Desktop (721px+): justify-content center, gap `--space-6`

**Footer:**
- `.site-footer`: `background-color: var(--color-bg-medium)`
- `.site-footer .container`: flex column, centered, gap `--space-6`
- `.footer-legal`: flex, wrap, centered, `--text-sm`, `--color-text-secondary`
- `.photo-credit`: `--text-xs`, secondary color, `opacity: 0.6`

### Output

Append to M.css after typography section.

### Quality Gate

- Verify all spacing uses only the 6 token values
- Verify no backdrop-filter anywhere
- Verify header uses solid bg token
- Verify container max-width is 1080px

---

## Prompt 4 — Navigation

### Instruction

Write the Navigation section.

**Hamburger toggle:**
- `.nav-toggle`: inline-flex, 44px min-height/width, `--color-bg-light` bg, `--radius` border-radius
- 3-line icon via `::before`/`::after` pseudo-elements on `.nav-toggle-icon`
- X state via `[aria-expanded="true"]` transforms
- Hidden on desktop (721px+)

**Navigation container:**
- `.header-navigation`: hidden by default (mobile), `display: none`
- `.header-navigation.is-open`: `display: flex`, column, full-width below logo row
- Desktop (721px+): always visible, `flex-basis: auto`, align-items end

**Main nav:**
- `.main-nav`: flex column (mobile), flex row (desktop)
- `.main-nav a`: secondary text color, weight 700, 44px min-height, `--radius`, `--space-2 --space-4` padding
- Hover/active: `--color-bg-light` bg, primary text color

**Dropdown submenu (details/summary):**
- Mobile: static, inline, full-width
- Desktop: absolute positioned, `--color-bg-medium` bg, `--radius`, `min-width: 16rem`
- All touch targets 44px+ (mobile), relaxed (desktop)

**Language switcher:**
- `.language-switcher`: flex column (mobile) → flex row (desktop)
- `.language-switcher a`: pill radius, secondary color, 44px min-height (mobile)
- Active state: primary text + `--color-bg-light` bg
- Flag images: 24x16, `border-radius: 3px`

**RTL:**
- All properties use logical equivalents: `padding-inline-start`, `inset-inline-start`, `text-align: start/end`
- Zero `[dir="rtl"]` or `[dir="ltr"]` overrides

### Output

Append to M.css after layout section.

### Quality Gate

- Verify all touch targets >= 44px on mobile
- Verify no physical directional properties (margin-left, padding-right, text-align: left/right)
- Verify zero [dir=] selectors
- Verify hamburger hidden at 721px+

---

## Prompt 5 — Components

### Instruction

Write all page-level components.

**Button system (2 variants only):**
- `.btn-primary`: inline-flex, centered, `--space-4 --space-12` padding, 48px min-height, `--text-md` font, weight 700, `--radius-pill`, `--color-accent` bg, `--color-bg-dark` text, `transition: all var(--ease)`. Hover: `--color-accent-hover` bg, `translateY(-2px)`.
- `.btn-ghost`: same dimensions, transparent bg, `2px solid var(--color-accent)` border, `--color-accent` text. Hover: `--color-accent` bg, `--color-bg-dark` text.
- Both scale font to `--text-lg` on desktop (768px+)

**Hero:**
- `.hero`: relative, overflow hidden, `--color-bg-dark` fallback bg, `background-image: var(--hero-bg, none)`, cover, center
- `::before` overlay: `linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.55))`
- `.hero .container`: 40vh min-height (mobile), 55vh (desktop), flex column centered
- `.hero h1`: max-width 28ch
- `.hero h2`: `--text-md`, weight 400, primary color at 85% opacity, max-width 55ch
- `.hero-cta`: margin-top `--space-6`, flex row, gap `--space-4`

**Risk-barrier pills:**
- `.risk-barriers`: `--color-bg-medium` bg, subtle top/bottom borders
- `.risk-barrier-pill`: inline-flex, `--text-xs`, weight 700, uppercase, `letter-spacing: 0.05em`, `::before` checkmark in accent color
- Container: flex wrap, centered, gap `--space-2 --space-6`, padding `--space-4`

**Steps grid (How It Works):**
- `.steps`: grid, 1 column (mobile) → 3 columns (desktop 768px+), gap `--space-6`
- `.step`: `--space-6` padding, `--color-bg-medium` bg, 1px `--color-bg-light` border, `--radius`
- `.step h3`: accent color

**Accordion (FAQ):**
- `.accordion`: max-width 720px, `text-align: start`
- `details`: `--color-bg-medium` bg, 1px `--color-bg-light` border, `--radius`, margin-bottom `--space-4`
- `summary`: `--space-4 --space-6` padding, 48px min-height, flex, space-between, `::after` plus sign (rotates 45deg on open)
- `.accordion-content`: padding `--space-6`, border-top 1px `--color-bg-light`

**Persona cards (nav-subpage-links):**
- `.nav-subpage-links`: grid, 1 col (mobile) → 2 col (480px+), gap `--space-4`
- `.nav-subpage-link`: `--color-bg-medium` bg, `--radius`, `--space-6` padding, text-align start, hover: translateY(-2px) + accent border-left 3px

**Why-us list:**
- `.why-us ul`: text-align start, max-width 60ch, checkmark list-style `'\2713\0020'`
- `.why-us li`: primary text color

**CTA section:**
- `.cta`: centered text
- `.cta-intro`: `--text-md`, secondary color, max-width 55ch

**Footer contact links:**
- `.footer-contact-links`: flex column (mobile) → flex row (480px+), centered, gap `--space-4`
- `.footer-contact-link`: use `.btn-ghost` appearance — inline-flex, 48px min-height, `--radius-pill`, 1px `--color-white-alpha` border. Hover: accent bg, dark text.
- `.footer-contact-link img`: 1.5rem square

**Scarcity note:**
- `.scarcity-note`: `--text-sm`, weight 700, secondary color, centered, max-width 50ch

**Hero anchor (value line on subpages):**
- `.hero-anchor`: `--text-base`, weight 400, accent color, opacity 0.85, max-width 55ch

### Output

Append to M.css after navigation section. This is the largest prompt.

### Quality Gate

- Verify exactly 2 button classes exist (.btn-primary, .btn-ghost)
- Verify no hardcoded colors — all must reference tokens
- Verify all min-height touch targets >= 44px
- Verify hero uses CSS custom property for background image

---

## Prompt 6 — Pricing & Comparison Table

### Instruction

Write the Pricing section.

**Desktop layout (768px+):**
- `.comparison-table`: standard `<table>`, border-collapse, full width
- `th, td`: `--space-4` padding, 1px `--color-bg-light` top border
- `.feature-col`: text-align start, weight 700, 34% width
- `.tier-col`: text-align center, 22% width
- `.tier-name`: secondary color, weight 700, `--text-xs`, uppercase, `letter-spacing: 0.05em`
- `.tier-price`: secondary color
- `.recommended`: inline pill, accent-alpha-subtle bg, accent text, `--text-xs`, weight 700
- `.highlight-tier`: accent-alpha-subtle bg, 1px accent-alpha-strong inline border

**Mobile layout (<768px) — horizontal scroll:**
- `.comparison-table-wrapper`: `overflow-x: auto`, `-webkit-overflow-scrolling: touch`, `scroll-snap-type: x mandatory`
- `.comparison-table`: `min-width: 600px` (forces horizontal scroll)
- Optional: scrollbar styling for webkit (thin, accent-colored)
- Scroll hint: subtle gradient fade on right edge via `::after` pseudo on wrapper

**Status badges:**
- `.status`: inline-flex, 1.8rem square, centered, `--radius` border-radius
- `.status-check`: accent-alpha-subtle bg, accent color
- `.status-dash`: `--color-white-alpha` bg, secondary color

**Accent/addon/note rows:**
- `.accent-row th, .accent-row td`: accent-alpha-subtle bg, primary text, weight 700
- `.addon-row`: spans full width, start-aligned text
- `.note-row td`: start-aligned, secondary color

**Sovereign tier (highest):**
- `.tier-sovereign`: faint accent bg `rgba(194,101,10,0.04)`, accent inline border

**Threat assessment section:**
- `.threat-assessment`: `--color-bg-medium` bg, accent-alpha top/bottom borders
- `.threat-assessment .container`: max-width 720px, centered
- `.threat-assessment-price`: block, centered, max-width 36ch, `--radius`, accent-alpha bg, accent border + glow, accent text, `--text-md`, weight 700

**Info grid (extras below table):**
- `.info-grid`: grid, 1 col (mobile) → auto-fit minmax(240px, 1fr) (480px+)
- `.info-card`: `--color-bg-medium` bg, `--radius`, `--space-6` padding, start-aligned

### Output

Append to M.css after components section.

### Quality Gate

- Verify horizontal scroll works (min-width forces overflow)
- Verify no CSS grid reflow on mobile (replaced by horizontal scroll)
- Verify all colors use tokens or the 2 accent-alpha values
- Verify scroll-snap-type is set

---

## Prompt 7 — Founder Page

### Instruction

Write the Founder Page section. Must conform to main design system — no separate visual language.

**Layout:**
- `.founder-grid`: 2-column grid (desktop 860px+), single column (mobile)
- `.founder-portrait`: sticky on desktop (top: 80px), aspect-ratio container
- `.founder-portrait img`: object-fit cover, full width/height, `--radius`
- `.founder-bio`: text-align start

**Credentials:**
- `.founder-credentials`: flex wrap, gap `--space-2`
- `.credential-badge`: inline-flex, `--text-xs`, weight 700, `--radius-pill`, accent-alpha-subtle bg, accent text, `--space-1 --space-4` padding

**Media cards (press coverage):**
- `.media-cards`: grid, 1 col (mobile) → 2 col (768px+), gap `--space-4`
- `.media-card`: `--color-bg-medium` bg, `--radius`, overflow hidden, flex column
- `.media-card__masthead`: `--space-4` padding, `--color-bg-light` bg, flex centered
- `.media-card__masthead img`: max-height 2rem, object-fit contain
- `.media-card__body`: `--space-4` padding
- `.media-card__cta`: accent color, weight 700, `--text-sm`

**Bio text:**
- Uses `.prose` class for 65ch max-width paragraphs
- Headings use standard h2/h3/h4 from typography section

**Photo credit:**
- Reuses `.photo-credit` from footer

### Output

Append to M.css after pricing section.

### Quality Gate

- Verify NO custom colors — all from token palette
- Verify NO custom shadows — uses background differentiation only
- Verify grid stacks to single column on mobile
- Verify media cards use same --radius as all other cards

---

## Prompt 8 — Image Optimization + Performance

### Instruction

This prompt modifies HTML files and creates/moves assets, not CSS.

**Image conversion:**
- Convert all PNG files in `assets/img/` to WebP using `cwebp` or Python Pillow
- Keep SVGs as-is (already optimal)
- Keep the JPG founder portrait (too large for inline conversion — add WebP note for manual conversion)
- Update all `<img src="...png">` references to `.webp` across all HTML files

**Lazy loading:**
- Add `loading="lazy"` to ALL `<img>` tags except:
  - Logo/brand images in the header
  - Hero background (loaded via JS, not `<img>`)
  - Flag icons in the language switcher (above fold)

**Unsplash optimization:**
- In all inline hero JS, append `&fm=webp&q=80` to Unsplash URLs
- Change responsive breakpoint from `w=800`/`w=1600` to `w=640`/`w=1280` (smaller, still sharp)

**JS consolidation:**
- Extract the inline hero image JS (repeated in 20 files) into `assets/js/hero.js`
- Extract the FAQ toggle JS into the same file or `navigation.js`
- Each HTML page: replace inline `<script>` blocks with `<script src="../assets/js/hero.js" defer></script>`

**Font optimization:**
- Ensure Google Fonts link loads only weights 400, 700, 900 (drop 500, 600, 800 if present)
- Add `&display=swap` to the font URL
- Verify `<link rel="preconnect" href="https://fonts.googleapis.com">` is present

**Width/height attributes:**
- Add explicit `width` and `height` to all `<img>` tags for CLS prevention

### Output

Modified HTML files + new JS file(s). Report changes per file.

### Quality Gate

- Verify no PNG references remain in HTML (except as fallback in `<picture>` if used)
- Verify `loading="lazy"` count matches expected
- Verify no inline `<script>` blocks remain (except Plausible analytics one-liner)
- Verify font URL loads exactly 3 weights

---

## Prompt 9 — Cleanup + Validation

### Instruction

Final cleanup pass across all files.

**Dead CSS removal:**
- The new M.css is written from scratch — no dead classes by construction
- But verify: grep every class defined in M.css against all HTML files
- Report any CSS class not used in HTML (dead) or HTML class not styled in CSS (orphan)

**HTML cleanup:**
- Remove any `class="..."` references from HTML that no longer have corresponding CSS rules
- Remove any leftover inline `style="..."` attributes
- Verify all `<section>` elements have either `aria-label` or a heading child

**RTL validation:**
- Grep M.css for physical directional properties (margin-left, padding-right, text-align: left, float: left, etc.)
- Must find zero matches

**Contrast validation:**
- Programmatic check: all 10 colors against all 3 surfaces (dark mode) + 3 surfaces (light mode)
- All text combinations must pass WCAG AA (4.5:1 normal, 3:1 large)
- Accent on all surfaces must pass AA for large text (3:1 minimum)

**Cross-language parity:**
- Verify EN/HE/RU pages have identical section structures
- Report any section present in one language but missing in another

**RU duplicate sync:**
- Copy each primary RU file to its space-named duplicate

**Final CSS stats:**
- Total lines
- Total tokens
- Total unique color values
- Total unique font-size values
- Total class selectors
- Brace balance
- Comment balance

### Output

Validation report + any fixes applied.

### Quality Gate

- Zero hardcoded colors outside :root + light-mode override
- Zero physical directional CSS properties
- All contrast ratios >= 4.5:1 (normal text) or >= 3:1 (large text/UI components)
- Brace-balanced, comment-balanced CSS
- All 3 languages structurally identical

---

## Execution Order

```
Prompt 1  →  approve  →  Prompt 2  →  approve  →  ...  →  Prompt 9  →  final review
```

Each prompt builds on the previous. The CSS file grows incrementally.
Prompts 1-7 write CSS. Prompt 8 modifies HTML/JS. Prompt 9 validates everything.

Estimated total: ~800-1000 lines of CSS (down from 2,137).
