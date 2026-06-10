# "What's Included" Scope Page — Content & Layout Spec

**Personal Cyber Shield — מגן** · 2026-06-10 · **For approval (Phase 1 of 2)**

> Derived from `Engagement-Agreement-SOW-2026-06-10.md` — **Appendix A (named measures + standards)** and **Appendix B (reach matrix)** only. Named measures only; no device-level settings, no fees, no legal terms. This is the content + layout pass. Design (Vault tokens + guilloché, build to `.njk`) is Phase 2, after sign-off.

## Decisions locked (this session)

- **Tier names & scope:** follow the SOW — **Personal · Home · Inner Circle · Sovereign** (Appendix B). ⚠ The rebuilt `/pricing` still says *Extended* and disagrees on two cells — see go-live dependency below.
- **Tone:** all-positive — included measures and reach only. **No "out of scope" section, no §11 safety-sequencing section.** Guardrails (defensive-only, light triage, IoT *contained* not per-device hardened) are honoured *inside* the positive copy, never as a list of negatives.
- **Page & nav:** title **"What's included"**, new page in the **main nav** (Situations · Why us · **What's included** · Pricing · FAQ).
- **Prices:** **fully price-free** — no tier prices, no add-on prices, no assessment fee anywhere on the page. Every number lives on `/pricing`.

---

## Page at a glance (layout / section order)

| # | Section | Job (one idea) | SOW source | Render as |
|---|---------|----------------|-----------|-----------|
| 1 | Hero | One standard, applied as far as you need | §3, §4 | hero band + CTA |
| 2 | The principle | The standard doesn't change between tiers — only its reach does | §3 | short statement band |
| 3 | What we harden | The ten named measures, grouped | Appendix A 1–10 | grouped list / cards |
| 4 | Mapped to public baselines | The standards behind the work (credibility) | §3, Appendix A cites | logo-free name row + one line |
| 5 | Reach by tier | How far the standard extends, tier by tier | Appendix B | comparison table |
| 6 | The Certificate | What you keep | §7, Appendix C | feature band |
| 7 | The Promise | Five commitments, every engagement | §9 | five-up row |
| 8 | On-ramp | Start with the Threat Assessment | §12, Appendix D | CTA band |

Site contact/footer (WhatsApp · Signal) is already supplied by `vault.njk` — no contact section needed in-page.

---

## 1 · Hero

**Kicker (gold, small-caps):** What's included

**Headline:** One disciplined standard — applied as far across your world as you need.

**Sub:** Every engagement applies the same government-grade hardening standard, in person, in your presence. What changes between tiers is reach — never the quality of the work. Here is exactly what that standard covers.

**Primary CTA:** Book a Threat Assessment → `#contact`
**Secondary CTA:** See tiers & pricing → `/en/pricing.html`

**Trust line:** In person only · No remote access · No cloud · No logs · No app

---

## 2 · The principle

**Eyebrow:** The principle

**H2:** The Standard doesn't change between tiers. Only its reach does.

**Lede:** A smaller engagement is not a lighter touch. Your phone is hardened to the same standard whether it stands alone or sits inside a household of devices. The tier you choose decides how far that standard extends — to more people, more devices, your home, your vehicle — not how thoroughly each is done.

---

## 3 · What we harden — the ten measures

**Eyebrow:** The Standard, measure by measure

**H2:** What we harden.

**Lede:** The named measures of the hardening standard, each mapped to recognised public baselines. The detailed settings stay internal — so they can't become a map for anyone working against you, and so the standard stays current as platforms change.

Grouped into six movements. Each measure = name + one plain line.

### Diagnose

**1 · Threat model & risk assessment**
We map your assets, who could realistically reach them, and how — then build the plan that follows from it.

**2 · Exposure triage** *(in every tier)*
We check what may already be wrong: live sessions and unfamiliar logins, silent mail-forwarding rules, hidden tracking and stalkerware, and whether your credentials have leaked. We find *how* you're exposed and close it.

### Lock your identity

**3 · Identity & authentication**
Unique passphrases held in a password manager; multi-factor moved off SMS to passkeys and hardware security keys; account-recovery closed — a private layer that decides who can reach your accounts.

### Harden your devices

**4 · Device & operating-system hardening**
Your devices brought to the current government baselines: encryption, lock and auto-erase policy, remote wipe, encrypted backups, and a check for tampering.

**5 · App, cloud & privacy configuration**
Per-app permissions, location and family sharing, shared albums and backups, cloud-account security, browser and social-media privacy — reviewed one by one and closed. We also reduce your data-broker footprint.

### Extend to your world

**6 · Home network & connected environment** *(Home tier and above)*
Your router, network, and smart-home accounts brought back under your sole command: current firmware and WPA3, segmentation into trusted, guest, and device networks, and connected devices contained behind it.

**7 · Vehicle** *(add-on)*
Your connected-car account, paired devices, and location data brought under your control.

**8 · Physical & travel**
The habits that protect your devices away from home — public-Wi-Fi and charging discipline — and, where your situation warrants, the high-risk modes (Apple Lockdown Mode, Google Advanced Protection) and a physical counter-surveillance sweep. *(Sovereign / by arrangement.)*

### Make it hold

**9 · Coaching & habits**
We train you on recognising phishing and social engineering, using your secure channel, and the routines that keep the hardening durable.

### The record

**10 · Certificate of Hardening**
A signed, dated record of every measure applied — for your file and your attorney's. *(Expanded in §6 below.)*

---

## 4 · Mapped to public baselines

**Eyebrow:** Mapped to public baselines

**H2:** The same standards used to defend governments.

**Body:** The hardening standard is mapped to recognised public baselines, for *both* phone platforms. The device steps follow EFF's Surveillance Self-Defense (Android) and the DISA Apple iOS / iPadOS STIG; the exposure-triage and high-risk-mode measures follow the guidance Amnesty International's Security Lab gives high-risk users. Specific settings are applied to the *then-current* published baseline for each platform and kept internal, by design.

**Name row (text, no logos):**
NSA · NIST (incl. SP 800-213 for connected-home devices) · CIS Benchmarks & CIS Controls v8 · DISA Apple iOS / iPadOS STIG · EFF Surveillance Self-Defense (iOS & Android) · UK & NZ NCSC · Amnesty International Security Lab · Coalition Against Stalkerware

---

## 5 · Reach by tier

**Eyebrow:** Reach by tier

**H2:** How far the standard extends.

**Intro:** The same measures, a wider reach as you move up. Prices for each tier are on the [pricing page](/en/pricing.html).

**Legend:** ● included · ○ where your threat model warrants · — not included · ★ bespoke

| Measure | Personal | Home | Inner Circle | Sovereign |
|---|:---:|:---:|:---:|:---:|
| 1 · Threat model | ● | ● | ● ×up to 3 | ★ |
| 2 · Exposure triage | ● | ● | ● ×up to 3 | ★ |
| 3 · Identity & authentication | ● | ● | ● ×up to 3 | ★ |
| 4 · Device & OS hardening | ● primary device | ● + up to 2 devices | ● ×up to 3 people | ★ |
| 5 · App, cloud & privacy | ● | ● | ● ×up to 3 | ★ |
| 6 · Home network & environment | — | ● | — *(add-on)* | ● |
| 7 · Vehicle | — *(add-on)* | — *(add-on)* | — *(add-on)* | ● |
| 8 · Physical & travel | ● habits; ○ high-risk modes | ● habits; ○ modes | ● habits; ○ modes | ● + counter-surveillance sweep |
| 9 · Coaching & habits | ● | ● | ● ×up to 3 | ★ |
| 10 · Certificate of Hardening | ● | ● | ● | ● |
| Annual Watch / Priority Retainer | optional | optional | optional | included |

**Footnote:** People beyond three, devices beyond a tier's cap, and the vehicle are priced add-ons, agreed before any extra work. See [pricing](/en/pricing.html).

**CTA:** See tiers & pricing → `/en/pricing.html`

---

## 6 · The Certificate of Hardening

**Eyebrow:** What you keep

**H2:** The Certificate of Hardening.

**Body:** Every engagement ends with a signed, dated certificate — a record of every measure applied and every standard referenced, suitable for your own records and your attorney's file. It records *what was done*, never the content of your data or your accounts.

---

## 7 · The Promise

**Eyebrow:** How we work

**H2:** Five commitments, every engagement.

| Commitment | One line |
|---|---|
| In person only | All work is done physically, in your presence. |
| No remote access | We never connect to or control your devices remotely. |
| No cloud | We never upload or process your data in any cloud service. |
| No logs | We keep no logs of your data, credentials, or device contents. |
| No app | Nothing of ours is installed on, or left on, your devices. |

---

## 8 · On-ramp

**Eyebrow:** Where to start

**H2:** Start with a Threat Assessment.

**Body:** A three-hour, in-person diagnostic and written report, credited in full toward any tier booked within 14 days. It confirms the right tier before you commit, and carries the same Promise and confidentiality. *(Its fee is shown on the pricing page.)*

**Primary CTA:** Book the assessment → `#contact`
**Secondary CTA:** See all tiers → `/en/pricing.html`

---

## Build / IA notes (for Phase 2)

- **File:** `src/en/whats-included.njk` · **permalink:** `/en/whats-included.html` · **slug:** `whats-included` · **layout:** `layouts/vault.njk`.
- **Nav:** add `What's included` to header + footer nav in `vault.njk` (between *Why us* and *Pricing*). Mirror in `src/_data/i18n/en.json` (`nav_whats_included`).
- **Meta:** title `What's included — the hardening standard | Personal Cyber Shield`; description from the hero sub; canonical `https://www.magenvip.tech/en/whats-included.html`.
- **Reuse:** the `.cmp` comparison-table styles and `.process` / `.tiers` patterns already in `vault.css` and `pricing.njk` — no new components needed for layout.
- **EN-only:** HE/RU deferred per current branch; hreflang stays EN/x-default.
- **Sitemap:** add the new URL to `sitemap.xml`; mention in `llms.txt` measures list if useful.

## Provenance & guardrails (counsel-auditable)

- Every measure line traces to **Appendix A**; the matrix is **Appendix B** verbatim minus prices. No internal checklist, no device-level setting is reproduced.
- **Light-triage guardrail held:** §2 says "we find *how* you're exposed," never "we reconstruct the breach" — no claim of retrospective forensics.
- **Defensive-only:** nothing implies acting on another party's devices.
- **IoT containment:** §6 says connected devices are *contained*, not per-device hardened.
- **Fully price-free** — no tier, add-on, or assessment fee on this page; **no liability / governing-law / confidentiality clauses** — those stay in the contract and on `/pricing`.

## Sources reviewed (2026-06-10)

**Added to the standards basis** (authoritative, public-interest):

- **EFF Surveillance Self-Defense — Android privacy & security settings** (reviewed Jun 2025). The Android counterpart to the iOS DISA STIG: 2FA / passkeys / security keys, Advanced Protection, device encryption & strong passcode, Find My Device / remote wipe / theft protection, permissions & ad-ID, backups, disable-2G. → backs measures 3, 4, 5, 8.
- **Amnesty International Security Lab — Digital Security Resource Hub (high-risk users).** Pegasus Project technical partner; the authority for the anti-spyware / high-risk angle: Lockdown Mode, Advanced Protection, App Privacy Report, Stolen Device Protection, block unknown-source installs, password manager + 2FA, recovery review. → backs measures 2 and 8.

*Both are now also cited in the SOW itself (§3 and Appendix A measures 2/4/8), per the 2026-06-10 decision.*

**Reviewed, not cited on the page:**

- **Rosener, "An In-Depth Guide to Personal Cybersecurity" (Medium, 2017).** A personal blog — dated and product-specific, not baseline-grade for a premium credibility page. Used only as a coverage cross-check: it independently confirms our ten measures are complete. **One idea worth keeping:** a family "authentication protocol" / code word against impersonation (more relevant now with AI voice-cloning) — a candidate addition to measure 9 (Coaching) and SOW Appendix A §9 if you want it. Not added here, to keep the page strictly SOW-derived.

---

## ⚠ Go-live dependency (tier naming + scope)

You've said **SOW wins**, but the **rebuilt `/pricing` page** (`_pricing-preview/pricing.html`, dated today) still **contradicts the SOW** on three points:

| | SOW Appendix B (this page) | Rebuilt /pricing |
|---|---|---|
| Tier-2 name | **Home** | Extended |
| Tier-2 vehicle | add-on (not in tier) | **included** |
| Tier-2 devices included | up to **2** | **1** |

*(The recurring add-on also differs: SOW "Annual Watch" vs pricing "Annual Threat Monitoring.")*

**Decision (2026-06-10):** the Scope page ships on **SOW "Home" now**; `/pricing` is reconciled separately, later, by Lior. For the pages to agree, `/pricing` will need: rename **Extended → Home**, move the **vehicle to an add-on**, raise included devices **1 → 2**, and align the **"Annual Watch"** naming. "Extended" also appears in `src/en/pricing.njk`, `faq.njk`, `_includes/schema-org.njk`, and several HE/RU pages — say the word and I'll run that pass. Until then, the Scope and pricing pages differ by design.

---

### Next step on approval
Convert this spec to `whats-included.njk`, wire the nav, apply Vault design (Phase 2), self-review with the copy-editing pass, then your review.
