# Toza Upgrade Plan and Delivery Harness

Status: **English phase-one build verified; draft pull request pending**
Authority: `docs/visual-upgrade-decision-tree.md` remains the single source of truth for project decisions. This document translates those decisions into an executable service and website plan; it does not override the register.

## 1. Feasibility conclusion

The approved commercial architecture is feasible if Toza uses outcome-based assessment completion, a status-driven hardening checklist, client-controlled credentials, and explicit boundaries between first aid and methodical hardening.

The principal feasibility risks are controlled as follows:

- **Assessment-time ambiguity:** controlled by a fixed diagnostic device scope (one phone and one computer) and outcome-based completion: intake, diagnosis, and urgent first aid complete. Public copy does not sell the assessment by hours or days.
- **Assessment versus full-engagement boundary:** first aid closes urgent paths; Personal Shield completes the methodical hardening, migration, training, verification, and documentation. The client may stop after the separately purchased assessment, but the assessment alone is not completed protection.
- **Non-forensic boundary:** findings may trigger urgent containment internally, but public/client-facing language does not attribute an actor or declare a forensic breach conclusion.
- **Checklist completion:** every applicable item receives one neutral status; sensitive reasons are not recorded.
- **Two-day price risk:** day two is used only when required and is included in the fixed ₪14,000 price.
- **Migration expansion:** default migration is limited to core identity, recovery paths, and critical services; bulk historical migration is outside the package.
- **Support expansion:** 14-day support covers only issues directly related to changes made by Toza.

## 2. Locked service truth table

| Element | Private Exposure Assessment | Personal Shield |
|---|---|---|
| Price | ₪3,500 prepaid | ₪14,000; assessment credited in full within 14 days |
| People | One client | One client |
| Physical-device scope | One phone and one computer | One phone and one computer |
| Time | Outcome-based; not sold by the hour | Typically one or two working days; second day when needed, included |
| Completion | Intake, diagnosis, and urgent first aid complete | Fixed baseline plus relevant modules completed |
| Intervention | Immediate first aid for urgent exposure | Methodical hardening of devices, identities, and apps |
| Identities/accounts | Diagnose relevant identity, access, and recovery paths | Harden relevant identities; create replacement core accounts when safer |
| Migration | Not a systematic migration service | Core identity, recovery paths, and critical services |
| Authentication | Diagnose current authentication and recovery exposure | Two physical 2FA security keys supplied, configured, and tested |
| Training | Explain findings and immediate changes | Practical client training is included |
| Deliverable | Brief plain-English assessment summary | Private dated record of work performed |
| Attorney summary | With client authorization | With client authorization |
| Support | No separate support promise currently approved | 14 days for issues directly related to Toza's changes, through WhatsApp/Signal and scheduled calls |

Commercial rule: the assessment is the separately purchasable first stage; Personal Shield completes the Toza method. A client may choose not to continue, but full hardening is always required to complete the method. Do not use conditional phrases such as **if deeper work is needed**, **where full intervention is required**, or **whether full hardening is justified**.

## 3. Status vocabulary

Use only these neutral checklist states in the client-owned record:

- **Completed**
- **Not applicable**
- **Technically unavailable**
- **Not completed at client direction**

Do not record sensitive reasons, credentials, recovery codes, key PINs, message contents, allegations, or unnecessary account identifiers.

## 4. Private Exposure Assessment harness

### 4.1 Start and authorization

- Confirm the client identity sufficiently for the engagement without copying unnecessary identity documents.
- Confirm the phone and computer are owned by the client or that the client has clear authority to change them.
- Confirm Toza works only within the client's authorized environment.
- Restate that the service is not investigation, attribution, forensic reconstruction, evidence collection, or legal advice.
- Agree that every material change is explained and approved before execution.
- Ask whether counsel or another authorized adviser has imposed a timing constraint.

### 4.2 Full intake

Capture the minimum information needed to understand:

- The client's specific concern and observed facts.
- Relevant relationship/business changes and timing.
- Which information, access, routines, communications, or assets may matter.
- The client's core phone, computer, email, Apple/Google/Microsoft identity, recovery methods, and critical apps/services.
- Known sharing, delegation, family/business overlap, recovery contacts, trusted devices, and former access.
- Changes already attempted and any resulting alerts or lockouts.
- Immediate consequences the client is trying to prevent.

Do not create a narrative dossier. Keep working notes transient and return the client-facing summary without retaining a log of the client's digital life.

### 4.3 Diagnostic baseline

Review only what is relevant to the stated concern, but consider the whole exposure path rather than one setting.

