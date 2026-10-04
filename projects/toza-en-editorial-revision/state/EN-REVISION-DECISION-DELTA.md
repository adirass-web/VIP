# Toza EN Revision Decision Delta

Status: **LIVE decision register**  
Purpose: record substantive decisions made during EN-02-v1 revision so the future `TOZA-EN-COPY-SPEC-v3.md` can be generated from an explicit decision trail.

Do not record ordinary line edits, punctuation, or minor wording changes.

## Baseline ratified decisions

| ID | Date | Decision | Authority | Affected areas | Status |
|---|---|---|---|---|---|
| D-001 | 2026-10-04 | Private Exposure Assessment price is ₪3,600 including VAT. | Owner | All EN pages, structured copy, future spec | Locked |
| D-002 | 2026-10-04 | Assessment scope is one main phone plus one other device: PC, iPad or second phone. | Owner | Assessment, Pricing, FAQ, Process, situation pages | Locked |
| D-003 | 2026-10-04 | Public duration language is “at least two hours in person; typically four,” while completion remains outcome-based around agreed intake, mapping, diagnosis and approved urgent first aid. | Owner | Assessment, Pricing, FAQ, Process, situation pages | Locked |
| D-004 | 2026-10-04 | Inner Circle Shield is approved current product architecture, from ₪42,000 including VAT, using the EN-02-v1 group scope. | Owner | Pricing, FAQ, Process, shared service descriptions, relevant pages | Locked |
| D-005 | 2026-10-04 | Eligible Assessment credit may apply to Personal Shield, Inner Circle Shield or Bespoke Private Protection under current conditions. | Owner | Pricing, FAQ, Assessment, Process, situation pages | Locked |
| D-006 | 2026-10-04 | PA-01-v2 / Initial Paid Visit remains protected approved copy during the 11-page revision phase. | Owner | Initial Paid Visit | Locked |
| D-007 | 2026-10-04 | Revision architecture is locked only after stress test; shared-copy review and a live decision-delta register are mandatory. | Owner | Revision workflow | Locked |

## Decision categories

Use one:
- **Commercial**
- **Service architecture**
- **Editorial doctrine**
- **Page role**
- **Terminology**
- **Protected phrase**
- **Shared copy**
- **Metadata**
- **Boundary/risk**
- **Workflow**

## New decision template

### D-XXX — [Short decision title]
- **Date:**
- **Category:**
- **Decision:**
- **Reason:**
- **Authority:**
- **Affected pages/components:**
- **Supersedes:**
- **Status:** Proposed / Approved / Locked / Reopened
- **Notes for v3 spec:**

## Revision rule

A substantive owner decision made during page review must be entered here before the affected page is considered fully locked.

This register is the bridge between page approval and the future consolidated v3 specification.

### D-008 — Required Code Review adversarial gate
- **Date:** 2026-10-04
- **Category:** Workflow
- **Decision:** Run Code Review as a required adversarial gate. Incorporate only findings consistent with current Toza authority and the locked harness. Resume at Why Toza; after it passes, continue Pricing → FAQ → What Happens → Shared Copy System.
- **Reason:** Keep an external adversarial check between the editorial candidate and further Phase 1 progression.
- **Authority:** Explicit owner instruction in the continuation request.
- **Affected pages/components:** Phase 1 revision candidates and Shared Copy System.
- **Supersedes:** Any assumption that internal editorial checks or CI success alone satisfy the required gate.
- **Status:** Historical locked decision; plugin-specific requirement superseded by D-009. Authority guardrails remain.
- **Notes for v3 spec:** A review pass is not owner approval of exact copy. Main and production templates remain out of scope.

