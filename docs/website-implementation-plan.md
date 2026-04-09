# Website Content & Layout Implementation Plan
## Personal Cyber Shield — מגן סייבר אישי

*April 2026. Covers: naming/branding in HE/RU/EN, content rewrites, layout changes, section-by-section map.*

---

## Part 1 — Hebrew Naming: Does "Protocol" Work?

### Short answer: "פרוטוקול" works in Hebrew — but it is the wrong root for this brand.

The word פרוטוקול (protokol) is a natural loanword in Hebrew, used across military (פרוטוקול אבטחה), medical (פרוטוקול טיפול), legal (פרוטוקול דיון), and tech (פרוטוקול תקשורת) contexts. Israeli speakers understand it instantly in a security context.

**But the brand is built on "מגן" (magen).** The domain is `magenvip.tech`. The meta tags say "מגן VIP — מגן סייבר אישי." The current entry tier is "מגן יסוד." The word מגן carries deep cultural weight in Hebrew — it means shield, protector, defender. It is the root of מגן דוד (Star of David), מגן דוד אדום (Israel's Red Cross equivalent), and it is a word that every Hebrew speaker associates with protection at the most fundamental level.

Replacing "מגן" with "פרוטוקול" swaps an emotional word (I am being protected) for a procedural word (a procedure is being followed). For a crisis service, the buyer wants a shield, not a procedure.

### Recommendation: Keep מגן as the tier root. Use פרוטוקול for process language.

The site already does this correctly in one place: "פרוטוקול תקשורת מאובטח" (secure communications protocol) — this is process language and it fits. The tier names should stay in the מגן family.

### Proposed Tier Names — All Three Languages

| Tier Code | EN (site copy) | HE (site copy) | RU (site copy) | Notes |
|---|---|---|---|---|
| Entry | Personal Shield | מגן אישי | Персональный Щит | Replaces "Core Shield" / "מגן יסוד." "אישי" (personal) is warmer than "יסוד" (foundation), which sounds like the cheap option. |
| Target (2 devices) | Extended Shield | מגן מורחב | Расширенный Щит | New tier. "מורחב" (extended/expanded) is natural, widely used in Hebrew service contexts. |
| Family (2+ operators) | Family Shield | מגן משפחה | Семейный Щит | New tier for Inheritance vertical. "משפחה" immediately signals who this is for. |
| Anchor (full-spectrum) | Sovereign Shield | מגן ריבון | Суверенный Щит | "ריבון" (sovereign) is a powerful word in Hebrew — it carries authority, self-determination, absolute control. It is used in political and religious contexts for ultimate sovereignty. For the top tier, this is stronger than any English equivalent. |

**"Щит" (Shchit)** is the direct Russian equivalent of "Shield." It works cleanly in all three tier constructions. Russian-speaking buyers will read "Суверенный Щит" as authoritative and premium.

### Section Header Renaming

| Current (HE) | Proposed (HE) | Current (EN) | Proposed (EN) |
|---|---|---|---|
| שקיפות ומחירים | היקף ותנאים | Transparent pricing | Engagement scope |
| רמות השירות | מסלולי הגנה | Service Tiers | Protection tracks |
| הכי נפוץ | הנבחר ביותר | Most popular | Most chosen |
| 8–21 שעות | *(remove — replace with outcome)* | 8–21 hours | *(remove)* |

**"מסלולי הגנה" (Protection Tracks)** is the natural Hebrew category for tiered service offerings. Israelis encounter "מסלולים" (tracks/paths) in every context from phone plans to educational programs. It is instantly understood as "pick the one that fits you."

**"הנבחר ביותר" (Most Chosen)** is stronger than "הכי נפוץ" (Most Common). "נפוץ" implies frequency; "נבחר" implies deliberate selection by people like the buyer.

---

## Part 2 — Page-by-Page Content & Layout Changes

### Site Architecture (unchanged)

```
/en/index.html          — Homepage (EN)
/en/separation-divorce.html  — Vertical page
/en/business-dispute.html    — Vertical page
/en/inheritance-clash.html   — Vertical page
/en/commercial-spying.html   — Vertical page
/en/founder.html             — About Dr. Tabansky
(Same structure in /he/ and /ru/)
```

### Page Type A — Homepage (`index.html` × 3 languages)

**Current structure:**
1. Hero (H1 + H2 + WhatsApp/Signal CTA)
2. How It Works (3 steps)
3. Common High-Pressure Situations (4 links)
4. Why Trust Us? (5 bullets)
5. FAQ (7 questions)
6. Footer CTA + contact

**Proposed changes:**

| Section | Change | Rationale |
|---|---|---|
| **Hero** | No content change. The H1 ("הטלפון שלך יודע הכל") is strong. Keep. | Already crisis-targeted. |
| **How It Works** | **Rewrite step descriptions to outcome language.** Remove technical jargon ("FIDO2 device for identity protection"). Replace with: "You leave with a phone that cannot be compromised, accounts that cannot be accessed, and a communications channel your attorney can trust." | Buyers care about outcomes, not methods. FIDO2 means nothing to them. |
| **How It Works** | **Add scarcity signal below the 3 steps.** One line: "ד"ר טבנסקי מקבל 3–6 לקוחות בחודש. ניתן לקבוע פגישה בהתאם לזמינות." ("Dr. Tabansky accepts 3–6 clients per month. Scheduling subject to availability.") | Real scarcity. Converts a capacity constraint into a status signal. |
| **Situations** | **Add a one-line outcome under each link.** Currently just 4 naked links. Add: "הגנה על ראיות ותקשורת לפני ההליך" under "פרידה, גירושין, גט." | Buyers need to see themselves in the link before clicking. |
| **Why Trust Us** | **Replace "Clear. One-time. Secure." with the Certificate of Hardening mention.** "כל התערבות מסתיימת בתעודת הקשחה חתומה לתיק עורך הדין שלך." ("Every engagement concludes with a signed Certificate of Hardening for your attorney's file.") | The Certificate is a zero-COGS value injection and a referral catalyst. |
| **FAQ** | **Add one new FAQ: "How much does it cost?"** Answer: "מסלול ההגנה האישית מתחיל ב-₪15,000. ההיקף המדויק נקבע בשיחת אבחון קצרה." ("Personal Shield starts at ₪15,000. Exact scope determined in a brief diagnostic call.") | Currently there is no pricing info on the homepage. Buyers who arrive directly (not via vertical pages) have no anchor. |
| **Footer CTA** | **Keep "השיגי מגן סייבר אישי."** The feminine imperative is intentional — the primary buyer on individual-first verticals (Divorce, Inheritance) is female. The direct address is a deliberate targeting choice, not an error. | No change. |
| **Layout** | **No structural layout changes.** The section order is correct: urgency → method → self-identification → trust → FAQ → action. | The funnel flow works. |

### Page Type B — Vertical Pages (`separation-divorce`, `inheritance-clash`, `business-dispute`, `commercial-spying` × 3 languages)

**Current structure (identical across all 4 verticals):**
1. Hero (H1 + H2)
2. Risk Barriers (4 pills)
3. Scenario Details (H2 + H3 + threat list + cross-links)
4. Pricing Table (3-column comparison)
5. What You Receive (4 bullets)
6. 24-Hour Process (3 steps)
7. Footer CTA + contact

**Proposed changes:**

#### Section 1 — Hero

| Change | Details |
|---|---|
| **Add value anchor line below H2.** | EN: "One leaked conversation in a ₪5M dispute costs more than this entire engagement." HE: "שיחה אחת שדלפה בסכסוך של 5 מיליון ₪ עולה יותר מכל ההתערבות הזו." RU: "Одна утечка переписки в споре на 5 млн ₪ стоит дороже всего этого вмешательства." |
| **Keep the hero image JS loader.** | But replace deprecated unsplash URLs per the hero-image-recommendations.md spec. |

#### Section 2 — Risk Barriers

No changes. The 4 pills ("No cloud | No remote | No logs | Work only with you present") are correct and effective.

#### Section 3 — Scenario Details

| Change | Details |
|---|---|
| **Shorten the threat list from 5–6 items to 3.** | Three threats are more menacing than six. Pick the three most concrete and most personal per vertical. |
| **Add the Certificate mention at the end of the paragraph.** | "תקבל תעודת הקשחה חתומה לתיק המשפטי." ("You'll receive a signed Certificate of Hardening for the legal file.") |

**Shortened threat lists by vertical:**

**Separation/Divorce (HE):**
- ישתמשו בתמונות והודעות נגדך בבית המשפט
- יעקבו אחר המיקום והתנועות שלך
- יחטפו גיבויים ויגנבו כסף מחשבונות משותפים

**Inheritance Clash (HE):**
- ישתלטו על צוואות, מסמכים וחשבונות של ההורים
- יגיעו לתכתובות עם עורכי הדין שלך
- יתמרנו בני משפחה על ידי סילוף מידע

**Business Dispute (HE):**
- ירוקנו חשבונות ענן ודוא"ל עסקי
- ישתמשו בתכתובות פרטיות כדי לחתור תחת המשא ומתן
- ידליפו סודות מסחריים למתחרים

**Commercial Spying (HE):**
- יגנבו קניין רוחני וקבצי לקוחות
- יקדימו מהלכים אסטרטגיים והשקות מוצרים
- ידליפו פרטי עסקאות M&A למתחרים

#### Section 4 — Pricing Table (the largest content change)

**Current state:** 3-column table identical across all verticals, showing Core Shield / Additional Device / Rapid Response with time ranges.

**Proposed new table structure — varies by vertical:**

**For Separation/Divorce and Inheritance Clash (individual-first):**

```
Column 1: מגן אישי (Personal Shield) — ₪15,000 — HIGHLIGHTED "הנבחר ביותר"
Column 2: מגן מורחב (Extended Shield) — ₪22,000
Column 3: מגן ריבון (Sovereign Shield) — ₪95,000

Bottom row (add-ons):
- מכשיר נוסף: +₪5,500
- סריקת דירה: החל מ-₪10,000
- תגובה בזמן קצר: +₪1,500 עד +₪6,000

Note: Sovereign Shield column exists as ANCHOR — it will rarely be selected.
```

**For Inheritance Clash specifically — swap column 2:**

```
Column 1: מגן אישי (Personal Shield) — ₪15,000
Column 2: מגן משפחה (Family Shield) — from ₪29,000 — HIGHLIGHTED "הנבחר ביותר"
Column 3: מגן ריבון (Sovereign Shield) — ₪95,000
```

**For Business Dispute and Commercial Spying (corporate-secondary):**

```
Column 1: מגן מורחב (Extended Shield) — ₪22,000 — HIGHLIGHTED "הנבחר ביותר"
Column 2: מגן אישי (Personal Shield) — ₪15,000
Column 3: מגן ריבון (Sovereign Shield) — ₪95,000
```

**Feature rows — replace time-based with outcome-based:**

| Current feature row | Proposed replacement |
|---|---|
| הקשחת מכשיר עיקרי (iOS / Android / Windows) | מכשיר ראשי מוקשח ונעול |
| 8–21 שעות | *(remove entirely from table header)* |
| אבטחת חשבונות מפתח + ניהול סיסמאות מאובטח | כל החשבונות מאובטחים: מייל, ענן, בנק, רשתות |
| FIDO2 + נעילת גיבויים | מפתח חומרה שמונע גישה לא מורשית |
| הדרכה אישית + פרוטוקול תקשורת מאובטח | ערוץ תקשורת מאובטח לך ולעורך הדין |
| ₪ לפי היקף — 6–24 ש׳. שאלו על חבילות משולבות. | סריקת דירה / משרד: החל מ-₪10,000. היקף מדויק ב-10 דקות בטלפון. |

**New row for Sovereign tier only:** תעודת הקשחה + ליווי שנתי (Certificate of Hardening + annual coverage).

#### Section 5 — What You Receive

| Change | Details |
|---|---|
| **Rewrite from technical to outcome language.** | Replace "הקשחת iOS / Android / Windows + נעילת גיבויים" with "מכשיר שלא ניתן לפרוץ. גיבויים שלא ניתן לגנוב." ("A device that cannot be breached. Backups that cannot be stolen.") |
| **Add the Certificate as a named deliverable.** | "תעודת הקשחה חתומה — אישור מקצועי לתיק המשפטי שלך." |
| **Add scarcity line after deliverables.** | "ד"ר טבנסקי עובד עם 3–6 לקוחות בחודש. זמינות בתיאום מראש." |

#### Section 6 — 24-Hour Process

| Change | Details |
|---|---|
| **Rename from "המסלול ב-24 שעות" to "מה קורה ביום ההגנה"** | "מסלול ב-24 שעות" implies a time commitment. "יום ההגנה" (Protection Day) frames it as an event, not a time block. |
| **Keep 3 steps but rewrite step 1 name.** | "אבחון אישי" → "מיפוי האיומים שלך" ("Mapping Your Threats"). More active, more specific to the buyer's situation. |
| **Add outcome line after step 3.** | "בסוף היום: המכשירים נעולים, החשבונות מאובטחים, ותעודת ההקשחה בידך." ("By end of day: devices locked, accounts secured, Certificate of Hardening in your hands.") |

#### Section 7 — Footer CTA

| Change | Details |
|---|---|
| **Keep gendered language.** | "השיגי מגן סייבר אישי" — feminine imperative is intentional. Primary buyer on individual-first verticals skews female. Direct address is a targeting asset, not an oversight. No change. |
| **Strengthen the intro line.** | Current: "ברגע שהיריב ישיג מידע פרטי, הוא יסלף אותו נגדך." This is good. Keep. |

---

## Part 3 — Layout Changes (CSS/Structure)

### Changes That Require CSS Modification

| Change | CSS Impact |
|---|---|
| **Pricing table may grow from 3 columns to 3 columns + add-on rows.** | The existing `.comparison-table` already supports this with `.note-row` spanning all columns. Add-on rows can use the same pattern. No structural CSS change. |
| **Sovereign tier column needs visual differentiation.** | Add a subtle border or different background tone to the Sovereign column to signal "premium." Use existing `--color-accent` (burnt orange #d97706) for the Sovereign column header. The current `highlight-tier` class can remain on the target tier (Personal/Extended Shield). |
| **Scarcity line needs a distinct style.** | A new `.scarcity-note` class — small text, centered, slightly muted color (`--color-text-secondary`), placed after the deliverables or process section. 3 lines of CSS. |
| **Value anchor line under hero H2.** | A new `.hero-anchor` class — slightly smaller than H2, different weight, on a separate line. Can inherit from `.hero h2` with reduced font-size. 5 lines of CSS. |

### Changes That Do NOT Require CSS

| Change | Why No CSS |
|---|---|
| All content rewrites (hero text, threat lists, deliverables, process steps) | Same HTML structure, different text. |
| Tier renaming (מגן יסוד → מגן אישי) | Same `.tier-name` class, different inner text. |
| Removing time durations from table headers | Delete the `<div class="tier-duration">` element. No orphaned CSS. |
| Certificate of Hardening mentions | Additional `<li>` in existing `<ul>` lists. |
| FAQ additions | Additional `<details>` elements inside existing `.accordion`. |

---

## Part 4 — New Section: Threat Assessment CTA (Paid Entry Point)

One new section is needed across all vertical pages, placed **between the Hero and the Risk Barriers** or **between the Scenario Details and the Pricing Table.** This introduces the paid Threat Assessment (₪3,500) as an entry point for buyers who are not ready to commit to a full engagement.

### Proposed Section Content (HE)

```
<section class="threat-assessment">
    <div class="container">
        <h2>לא בטוחים מה ההיקף? התחילו עם מיפוי איומים.</h2>
        <p>שיחת אבחון של שעה, פנים אל פנים או מאובטחת. 
        ד"ר טבנסקי ממפה את חשיפות הדיגיטל שלך ומפיק 
        דו"ח כתוב עם המלצות מדויקות.</p>
        <p class="threat-assessment-price">₪3,500 — זוכה במלואו כנגד כל מסלול הגנה שנרכש תוך 14 יום.</p>
    </div>
</section>
```

### EN Equivalent

```
Not sure about scope? Start with a Threat Assessment.
A one-hour diagnostic session, in-person or secure call. 
Dr. Tabansky maps your digital exposure and delivers 
a written report with precise recommendations.
₪3,500 — credited in full toward any engagement booked within 14 days.
```

### RU Equivalent

```
Не уверены в объёме? Начните с оценки угроз.
Часовая диагностическая сессия, лично или по защищённому каналу. 
Д-р Табанский анализирует ваши цифровые уязвимости и предоставляет 
письменный отчёт с конкретными рекомендациями.
₪3 500 — полностью засчитывается при покупке любого пакета в течение 14 дней.
```

### CSS Requirements

Minimal. The section can inherit the `.scenario-details` styling pattern — centered text, constrained width. The price line (`.threat-assessment-price`) should be styled similarly to `.tier-price` but inline (not in a table). One accent-colored border or background to distinguish it from surrounding content. Approximately 10–15 lines of CSS.

---

## Part 5 — Implementation Sequence

### Phase 1 — Confirm and Freeze (before any code changes)

- [ ] Confirm tier names in all 3 languages (table above)
- [ ] Confirm prices (₪15,000 / ₪22,000 / ₪29,000+ / ₪95,000)
- [ ] Confirm Threat Assessment pricing (₪3,500, credited within 14 days)
- [ ] Confirm scarcity number (3–6 clients/month)
- [ ] Confirm Certificate of Hardening concept (zero-cost deliverable)

### Phase 2 — CSS Changes (one file: `assets/css/M.css`)

- [ ] Add `.scarcity-note` class
- [ ] Add `.hero-anchor` class
- [ ] Add `.threat-assessment` section styling
- [ ] Add `.tier-sovereign` or equivalent for Sovereign column visual distinction
- [ ] Test in RTL and LTR

### Phase 3 — Content Rewrites (16 HTML files)

Priority order (individual-first, as confirmed):

1. **`he/separation-divorce.html`** — primary vertical, primary language. Write first, validate structure.
2. **`en/separation-divorce.html`** — same vertical, English. Translate approach, not words.
3. **`ru/separation-divorce.html`** — same vertical, Russian.
4. **`he/inheritance-clash.html`** — second priority vertical.
5. **`en/inheritance-clash.html`**
6. **`ru/inheritance-clash.html`**
7. **`he/business-dispute.html`** — secondary vertical.
8. **`en/business-dispute.html`**
9. **`ru/business-dispute.html`** + **`ru/business-dispute ru.html`**
10. **`he/commercial-spying.html`**
11. **`en/commercial-spying.html`**
12. **`ru/commercial-spying.html`** + **`ru/commercial-spying ru.html`**

### Phase 4 — Homepage Updates (3 files)

13. **`he/index.html`**
14. **`en/index.html`**
15. **`ru/index.html`**

### Phase 5 — Verification

- [ ] All prices match approved numbers across all 16 files
- [ ] No time ranges ("8–21 שעות") remain anywhere
- [ ] No "שקיפות ומחירים" or "Transparent pricing" remains
- [ ] All deprecated `source.unsplash.com` URLs are replaced
- [ ] Gender-neutral footer CTA across all HE pages
- [ ] Certificate of Hardening mentioned on every vertical page
- [ ] Threat Assessment section present on every vertical page
- [ ] Scarcity line present on homepage and vertical pages
- [ ] RTL rendering correct on all HE pages
- [ ] Mobile responsive: pricing table scrollable on small screens

---

## Part 6 — Prompts for Execution

Each phase above maps to a focused execution prompt. Below are the prompts, written to be self-contained.

### Prompt A — CSS Changes

> Update `assets/css/M.css` to add: (1) `.scarcity-note` — small centered text in `--color-text-secondary`, margin-top 2rem; (2) `.hero-anchor` — a third line below the hero H2, slightly smaller font-size, normal weight; (3) `.threat-assessment` section — centered, max-width 720px, single accent-left border or subtle background; (4) `.tier-sovereign` — a column style for the anchor/premium tier with `--color-accent` header background. Ensure all additions work in RTL (`[dir="rtl"]`). Do not modify existing styles.

### Prompt B — Vertical Page Rewrites (per language, per vertical)

> Rewrite `he/separation-divorce.html` with the following changes:
> 1. Add value anchor line after hero H2: "שיחה אחת שדלפה בסכסוך של 5 מיליון ₪ עולה יותר מכל ההתערבות הזו."
> 2. Shorten threat list to 3 items: [specific items listed above].
> 3. Add Certificate mention after scenario paragraph.
> 4. Replace pricing table: 3 columns = מגן אישי ₪15,000 (highlighted) / מגן מורחב ₪22,000 / מגן ריבון ₪95,000. Feature rows use outcome language per mapping table. Add-on rows for additional device (₪5,500), home sweep (from ₪10,000), and priority scheduling (₪1,500–₪6,000).
> 5. Add Threat Assessment section between scenario details and pricing table.
> 6. Rewrite deliverables to outcome language.
> 7. Rename "המסלול ב-24 שעות" → "מה קורה ביום ההגנה".
> 8. Keep footer CTA ("השיגי") — feminine imperative is intentional.
> 9. Add scarcity line after deliverables.
> Do not change the HTML structure (header, footer, scripts). Change content only within `<main>`.

*(Repeat this prompt, adapted per vertical and language, for all 12+ vertical pages.)*

### Prompt C — Homepage Updates

> Update `he/index.html`:
> 1. Rewrite How It Works step descriptions to outcome language (no FIDO2 jargon).
> 2. Add scarcity line after the 3 steps.
> 3. Add one-line outcome description under each Situations link.
> 4. Replace the fifth Why Trust Us bullet with the Certificate mention.
> 5. Add FAQ: "כמה זה עולה?" with answer mentioning ₪15,000 starting price.
> 6. Fix footer CTA to gender-neutral.

### Prompt D — Verification Pass

> Grep all HTML files for: "8–21", "שקיפות", "Transparent pricing", "source.unsplash", "9,000", "3,000" (old prices). Report all remaining instances. Leave "השיגי" untouched — it is intentional feminine targeting. Verify that every vertical page contains: "תעודת הקשחה" (Certificate), "מיפוי איומים" or "Threat Assessment" (paid entry), and the scarcity note.

---

*This plan covers content, layout, naming, and execution sequence. No production files are modified until Phase 1 confirmation is complete.*
