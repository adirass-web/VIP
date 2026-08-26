# Toza Project Decision Register

Status: **Discovery in progress**  
Branch: `design/visual-upgrade`  
Owner: Dr. Lior Tabansky  
Last updated: 2026-08-26

This file is the single source of truth for all durable Toza project decisions: business, market, offer, pricing, content, language, privacy, repository workflow, deployment, design, imagery, implementation, and QA. Future changes must trace back to this register. Update this file when a decision changes; do not maintain competing decision records elsewhere.

## Status key

- **LOCKED** — explicitly decided.
- **INHERITED** — established by the production repo or prior approved work.
- **OPEN** — unresolved; implementation must wait where it depends on this choice.
- **RESEARCH** — requires external reference research before selection.

## 0. Project governance, publishing, and infrastructure

### 0.1 Source of truth — LOCKED

- Repository: `adirass-web/VIP`.
- Production branch: `main`.
- Active visual-upgrade branch: `design/visual-upgrade`.
- This file is the only durable project decision register.
- Working notes may exist temporarily, but they must not become competing policy documents.
- The English production source remains the content source of truth for mirrored language work unless a language-specific decision is explicitly recorded here.

### 0.2 Git and approval workflow — LOCKED

- Never commit directly to `main`.
- Use a short-lived feature branch and a pull request into `main`.
- Repository verification runs automatically on feature-branch pushes and when a PR is opened, reopened, or marked ready.
- Manual `workflow_dispatch` is intentionally disabled.
- The user approves content/design; the working agent may then mark the PR ready and squash-merge it.
- Roll back by revert or a corrective hotfix, never by rewriting published history.

### 0.3 Build and deployment — LOCKED

- Stack: Eleventy/Nunjucks.
- Build output: `_site`.
- Production host: `https://toza-site.pages.dev`.
- Cloudflare Pages project: `toza-site`.
- Every merge/push to `main` reruns the complete verification suite and deploys automatically.
- The prior `magenvip` project is not a deployment target for Toza.
- There is no custom canonical domain yet.

### 0.4 Language publication — LOCKED

- English and Hebrew production trees are live.
- Russian remains unpublished and redirected until a complete approved mirror is ready.
- English and Hebrew changes require structural, link, content, accessibility, and visual parity.
- Hebrew must be genuinely RTL; it is not a mechanically mirrored afterthought.

## 0A. Brand, naming, and voice

### 0A.1 Brand naming — LOCKED

- Brand name: **Toza**.
- Use Latin-script `Toza` in Hebrew body copy and lockups; do not transliterate it.
- Do not use transitional “formerly Magen” language.
- English product names remain visible in Hebrew.
- Lowercase `toza` is the governing wordmark expression.
- Do not introduce `TOZA`, shields, monograms, or security clichés as the identity.

### 0A.2 Working descriptor — LOCKED

> Personal digital protection for your close circle.

The descriptor may be refined only through an explicit recorded decision. It must not drift into enterprise cybersecurity, routine IT, counter-espionage, domestic-abuse support, wealth management, family-office, or generic privacy positioning.

### 0A.3 Voice — LOCKED

- Personal, discreet, controlled, authoritative, warm, precise, fast, restrained, and reliable.
- Prefer plain, short, concrete statements.
- Use calm confidence; do not manufacture fear.
- Avoid military, surveillance, hacker, luxury, advocacy, or social-service language.
- The founder narrative may use a warm first-person voice.
- Avoid sweeping claims about “most crises,” and avoid the word `bespoke` as promotional decoration; retain **Bespoke Private Protection** only as the approved offer name.

## 0B. Offer and pricing architecture

### 0B.1 Entry offer — LOCKED

- **Private Exposure Assessment — ₪3,500**.
- Paid before scheduling.
- Credited in full toward any full package begun within 14 days.
- A private, in-person diagnostic and first phase of responsible intervention, not a sales call.
- Delivers a brief plain-English summary of what was reviewed, what appears urgent, and what should happen next.
- An attorney-friendly summary may be provided only with client authorization.

### 0B.2 Full engagements — LOCKED

- **Personal Shield — ₪14,000**: one person, one day, one primary phone, and every relevant account identified together.
- **Inner Circle Shield — from ₪38,000**: multiple people on the client's side, coordinated by scope.
- **Bespoke Private Protection — by arrangement**: severe, unusual, or highly complex situations.
- “Every account” means every relevant account identified together; it is not a promise to find accounts the client does not surface.

### 0B.3 Add-ons and continuity — LOCKED

