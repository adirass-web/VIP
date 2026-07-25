# D. Website & Landing-Page Architecture  
## Personal Cyber Shield / מגן סייבר אישי

**Document status:** Draft D master-plan section  
**Purpose:** Convert the accepted strategy, offer architecture, and trust system into a practical site architecture and page-by-page specification for immediate sales.  
**Strategic dependencies:**  
- A. Strategy & Positioning  
- B. Offer Architecture & Pricing Specs  
- C. Conversion & Trust System  

**Repo context:** This plan is designed for the current Eleventy/Nunjucks site structure in `adirass-web/VIP`, EN-first. HE/RU are deferred until EN copy is locked.

---

# D0. Workstream Objective

The purpose of this workstream is to define exactly which website pages should exist, what each page must do, how pages route visitors toward paid assessment, and what should be removed, renamed, postponed, or rewritten.

This is not final copy. It is the page architecture and page-spec layer.

The website must:

1. Make the category understandable in seconds.
2. Convert uncertainty into a paid Private Exposure Assessment.
3. Support immediate sales without broad SEO expansion.
4. Avoid technical hero copy.
5. Avoid teaching self-fix checklists.
6. Remove packages and pages that dilute the accepted offer architecture.
7. Make the difference from IT support obvious.
8. Make the process and privacy model clear before contact.
9. Support attorney referrals.
10. Capture post-incident demand with the new page: **They Know Something They Shouldn’t**.

---

# D1. Locked Site Decisions

| Area | Locked Decision |
|---|---|
| Site language | EN-only now; HE primary later after EN copy is locked |
| SEO expansion | Later; do not build full local SEO architecture now |
| Current repo | `adirass-web/VIP` |
| Framework | Eleventy / Nunjucks |
| Current EN source path | `src/en/` |
| Current layout | `src/_includes/layouts/vault.njk` |
| Current nav | Situations, Why Us, Pricing, FAQ, Contact |
| Attorneys link | Currently footer; should become more prominent where relevant |
| Pricing | Publish ₪3,500 assessment and Personal Shield price; all other packages/add-ons as “from” or by arrangement |
| Home Shield / Extended Shield | Remove entirely for now |
| Sovereign Shield | Remove; replace with **Bespoke Private Protection — by arrangement** as a pricing-page line only |
| Post-incident page title | **They Know Something They Shouldn’t** |
| “What’s Included” | Rename / reframe as **What Happens During the Visit** |
| Comparison page | Create **Why This Is Not IT Support** |
| “Why your nephew isn’t the right call?” | Use as a section or subheading, not the main page title |
| Location SEO | Later |
| Travel / wealth / family office | Hidden / postponed |
| Annual Shield Review | Offered only after a full package |
| Primary CTA | Book a Private Exposure Assessment — ₪3,500 |

---

# D2. Current Site Observations

## Current structural observations

The current site already has a usable marketing-site structure:

- Homepage / index.
- Situation page cluster.
- Pricing page.
- Why Us page.
- FAQ page.
- Attorneys page.
- Footer contact via WhatsApp / Signal.
- EN-first build.
- HE/RU deferred.

## Current homepage observations

The current homepage already includes:

- strong dispute framing;
- “Nobody had to hack anything” wedge;
- situation links;
- Trust strip: “In person only · No remote access · No cloud · No logs · No app”;
- a Threat Assessment callout;
- direct WhatsApp/Signal contact flow in layout.

## Current issues to fix

| Issue | Required Change |
|---|---|
| Overuses “doors you didn’t know were open” / “ordinary access” in ways that may sound DIY-fixable | Broaden to “digital exposure,” “what your digital life reveals,” and “they may know something they shouldn’t.” |
| Technical terms appear too high on pricing/process pages | Move technical detail into visit/process or SoW layers. |
| Standards references appear in sales copy | Remove from hero/pricing conversion copy. |
| Personal Shield price currently differs from accepted plan | Update to accepted **₪14,000** or show **from ₪14,000** according to final pricing choice. |
| Extended/Home package exists | Remove entirely for now. |
| Sovereign Shield exists | Remove as public package; replace with one line: **Bespoke Private Protection — by arrangement**. |
| Certificate is over-positioned for attorney/legal file | Reframe as private dated record + attorney-friendly summary. |
| Threat Assessment described as 3 hours in current site | Align with accepted Private Exposure Assessment spec. |
| “What’s Included” / pricing process reads technical | Reframe as “What Happens During the Visit.” |
| FAQ is too small for anxious buyer objections | Expand using C workstream. |

