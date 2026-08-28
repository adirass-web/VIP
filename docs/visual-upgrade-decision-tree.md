# Toza Project Decision Register

Status: **Conversion architecture and English copy locked; visual and production specifications in progress**
Branch: `design/visual-upgrade`  
Owner: Dr. Lior Tabansky  
Last updated: 2026-08-28

This file is the single source of truth for all durable Toza project decisions: business, market, offer, pricing, content, language, privacy, repository workflow, deployment, design, imagery, implementation, and QA. Future changes must trace back to this register. Update this file when a decision changes; do not maintain competing decision records elsewhere.

### Current gate status — 2026-08-28

- **English copy: APPROVED.** Revision 3 in `docs/toza-upgrade-english-copy-spec.md` is the production copy authority for Home and the two primary situation landing pages.
- **Visual direction: LOCKED.** Category clarity dominates. The Evidence Ledger is the governing system; sparse human photography provides proof and pacing.
- **Production implementation specification: APPROVED.** Exact phase-one rules are recorded in `docs/toza-production-implementation-spec.md`.
- **Phase-one build: IMPLEMENTED AND VERIFIED IN ISOLATED WORKTREE; DRAFT PR PENDING.** Home and both English situation pages use the Evidence Ledger system. The full static suite and 16 browser tests pass. Ambient photography remains gated on licensing.

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

- **Personal Shield — ₪14,000**: one person; one primary working day and a second working day when needed at no additional charge; one phone and one computer; every relevant account identified together; two physical 2FA security keys supplied and configured; and, when risky accounts must be replaced, new core accounts plus essential migration.
- Personal Shield uses a fixed baseline checklist plus relevant situation/platform modules.
- Personal Shield completes when the applicable checklist is completed, subject to an unresolved exception-recording rule for non-applicable, technically blocked, or client-declined items.
- Personal Shield includes 14 days of limited adjustment support covering only issues directly related to changes made by Toza.
- Toza selects the two included compatible physical security keys.
- The client chooses the delivery format for the private dated record.
- Fourteen-day adjustment support is delivered through WhatsApp or Signal plus scheduled calls.
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
- Primary CTA commitment: **Request a private conversation**.
- The price may remain visible, but the first interaction does not demand immediate online payment or sensitive disclosure.

## 3. Method and category legitimacy

### 3.1 Primary legitimacy mechanism — LOCKED

The unfamiliar service category becomes credible through a clearly structured assessment and intervention method.

Credentials, privacy architecture, deliverables, and experience support the method but do not substitute for it.

### 3.1A Founder proof hierarchy — LOCKED

- After the intervention method, founder proof is practical and concise rather than academic or institutional.
- Keep the full professional site as an explicit external source rather than turning Home into a résumé.
- Do not name institutions on Home or use an unsourced logo wall.

### 3.1B Founder proof format — LOCKED

- Home presents one approved proof sentence:

> Twenty years of hands-on cybersecurity work, from complex personal cases to international cyber-resilience programs.

- Keep an explicit external link to the complete professional profile.
- Institutional, academic, publication, and program detail belongs on Why Toza or the external profile, not Home.

### 3.2 Three-stage method — LOCKED IN PRINCIPLE AND POSITION

1. **Map** — map the whole exposure: the accounts, devices, permissions, services, relationships, and access paths that matter.
2. **Close and harden** — close access, change configurations, harden the environment, and make situation-specific protective interventions.
3. **Verify** — verify what changed, identify what remains, and provide a clear record and next steps.

The public labels are locked as **Map · Close and harden · Verify**. The method must make active intervention unmistakable and must not read as consulting only. It is the third Home screen, immediately after the compound exposure paths.

- Full hardening is always required to complete the Toza method; public copy must not condition it on whether deeper or broader work is “needed.”
- The Private Exposure Assessment remains a separately purchased first stage, but it does not represent completed protection. It maps the exposure and closes urgent paths; Personal Shield completes the hardening. A client may choose not to continue, but that choice does not change the method.
- Public copy states that Dr. Lior Tabansky developed a complete personal-hardening method for high-risk personal situations.
- The defensible basis is current government security standards, national cyber-authority guidance for high-risk individuals, platform-specific protections, and twenty years of field experience.
- Use first-person singular for work personally performed by the founder and active intervention verbs such as **map, close, rebuild, harden, move, configure, train, and verify**.
- Do not imply endorsement, certification, or operational use by intelligence or protective agencies. Do not use coded prestige claims such as **trusted by three-letter agencies**.

