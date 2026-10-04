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
