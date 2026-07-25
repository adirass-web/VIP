# Personal Cyber Shield — TODO

_Session close: 2026-06-19. Companion to `Session_Handoff_2026-06-13.md` (full state). Copy is drafted, QA-locked, and packed into `pcs-site.zip`._

## 🚩 Launch gates (do before the site is public)
- [ ] **Safety page resources** — fill the two `[CONFIRM]` placeholders in `src/en/leaving-controlling-relationship.njk` with approved IL domestic-abuse orgs/numbers. A safety page must not publish with empty resource slots.
- [ ] **Root redirect** — `index.html` defaults to `/he/`, but HE/RU aren't built. Repoint the fallback + `paths` default to `/en/` for an EN-only launch.
- [ ] **Sitemap & language switcher** — regenerate `sitemap.xml` for EN-only; confirm the language switcher in `src/_includes/layouts/vault.njk` doesn't link to unbuilt `/he/` `/ru/` (remove or hide for EN-only).
- [ ] **Why Us** — supply founder proof (bio, credentials, citable press/TV, portrait) per `Handoff_Founder_Proof.md`; then I draft + QA + convert final `why-us.njk` to replace the legacy `why-us.njk` / `founder.njk`.

## 🏗 Build & ship
- [ ] **Build check** — `npm install && npm run build`; confirm Eleventy compiles all `src/en/*.njk` with no errors.
- [ ] **Push to new repo** — unzip `pcs-site.zip`, `git init`, commit, push.
- [ ] **CI** — add `ANTHROPIC_API_KEY` as a repo secret so `.github/workflows/claude.yml` works (`@claude` on issues/PRs). Merge the workflow to the default branch first.
- [ ] **Deploy** — static host, publish `_site/` (see `render.yaml`).
- [ ] **Link check** — verify internal links resolve after build (esp. `/en/they-know-something.html`, `faq.html#boundaries`, situation-page cross-links).

## 🧹 Housekeeping
- [ ] Delete the broken `magentech/VIP` folder in File Explorer (the sandbox couldn't remove it).
- [ ] (Optional) Rebuild `pcs-conversion-copywriter.skill` so its embedded copy matches the final "private-client cyber protection" wording.

## ✍️ Content backlog (Batch 4 — deferred)
- [ ] HE/RU — retranslate from the new EN copy (current HE/RU pages are stale/off-strategy).
- [ ] Local SEO pages, Travel page, family-office/wealth page, standalone Annual Shield Review / Bespoke pages.

## ✅ Done this engagement
- 15 EN pages rewritten to locked positioning ("private-client cyber protection"), each skill-driven + independently QA'd against the J22 checklist and forbidden-vocab list, then converted to `.njk`.
- Category retirement propagated into `A_master_plan.md`; surcharges confirmed (₪4,200 / ₪5,800 all-in); "What We Never Do" folded into FAQ `#boundaries`.
- `Copy_System_Brief.md` (source of truth), `pcs-conversion-copywriter.skill`, GitHub Actions + `CLAUDE.md` CI scaffold, and `pcs-site.zip` (clean EN repo).
