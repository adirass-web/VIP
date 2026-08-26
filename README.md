# Toza

Production Eleventy/Nunjucks marketing site.

## Current release

- Brand: Toza.
- Working descriptor: Personal digital protection for your close circle.
- Public language: English only (`src/en/`).
- Primary layout: `src/_includes/layouts/vault.njk`.
- Current contact path: WhatsApp / Signal.
- `Why Toza` is a bilingual local founder note; its explicit external link opens the founder's professional site at https://cyberdrtabansky.com.
- Deployment target: separate Cloudflare Pages project `toza-site`; no custom canonical domain yet.
- Hebrew and Russian production pages are intentionally absent until fresh translations are supplied.

## Planned sequence

1. Keep the English site as the content source of truth.
2. Add a mirrored Hebrew version from supplied Hebrew copy, with full RTL QA.
3. Add a mirrored Russian version from supplied Russian copy.
4. Add a minimal normal intake flow; evaluate chatbot-assisted intake as a separate implementation step.

Historical strategy decks, copy-production workspaces, ZIP snapshots, and superseded translations do not belong on the production branch; Git history remains the archive.