---

# D3. Target Sitemap — Immediate Sales Version

## Core public pages

| Priority | Page | URL Recommendation | Role |
|---:|---|---|---|
| 1 | Homepage | `/en/` | Primary positioning and routing page |
| 1 | Private Exposure Assessment | `/en/private-exposure-assessment.html` | Primary paid conversion page |
| 1 | Pricing | `/en/pricing.html` | Price clarity, scope filtering, package routing |
| 1 | What Happens During the Visit | `/en/what-happens-during-the-visit.html` | Process trust |
| 1 | What We Never Do | `/en/what-we-never-do.html` | Boundary trust |
| 1 | Why Us | `/en/why-us.html` | Founder credibility and premium trust |
| 1 | FAQ | `/en/faq.html` | Anxious buyer objection handling |
| 1 | Attorneys | `/en/attorneys.html` | Referral trust channel |
| 1 | Separation & Divorce | `/en/separation-divorce.html` | Primary adversarial ICP |
| 1 | Business Dispute | `/en/business-dispute.html` | Primary high-value ICP |
| 1 | They Know Something They Shouldn’t | `/en/they-know-something.html` | Post-incident demand-capture page |
| 2 | Inheritance Conflict | `/en/inheritance-conflict.html` or keep `/en/inheritance-clash.html` | Secondary adversarial ICP |
| 2 | Leaving a Controlling Relationship | `/en/leaving-controlling-relationship.html` | Safety-sensitive public page |
| 2 | Why This Is Not IT Support | `/en/not-it-support.html` | Differentiation / wrong-fit filter |
| 3 | Commercial Spying | `/en/commercial-spying.html` | Keep only if framed as business-dispute subcase |
| 3 | Private Investigator Defence | `/en/private-investigator.html` | Keep only if de-sensationalized |

## Pages to remove, hide, or postpone

| Page / Product | Action | Reason |
|---|---|---|
| Home Shield / Extended Shield | Remove | No longer accepted offer |
| Sovereign Shield public package | Remove | Brand risk; replaced with Bespoke line |
| Travel | Postpone | Category B later |
| Family-office / wealth event | Hide/postpone | Later product line |
| Broad household/family digital safety | Postpone | Risks commodity positioning |
| Full local SEO city pages | Later | User deferred SEO |
| Technical standards page | Do not build as public conversion page | Can exist in SoW/internal proof, not public sales copy |

---

# D4. Navigation Architecture

## Current navigation issue

The current main nav is simple and generally right, but the trust/conversion system needs stronger access to process and assessment.

## Recommended main nav

| Nav Item | Destination | Reason |
|---|---|---|
| Situations | `/en/#situations` | Keeps current structure |
| Assessment | `/en/private-exposure-assessment.html` | Primary CTA deserves nav visibility |
| How It Works | `/en/what-happens-during-the-visit.html` | Process trust |
| Pricing | `/en/pricing.html` | Price transparency |
| Why Us | `/en/why-us.html` | Credibility |
| FAQ | `/en/faq.html` | Objections |
| Contact button | `#contact` | Direct WhatsApp/Signal |

## Footer links

| Footer Group | Links |
|---|---|
| Explore | Situations, Assessment, How It Works, Pricing, Why Us, FAQ |
| For Professionals | Attorneys |
| Boundaries | What We Never Do, Why This Is Not IT Support |
| Legal | Terms, Privacy |
| Contact | WhatsApp, Signal |

## Optional nav simplification

If nav gets crowded:

- Keep main nav: Situations / Assessment / How It Works / Pricing / Why Us / FAQ / Contact.
- Put Attorneys, What We Never Do, Not IT Support in footer and contextual links.

---

# D5. CTA Architecture

## Primary CTA

> **Book a Private Exposure Assessment — ₪3,500**

## Secondary CTA

> **See pricing**

## Tertiary CTA

> **How the visit works**

## CTA rules by page

