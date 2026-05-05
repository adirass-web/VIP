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