#### Phone

- Supported OS and current security updates.
- Screen lock, biometric enrollment, auto-lock, and lock-screen information exposure.
- Account ownership, trusted devices, active sessions, and recovery methods.
- Installed apps, high-risk permissions, accessibility/device-management controls, VPNs, profiles, and unfamiliar configuration.
- Location, family/household sharing, cloud sync, shared albums/storage, messaging-linked devices, browser sync, and password/passkey stores where relevant.
- Carrier/eSIM and account-recovery dependencies where relevant.

#### Computer

- Supported OS and security updates.
- Local users, administrator rights, screen lock, remote-access settings, startup/login items, and browser profiles/extensions.
- Disk encryption state and recovery-key control.
- Cloud sync, shared folders, communication clients, saved sessions, password/passkey stores, and device-management controls.
- Built-in endpoint, firewall, app/browser, and malware-protection status where applicable.

#### Core identity and recovery

- Core email and Apple/Google/Microsoft identity ownership.
- Unique credentials and password-manager condition.
- Recovery email, recovery phone, recovery contacts/codes, trusted devices, passkeys, security keys, and authenticator bindings.
- Active sessions, devices, delegated access, shared credentials, forwarding/filter rules, app passwords, and third-party OAuth connections where supported.
- Cross-account reuse or circular recovery dependencies.

#### Compound exposure

- **Identity convergence:** public identifiers, reused usernames/email, credentials, and recovery paths connecting separate parts of life.
- **Trust residue:** sharing, sessions, devices, recovery roles, and permissions persisting after trust changes.
- **Personal/work crossover:** personal identity or device controlling business access, or business systems exposing personal identity and recovery.

### 4.4 Internal urgent-first-aid trigger

Treat exposure as urgent when:

1. The client describes a specific threat or observed event; and
2. The assessment finds corroborating indicators consistent with ongoing unauthorized access or exposure.

This is an internal containment rule, not a forensic conclusion. Do not identify an actor, attribute conduct, or state publicly that a breach has been proved.

If a different serious urgent exposure is discovered, explain it and obtain new client approval before expanding first aid.

Client-facing wording must remain active: **I close urgent exposure when I can do so safely within the assessment. If I find a serious issue outside the agreed concern, I explain it and ask for approval before I expand the work.**

### 4.5 First-aid actions

Use the least disruptive action that restores immediate control or contains urgent exposure. Depending on the approved facts and platform, this may include:

- Revoke an unauthorized or no-longer-authorized session/device.
- Correct an exposed recovery method or trusted contact.
- Change an urgently compromised credential and secure the recovery path.
- Enable or repair appropriate multifactor authentication.
- Remove or disable an unauthorized sharing/delegation path.
- Remove a clearly unauthorized profile, management control, forwarding rule, app password, or connected app when safe and approved.
- Correct an urgent device-lock, remote-access, or permission exposure.
- Preserve access by establishing a safe recovery method before removing a risky one.

First aid does not become systematic hardening, full account migration, device replacement, broad app cleanup, training, or a guarantee that no exposure remains.

### 4.6 Assessment completion

The assessment is complete only when:

- Intake is complete enough to understand the situation.
- The one phone and one computer have been diagnostically reviewed to the extent relevant.
- Relevant identity, recovery, session, sharing, and crossover paths have been mapped.
- Urgent first aid is complete for the approved scope.
- Unexpected urgent items have been explained and either approved or declined.
- The client receives a brief plain-English summary of what was reviewed, what was urgently changed, what remains, and whether a full engagement is justified.

## 5. Personal Shield harness

### 5.1 Entry condition

- Confirm assessment findings and current state.
- Confirm one phone and one computer.
- Confirm relevant baseline and situation/platform modules.
- Confirm which new core accounts and essential migrations are required.
- Confirm the two-day contingency is included in the fixed price and used only when necessary.
- Toza selects and supplies two compatible physical security keys.

Public timing language: **A typical Personal Shield engagement requires one or two working days, depending on the volume of data and apps, the complexity of the account relationships, and the threat model.**

### 5.2 Fixed baseline checklist

#### Ownership and recovery foundation

- Client controls the phone, computer, core email, platform identity, mobile number, and recovery channels.
- Circular or risky recovery dependencies are removed where possible.
- Recovery information is current and client-controlled.
- Recovery codes/keys are generated where supported and stored by the client outside the devices being protected.
- No credential, recovery secret, or key PIN is retained by Toza.

#### Phone hardening