| Page Type | Primary CTA | Secondary CTA |
|---|---|---|
| Homepage | Book Private Exposure Assessment | See pricing |
| Situation pages | Book Private Exposure Assessment | How the visit works |
| Post-incident page | Book urgent assessment | What happens during the visit |
| Pricing | Book Private Exposure Assessment | Contact via WhatsApp/Signal |
| What Happens page | Book Private Exposure Assessment | Pricing |
| What We Never Do | Book Private Exposure Assessment | FAQ |
| Why Us | Book Private Exposure Assessment | Attorneys / Pricing |
| Attorneys | Discuss a client privately | Service boundaries |
| FAQ | Book Private Exposure Assessment | Contact |
| Not IT Support | Book Private Exposure Assessment | Pricing |

## CTA copy rules

Avoid:

- “Speak with us” as the only CTA.
- “Get protected” as the main CTA.
- “Secure everything.”
- “Start hardening.”

Use:

- “Book a Private Exposure Assessment.”
- “Start with a private assessment.”
- “Ask whether this fits your situation.”
- “If something already surfaced, start here.”

---

# D6. Page Spec — Homepage

## Page role

The homepage must make the business clear and route people to the right situation or assessment.

## Required page sections

1. Hero.
2. Trust strip.
3. Core wedge.
4. Situation routing.
5. Private Exposure Assessment.
6. How it works summary.
7. Why Dr. LT.
8. Worth it / not worth it.
9. What we never do.
10. Pricing teaser.
11. FAQ teaser.
12. Contact.

## Recommended hero structure

### Kicker

> Private digital safety reset

### H1

> Private digital safety reset before your digital life becomes leverage.

### Subhead

> If you are entering a divorce, separation, business dispute, inheritance conflict, or a situation where someone appears to know something they shouldn’t, Personal Cyber Shield helps you understand and reduce personal digital exposure — in person, with you present.

### Trust strip

> In person · With you present · No remote access · No cloud processing · No retained logs

### CTAs

- Book a Private Exposure Assessment — ₪3,500.
- See pricing.

## Homepage issue correction

Current homepage language should be adjusted where it implies:

- one-day closure for everything;
- old doors only;
- attorney/legal-file proof;
- government-standard methodology in public sales copy.

## Homepage routing logic

| Visitor thought | Route |
|---|---|
| “I’m entering divorce/separation.” | Separation & Divorce |
| “My business partner may know/access things.” | Business Dispute |
| “They know something they shouldn’t.” | They Know Something They Shouldn’t |
| “I’m in an inheritance/family conflict.” | Inheritance Conflict |
| “I’m leaving a controlling relationship.” | Safety-specific page |
| “I don’t know where I fit.” | Private Exposure Assessment |
| “I’m a lawyer.” | Attorneys |

---

# D7. Page Spec — Private Exposure Assessment

## Page role

This is the primary sales page.

It must sell the ₪3,500 paid diagnostic as the correct first step.

## URL

`/en/private-exposure-assessment.html`

## Page title

**Private Exposure Assessment**

## Hero

> **When you know something may be exposed, but you do not know where to look.**

## Required sections

1. Who this is for.
2. When to book it.
3. What happens.
4. What you leave with.
5. What it costs.
6. Credit toward full package.
7. What it is not.
8. Urgent handling.
9. Contact protocol.

## Required pricing block

> **Private Exposure Assessment — ₪3,500**  
> Credited in full toward a full package within 14 days.

## Required “this is for you if” section

Use bullets:

- You are entering a divorce, separation, inheritance conflict, or business dispute.
- Someone appears to know, assert, imply, or threaten something private.
- You suspect phone, account, app, cloud, car, or device exposure.
- You changed passwords but still do not trust the situation.
- Your attorney told you to be careful, but you do not know what that means digitally.

## Required “not for” section

- Routine IT support.
- Cheap device cleanup.
- Investigation of another person.
- Forensic reconstruction.
- Legal evidence collection.
- Remote troubleshooting.

## CTA

> Book the Private Exposure Assessment.

---

# D8. Page Spec — Pricing

## Page role

The pricing page must be clear, premium, and filtering. It must not display the old four-tier structure.

## Required changes from current pricing

Remove:

- Extended Shield / Home Shield.
- Sovereign Shield card.
- “Annual Threat Monitoring.”
- “Annual Monitoring.”
- fixed exact add-on prices if not final.
- standards-heavy process language.
- “Certificate for your attorney and legal file” as a broad claim.

Keep / add:

- Private Exposure Assessment — ₪3,500.
- Personal Shield price.
- “from” pricing for other packages/add-ons.
- Bespoke Private Protection line only.
- Annual Shield Review only after full package.
- Emergency surcharge note.
- Weekend/holiday surcharge note.
- Worth it / not worth it.
- Certificate safe language.