### D-009 — Independent Toza red-team review replaces plugin gate
- **Date:** 2026-10-04
- **Category:** Workflow
- **Decision:** Proceed without the Code Review plugin. Use a separate reviewer applying the Toza red-team skill against current authority and the locked harness; document findings and their disposition before advancing through Why Toza → Pricing → FAQ → What Happens → Shared Copy System.
- **Reason:** The owner accepted the proposed independent-review substitution and instructed “proceed without it with guardrails.”
- **Authority:** Explicit owner continuation authorization following the proposed substitution.
- **Affected pages/components:** Phase 1 candidates and Phase 1.5 Shared Copy System.
- **Supersedes:** D-008's plugin-specific requirement only. D-008 remains a historical decision, superseded on that point.
- **Status:** Locked
- **Guardrails:** Current commercial authority and PA-01-v2 remain protected; no invented claims or Class A changes; preserve minimum trust payload; review metadata; record accepted/rejected findings; no self-approval, production-template edits, merge to main or deployment. Exact owner approval is still required before integration. Shared copy remains provisional until exact owner approval.
- **Notes for v3 spec:** An independent editorial pass makes a candidate READY FOR OWNER REVIEW, not APPROVED. It is not a Code Review plugin result.

### D-010 — Shared contact placement and reusable variants
- **Date:** 2026-10-04
- **Category:** Shared copy
- **Decision:** Proposed: use one contact destination per page; preserve the reviewed page-specific closing when it already carries the contact sequence; do not append a second full standard module. Use short linked or full privacy wording according to page role. Preserve neutral prefill, channel labels, minimum trust and page-specific boundaries.
- **Reason:** Prevent shared components from reversing the locked harness's page-level compression.
- **Authority:** Editorial proposal under the locked Shared Copy System brief; not an owner decision or approval of exact wording.
- **Affected pages/components:** Shared contact/footer, privacy variants, service/structured/reference descriptions and future page integration.
- **Supersedes:** Nothing approved; replaces no production content.
- **Status:** Proposed
- **Notes for v3 spec:** Incorporate only after exact approval of `05-shared-copy-system.md` and its placement map. Shared copy remains explicitly provisional. No change to service facts, contact destinations or public language availability is authorized.

### D-011 — Personal recognition before technical problem awareness
- **Date:** 2026-10-04
- **Category:** Editorial doctrine
- **Decision:** Why Toza must center personal situations. The gap between deliberate choices elsewhere in life and inherited phone/platform arrangements is a central premium insight. Potential clients may not understand that they need this unfamiliar service; they may have only a hunch and cannot be expected to identify or describe the underlying problem. Explain Toza's discovery, interpretation and intervention, with tangible tailored hardening and clear next steps.
- **Reason:** Owner feedback on Why Toza and Pricing, followed by the explicit reminder that Toza uncovers issues clients do not imagine and fixes problems they cannot describe.
- **Authority:** Direct owner instruction in this review.
- **Affected pages/components:** Why Toza, Pricing, later Home and situation pages; future shared language and consolidated specification.
- **Supersedes:** Draft emphasis on organizational crises and any assumption that the reader already recognizes a technical need. Refines the internal situation-aware/exposure-blind model; no change to the intended private-client market.
- **Status:** Approved direction; exact replacement wording pending
- **Notes for v3 spec:** Recognize uncertainty without treating it as evidence of compromise. Defaults are not inherently unsafe. Demonstrate discovery through ordinary access/recovery/sharing mechanisms without guaranteeing hidden findings. Owner feedback reopens the Why Toza note for selective rewriting (S1/C2); retain its personal voice. Assessment and separately accepted full-service hardening remain distinct.

### D-012 — FAQ accepted for now
- **Date:** 2026-10-04
- **Category:** Page role
- **Decision:** Preserve the current EN-02-v2 FAQ wording and length. Owner said: “FAQ is long, but let's accept it for now.”
- **Reason:** Accept the current detailed treatment rather than continuing compression.
- **Authority:** Direct owner review of the Phase 1 candidate.
- **Affected pages/components:** revisions/en-02-v2/03-faq.md, exact-copy block as present at commit 22c9c4bc2df92a232adf925989ef284a3a9e34b4.
- **Supersedes:** Pending owner review of that current FAQ candidate.
- **Status:** Approved for now, preserving the owner's qualification
- **Notes for v3 spec:** No change to body or metadata in this response. Later terminology recommendations do not silently reopen this accepted wording. No production integration, main merge or deployment authorization is inferred.

