# TOZA hardening service handoff

Date: 2026-11-01
Status: Handoff only. No website copy, service claims, or implementation changes authorized by this document. Research planning is a separate task.

## Owner-confirmed service description and boundaries

TOZA hardens devices, accounts, and personal digital life. Service sequence: threat modeling; digital asset inventory (hardware, software, accounts and data); indicators-of-compromise scan; hardening of devices, operating systems, accounts, and network where in scope; hardware-key issuance; coaching; Certificate of Hardening. All work is in person, in the client's presence.

Excluded: remote access to client devices; uploading client material to TOZA; cloud processing of client material; retention of device logs; investigation of another party; forensic reconstruction; offensive operations. In-person configuration of the client's existing online accounts is expressly permitted.

TOZA may retain a minimal completion record and certificate, without credentials, device logs, or client content. The allowed completion-record fields have not yet been specified.

## Assistant recommendations parked for separate business/service work

These are recommendations, not accepted marketing language or finalized operating policy:

1. Define the TOZA hardening standard through specific source publications, revisions, applicable controls, verification methods, and exceptions. Avoid blanket compliance claims based on a list of source organizations.
2. Distinguish CIS Controls v8/v8.1 from product-specific CIS Benchmarks, which have independent versions. Identify individual NIST SP 800 publications rather than citing the whole series as a single standard.
3. Adapt enterprise and military configuration guidance to unmanaged consumer devices, client capabilities, recovery requirements, and usability; do not adopt it wholesale.
4. Describe IOC scanning as bounded screening with explicit coverage and limits. A negative result does not establish absence of compromise or amount to forensic clearance.
5. Specify the Certificate of Hardening as an attestation of named controls verified on scoped assets at a stated time, recording exclusions and unresolved items. It should not imply permanent security, forensic clearance, or endorsement by source organizations.
6. Define when suspected-compromise findings exceed the hardening service and require a separate referral. Keep investigation and reconstruction outside scope.
7. Consider hardware-key enrollment, recovery arrangements, and verification alongside issuance. This is a proposed operational elaboration, not a change to approved website wording.
8. Develop separate preventive, active-conflict, and suspected-compromise procedures. Common fundamentals may require different execution sequences, particularly where changing access can alert another person.

## Reference points checked during planning

- CIS Controls v8.1: https://www.cisecurity.org/controls/v8-1
- CIS Benchmarks FAQ: https://www.cisecurity.org/cis-benchmarks/cis-benchmarks-faq
- NIST publication series: https://csrc.nist.gov/publications
- Australian eSafety online safety checklist: https://www.esafety.gov.au/key-topics/domestic-family-violence/online-safety-checklist

These links support terminology and selected planning concerns; they are not a completed source audit or selected TOZA baseline.

## Boundary with the separate research task

The active task is planning a source-backed practitioner reference and a simpler client checklist. English research is first. A separate Russian-language search will focus on cybersecurity community reports about threats and observed cases, excluding Russian IT vendors. This is not a request for Russian translation. Threat models exclude state-backed actors and law-enforcement agencies, while including relevant non-state gray-zone conduct. No broad research execution or final prioritization has yet been approved in this planning exchange.