## Required pricing table

| Offer | Public Display | Notes |
|---|---:|---|
| Private Exposure Assessment | ₪3,500 | Credited toward full package within 14 days |
| Personal Shield | ₪14,000 or From ₪14,000 | One person, one day, one primary phone, every account identified together |
| Inner Circle Shield | From ₪38,000 | Scoped after assessment |
| Bespoke Private Protection | By arrangement | Pricing-page line only |
| Additional device | From ₪9,000 | Add-on |
| Additional person | From ₪12,000 | Add-on |
| Home network/router | From ₪5,000 | Add-on only |
| Vehicle access review | From ₪5,000 | Add-on |
| Urgent handling | Fixed surcharge | Amount per B |
| Emergency within 4 hours, Central Israel | Fixed surcharge | Amount per B |
| Weekend/holiday | Extra fixed surcharge | Amount per B |
| Annual Shield Review | From ₪7,000/year | Only after full package |
| Priority Retainer | From ₪14,000/year | Only after full package, if accepted |

## Personal Shield display decision

The user requested: keep the Personal Shield price.

Therefore display:

> **Personal Shield — ₪14,000**  
> One person. One day. One primary phone. Every account identified together during the engagement.

Other full packages and add-ons use “from.”

## Required warning

> “Every account” means every account identified together during the assessment or engagement as relevant to your personal digital exposure.

---

# D9. Page Spec — What Happens During the Visit

## Current action

Rename / replace “What’s Included” with:

> **What Happens During the Visit**

## URL

`/en/what-happens-during-the-visit.html`

## Page role

Reduce anxiety and explain the premium in-person experience.

## Required sections

1. Before the visit.
2. First conversation.
3. Exposure map.
4. In-person work, client present.
5. What changes.
6. What happens if something sensitive appears.
7. What you leave with.
8. What this is not.
9. CTA.

## Copy rule

Technical detail belongs here more than on homepage, but still in plain English.

Do not lead with:

- IoC scan;
- OS hardening;
- standards;
- baseline frameworks;
- attack surface.

Use:

- “review what your devices and accounts may reveal”;
- “close or reduce exposure where appropriate”;
- “explain every material change”;
- “you remain present.”

---

# D10. Page Spec — What We Never Do

## URL

`/en/what-we-never-do.html`

## Page role

Boundary trust and lead filtering.

## Required sections

1. No remote access.
2. No cloud processing.
3. No retained logs.
4. No investigation of the other side.
5. No offensive operations.
6. No forensic reconstruction.
7. No legal advice.
8. No routine IT support.
9. No guarantee that no exposure remains.
10. Safety-sensitive caveat.

## CTA

> If your situation fits these boundaries, start with a Private Exposure Assessment.

---

# D11. Page Spec — Why Us

## Page role

Founder credibility.

## Current issue

Founder credibility is currently on homepage, but the strategy says hero should be client-centered and Dr. LT authority should be strongest on Why Us / Method / Attorney pages.

## Required sections

1. Why expert judgment matters.
2. Why this is not checklist work.
3. Dr. LT credibility.
4. Why in-person matters.
5. Why no remote/no cloud/no logs.
6. Why this is not IT support.
7. Why this is not investigation.
8. CTA.

## Required proof inventory

- short professional bio;
- professional photo;
- relevant credentials;
- public roles / publications / talks where available;
- no unsupported “world-leading” claim unless evidenced.

---

# D12. Page Spec — Attorneys

## Page role

Enable medium-depth attorney referral BD.

## Required sections

1. When to refer a client.
2. What the service does.
3. What it does not do.
4. How the assessment works.
5. What the client receives.
6. Certificate / private record language.
7. Controlling-relationship safety note.
8. Contact protocol.

## Required safe language

> This is not forensic reconstruction, evidence collection, legal advice, or investigation of the other side. It is a private in-person digital exposure assessment and safety reset for the client’s own digital environment.

## CTA

> Discuss a client privately.

---

# D13. Page Spec — FAQ

## Page role

Answer anxious buyer objections and reduce wrong-fit inquiries.

## Required FAQ clusters

1. Privacy and process.
2. Passwords and private data.
3. Whether changes can alert the other side.
4. What to send / not send in first contact.
5. Pricing and assessment credit.
6. Urgent/emergency cases.
7. What is included / excluded.
8. Certificate/private record.
9. Attorneys.
10. Controlling relationship safety.
11. Why this is not IT support.
12. Why not DIY / nephew / tech-savvy friend.