### 3.3 Primary contact action — LOCKED

- Primary CTA label: **Request a private conversation**.
- Supporting reassurance: **I handle your inquiry personally, privately and confidentially.**
- Do not claim complete confidentiality, anonymity, encryption, or legal privilege.
- The CTA routes to the existing WhatsApp/Signal contact mechanism. It must not introduce a public form, CRM, chatbot, or third-party intake workflow.
- The CTA may repeat at logical points, but every repetition performs the same action.

### 3.4 Private Exposure Assessment presentation — LOCKED

- Show **Private Exposure Assessment — ₪3,500** clearly on Home and both situation landing pages.
- Define it as **where intervention begins**, not a report-only diagnostic or a sales consultation.
- Operational scope: full situation intake, exposure diagnosis, and immediate first aid. Urgent exposure identified during the assessment is fixed where safely and practically possible within the assessment scope.
- The assessment is governed by its outcome and device scope, not sold by the hour. Public copy does not foreground a duration claim.
- Completion condition: the assessment ends when full intake, diagnosis, and urgent first aid are complete.
- Diagnostic device scope: one phone and one computer.
- First aid is distinct from the systematic hardening delivered through a full engagement.
- Present value as a restrained before-and-after comparison:
  - **Before:** the client may sense that something is exposed without knowing how the pieces connect or which paths matter.
  - **After:** the important paths are mapped, exposure is reduced where possible, and anything remaining is clearly documented.
- Retain the approved credit toward a full package within 14 days.
- Do not use “from ₪3,500” for the standard assessment.

### 3.5 Urgent-response presentation — LOCKED

- Home states: **In-person response within four hours in Central Israel, subject to availability.**
- Add the brief disclosure: **A weekend and holiday surcharge applies.**
- The full pricing page remains authoritative for exact surcharges: +₪4,200 for four-hour handling; +₪5,800 all-in for urgent weekend or holiday handling, replacing rather than adding to the four-hour surcharge.
- Keep urgent response subordinate to the standard assessment so Toza does not read as an emergency service.

### 3.6 Visit overview — LOCKED

- Home uses a short overview and links to the detailed visit page.
- Approved overview direction:

> Bring me the problem. I reconstruct your digital position across the phone, computer, identities, apps, recovery paths and shared access. I close urgent paths during the assessment. Personal Shield then completes the intervention: I rebuild risky accounts, harden devices and identities, configure two security keys, move critical services, train you and verify the result.

- Link label: **See what happens during the visit**.
- Do not repeat the full five-step visit narrative on Home.

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

### 4.1A Governing visual direction — LOCKED 2026-08-28

- **Category clarity first.** When category clarity and personal warmth compete, category clarity wins.
- Governing system: **Evidence Ledger**.
- Documented basis: Deloitte Insights' governed ledger/grid and single-accent visualization language; Texas Law Magazine's flexible editorial grid and photographic narrative pacing; Rare Violins of New York's authentic expert photography as proof of personal delivery.
- Human photography remains essential but subordinate: it establishes ordinary life, personal authority, and pacing; it does not organize the page.
- The approved founder portrait appears once per page in the hero. Visual QA rejected repeating the identical portrait in the later proof section; that section uses a compact delivery ledger instead.
- The three compound exposure families use one repeated grammar: ordinary conditions → connection → plainly named consequence.
- Use the light-first bone, ink, and vermilion system specified in `docs/toza-production-implementation-spec.md`.
- Do not retain the current automatic dark/gold vault system on upgraded pages. Remove or sharply demote guilloche, medal, seal, and ornamental security motifs.

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

### 5.5B Exposure complexity and formal model — LOCKED

- Do not present isolated settings or single-feature risks; they trivialize the problem and imply a self-service fix.
- The relevant problem is **compound exposure**: public online trails, identity correlation, username/password reuse, recovery paths, physical device sharing, personal email used for work, romantic or household trust, persistent sessions, and other ordinary elements combining into a consequential path.
- Base the explanatory structure on the documented **Attack Tree / Attack Path** method: multiple AND/OR conditions combine toward a consequential exposure goal.
- Public presentation must explain accumulation and intervention without becoming operational attack instructions.
- Each public chain must be complex enough to justify expert assessment and specific remediation.