### D-013 — Outcome terminology and service presentation recommendations
- **Date:** 2026-10-04
- **Category:** Terminology
- **Decision:** Proposed: use concrete intervention verbs and explain hardening; use protection sparingly as purpose language, retain approved service names, and do not impose a corpus-wide ban. Make the optional Annual Shield Review and Priority Retainer visible in a separate pricing table. Keep material scope boundaries on Pricing with comprehensive detail in FAQ; identical facts do not require identical paragraphs.
- **Reason:** Owner questions 3–8 call for stronger outcomes, threat-modeling clarity, less vague protection language, visible annual review and a deliberate repetition policy.
- **Authority:** Editorial recommendations in response to owner questions; not approval of new commercial terms or final wording.
- **Affected pages/components:** Why Toza, Pricing and later shared-copy/terminology review.
- **Supersedes:** No approved service name or fact. In particular Bespoke Private Protection remains the named offer.
- **Status:** Proposed
- **Notes for v3 spec:** Owner has described threat assessment/modeling and a plan as service value. Translate the supported assessment, priorities and next steps into public copy; do not invent a separate written threat-model deliverable or move full hardening into the Assessment. “Highest possible standard in the commercial realm” is an unresolved proposed claim: its benchmark, scope and verification criteria are not defined. No such superlative is placed in candidate copy. A whole-digital-life or all-exposures promise is not implied by tailored work.

### D-014 — Settings, operational practices and teaching; no monitoring or security-software installation
- **Date:** 2026-10-04
- **Category:** Service architecture
- **Decision:** Toza's work includes hardening through settings, operational security practices and teaching the client. Toza does not monitor clients' devices and does not install security software on them.
- **Reason:** Owner explicitly identified these characteristics as important and asked whether they come through across the five candidates.
- **Authority:** Direct owner service clarification: “we do hardening in settings and OpSec and teach you. we don't monitor your device. we don't install any security software.”
- **Affected pages/components:** All five canonical/shared candidates, later pages, reference descriptions and future consolidated specification.
- **Supersedes:** Any assumption that the support-only no-monitoring sentence adequately expresses the service-wide fact, or that training only means operating a changed sign-in/recovery setup.
- **Status:** Approved service clarification; wording and placement pending revision
- **Notes for v3 spec:** Explain OpSec in ordinary language such as practical security habits, with supported examples. Keep security software specific; do not infer a prohibition on every installation, update, migration tool or diagnostic operation. Device examination during the authorized Assessment remains in scope. Do not invent a separate coaching product or shift full hardening into the Assessment. FAQ's accepted wording and PA-01-v2 remain unchanged pending separately identified amendments/consistency review.

### D-015 — Discussion of outcome framing, category explanation, contact and names
- **Date:** 2026-10-04
- **Category:** Page role
- **Decision:** Proposed for discussion: frame the process page around what the client gains, supported by its staged sequence; consolidate the strongest Not IT Support explanation into FAQ, with a short positive service explanation on Why Toza; replace redundant contact eyebrow/heading with a reason to act while retaining the current primary action; keep Personal Shield and Inner Circle Shield and clarify cybersecurity through nearby descriptors rather than renaming by default.
- **Reason:** Owner asked to discuss these four questions, including whether Cyber belongs in the names. These are questions, not final naming or architecture decisions.
- **Authority:** Editorial recommendations following owner questions and an independent read-only strategy critique.
- **Affected pages/components:** Shared navigation and contact, What Happens, FAQ, Why Toza, Not IT Support, service/reference naming.
- **Supersedes:** Nothing locked or approved. Request a private conversation remains the locked primary action. Current routes and service names remain.
- **Status:** Proposed
- **Notes for v3 spec:** No page merger, route retirement/redirect, product rename or locked architecture change is approved by this discussion. Preserve useful fair-comparison content if a merger is later chosen. Keep qualification separate from paid assessment; do not promise findings or fixes during free contact. See revisions/en-02-v2/review/owner-feedback-02-discussion.md.