- Supported OS and apps updated; automatic updates configured appropriately.
- Strong device passcode and appropriate biometric enrollment.
- Auto-lock and lock-screen information exposure configured.
- Unknown users, trusted devices, profiles, device-management controls, VPNs, keyboards, accessibility services, and high-risk apps reviewed.
- App permissions, location access, local-network access, contacts/photos/microphone/camera access, and background access reduced to need.
- Find-device, cloud backup/sync, family sharing, shared albums/storage, messaging-linked devices, browser sync, and password/passkey stores reviewed.
- Carrier/eSIM, SIM protection, and carrier-account recovery reviewed where relevant.

#### Computer hardening

- Supported OS and applications updated; automatic security updates configured.
- Strong local sign-in; appropriate biometric/PIN controls.
- Disk encryption enabled where supported; recovery key controlled by the client.
- Screen lock, local accounts, administrator privileges, remote access, sharing, startup/login items, and browser profiles/extensions reviewed.
- Built-in firewall, endpoint protection, reputation/app/browser controls, and malware protection enabled where supported.
- Cloud sync, shared folders, saved sessions, communication clients, password/passkey stores, and device-management controls reviewed.
- Backup and recovery readiness verified without uploading data to Toza systems.

#### Core identity and email hardening

- Core email and platform identities use unique credentials managed through an appropriate password manager or platform credential system.
- Active sessions and trusted-device lists reviewed; stale or unauthorized access removed.
- Recovery email, phone, contacts, codes, and fallback methods reviewed and secured.
- Forwarding, filters, delegates, app passwords, connected apps/OAuth grants, and third-party access reviewed.
- Account alerts and security notifications reach a client-controlled destination.
- High-value accounts are mapped to the hardened core identity and recovery structure.

#### Two security keys

- Confirm platform/service compatibility before enrollment.
- Initialize both keys and set client-controlled PINs where applicable.
- Enroll both keys on each approved supported core account.
- Test sign-in with both keys.
- Confirm recovery/fallback methods do not silently recreate the original weak path.
- Designate one daily/accessible key and one backup key stored separately.
- Train the client on use, loss, replacement, and recovery.

#### Apps and services

- Prioritize critical communications, cloud storage, financial, social, transport/vehicle, home, and work-overlap services identified during assessment.
- Review sessions/devices, recovery, sharing/delegation, privacy/discoverability, location, connected apps, and notification destinations.
- Remove obsolete or unauthorized access with client approval.
- Apply strongest supported authentication consistent with reliable recovery.

#### Client training

- Use and store both physical keys.
- Use the password/passkey system selected for the client.
- Recognize legitimate account alerts and recovery prompts.
- Approve new apps, permissions, sharing, and recovery methods deliberately.
- Respond if a key/device is lost or an unexpected sign-in appears.
- Understand which changes are visible to other logged-in devices or shared-service participants.

### 5.3 Relevant modules

Apply only the modules supported by the assessment:

- **Identity convergence module:** identifier separation, recovery-graph cleanup, credential reuse elimination, public discoverability reduction, and core-identity restructuring.
- **Trust residue module:** family/household sharing, linked devices, shared plans/storage, recovery contacts, persistent sessions, delegated access, and location visibility.
- **Personal/work crossover module:** personal email and device dependencies, business recovery and admin paths, shared storage/communications, browser/profile separation, and authorized coordination with business IT or counsel where needed.
- **Apple module:** Apple Account devices/recovery, Family Sharing, Find My/location, iCloud sharing, configuration profiles/device management, app privacy, linked messaging, passkeys/security keys, and Mac/iPhone-specific controls.
- **Google/Android module:** Google Security Checkup, devices/sessions, recovery, connected apps, password/passkey/security-key state, Android permission/privacy dashboard, Play Protect, location and sharing.
- **Microsoft/Windows module:** Microsoft security info/devices/sessions, recovery code, security key, Windows Hello, BitLocker/device encryption, Defender, firewall, app/browser control, remote access, and account separation.

### 5.4 Replacement core accounts and essential migration

When an existing core account is too risky to remain the foundation:

- Create the replacement core identity with a unique credential and client-controlled recovery.
- Enroll both security keys where supported.
- Move critical recovery dependencies to the new identity in a controlled order.
- Move essential access to critical services required for daily continuity.
- Confirm alerts and recovery reach the new controlled destination.
- Verify that the old account no longer remains an unintended recovery or access path.
- Document remaining services that the client must migrate later.

Excluded by default: bulk historical email, photo, message, file, or archive migration; mass contact cleanup; unsupported third-party systems; and business-admin changes without authorization.

### 5.5 Verification and completion

Personal Shield is complete when each applicable fixed-baseline and selected-module item has one permitted status and:

- Phone and computer hardening is verified after restart/sign-in where appropriate.
- Core identities, recovery methods, sessions, sharing, and critical apps are verified.
- Both physical security keys are enrolled and tested on approved supported accounts.
- Essential migration is verified.
- The client demonstrates key use and understands the recovery path.
- The private dated record is delivered to the client.
- The client chooses the private dated-record delivery format.
- Any non-completed item is marked by status only, without sensitive reasons.

Use the second included workday when migration, platform delays, verification, or checklist completion cannot responsibly be finished on day one.

## 6. Fourteen-day adjustment support

### Included

- A supported account, app, or device behaves unexpectedly because of a Toza change.
- A configured security key, recovery method, session change, permission, or migrated critical service needs adjustment.
- The client needs clarification on using a control configured during Personal Shield.

### Excluded

- New devices, accounts, apps, incidents, threats, or migrations outside the completed scope.
- General IT support or unrelated troubleshooting.
- New investigation, attribution, evidence collection, or legal support.
- Lost/replacement hardware costs unless separately agreed.

Support uses WhatsApp or Signal plus scheduled calls. It does not require the client to send credentials, recovery codes, screenshots containing sensitive material, or detailed allegations in the first message.

## 7. Website content harness

### 7.1 Controlled service vocabulary

- **Assessment:** full intake, diagnosis, and urgent first aid.
- **First aid:** immediate containment or restoration of control for urgent exposure.
- **Personal Shield:** methodical hardening, migration, two-key deployment, training, verification, and a private dated record.
- **Urgent response:** scheduling/arrival condition, distinct from first aid included within the assessment.
- **Summary:** brief assessment outcome.
- **Private dated record:** full-package completion record.
- **Attorney-friendly summary:** optional, client-authorized explanation of work performed; not evidence or a forensic report.

Public method claim: **I developed a complete personal-hardening method for high-risk personal situations. It combines current government security standards, guidance for high-risk individuals, platform-specific protections and twenty years of field experience in one disciplined sequence.**

Use first-person singular for work personally performed by Dr. Lior Tabansky. Use active intervention verbs. Do not imply endorsement, certification, or use by intelligence or protective agencies.

Avoid using `reset`, `audit`, `investigation`, `forensic`, `threat actor`, `breach confirmed`, and `guaranteed secure` as service promises.

### 7.2 Home content plan

1. **Hero:** approved category headline, action promise, portrait, one private-conversation CTA.
2. **Compound exposure:** preserve “They may not need to hack you”; explain Identity convergence, Trust residue, and Personal/work crossover.
3. **Method:** Map · Close and harden · Verify; clarify that assessment begins with diagnosis/first aid and full engagement performs methodical hardening.
4. **Founder:** preserve “One senior expert, start to finish” plus approved twenty-year practical proof and external profile link.
5. **Situation routes:** discreet personal-relationship and business-interest labels; each routes to one permanent focused landing page.
6. **Assessment:** ₪3,500, one phone and one computer, outcome-based completion, urgent first aid, plain-English summary, 14-day credit, urgent-arrival option, and strong visit link. Do not market it by hours or days.
7. **Final conversion:** Request a private conversation; WhatsApp/Signal choice; neutral first-message guidance. Keep anxiety answers on the separate FAQ page.

### 7.3 Primary landing-page content plan

Both pages use the approved CXL spine and one conversion action.

- Preserve the strongest current recognition and timing copy.
- Replace isolated examples with the relevant compound path.
- Explain the assessment/full-engagement distinction accurately.
- Reuse operational privacy proof only where it resolves a specific anxiety.
- State boundaries without repeating the entire FAQ.
- Keep the standard assessment price visible.
- Do not imply hostile access has been proved.

### 7.4 Supporting-page change plan

- **Private Exposure Assessment:** replace “diagnostic only” with intake + diagnosis + urgent first aid; add device scope and outcome-based completion.
- **Pricing:** replace one-day Personal Shield with one primary day plus an included second day when needed; add one phone, one computer, two included keys, essential migration, fixed checklist, and 14-day adjustment support.
- **Visit:** differentiate the assessment visit from Personal Shield delivery; preserve the five-stage experience.
- **FAQ:** update assessment, Personal Shield, deliverables, keys, migration, second-day, checklist, support, and “no retained logs” answers; remove stale safety-service framing.
- **Why Toza:** preserve substantially; align service description with intake/first aid and full hardening.
- **Not IT Support:** preserve the alternatives comparison; replace “tech-savvy nephew” with a neutral premium formulation.
- **Attorneys:** preserve referral triggers and boundaries; update service stages; remove controlling-relationship protocol.
- **Secondary situations:** apply the approved keep/consolidate/retire plan in both languages, redirects, sitemap, and internal links.