Selected prototype families:

1. **Identity convergence** — public trails, correlated identifiers, reused credentials, and recovery paths combine across personal accounts.
2. **Trust residue** — romantic or household trust, physical device sharing, sessions, credentials, and recovery roles continue after the relationship changes.
3. **Personal/work crossover** — personal email or devices, reused identity/authentication paths, and shared business access allow personal exposure to become commercial leverage.

Rejected for this first prototype: isolated feature/settings risks and life-pattern reconstruction as a primary chain.

Consequence-label rule:

- Name the endpoint of every path plainly.
- Current prototype endpoints:
  - Identity convergence: separate parts of your life become reachable through one identity.
  - Trust residue: access and visibility survive after trust has ended.
  - Personal/work crossover: personal exposure becomes business leverage.
- Keep labels consequential but non-operational; do not reveal attack procedures.

### 5.5C Exposure-chain visual precedent — PROTOTYPE, NOT LOCKED

- Trial the **method**, not the appearance, of Pentagram's Coeuraj system as a visual translation of the Attack Path model: a governed relational grammar in which rules, labels, and junctions follow explicit internal logic.
- Adapt it more quietly for three concrete exposure chains and pair it with selected ambient photography.
- Do not copy Coeuraj's typography, density, brackets, red/black styling, or network aesthetic.
- The user is not yet convinced. This direction must be tested against at least one researched alternative before adoption.
- No site-wide design decision may be inferred from this prototype.

### 5.6 Image density — LOCKED

- Home uses **two or three decisive ambient images**.
- Images create human context and deliberate pacing; they do not decorate every section.
- The founder portrait is separate from this ambient-image allowance.
- Exact placement and selection remain subject to external visual-reference research and user approval.

## 6. Research workstream — OPEN

### 6.0 Evidence rule — LOCKED

- Do not invent typography, composition, graphic treatments, or a design language from scratch.
- Every proposed direction must be anchored in identifiable existing examples and a formal documented method or principle.
- For every recommendation, record: source, documented principle, visible precedent, exact relevance to Toza, what may be adapted, and what must be rejected.
- References are evidence and inspiration, not permission to copy.
- No design direction advances to implementation until the user selects from the researched references.

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

## 7. Conversion framework and page-family rules

### 7.1 Governing landing-page framework — LOCKED

- The two primary situation landing pages follow the published **CXL conversion pattern**.
- Governing rules:
  1. One specific audience and visitor intent per page.
  2. Message match between traffic source, page title, hero, and offer.
  3. One measurable conversion action: **Request a private conversation**.
  4. No competing CTA destinations in the conversion sequence.
  5. Clear value proposition and offer above the fold.
  6. Benefits, mechanism, proof, offer detail, and anxiety reduction in a deliberate order.
  7. Repeat the same CTA at logical intervals.
  8. Test and revise against measured behavior; do not treat the first build as permanently optimal.
- Hormozi's Value Equation may be used to evaluate offer strength, but it is not the page architecture. Do not import artificial bonuses, guarantees, scarcity, or aggressive urgency.
- StoryBrand was researched and rejected as the governing structure. Its guide/hero/failure/success narrative is too formulaic and sales-forward for Toza's refined private-dossier character.

### 7.2 Home versus landing pages — LOCKED

- Home is an orientation and category-creation page serving more than one visitor intent.
- The situation pages are permanent, focused conversion landing pages.
- Do not send situation-specific campaigns to Home when a matching landing page exists.
- Home retains site navigation. Campaign variants of the situation landing pages remove normal navigation and competing exits while preserving essential legal/privacy access.

### 7.3 Situation-page status and naming — LOCKED

- Both existing situation pages remain permanent focused landing pages and routes into the same Toza service.
- They are not separate service packages and must not imply different pricing models.
- Use explicit titles for clarity and search:
  - **Digital Exposure During Separation or Divorce**
  - **Digital Exposure in Business or Founder Disputes**
- Home introduces them with discreet labels:
  - **When a personal relationship changes**
  - **When business interests diverge**
- Their shared timing message is:

> Before you make a move, know what your digital life reveals.

- Supporting direction:

