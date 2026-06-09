# Contributing / Git workflow — מגן · Personal Cyber Shield

Robust, reviewable process for this site. Approved 2026-06-07.

## Branches
- **`main`** = production. Auto-deploys to Cloudflare Pages (`magenvip`) on every push. **Never commit directly to `main`.**
- **Short-lived feature branches**, one per change: `feat/<thing>`, `fix/<thing>`, `style/<thing>`, `copy/<thing>`.
- Current redesign lives on **`vault-redesign`** (one big PR until launch; squash-merge to go live).

## Flow (per change)
1. Branch off `main`.
2. Commit in small, logical chunks (Conventional Commits: `feat:`, `fix:`, `style:`, `copy:`, `ci:`, `docs:`).
3. Push the branch → Cloudflare builds a **preview** at `https://<branch>.magenvip.pages.dev` (non-production).
4. Open a **PR** into `main`. Review on the preview URL.
5. **Squash-merge** when approved → production deploys in ~30s.

## Operational rules (this repo)
- **OneDrive lock:** never run git in the working folder. Clone to `/tmp/vip-push`, copy changed files in, commit, push.
- **OneDrive write-truncation:** the editor occasionally saves a TRUNCATED file. After editing config / JSON / CSS / NJK, **verify** before pushing:
  - JS/JSON: `node -c file` / `JSON.parse`.
  - CSS/NJK: build to a clean temp dir — `npx @11ty/eleventy --output=/tmp/vsite` — and grep the output for expected markers + check `tail`.
  - Prefer bash heredoc or Python for large config/CSS/NJK writes.
- **Don't push** `package.json` / `package-lock.json` dependency additions used only for local tooling (fonts and og image are committed static assets; CI only needs 11ty).
- Single prices only; never the indefinite article for the brand (see Positioning doc).

## Deploy facts
- CI: `.github/workflows/deploy.yml` → `cloudflare/pages-action` → project `magenvip`, account `cfd055f2f8175d13377bd64e9620ea36`.
- The `vault-redesign` branch is in the workflow trigger so it builds a preview; remove that trigger line at merge.