### D-016 — Apply approved changes and revise around the client's gains
- **Date:** 2026-10-04
- **Category:** Page role
- **Decision:** Apply the recommendations discussed under D-015 and the D-014 service model, then use all four Toza skills for another five-candidate round addressing structure, headings and copy. Explain what becomes better for the client. Expand the full-engagement description beyond device/account settings to digital identities, data and relevant related access arrangements.
- **Reason:** Owner: “add also identities, data, and similar relevant items” and “I approve the changes, but do another round using the skills” to explain “what becomes better for the client,” including structure and headings.
- **Authority:** Explicit later owner approval and revision instruction.
- **Affected pages/components:** Why Toza, Pricing, FAQ, What Happens/How Toza helps, Shared Copy System, category-explanation destination and future consolidation.
- **Supersedes:** D-015's proposed status for the recommended direction; D-012's preservation restriction insofar as the approved FAQ merger, service-model clarification and outcome-led review require revision. Original architecture ownership of category distinction transfers from standalone Not IT Support to FAQ, with a short positive explanation on Why Toza. The standalone Not IT Support revision task is absorbed, not independently drafted again. The original locked architecture remains an historical baseline read alongside this explicit override.
- **Status:** Approved direction and discussed changes; new complete candidate wording requires exact review
- **Implementation:** Use How Toza helps as the process display label, retaining /en/what-happens-during-the-visit.html. Consolidate category explanation and fair comparison in FAQ, remove standalone Not IT Support from candidate navigation/reference directory, and record route integration separately. Keep Personal Shield and Inner Circle Shield, adding descriptive cybersecurity language rather than Cyber to the names. Strengthen the contact heading/reason to act while retaining Request a private conversation. No live routing, production or deployment changes are authorized.
- **Scope guardrail:** Identities/data make the service description complete; they do not create unlimited coverage, new forensic/data-recovery services, bulk migration, a formal threat-model artifact or additional devices. Service benefits must remain attached to their purchased stage. PA-01-v2 remains protected.
- **Notes for v3 spec:** Record settings, practical security habits and teaching as the intervention, with no device monitoring and no installation of security software. Explain practical gain before procedure. Preserve exact current commercial rules and factual boundaries. Previous candidate passes are historical; independently review the complete replacements under D-009.

### D-017 — Brand name, writing and pronunciation
- **Date:** 2026-10-04
- **Category:** Protected phrase
- **Decision:** Name: Toza. Owner-supplied origin: Japanese 閉ざす (tozasu), “to close shut.” Pronunciation: TOH-zah, identical in English, Hebrew and Russian. Latin-only writing: toza for the wordmark, Toza in running text. Never capitalize the entire brand name, transliterate it, translate it or use Hebrew/Russian brand forms in a lockup.
- **Reason:** Owner supplied the binding brand reference while authorizing the next texts.
- **Authority:** Explicit owner brand instructions.
- **Affected pages/components:** All visible copy, metadata, wordmark specifications, accessible naming and future language adaptation.
- **Supersedes:** Any inconsistent brand styling in unapproved copy or future artwork.
- **Status:** Approved
- **Notes for v3 spec:** Keep the name in Latin across languages. Record the supplied origin as brand background; it need not become a marketing claim or imply complete closure of every exposure. Existing technical filenames, source snapshots and locked historical document titles are not renamed. Pronunciation notation is not an uppercase brand wordmark.

### D-018 — Continue the remaining editorial texts
- **Date:** 2026-10-04
- **Category:** Workflow
- **Decision:** Proceed to the next texts using the current canonical candidates and provisional Shared Copy: Home → Separation and Divorce → Business and Founder Dispute → They Know Something → Inheritance Conflict → For Attorneys. Apply current client-gain/service-model/brand direction and independent review under D-009.
- **Reason:** Owner instructed “Proceed to next texts.”
- **Authority:** Explicit continuation request.
- **Affected pages/components:** Remaining Phase 2/3 texts and consistency checks.
- **Supersedes:** Waiting for another instruction to begin those texts. Does not imply exact approval of previously unseen wording.
- **Status:** Approved workflow
- **Notes for v3 spec:** Keep PR #51 open for editorial review. No merge, main change, production integration or deployment. Not IT Support is already absorbed under D-016. Exact complete-copy approval still precedes the consolidated replacement specification.