> Toza maps the exposure, closes what can be closed and verifies what remains—before confrontation, negotiation or access changes alter the situation.

### 7.4 Shared structure, tailored substance — LOCKED

- Both landing pages use the same conversion spine and component system.
- Tailor the headline, compound exposure paths, consequences, objections, urgency, and examples to the situation.
- Emotional tone may modulate by situation but is not the primary structural difference.
- Do not produce near-duplicate pages with only nouns exchanged.

## 8. Provisional structural specification

This section records the approved conversion architecture. It is not yet a complete production specification. Existing production content must be audited and mapped into this structure before final copy, visual design, implementation, or removal of current sections is approved.

### 8.1 Home — STRUCTURE LOCKED; CONTENT AUDIT REQUIRED

Home is capped at seven principal sections. Compact supporting elements may sit inside them; they do not become additional full-width bands.

1. **Hero — category recognition and authority**
   - Headline: **Your digital life reveals more than you realize.**
   - Supporting promise: **Find it and close what can be closed.**
   - Founder portrait communicates calm, direct authority.
   - Primary CTA: **Request a private conversation**.
   - Do not lead with price, a list of situations, or a second competing CTA.
2. **Compound exposure — prove the hidden problem**
   - Explain that ordinary digital life creates compound exposure.
   - Show the selected Identity convergence, Trust residue, and Personal/work crossover families.
   - Name each consequence plainly without operational attack instructions.
   - Exact visual treatment remains gated by researched-reference approval.
3. **Intervention method — show the solution**
   - **Map · Close and harden · Verify**.
   - Make actual intervention and verification explicit; do not present a consultancy workflow.
4. **Founder proof — establish practical credibility**
   - Use the single approved twenty-year proof sentence.
   - Include an explicit external link to the complete professional profile.
   - No institutions, academic résumé, three-point credential list, or logo wall on Home.
5. **Two routes — establish personal relevance**
   - Equal routes into one service using the discreet Home labels.
   - Each route explains that the digital dimension is an overlooked strategic factor and that Toza should be involved before action changes the situation.
   - Follow immediately with the same private-conversation CTA and confidentiality reassurance.
6. **Assessment — make the commercial offer concrete**
   - Show **Private Exposure Assessment — ₪3,500**.
   - Define it as where intervention begins.
   - Use the approved before-and-after value comparison.
   - Include the 14-day credit, the compact urgent-response option, and the short visit overview/link as supporting elements within this section.
7. **Final CTA — convert without new arguments**
   - Repeat **Request a private conversation**.
   - Repeat only the restrained confidentiality reassurance and initial-contact instruction.
   - Do not add a full FAQ, boundaries band, pricing matrix, or additional situation grid to Home. Those remain available through focused pages and footer/navigation links.

### 8.2 Separation/divorce landing page — STRUCTURE LOCKED; CONTENT AUDIT REQUIRED

Primary audience: a private individual approaching or experiencing separation/divorce who does not yet recognize digital exposure as a strategic issue.

1. Message-matched hero using the explicit page title and one benefit-led proposition.
2. Immediate private-conversation CTA; no competing “visit” or pricing CTA.
3. Situation recognition without domestic-abuse or victim-service framing.
4. Tailored compound path: **Trust residue**, supported where relevant by Identity convergence.
5. Plain consequence and timing: access and visibility may survive after trust ends; understand the exposure before confrontation or broad access changes.
6. **Map · Close and harden · Verify**, expressed in the context of personal/household overlap.
7. Practical founder proof using the approved single sentence.
8. Private Exposure Assessment, ₪3,500, before/after value, credit, and visit reassurance.
9. Anxiety reduction: client present, client controls credentials, no remote access/cloud/log retention, no investigation of the other person, and no guarantee that no exposure remains.
10. Repeat the same private-conversation CTA.

### 8.3 Business/founder-dispute landing page — STRUCTURE LOCKED; CONTENT AUDIT REQUIRED

Primary audience: a founder, partner, shareholder, or senior individual entering a business dispute whose personal and professional digital lives overlap.