## 8. Implementation plan and gates

### Gate A: Operational validation

- Validate every assessment and Personal Shield checklist item against actual delivery practice.
- Toza selects the two included compatible security keys; confirm type, connector compatibility, procurement, spare-key storage guidance, and replacement policy before delivery.
- The client chooses the private dated-record format; implement approved paper and client-controlled digital options without Toza cloud storage.
- Confirm tax/payment language and any invoice/receipt requirements separately from “no retained logs.”

### Gate B: Final English content

- **COMPLETED 2026-08-28:** Home and both primary situation landing pages approved as Revision 3.
- Supporting-page production copy remains governed by the approved change specification and controlled vocabulary.
- Claim, repetition, active-voice, CTA, price, scope, deliverable, and assessment/full-hardening boundary checks passed.

### Gate C: Visual references

- **COMPLETED FOR PHASE ONE 2026-08-28:** two documented visual directions were compared and Evidence Ledger was selected with category clarity first.
- Exposure-path treatment, portrait use, typography, grid, geometry, minimal motion, mobile behavior and RTL-capable primitives are locked in `docs/toza-production-implementation-spec.md`.
- Ambient photography remains a separate asset gate. No ambient image enters production until licensing and non-AI provenance are confirmed.

### Gate D: Production specification

- **COMPLETED FOR PHASE ONE 2026-08-28:** components, three-page scope, SEO continuity, analytics/privacy boundaries, accessibility, performance, responsive/RTL behavior and tests are locked.
- Redirects, supporting-page changes, Hebrew copy migration and deployment remain later explicitly scoped work.

### Gate E: Build

- **PHASE ONE IMPLEMENTED IN AN ISOLATED WORKTREE:** English Home, shared dossier components and both English primary landing pages are built without ambient photography.
- **QA COMPLETED 2026-08-28:** dossier build contracts, the complete existing verification suite, desktop/mobile rendering, 320px reflow and RTL regression checks pass.
- Supporting-page updates, Hebrew native copy, redirects/retirements, sitemap changes and any measurement specification remain outside this phase-one branch.
- Open a draft PR for review; merge and deploy only after explicit user approval.

## 9. Primary references for the baseline

- [NIST SP 800-63B-4: Authentication and Authenticator Management](https://pages.nist.gov/800-63-4/sp800-63b.html)
- [NIST phishing-resistant authenticator guidance](https://pages.nist.gov/800-63-4/sp800-63b/authenticators/)
- [UK NCSC: Guidance for high-risk individuals on protecting accounts and devices](https://www.ncsc.gov.uk/collection/defending-democracy/guidance-for-high-risk-individuals)
- [NSA: Telework and mobile-security guidance for end users](https://www.nsa.gov/Press-Room/Telework-and-Mobile-Security-Guidance/)
- [Apple: Security and your Apple Account](https://support.apple.com/en-gb/102614)
- [Apple: Security Keys for Apple Account](https://support.apple.com/en-gb/102637)
- [Apple: Limit device and account access](https://support.apple.com/en-lb/guide/personal-safety/ipsb8deced49/web)
- [Apple: Review and delete configuration profiles](https://support.apple.com/en-lb/guide/personal-safety/ips327569a75/web)
- [Apple: Control app access to information](https://support.apple.com/guide/iphone/control-access-to-information-in-apps-iph251e92810/ios)
- [Google: Make your account more secure](https://support.google.com/accounts/answer/46526)
- [Google: Use a security key for 2-Step Verification](https://support.google.com/accounts/answer/6103523)
- [Google: Secure a compromised account](https://support.google.com/accounts/answer/6294825)
- [Google: Android app permissions](https://support.google.com/android/answer/9431959)
- [Microsoft: Sign in with a security key](https://support.microsoft.com/en-us/security/sign-in-to-your-account-with-a-security-key)
- [Microsoft: Sign out everywhere](https://support.microsoft.com/en-us/accounts-billing/manage/how-to-sign-out-of-your-microsoft-account-everywhere)
- [Microsoft: Device Encryption in Windows](https://support.microsoft.com/en-us/windows/security/encryption/device-encryption-in-windows)
- [Microsoft: Windows Security device controls](https://support.microsoft.com/en-us/windows/security/windows-security/device-security-in-the-windows-security-app)
- [CISA: Secure Our World](https://www.cisa.gov/secure-our-world)