- Additional device: from ₪9,000.
- Additional person: from ₪12,000.
- Home network and router: from ₪5,000.
- Vehicle access review: from ₪5,000.
- Annual Shield Review: from ₪7,000 per year, only after a full package.
- Priority Retainer: from ₪14,000 per year.
- Any scope expansion requires client approval before work begins.
- Home/Extended Shield and Sovereign Shield are retired and must not return.

### 0B.4 Urgent and geographic pricing — LOCKED

- Emergency handling within four hours in Central Israel: +₪4,200.
- Urgent weekend or holiday handling: +₪5,800 all-in; it replaces rather than adds to the four-hour surcharge.
- Outside Central Israel: by arrangement.

## 0C. Delivery, privacy, and boundaries

### 0C.1 Delivery promises — LOCKED

- In person.
- With the client present.
- The client controls their credentials.
- Explain meaningful changes in plain language before making them.
- No remote control, cloud processing, retained logs, or hidden work.
- Full-package clients receive a private dated record of work performed.

### 0C.2 Initial contact — LOCKED

- WhatsApp or Signal only.
- Ask for a short, neutral first message.
- Do not request passwords, screenshots, legal documents, intimate details, recovery codes, or detailed allegations in the first message.
- No public intake form, CRM, chatbot, or third-party contact workflow at this stage.

### 0C.3 Scope exclusions — LOCKED

Toza is not:

- Routine IT support or remote troubleshooting.
- Enterprise cybersecurity.
- Investigation of another person.
- Forensic reconstruction.
- Evidence collection.
- Legal advice, legal opinion, or certification.
- A guarantee that no exposure remains.
- A domestic-abuse, advocacy, safety-planning, or social-service practice.

Sensitive timing may require pausing or sequencing changes, but this must not reposition the business around domestic abuse or emergency support.

## 0D. Content architecture and language rules

### 0D.1 Core site logic — LOCKED

- High-intent situation pages create problem recognition.
- Home connects recognizable situations to the hidden digital layer, then presents active professional intervention.
- The Private Exposure Assessment is the first commercial step.
- Pricing is explicit.
- Boundaries are prominent.
- Attorneys have a dedicated referral path.
- “Why This Is Not IT Support” remains the exact English page title.

### 0D.2 Why Toza — LOCKED

- `/en/why-us.html` and `/he/why-us.html` are local bilingual pages.
- Do not restore the removed English 301 redirect.
- The professional website remains a clearly labelled, explicit external link to `https://cyberdrtabansky.com`.
- The page uses a warm, empathetic first-person founder note and the approved portrait.
- Core founder logic: more than twenty years in cybersecurity; ordinary accounts, devices, permissions, and digital trails become consequential in crises; Toza provides direct, discreet, precise work before or during a crisis to restore clarity and control.

### 0D.3 Hebrew — LOCKED

- Home addresses the visitor in feminine singular.
- Other pages/sections may use deliberate page-level or section-level gender choices.
- Do not use `את/ה`, slash-heavy forms, or duplicate male/female landing pages.
- Preserve Latin-script `Toza` and English product names with correct bidi handling.
- Hebrew copy must sound native and intentional, not translated mechanically.

### 0D.4 Content exclusions — LOCKED

- Do not lead with technical detail or self-fix checklists.
- Do not build broad SEO/local-SEO filler.
- Do not make explicit domestic-abuse or safety-service framing a governing content theme.
- Do not frame Toza as investigation, hacking, surveillance, cyberwar, or counter-espionage.
- Do not hide material scope limits or pricing qualifications.


## 1. Business and market baseline

### 1.1 Service model — INHERITED

- Toza is a founder-led, one-person premium practice.
- It provides private, in-person digital-exposure reduction and protection.
- The client works directly with Dr. Lior Tabansky from assessment through intervention.
- No junior staff and no handoffs.
- The client remains present while work is performed on the client's own digital environment.
- No remote access, cloud processing, retained logs, app, CRM intake form, or third-party handling.
- Initial contact is through WhatsApp or Signal.
- Toza does not investigate other people, reconstruct the past, collect evidence, provide legal advice, or guarantee that no exposure remains.

### 1.2 Primary client — LOCKED

- The Home page is designed first for the concerned private client.
- The typical visitor is concerned but still deliberate, not panicked.
- Attorneys and other trusted advisers remain important referral and credibility audiences, but Home does not primarily speak to them.

### 1.3 Primary situations — LOCKED

The first screen and primary narrative should establish relevance through:

1. Separation or divorce.
2. Business or founder dispute.

Inheritance conflict and “They Know Something They Shouldn't” remain secondary situation paths.

### 1.4 Geography — INHERITED