1. Message-matched hero using the explicit page title and one benefit-led proposition.
2. Immediate private-conversation CTA; no competing “visit” or pricing CTA.
3. Situation recognition focused on changing alignment, negotiation, control, and leverage.
4. Tailored compound path: **Personal/work crossover**, supported where relevant by Identity convergence.
5. Plain consequence and timing: personal exposure may become commercial leverage; map it before negotiation, confrontation, or access changes alter the position.
6. **Map · Close and harden · Verify**, expressed in the context of personal/business overlap.
7. Practical founder proof using the approved single sentence.
8. Private Exposure Assessment, ₪3,500, before/after value, credit, and visit reassurance.
9. Anxiety reduction: this is personal protection, not enterprise cybersecurity, investigation, evidence collection, forensic reconstruction, or legal advice.
10. Repeat the same private-conversation CTA.

### 8.4 Conversion and content constraints — PROVISIONAL

- One CTA label and destination throughout each situation landing page.
- Campaign variants omit ordinary navigation and secondary page links from the conversion body.
- Target approximately 275–745 English words per situation landing page as an evidence-based initial hypothesis, then test; do not pad or cut essential trust information merely to hit the range.
- Use plain language, short paragraphs, descriptive headings, and mobile-first reading order.
- Measure at minimum: landing-page view, primary CTA click, contact-channel selection, and completed outbound contact action where technically observable without collecting sensitive content.
- Do not add invasive session recording, typed-message capture, fingerprinting, or sensitive behavioral profiles.

### 8.5 Site page plan — LOCKED

Core pages:

1. Home.
2. Why Toza.
3. Private Exposure Assessment.
4. What Happens During the Visit.
5. Digital Exposure During Separation or Divorce.
6. Digital Exposure in Business or Founder Disputes.
7. Why This Is Not IT Support.
8. Contact/private-inquiry destination implemented through approved WhatsApp/Signal handling rather than a public form.
9. Privacy, terms, pricing, FAQ, attorney/referral, and secondary-situation pages remain supporting pages rather than additions to Home's main sequence.

### 8.6 Completion and implementation sequence — LOCKED

1. **Content and commercial specification:** audit the latest production site; preserve strong existing copy; map it into the approved Home and CXL landing-page structures; resolve contact mechanics, offer boundaries, exposure-path content, objections, page estate, and final English copy in one consolidated review.
2. **Visual-reference specification:** research and present complete, documented visual directions covering landing-page precedents, exposure-path treatment, photography, portrait use, typography, grid, geometry, motion, mobile behavior, and Hebrew RTL adaptation. No isolated visual invention.
3. **Production specification:** derive and lock component architecture, SEO, analytics, privacy, accessibility, performance, responsive behavior, browser/device coverage, structured data, testing, deployment, and rollback requirements using established best practices. Escalate only genuine business tradeoffs.
4. Create the shared structural components and Home skeleton only after the content/commercial specification is approved.
5. Rebuild the two situation pages on the shared CXL conversion spine using approved final English copy; do not design around lorem ipsum.
6. Adopt visual treatments and third-party images only after the visual-reference specification and licensing are approved.
7. Implement Hebrew as a genuine RTL structural mirror with native copy review.
8. Run repository verification, responsive visual QA, accessibility checks, and performance checks.
9. Open a PR for user review; merge only after approval.

### 8.7 Latest-production content audit — LOCKED

Audit basis: production `main` commit `5f8fbb8` dated 2026-08-26. The active visual-upgrade branch differs from production only by this register, so the current English Nunjucks templates are the latest content source.

#### Preserve and reuse

- Home: **They may not need to hack you** is a strong category-creation line; preserve it below the new hero rather than as the governing headline.
- Home: **One senior expert, start to finish** and its direct-delivery explanation are strong; compress them around the approved founder-proof sentence.
- Home and supporting pages: in-person delivery, client presence, client-controlled credentials, no remote access, no cloud processing, no retained logs, and no handoffs are concrete trust builders.
- Situation pages: the current recognition copy, the warning that changing a few passwords is not protection, and the distinction from enterprise cybersecurity provide a strong base.
- Private Exposure Assessment: audience qualification, prepaid price, 14-day credit, plain-English summary, urgent pricing, initial-message guidance, and boundaries are substantially usable.
- Visit page: the five-step sequence and emphasis on client presence, explained changes, agreed scope, and a documented ending are strong.
- Pricing page: the assessment-first ladder, package prices, add-ons, continuity offers, urgent pricing, and scope-approval rule remain authoritative.
- Why Toza: preserve the founder note substantially. It is warmer, more distinctive, and more persuasive than institutional credential copy.
- FAQ: retain as a supporting objection and boundary library rather than reproducing it on Home or in full on the landing pages.
- Contact implementation: the existing footer already resolves the approved no-form contact model by presenting WhatsApp and Signal with a short prefilled message.