## Required FAQ question

> Why not ask a tech-savvy friend or nephew?

Answer logic:

- This is not about knowing where the settings are.
- It is about judgment under pressure, privacy, discretion, scope, and avoiding partial or mistimed fixes.
- A relative may create more exposure, conflict, or discover sensitive facts.
- In a serious dispute, this should not become family gossip or informal help.

---

# D14. Page Spec — They Know Something They Shouldn’t

## URL

`/en/they-know-something.html`

## Page role

Post-incident demand capture.

This is the page for the buyer whose felt problem is:

> “Shit hit the fan. The other side knows or claims something that should have stayed private. Maybe they hacked me.”

## Hero

> **They know something they shouldn’t. Now what?**

## Subhead

> If someone appears to know, assert, imply, or threaten something that should have stayed private, do not guess your way through one app or one password. Treat it as a personal digital exposure problem until you understand what may be open.

## Required sections

1. This page is for you if...
2. Do not panic-fix one thing.
3. Why “maybe they hacked me” is not enough.
4. What a Private Exposure Assessment does.
5. What it does not do.
6. Urgent handling.
7. CTA.

## Required “this page is for you if” bullets

- They quoted, showed, or implied private information.
- They appear to know where you were.
- They know about messages, files, photos, accounts, or plans.
- You received suspicious login or access alerts.
- Your phone or accounts feel untrustworthy.
- You already changed passwords but still feel exposed.
- You do not know whether this was hacking, access, settings, apps, or online trails.

## CTA

> Book a Private Exposure Assessment — ₪3,500.

---

# D15. Page Spec — Separation & Divorce

## Page role

Primary adversarial ICP page.

## Core message

> Before divorce or separation escalates, get a private in-person review of what your digital life may expose.

## Must avoid

- giving DIY checklist above fold;
- promising that the other side will not notice;
- implying legal evidence;
- saying everything can be fixed in one day without caveat.

## Required sections

1. Situation fear.
2. Digital exposure can become leverage.
3. Do not guess or panic-change.
4. What the assessment does.
5. What full Personal Shield does.
6. Attorney-friendly summary language.
7. CTA.

## CTA

> Start with a Private Exposure Assessment.

---

# D16. Page Spec — Business Dispute

## Page role

High-value ICP page.

## Core message

> When business trust breaks, personal digital exposure can become commercial leverage.

## Required sections

1. Founder/partner dispute scenario.
2. What can become leverage.
3. Why this is not corporate cybersecurity.
4. Private Exposure Assessment.
5. Bespoke possibility.
6. Attorney/advisor coordination.
7. CTA.

---

# D17. Page Spec — Inheritance Conflict

## Page role

Secondary adversarial ICP.

## Naming issue

Current filename appears to use “inheritance-clash.” For public copy, prefer:

> **Inheritance Conflict**

The URL can remain for now to avoid redirects if needed, but page title should be softened.

## Core message

> Family access is still access when trust breaks.

## Required sections

1. Family conflict situation.
2. Shared access and digital trails can become leverage.
3. Assessment first.
4. Scope boundaries.
5. Attorney-friendly summary.
6. CTA.

---

# D18. Page Spec — Leaving a Controlling Relationship

## Page role

Safety-sensitive public page.

## Required positioning

This page must be fundamentally different from the other situation pages.

## Mandatory rules

- No hard sales pressure.
- No one-day claim.
- No “they won’t notice” reassurance.
- No abrupt access-closure promise.
- No generic CTA that pressures immediate action.
- Safety planning comes first.
- Timing matters.
- Attorney/safety-plan coordination may be needed.

## Core message

> Clean ground first. Close access only when it is safe.

## Required CTA

Soft CTA:

> If it is safe to do so, contact privately for a safety-aware conversation.

## Required external support note

Retain or improve emergency/support-resource references where appropriate.

---

# D19. Page Spec — Why This Is Not IT Support

## Page title decision

Use:

> **Why This Is Not IT Support**

Do not use as main title:

> “Why your nephew isn’t the right call?”

Reason: it is memorable, but too colloquial for a premium safety-sensitive service. It can sound dismissive or unserious.

Use it as a section:

> **Why your tech-savvy nephew is not the right call**

## URL