- Core delivery geography: Central Israel.
- Urgent, weekend/holiday, and outside-Central-Israel engagements are handled separately or by arrangement.
- The site must not drift into generic global, travel, wealth-management, or family-office positioning.

### 1.5 Commercial path — INHERITED

- Main paid entry point: **Private Exposure Assessment — ₪3,500**.
- The assessment fee is credited in full toward a full package within 14 days.
- Full engagements include Personal Shield, Inner Circle Shield, and Bespoke Private Protection by arrangement.
- The assessment is the responsible beginning of intervention; it is not the ultimate value proposition.

### 1.6 GTM logic — LOCKED / INHERITED

- Prospects are generally unaware that they have a defined problem or that a professional solution exists.
- The site must create and explain the category before it can prove provider superiority.
- Category recognition begins with familiar high-stakes life situations, not cybersecurity terminology.
- The paid assessment is the conversion path.
- Founder authority and attorney referrals provide high-trust validation.

## 2. Strategic narrative

### 2.1 Five-second emotional result — LOCKED

The qualified visitor should feel:

> I found the right senior expert.

Supporting feelings such as safety, calm, seriousness, and exclusivity must not displace this primary recognition.

### 2.2 Founder presence — LOCKED

- Home uses a portrait beside the proposition in the first screen.
- Toza remains the brand.
- Dr. Lior Tabansky's visible presence proves direct senior attention and personal accountability.
- The portrait's first signal is **calm, direct authority**.
- Avoid theatrical shadows, staged cybersecurity atmosphere, broad sales smiles, or conspicuous status cues.

### 2.3 Problem discovery — LOCKED

Primary Home hero headline:

> Your digital life reveals more than you realize.

Underlying cognitive realization:

> Your ordinary digital life reveals more than you realize.

Situational consequence:

> When a relationship or business partnership becomes adversarial, that exposure can become leverage.

The design should reveal an overlooked layer within ordinary life. It must not depict attacks, hackers, locks, shields, code, surveillance interfaces, or panic.

### 2.4 Action promise — LOCKED

Home's action promise:

> Find it and close what can be closed.

Interpretation:

- Toza actively identifies and reduces exposure.
- It performs specific protective interventions and hardening.
- It is not merely consulting or diagnostic advice.
- The wording remains bounded and does not promise perfect security.

### 2.5 Service hierarchy — LOCKED

- **Main promise:** solve or materially reduce the exposure.
- **Method:** reveal, intervene, confirm.
- **First commercial step:** Private Exposure Assessment.
- **Urgent variant:** rapid expert handling where timing genuinely matters.
- Primary CTA commitment: **start a private assessment conversation**.
- The price may remain visible, but the first interaction does not demand immediate online payment or sensitive disclosure.

## 3. Method and category legitimacy

### 3.1 Primary legitimacy mechanism — LOCKED

The unfamiliar service category becomes credible through a clearly structured assessment and intervention method.

Credentials, privacy architecture, deliverables, and experience support the method but do not substitute for it.

### 3.2 Three-stage method — LOCKED IN PRINCIPLE

1. **Reveal** — find the accounts, devices, permissions, services, and access paths that matter.
2. **Intervene** — close access, change configurations, harden the environment, and make situation-specific protective changes.
3. **Confirm** — verify what changed, identify what remains, and provide a clear record and next steps.

The final public labels remain open to refinement. The method must make active intervention unmistakable and must not read as consulting only.

## 4. Desired visual experience

### 4.1 Page archetype — LOCKED

The scroll should feel like:

> A refined private advisory dossier.

Implications:

- Selective, composed, evidentiary sequencing.
- Editorial intelligence without becoming a magazine feature.
- Premium restraint without luxury clichés.
- No SaaS-dashboard aesthetic.
- No generic cybersecurity-vendor aesthetic.
- No law-firm impersonation.

### 4.2 Existing brand DNA — INHERITED, SUBJECT TO RESEARCH VALIDATION

- Lowercase `toza`.
- Editorial serif typography.
- Ink and bone base palette.
- One controlled vermilion accent.
- Hairlines, whitespace, and primarily one-axis layouts.
- No shields, icons as identity, gradients, glossy effects, decorative luxury motifs, or generic cyber imagery.
- English and Hebrew require genuine LTR/RTL parity.
- `Toza` and English product names remain Latin-script in Hebrew.

The upgrade may evolve the system, but changes must preserve the brand's discretion, authority, warmth, precision, and restraint.

## 5. Photography and visual references

### 5.1 Image-creation constraint — LOCKED