#### Change or remove

- Replace the current Home hero, **Take back control of your digital life — before it becomes leverage**, with the approved category headline and action promise.
- Remove competing hero CTAs. **See pricing** and **How the visit works** may remain contextual links outside the primary conversion cluster, but must not compete with the single landing-page action.
- Replace the current Home method labels with **Map · Close and harden · Verify**.
- Reduce repeated trust lines. Repetition currently turns distinctive operational proof into boilerplate.
- Remove the five-item situation grid from Home's primary sequence. Keep the two approved discreet routes; preserve secondary routes through navigation, footer, or supporting pages only after their page-estate status is decided.
- Do not carry the current Home FAQ and full boundaries bands into the seven-section Home. Retain focused links and essential reassurance.
- Replace academic/institutional Home proof with the approved twenty-year practical sentence. Preserve full detail on Why Toza and the external professional profile.
- Replace isolated exposure examples on the two primary landing pages with situation-specific compound paths; current examples are useful raw material but too simple to justify the service alone.
- Remove or rewrite stale domestic-abuse/safety-service framing in the visit page, FAQ, pricing language, and `leaving-controlling-relationship` route. It conflicts with the locked scope decision.
- Review phrases that assume hostile action by “the other side.” Use consequential but supportable wording; do not state or imply access that has not been established.
- Do not describe WhatsApp or Signal contact as invisible or anonymous. The service may handle an inquiry privately, but the contact can remain visible on the client's device or account.

#### Assessment intervention boundary — LOCKED

The current site defines the Private Exposure Assessment as a **paid diagnostic** that maps the situation and recommends next steps. The approved redesign defines it as **where intervention begins** and says appropriate changes may be made during the visit. The pricing architecture separately sells Personal Shield at ₪14,000 as the full in-person reset.

- The assessment includes full intake, diagnosis, prioritization, and immediate first aid. Urgent exposure is fixed where safely and practically possible within the assessment scope.
- The full engagement is a methodical hardening of devices, identities, and apps; client training; deployment of two physical 2FA security keys; and, where safer, creation of new accounts to replace risky ones.
- Personal Shield includes one phone, one computer, and two physical 2FA security keys supplied and configured.
- Personal Shield uses one primary working day; a second working day is scheduled only when needed and is included in the fixed ₪14,000 price.
- Public timing language: a typical Personal Shield engagement requires one or two working days, depending on the volume of data and apps, the complexity of the account relationships, and the threat model.
- Personal Shield completion is governed by a fixed hardening checklist rather than elapsed time.
- Checklist architecture: fixed baseline plus relevant situation/platform modules.
- When risky accounts are replaced, Personal Shield includes creation of new core accounts plus essential migration. Exact included/excluded migration items remain to be specified.
- Essential migration covers core identity, recovery paths, and critical services. Historical archives and other bulk migration remain outside the default scope unless explicitly added later.
- Internal first-aid trigger: when the client describes a specific threat and the assessment finds corroborating indicators consistent with ongoing unauthorized access or exposure, treat the matter as urgent and perform immediate containment. Public copy says only **urgent exposure**; it does not disclose the internal corroboration rule, claim attribution, identify a threat actor, or make a forensic breach conclusion.
- If serious urgent exposure is discovered but does not match the client's original concern, explain it first and obtain new approval before fixing it.
- Personal Shield includes 14 days of limited adjustment support after delivery, limited to issues directly related to changes made by Toza.
- The assessment does not include the full methodical hardening, identity/account migration, training, or comprehensive verification of a full engagement.
- Exact first-aid limits, covered-device scope, security-key inclusion, and account-migration boundaries remain to be operationally specified before final copy.
- Preserve the distinction between the assessment outcome and the full-package dated record.
- Do not promise intervention during the assessment unless delivery practice and allotted time support it.

#### Technical findings deferred to production specification