### D-019 — Deliberate hardening as positive value; demonstrate expert intervention
- **Date:** 2026-10-04
- **Category:** Positioning
- **Decision:** Remove “If broader work is justified” as the sales premise for full hardening. Present a setup deliberately fitted to the client's circumstances as valuable without a known incident or urgent finding. Show expert interpretation of interconnected access and hands-on changes; examples illustrate the need without becoming an attack guide.
- **Reason:** Owner says people deserve better than defaults and the current simple examples understate Toza's expertise. Prospects may not imagine or be able to describe the underlying issue.
- **Authority:** Direct owner editorial feedback and revision instruction in the ongoing review.
- **Affected pages/components:** Eleven current candidates, shared descriptions and future consolidation.
- **Supersedes:** Conditional value framing in unapproved candidates, including doctrine/spec language where it makes full-service value depend on finding a fault. Locked files remain historical and are read with this explicit override.
- **Status:** Approved direction; exact replacement wording pending review.
- **Boundaries:** A value proposition is not a finding that every client is compromised or requires another purchase. Assessment conclusions remain open; describe priorities and recommended next steps, not a predetermined sale. Defaults are not universally unsafe. No exclusive-secret/no-search-can-find-it claim, guaranteed hidden finding, attack recipe, new deliverable or broader device/data scope. Separate agreed scope, price and voluntary purchase remain. Protected PA-01-v2 is not reopened for positioning changes.

### D-020 — Shorter public Assessment duration wording
- **Date:** 2026-10-04
- **Category:** Duration / Class A public-service statement
- **Decision:** Use “Typically four hours” as the public Assessment duration, paired with the Private Exposure Assessment name where appropriate. Remove the public “at least two hours” formulation from revised body, metadata, reusable descriptions and reference copy.
- **Reason:** Owner explicitly requested shortening “At least two hours in person. Typically four.” to “Private Exposure Assessment, Typically four hours.”
- **Authority:** Explicit later owner instruction.
- **Affected pages/components:** All candidate duration occurrences and a separately identified duration-only amendment for the three protected PA-01-v2 occurrences.
- **Supersedes:** D-003 and locked architecture/doctrine/AGENTS public-duration wording only. These historical files and the source snapshot remain unchanged.
- **Status:** Approved public wording; exact placement pending candidate review.
- **Commercial interpretation:** The typical duration is not a fixed cap, hourly purchase or trigger for an extra charge. Agreed intake, mapping, diagnosis and approved urgent first aid still define completion. This shortening does not change the operational minimum, price, scope, in-person delivery or urgent-arrival terms. No overtime policy is invented.
- **Protected-copy treatment:** Record the three exact duration substitutions separately; do not structurally or stylistically rewrite PA-01-v2 or mutate the source corpus. Other protected wording remains for the later consistency gate.

### D-021 — Apply the approved founder, privacy, trust and naming recommendations
- **Date:** 2026-10-04
- **Category:** Editorial direction and shared copy
- **Decision:** Apply the preceding discussion's recommendations and supplied examples: warmer founder hero/note, digital security and privacy, active service language, purpose followed by non-exhaustive situation examples, confidential handling with verified founder background, and full-name-first/short-name-later usage. Separate pre-booking qualification from the paid Assessment in Pricing.
- **Authority:** Owner: “All the rest - approved,” alongside explicit requests for further warmth, paid-visit clarity and genuinely short cards.
- **Supersedes:** Discussion-only status of those recommendations; current unapproved wording where it conflicts. This is not blanket approval of future unseen replacements.
- **Status:** Approved recommendations and presented excerpts; assembled replacements await exact review.
- **Boundaries:** No highest-level or absolute-confidentiality guarantee. Professional background belongs to Dr. Tabansky, not a claimed global Toza client history. No institutional endorsement inferred. Pricing tables, product facts, full disclosure and protected-copy boundaries remain.