- Do not create or generate images.
- Do not create bespoke illustrations or exposure-map imagery.
- Research and recommend existing photographic and image references only.
- The user selects which inspirations or assets, if any, may be used.
- Restrained code-native visual treatments are permitted: typography, rules, masks, and geometry.
- Code-native treatments must remain part of the interface/layout system and must not become synthetic illustrative imagery.

### 5.2 Permitted research sources — LOCKED

- Licensed premium stock.
- Existing editorial photography.

Excluded unless the user later changes the rule:

- AI-generated imagery.
- Free-stock-library aesthetics.
- Unapproved independent portfolio work.

### 5.3 People-photography direction — LOCKED

- Busy, real, regular people in public life.
- Approximately 7–21 people in a frame.
- Walking, standing, waiting, or sitting in a mall or street.
- Most people not identifiable: distant, turned away, partially obscured, or visually anonymous.
- Observational rather than staged.
- No visible conflict, victim imagery, isolated worried person with a phone, affluent lifestyle tableau, or cyber props.

### 5.4 Geographic photography signal — LOCKED

- Subtly Israeli, with no landmarks.
- Geographic cues may come from light, materials, clothing, density, and urban rhythm.
- Avoid flags, landmark architecture, prominent signage, and tourism framing.
- A closely comparable Mediterranean urban environment may be considered when the image does not falsely claim a specific location.

### 5.5 Role of supporting visuals — LOCKED

Visuals should help visitors understand that ordinary public and digital life contains relationships and traces they do not normally perceive. They are explanatory and atmospheric, not decorative filler.

### 5.5A First post-hero visual role — LOCKED

- The first section after the hero explains that ordinary life creates hidden exposure.
- It precedes the intervention method, founder credentials, and detailed situation navigation.
- Its job is to turn the hero headline into a credible, concrete realization rather than another marketing claim.

### 5.6 Image density — LOCKED

- Home uses **two or three decisive ambient images**.
- Images create human context and deliberate pacing; they do not decorate every section.
- The founder portrait is separate from this ambient-image allowance.
- Exact placement and selection remain subject to external visual-reference research and user approval.

## 6. Research workstream — OPEN

Research must identify useful principles and existing references for:

- Premium founder-led advisory and professional-service sites.
- Category creation for unfamiliar services.
- Trust formation where discretion and personal accountability matter.
- Editorial dossier layouts and controlled information sequencing.
- Portrait-led first screens.
- Documentary crowd photography with subtle Israeli or Mediterranean urban cues.
- Restrained geometric or ambient visual systems that do not imply cybersecurity clichés.
- Hebrew/English visual parity and RTL-safe editorial composition.
- Conversion patterns for a high-trust paid diagnostic that begins through private messaging.

Research output must distinguish:

1. Principle supported by evidence or established practice.
2. Reference worth considering.
3. Exact relevance to Toza.
4. Elements to borrow.
5. Elements to reject.

No reference should be copied wholesale.

## 7. Unresolved decision branches

Resolve approximately in this order because later choices depend on earlier ones:

1. Image density and photographic rhythm.
2. Hero supporting hierarchy and exact first-screen composition; the primary headline is locked.
3. Exact visual “reveal” treatment using selected existing assets plus permitted code-native type, rules, masks, and geometry.
4. Proof hierarchy after the problem is introduced.
5. Method naming and public labels.
6. Homepage section order and compression.
7. Typography evolution.
8. Color and contrast evolution.
9. Grid, whitespace, and section transitions.
10. Motion and interaction intensity.
11. Mobile behavior.
12. Hebrew parity and culturally appropriate RTL adaptation.
13. Page-family differentiation.
14. CTA system and contact presentation.
15. Accessibility, performance, and image licensing constraints.
16. Prototype gate, review criteria, and implementation scope.

## 8. Current recommended Home narrative

This is provisional until the remaining branches are resolved:

1. Recognizable separation/divorce and business/founder-dispute cues plus founder portrait; primary headline: “Your digital life reveals more than you realize.”
2. **Locked second screen:** ordinary life creates hidden exposure.
3. The consequence when trust or alignment breaks.
4. The action promise: find it and close what can be closed.
5. The three-stage method: reveal, intervene, confirm.
6. Founder authority and direct-delivery proof.
7. Concrete boundaries and privacy architecture.
8. Private Exposure Assessment as the responsible first step.
9. Situation paths, attorney path, FAQs, and contact.

## 9. Change-control rule

For every future visual change:

1. Identify the decision-tree node it serves.
2. State whether it preserves, refines, or overturns the current decision.
3. Record the reason and affected downstream nodes.
4. Update this file before or with the implementation commit.
5. Run the repository's automated verification on the feature branch.