- CTA links currently scroll to a shared footer where visitors choose WhatsApp or Signal; this is a viable low-friction contact model.
- Prefilled contact text already exists and should be rewritten to match **Request a private conversation** if that CTA remains approved.
- Inline Plausible event calls exist, but no analytics loader is present in the inspected layout; measurement may currently be inactive.
- Campaign/no-navigation variants, canonical rules, traffic-source message matching, and conversion measurement remain undefined.

### 8.8 Secondary-page estate — LOCKED

- Keep as permanent supporting pages:
  - **They Know Something They Shouldn't**.
  - **Inheritance Conflict**.
  - **For Attorneys**.
  - **Why This Is Not IT Support**.
- Consolidate **Commercial Spying** into **Digital Exposure in Business or Founder Disputes**. Preserve unique useful material, then redirect the retired URL to the business/founder-dispute page.
- Consolidate **Private Investigator** into **They Know Something They Shouldn't**. Preserve unique useful material, then redirect the retired URL to that page.
- Retire **Leaving a Controlling Relationship**. Its governing need and safety-advisor framing conflict with Toza's locked scope. Remove it from navigation, sitemaps, internal links, English/Hebrew mirrors, and conversion paths. Select the technically correct retirement response during the SEO/production specification; do not automatically redirect mismatched safety-service intent into a commercial Toza page.
- Pricing, FAQ, What Happens During the Visit, Private Exposure Assessment, and Why Toza remain permanent supporting pages.

### 8.9 Second-pass editorial recommendations — PROPOSED

These recommendations extract more value from the latest production copy. They are not locked until approved as part of the consolidated content/commercial specification.

#### Promote into the upgraded Home

- Preserve **They may not need to hack you** as the first compound-exposure section heading. It explains the category faster than a new abstract heading.
- Preserve and refine the current transformation line: **You don't leave with more worry; you leave with clarity.** It is stronger than a generic audit outcome and belongs in the assessment section.
- Preserve **One senior expert, start to finish** as the founder-block heading or supporting line.
- Reuse **start where your life actually is** as the introduction to the two situation routes.
- Reuse the strongest visit assurances: client present throughout; meaningful changes explained first; nothing outside agreed scope without approval.
- Reuse the initial-contact instruction and prefilled-message concept, updated to the approved private-conversation CTA.
- Do not discard Home's strongest objection handling entirely. Integrate three compact answers within the assessment/final-conversion area: credentials remain with the client; Toza works only on the client's authorized environment; and changing access is sequenced rather than performed blindly. This reduces anxiety without restoring a separate full FAQ band.

#### Promote into the separation/divorce landing page

- Preserve: **That uncertainty, in the middle of a separation, is its own kind of pressure.**
- Preserve: **This is interpretation under pressure, not a checklist.**
- Build the Trust residue path from the current separation and inheritance material: shared accounts/devices, family plans, cloud folders, recovery contacts, persistent access, and years of family overlap.
- Use careful conditional language. Replace assertions that ordinary access is being “turned against you” with language about what may remain visible or reachable when trust changes.

#### Promote into the business/founder-dispute landing page

- Preserve the core proposition that the boundary between personal digital life and negotiating position is thinner than it appears.
- Preserve **This is not a corporate security project** as an objection-handling section.
- Build the Personal/work crossover path using material currently split across Business Dispute and Commercial Spying: personal email tied to business login or recovery, a phone holding both work and private life, shared storage, overlapping communications, identity reuse, and residual access.
- Remove “commercial spying,” “counter-espionage,” and similar category labels from public positioning; they are more inflammatory than explanatory.

#### Promote into supporting pages

- Why Toza: preserve the founder note substantially; edit for rhythm and remove institutional detail rather than restructuring it.
- Private Exposure Assessment: preserve the “Who it's for” qualification list, urgent handling, initial-message guidance, and attorney-authorized summary. Add the approved limited-intervention boundary.
- What Happens During the Visit: preserve the five-stage sequence. Remove safety-service language and state the assessment/full-package difference at the relevant step.
- Why This Is Not IT Support: retain the comparison-table concept. Rename “tech-savvy nephew” to a neutral “someone you know” formulation; the current phrasing is memorable but unnecessarily colloquial and may reduce premium credibility.
- Attorneys: preserve referral triggers, scope boundaries, consent-based coordination, and attorney-friendly summary. Remove controlling-relationship protocol and add the assessment's limited-intervention rule.
- FAQ: preserve as the canonical detail library. Remove duplicate questions, stale safety framing, and any answer inconsistent with limited assessment intervention.
- Pricing: preserve the complete commercial architecture. Keep most package and add-on detail off Home and the situation landing pages.