`/en/not-it-support.html`

## Page role

Filter wrong-fit buyers and justify premium pricing.

## Hero

> **This is not computer help. It is a private digital safety reset for high-stakes situations.**

## Required comparison table

| Alternative | Why it may seem enough | Why it is not the same |
|---|---|---|
| Tech-savvy relative | Trusted, free, fast | Not private enough; may miss exposure context; creates family knowledge |
| IT support | Good at fixing devices | Not designed for adversarial personal exposure |
| Apple/Google/Microsoft support | Familiar vendor | Product support, not personal dispute context |
| Password manager | Useful tool | Tool setup is not exposure diagnosis |
| Antivirus | Familiar category | Does not review personal digital environment |
| Private investigator | Related dispute context | Investigates others; this service reduces your own exposure |
| DIY checklist | Cheap | Partial, mistimed, and easy to misread |

## Required section

### Why your nephew is not the right call

Talking points:

- The issue is not whether someone knows technology.
- The issue is privacy, judgment, discretion, and context.
- A relative may discover things they should not know.
- Informal help can create family conflict or gossip.
- Partial fixes can create false confidence.
- In safety-sensitive cases, the wrong change at the wrong time can escalate risk.

## CTA

> Start with a Private Exposure Assessment.

---

# D20. Page Spec — Commercial Spying

## Recommendation

Keep only if it supports the Business Dispute ICP. Do not let it become an enterprise cybersecurity page.

## Page role

Specific subcase of business dispute.

## Required repositioning

Avoid:

- corporate espionage framing;
- enterprise cybersecurity language;
- technical spycraft;
- broad corporate service promises.

Use:

> When a commercial dispute becomes personal, your own devices, accounts, communications, and online trails can become leverage.

## CTA

Private Exposure Assessment.

---

# D21. Page Spec — Private Investigator Defence

## Recommendation

Keep but de-sensationalize.

## Page role

Specific subcase of adversarial exposure.

## Naming concern

“Private Investigator Defence” is high-intent but can sound combative or paranoid. Keep if it draws the right buyers, but write soberly.

## Required positioning

Do not say:

- “Close every access point an investigator uses.”
- “They won’t be able to track you.”
- “We defend against PIs.”

Use:

> If you believe an investigator or opposing party may be using ordinary digital exposure against you, start with a private assessment of what your own digital environment reveals.

## CTA

Private Exposure Assessment.

---

# D22. Internal Linking Plan

## Homepage routes to

- Private Exposure Assessment.
- Pricing.
- Situation pages.
- What Happens During the Visit.
- Why Us.
- What We Never Do.
- Attorneys.
- FAQ.

## Situation pages route to

- Private Exposure Assessment.
- What Happens During the Visit.
- Pricing.
- FAQ.
- Attorneys where relevant.

## Pricing routes to

- Private Exposure Assessment.
- What Happens During the Visit.
- What We Never Do.
- FAQ.
- Contact.

## What Happens routes to

- Private Exposure Assessment.
- Pricing.
- What We Never Do.
- FAQ.

## Attorneys routes to

- Private Exposure Assessment.
- What We Never Do.
- Sample Private Record / Certificate section.
- Contact.

## Not IT Support routes to

- Private Exposure Assessment.
- Pricing.
- FAQ.

---

# D23. Page Priority Build Order

## Phase D1 — Immediate conversion-critical

Build / revise first:

1. Homepage.
2. Pricing.
3. Private Exposure Assessment.
4. What Happens During the Visit.
5. What We Never Do.
6. FAQ.
7. Why Us.
8. They Know Something They Shouldn’t.

## Phase D2 — Situation pages

Revise:

1. Separation & Divorce.
2. Business Dispute.
3. Inheritance Conflict.
4. Leaving a Controlling Relationship.
5. Commercial Spying.
6. Private Investigator Defence.

## Phase D3 — Referral and filtering

Build / revise:

1. Attorneys.
2. Why This Is Not IT Support.
3. Sample private record section/page if not embedded elsewhere.

## Phase D4 — Deferred

Postpone:

1. Local SEO pages.
2. Travel page.
3. Family-office / wealth event page.
4. Broad household/family digital safety pages.
5. HE/RU.
6. Any technical standards page.

---

# D24. File / Template Implementation Notes

## Likely source paths

