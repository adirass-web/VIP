# Contributing / Git workflow — Toza

Robust, reviewable process for this site.

## Branches
- **`main`** = production. Auto-deploys to the separate Cloudflare Pages project `toza-site` on every push. Never commit directly to `main`.
- Use short-lived feature branches, one per change.
- Open a PR into `main`; squash-merge when approved.

## Verification
- Run `npm ci` and `npm run build` before merging.
- Verify JSON/config changes and inspect generated output for expected routes and content.
- Do not change layout, responsive behavior, accessibility, or i18n as part of copy-only changes.

## Current release constraints
- EN is the only published content tree.
- Fresh HE copy will be supplied and mirrored after EN is locked; RU follows HE.
- `Why us` points to https://cyberdrtabansky.com.
- There is no custom canonical domain yet; the current deployment target is the `toza-site` Cloudflare Pages project.
- Personal Shield and Inner Circle Shield remain part of the offer architecture.