#### Remove or rewrite

- Remove unsupported probability claims such as **Hacking is only one possibility, and usually not the likeliest.** State instead that hacking is only one possible explanation and that the source cannot be inferred from one visible event.
- Remove language that may intensify suspicion without evidence: **the other side may still be able to reach in**, **tip off the other side**, and categorical claims that information **can be used against you**. Replace with bounded statements about exposure, visibility, retained permissions, and potential leverage.
- Remove safety plans, safety advisors, controlling-relationship protocols, and promises about escalation risk from the general site unless a future scope decision explicitly restores them.
- Reduce repeated negative definitions. State the most relevant boundary once in context and link to the full canonical boundary set.
- Reduce repeated trust-line strings across every hero. Use operational proof where it answers a specific anxiety rather than as a universal decorative footer under every proposition.
- Replace all primary conversion labels such as **Book the assessment**, **Speak privately**, and **Discuss a client privately** with page-appropriate expressions of the one action. The two consumer landing pages use **Request a private conversation**; the attorney page may retain an audience-specific label only if it reaches the same contact mechanism and is measured as the same conversion.
- Remove “urgent” from the default They Know Something CTA. Urgency is an available service condition, not an assumption about every visitor.

#### Add or clarify

- Add a plain distinction between assessment intervention and full-package intervention:
  - assessment: map, prioritize, and make limited immediate low-risk changes where appropriate;
  - full package: systematic close-and-harden work, broader scope, verification, and the private dated record.
- Add a compact explanation of why compound exposure requires senior judgment: the issue is not any single setting, but how identity, access, devices, recovery paths, public trails, and relationship history combine.
- Add an explicit statement that Toza works only with the client's own accounts, devices, and authorized environment; retain this once near the first serious objection rather than repeating it everywhere.
- Add a non-sensitive contact expectation: who responds, what the first reply covers, and that detailed facts should wait for the appropriate setting.
- Add source-linked methodological support only where it strengthens credibility without making Home academic. Sources can live in expandable notes, supporting pages, or editorial footnotes rather than the primary sales narrative.
- Put the detailed methodological basis on **Why Toza** and/or **What Happens During the Visit**, not in the primary Home sales sequence. Name the standards and guidance directly; do not hint at agency endorsement.
- Add conversion measurement only after the privacy-safe analytics design is specified and functional.

#### Content-quality issues to resolve in final copy

- The site alternates between **diagnostic**, **assessment**, **reset**, **intervention**, **protection**, and **hardening** without a controlled hierarchy. Final copy must define one vocabulary for each service stage.
- “Private dated record,” “plain-English summary,” and “attorney-friendly summary” are three different deliverables; eligibility and purpose must remain distinct on every page.
- “No retained logs” can be misunderstood as no business records at all. Clarify that Toza does not retain a log or copy of the client's digital life while maintaining whatever minimum transaction/engagement records are legally and operationally required.
- The current prefilled WhatsApp/Signal message asks about an assessment while the approved CTA asks for a private conversation. Align the message, CTA, and commercial sequence.
- The current site uses British **enquiry** in the approved reassurance but otherwise largely uses American English. Select one English convention; current copy supports American English, so **inquiry** is recommended.

## 9. Remaining asset and phase-two gates

The phase-one visual system and three English page structures are locked. Remaining work does not block the no-ambient-image build:

1. Select the Home and two situation-page ambient photographs and confirm commercial-site licensing, releases and non-AI provenance.
2. Insert and optimize only approved assets, then repeat responsive, accessibility and performance QA.
3. Revise the permanent supporting pages under their approved copy-change specification.
4. Approve native Hebrew copy before migrating the visual system to Hebrew pages.
5. Execute approved route consolidation/retirement, redirects and sitemap changes as a separate SEO-controlled phase.

No third-party image may enter production before its licensing status is approved.

## 10. Change-control rule

For every future visual change:

1. Identify the decision-tree node it serves.
2. State whether it preserves, refines, or overturns the current decision.
3. Record the reason and affected downstream nodes.
4. Update this file before or with the implementation commit.
5. Run the repository's automated verification on the feature branch.
