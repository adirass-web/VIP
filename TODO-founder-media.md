# TODO — Founder Page: Media Section

Added: 2026-04-24

---

## 1. Fix HTML entity encoding

Raw HTML character entities in the French and Italian article headlines will render as garbled text in the browser — e.g. `Du Maroc &agrave; la Hongrie` instead of `Du Maroc à la Hongrie`.

This is a CMS/template-level issue, not a copy issue. No amount of copywriting fixes it.

**Action:** Locate where the Founder page media items are stored and ensure the CMS outputs UTF-8 characters, not HTML escape sequences. Affected entities include `&agrave;` `&eacute;` `&ndash;` `&amp;` `&#39;`.

---

## 2. Close the recency gap in media citations

The most recent citation is July 2022. For a site launching in 2026, a media section with nothing newer than four years ago signals inactivity.

**Action:** Check whether Dr. Tabansky has any 2023–2026 media appearances — articles, podcasts, conference keynotes, interviews. Even one recent entry neutralises the staleness. If nothing is available, reframe the section as "Selected media" with a note that it is a curated historical sample.

---

## 3. Founder headshot — REQUIRED before launch

Added: 2026-06-10

A photo placeholder is live in the "Why us" section of the homepage (`src/en/index.njk`, class `founder-photo-placeholder`). The placeholder renders as a dashed-border box showing "Dr. Lior Tabansky – headshot asset pending."

**Action required:** Replace the `<figure class="founder-photo-placeholder">` block with:
```html
<figure class="portrait">
    <img src="/assets/img/tabansky-portrait.jpg"
         alt="Dr. Lior Tabansky — founder, Personal Cyber Shield"
         width="600" height="800"
         loading="lazy">
    <figcaption>Dr. Lior Tabansky</figcaption>
</figure>
```

**Image spec:**
- Format: JPEG (progressive), 600×800px minimum, 1200×1600px @2x preferred
- Subject: professional headshot, neutral background, high contrast
- File: `assets/img/tabansky-portrait.jpg` (the `.portrait img` CSS rule already exists in vault.css)
- Alt text: "Dr. Lior Tabansky — founder, Personal Cyber Shield"

**Why this matters:** The entire service is sold on personal trust in one expert. No face = no trust anchor. This is the highest-ROI change before launch.