### D-022 — Warmer, bolder voice and unmistakable hands-on Assessment
- **Date:** 2026-10-04
- **Category:** Positioning and page structure
- **Decision:** Rewrite Home and the rest of the persuasive copy for warmth, empathy and engagement. Recognize private-life stakes and the burden of working out unfamiliar access; show care through direct listening, explanation and implementation. Make the paid Assessment's inspection, diagnosis and approved urgent first aid explicit.
- **Authority:** Owner: “you must rewrite this and the rest”; the paid visit “includes inspection and often first aid fixes,” with an instruction to discuss and resolve the ambiguity.
- **Supersedes:** Cool “digital setup should fit your life” treatment and report-only impressions of the first paid service. Does not change commercial stages.
- **Status:** Approved revision direction; exact replacements pending.
- **Resolution:** The free conversation has no technical inspection. The paid visit examines relevant devices, accounts and access, diagnoses and makes approved urgent fixes where safely possible within scope. Full hardening remains a separately purchased engagement. Public copy describes the actual intervention without adding an unsupported frequency statistic or promise of a fix on every visit.
- **Guardrails:** Bolder language does not authorize invented misconduct, urgency, feelings, guaranteed privacy or universal insecurity of defaults. Inspection is not unrestricted review of private content. No new service facts or protected-page rewrite.

### D-023 — Short marketing cards alongside full reference descriptions
- **Date:** 2026-10-04
- **Category:** Shared copy
- **Decision:** Create genuinely short presentation versions with action, client benefit, essential scope/price and a detail link. Retain detailed descriptions as a separate reference tier. Cards include relevant “from,” separate-purchase and post-full-service eligibility qualifications.
- **Authority:** Explicit owner instruction to create short presentation versions.
- **Affected pages/components:** Shared Copy System, future presentation cards and their placement instructions.
- **Status:** Approved component direction; exact cards pending review.
- **Boundaries:** Cards are not substitutes for canonical Pricing or written terms. No automatic deployment, generated schema publication, changed prices or new inclusions. The existing shared system remains provisional until exact approval.

### D-024 — Exact acceptance of the current English copy
- **Date:** 2026-10-04
- **Category:** Workflow / exact copy approval
- **Decision:** The owner accepts all eleven current candidate exact-copy blocks, including metadata and Shared Copy, at commit aeb65a51adc3217844be9c465de69a875084b8e4. Shared Copy is no longer provisional. The already authorized three-substitution protected duration amendment is retained; no other PA rewrite is inferred.
- **Authority:** Owner: “I accept the copy.”
- **Supersedes:** Pending exact-review/provisional status of this accepted version and its incorporated direction/excerpts. Historical review records describe their own earlier state.
- **Status:** APPROVED exact copy. Hashes and sources are recorded in approved/acceptance-manifest.json.
- **Boundaries:** Acceptance does not authorize unrequested stylistic cuts, protected PA reopening, translation, production-template edits, main merge or deployment. Non-public implementation annotations inside Shared Copy are not webpage text; their former pending labels are superseded by this acceptance.

### D-025 — Post-acceptance full review and publication planning
- **Date:** 2026-10-04
- **Category:** Workflow
- **Decision:** Locate and use today's actual specifications and adapted skills for another review; after copy acceptance, plan publication, including design, layout and technical steps, using the existing solid foundation.
- **Authority:** Explicit owner instruction following acceptance; later status question asks where the original numbered plan stands.
- **Scope:** Complete Phase 4 protected consistency and Phase 5 full-corpus editorial review, then compile Phase 6 v3 from accepted sources. Prepare a concrete publication plan; no production implementation is requested in this instruction.
- **Result:** Independent D-009 review PASS with optional density/positioning observations and no public-promise conflict. Accepted wording remains unchanged. The consolidated spec records protected PA's permitted positioning exception. Publication design and language/route choices remain proposals.
- **Compression note:** Report actual results honestly: situation pages are materially shorter; Home and Process have smaller reductions. Exact acceptance governs present wording and does not permit further cuts merely to meet a length target.