| Page | Likely File |
|---|---|
| Homepage | `src/en/index.njk` |
| Pricing | `src/en/pricing.njk` |
| Why Us | `src/en/why-us.njk` |
| FAQ | `src/en/faq.njk` |
| Attorneys | `src/en/attorneys.njk` |
| Separation & Divorce | `src/en/separation-divorce.njk` |
| Business Dispute | `src/en/business-dispute.njk` |
| Inheritance | `src/en/inheritance-clash.njk` or rename later |
| Commercial Spying | `src/en/commercial-spying.njk` |
| Private Investigator | `src/en/private-investigator.njk` |
| Controlling Relationship | `src/en/leaving-controlling-relationship.njk` |
| Private Exposure Assessment | new `src/en/private-exposure-assessment.njk` |
| What Happens During the Visit | new or renamed `src/en/what-happens-during-the-visit.njk` |
| What We Never Do | new `src/en/what-we-never-do.njk` |
| They Know Something | new `src/en/they-know-something.njk` |
| Not IT Support | new `src/en/not-it-support.njk` |

## Layout considerations

Use the existing `vault.njk` layout unless a new landing-page-specific layout is needed later.

## Navigation update

Update `src/_includes/layouts/vault.njk` nav to add:

- Assessment.
- How It Works.

Potential nav:

```html
Situations | Assessment | How It Works | Pricing | Why Us | FAQ | Contact
```

## Footer update

Add:

- Attorneys.
- What We Never Do.
- Why This Is Not IT Support.
- Private Exposure Assessment.

---

# D25. Page-Level Acceptance Criteria

| Page | Acceptance Criteria |
|---|---|
| Homepage | Category clear in 5 seconds; primary CTA visible; no technical hero language |
| Pricing | Assessment + Personal Shield price clear; old package structure removed |
| Assessment | ₪3,500 offer fully sellable as standalone diagnostic |
| What Happens | Buyer understands process before contact |
| What We Never Do | Boundaries clear; wrong-fit leads filtered |
| Why Us | Dr. LT credibility supports trust without dominating homepage |
| FAQ | Handles anxious buyer objections |
| Attorneys | Safe referral language; no forensic/legal overclaim |
| They Know Something | Captures post-incident panic without promising forensics |
| Divorce | Strong primary ICP page |
| Business Dispute | High-value ICP page; not enterprise cyber |
| Controlling Relationship | Safety-first; no hard promises |
| Not IT Support | Differentiates from nephew/IT/DIY without sounding dismissive |

---

# D26. KPI Dashboard for Site Architecture

| KPI | Definition | Page Influence |
|---|---|---|
| Assessment CTA clicks | Clicks to WhatsApp/Signal from assessment CTA | Homepage, Assessment, Pricing, Situation pages |
| Qualified inquiry rate | Relevant inquiries / total inquiries | All pages |
| Wrong-fit inquiry rate | IT support / investigation / cheap-help requests | Not IT Support, What We Never Do, Pricing |
| Pricing-page conversion | Pricing visitors who contact | Pricing |
| Situation-page conversion | Situation-page visitors who contact | Situation pages |
| Post-incident conversion | They Know Something visitors who contact | Post-incident page |
| FAQ deflection | Repeated questions decline | FAQ |
| Attorney referrals | Attorney page contacts | Attorneys |
| Emergency inquiries | Urgent requests | Assessment / post-incident / pricing |
| Package conversion | Assessment → Personal/Inner/Bespoke | Pricing + Assessment + Trust pages |

---

# D27. Final D Position

The site should not be a general cybersecurity website.

It should be a high-trust decision path:

1. **I recognize my situation.**
2. **I understand why guessing is dangerous.**
3. **I see that this is not IT support or investigation.**
4. **I trust the process because it is in person, with me present, with no remote/cloud/log-retention model.**
5. **I start with a Private Exposure Assessment.**

The core architecture is:

> Homepage → Situation / Post-Incident Page → Private Exposure Assessment → Pricing / Trust Pages → Contact

And the core offer path is:

> Assessment → Personal Shield → Add-ons / Inner Circle → Annual Shield Review

---

# D28. Immediate Next Workstream

After D, proceed to:

## E. Attorney / Referral BD System

Because the website architecture now defines the public promises that the attorney-facing kit must match.

E should produce:

- attorney one-pager;
- referral trigger list;
- attorney-safe service description;
- outreach sequence;
- meeting script;
- objection handling;
- private referral workflow;
- KPI tracker.
