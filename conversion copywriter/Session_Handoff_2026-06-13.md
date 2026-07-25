# Session Handoff — PCS Conversion Copywriting

**Started:** 2026-06-13 · **Updated:** 2026-06-19
**Project:** Personal Cyber Shield ("conversion copywriter")
**State:** All public copy drafted, QA-locked, and converted to `.njk`. Batches 1–3 complete (15 pages). Why Us is a media-heavy placeholder pending founder proof. Nothing pushed to GitHub yet (no sandbox credential).

---

## 1. Status at a glance

| Batch | Pages | Decks | `.njk` in `_repo_files/` |
|---|---|---|---|
| 1 — conversion core | Homepage, Pricing, Private Exposure Assessment, What Happens During the Visit, FAQ | ✅ locked | ✅ |
| 2 — demand + value | They Know Something, Separation & Divorce, Business Dispute, Attorneys | ✅ locked | ✅ |
| 3 — supporting/filter | Why This Is Not IT Support, Inheritance Conflict, Leaving a Controlling Relationship, Commercial Spying, Private Investigator Defence | ✅ locked | ✅ |
| Why Us | media-heavy placeholder | ⚠ placeholder (`[PROOF]`/`[MEDIA]`) | not yet |
| What We Never Do | **retired** → folded into FAQ `#boundaries` | n/a | n/a |

Every page went through the skill + an independent reviewer subagent against the J22 checklist and the §5 forbidden-vocab list; all fixes applied before lock.

---

## 2. Where the deliverables live

- **Copy decks (.md):** project root — `Homepage_copy.md`, `Pricing_copy.md`, `Private_Exposure_Assessment_copy.md`, `What_Happens_During_the_Visit_copy.md`, `FAQ_copy.md`, `They_Know_Something_copy.md`, `Separation_Divorce_copy.md`, `Business_Dispute_copy.md`, `Attorneys_copy.md`, `Not_IT_Support_copy.md`, `Inheritance_Conflict_copy.md`, `Leaving_Controlling_Relationship_copy.md`, `Commercial_Spying_copy.md`, `Private_Investigator_copy.md`, `Why_Us_copy.md` (placeholder), `What_We_Never_Do_copy.md` (retired).
- **Repo-ready files:** `_repo_files/` mirrors the repo layout — `src/en/*.njk` (14 rewritten/new pages), `.github/workflows/claude.yml`, `CLAUDE.md`. **This folder (in your mount) is the authoritative, persistent copy.**
- **System of record:** `Copy_System_Brief.md` — the operative source of truth; overrides A/B/C/D/J where they conflict.
- **Skill:** `pcs-conversion-copywriter.skill` (installed). Note: its embedded text still says the old interim wording in places; the brief governs at runtime.
- Sandbox git branch `claude/batch1-homepage` in `/tmp/VIP` has all commits, but **`/tmp` is ephemeral — do not rely on it.** Use `_repo_files/`.

---

## 3. Method (the working chain)

Brief → skill (guardrails + 9-part output) → mine/rewrite the live `.njk` → independent reviewer subagent (J22 + §5 scan) → one revision cycle → lock → convert to `.njk` in `_repo_files/` → sanity check (section balance + forbidden scan).

---

## 4. Key decisions

- **Category (founder-approved, A-level, propagated to A):** "digital safety reset" RETIRED → **"private-client cyber protection."** Category line: *"Personal Cyber Shield is private-client cyber protection: one senior expert who discreetly finds and closes what could be used against you."* Lead one-liner / Homepage H1 direction: *"Take back control of your digital life before it becomes leverage."*
- **Surcharges (override B19):** urgent/emergency within 4h Central Israel **+₪4,200**; urgent on weekend/holiday **+₪5,800 all-in** (replaces, not additive).
- **What We Never Do:** retired as a standalone page → FAQ `#boundaries`; all links repointed.
- **Binding-lines rule:** master plans bind for meaning, not phrasing; weak lines sharpened with positioning preserved + flagged.
- **Tooling:** no conversion-copy skill in catalog; built the custom `pcs-conversion-copywriter.skill`; GitHub via a CI workflow (no MCP connector).
- **Repo reality:** Eleventy/Nunjucks, layout `vault.njk`, canonical domain `magenvip.tech`. Existing pages were heavily off-strategy (DIY vignettes, NSA/NIST, Sovereign Shield ₪95k, "Certificate of Hardening for your legal file", "Speak with us") — all rewritten out.

---

## 5. Open items / blockers (action needed)

1. **GitHub push / bootstrap (you).** No credential in the sandbox and I can't accept a pasted token, so I cannot push. Land it from your authenticated clone: copy `_repo_files/.` into the repo, commit, push a branch, open a PR, run the Eleventy build, merge `claude.yml` to `main`. After that, `@claude` comments drive CI.
2. **Eleventy build check (you/CI).** I couldn't run `npx @11ty/eleventy` in the sandbox (no deps). Run it before merge to confirm templates compile.
3. **Why Us founder proof (task #3).** Fill `[PROOF]`/`[MEDIA]` in `Why_Us_copy.md` (bio, credentials, citable outlets, TV/press screenshots, portrait), then I draft + QA + convert the final Why Us `.njk`.
4. **Controlling-relationship release gate.** `leaving-controlling-relationship.njk` carries two `[CONFIRM]` HTML comments for local IL support resources — a safety page must not publish with empty resource slots. Supply approved orgs/numbers.
5. **Broken `magentech/VIP` cleanup.** Delete it in File Explorer (the sandbox can't remove it). Then clone fresh locally.
6. **Skill refresh (optional).** Rebuild `pcs-conversion-copywriter.skill` so its embedded copy matches the final "private-client cyber protection" wording.

---

## 6. Next steps

- **Why Us** once proof lands (last Batch 2 page).
- **Batch 4 (deferred):** local SEO pages, Travel, family-office/wealth, HE/RU translations, standalone Annual Shield Review / Bespoke pages.
- **Integration:** build, visual QA on `vault.njk` styling, then deploy.

---

## 7. Notes for resuming

- `Copy_System_Brief.md` wins over A/B/C/D/J on any conflict.
- Re-run the reviewer subagent on every new/edited page before marking it locked.
- Persistent memory updated: `pcs-copywriting-project`, `binding-lines-rule`.
- New `.njk` pages link to `/en/they-know-something.html` (now built) and `faq.html#boundaries`; check internal links resolve after merge.
