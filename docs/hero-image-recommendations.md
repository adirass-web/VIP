# Hero Image Recommendations
## Replacing Deprecated `source.unsplash.com` References

*6 pages affected: `en/he/ru` × `business-dispute` + `commercial-spying`*  
*Both current IDs are shared across all three language versions of each page.*

---

## Why the Current Images Are Wrong

**`business-dispute` — current: `Lr6EUvV3qn4`**  
This photo shows a generic open-plan office or business meeting without tension or stakes. It reads as a stock photo for a consulting firm's homepage. The page copy talks about "greed, betrayal, and desperation" making former partners "ruthless." The image and the copy are in different emotional registers. The image is reassuring; the copy is alarming. That mismatch weakens the opening moment of the page.

**`commercial-spying` — current: `5sNKqv2ckUo`**  
This photo appears to be a generic technology/digital background — abstract, not contextual. For a page about corporate espionage and IP theft, it lacks specificity and threat. The buyer arriving at this page has just experienced a specific, frightening incident. A generic tech background does not acknowledge their emotional state.

---

## What a Good Hero Does for This Service

The service is bought in crisis. The hero image is not decoration — it is the first signal that **this provider understands exactly who you are and what you are facing.** The image should:

1. **Reflect the buyer's world** — they are an executive, a partner, a founder. The setting should look like their life (a boardroom, a premium office, a private meeting room), not a generic stock-photo version of business.
2. **Carry controlled tension** — not fear, not panic. The emotional register should be: *serious, contained, high-stakes.* Like the moment before a negotiation, not the moment during a crisis. The provider's brand is control, not alarm.
3. **Make devices peripheral, not central** — showing a smartphone or laptop as the hero element looks like a tech company, not a discreet security advisor. Devices should appear only as background context. The human element (or its intentional absence) is what matters.
4. **Work under a dark overlay** — the hero section likely renders text over the image with a dark gradient. Images should be high-contrast, not mid-tone, and should not have critical information in the center (where text overlays sit).
5. **Be culturally neutral** — the same image serves EN, HE, and RU pages. It must not carry visual signals that read as specifically American, Israeli, or Russian. European boardroom settings, neutral corporate environments, and abstract architectural shots all work. Specific cultural markers (flags, regional building styles, ethnic-coded contexts) do not.

---

## `business-dispute` — Recommended Image Direction

### The Narrative This Image Must Tell

*A high-stakes situation where control is about to change hands. Two parties are separated. Something important is being decided. The atmosphere is formal, tense, and private.*

### Visual Specification

| Attribute | Requirement |
|---|---|
| Setting | Boardroom, private meeting room, or empty executive corridor |
| Mood | Dark, formal, controlled tension — not violence, not chaos |
| Human presence | Optional: silhouettes or backs of figures work; faces should be obscured or turned away |
| Color palette | Deep navy, charcoal, slate, warm amber from room lighting |
| Composition | Horizontal emphasis; clear dark zone in upper-center for H1 text overlay |
| What to avoid | Open laptops (implies data is accessible), handshakes (implies agreement), smiling people, bright natural light, cluttered desks |

### Specific Unsplash Searches to Find This Image

Browse these Unsplash collection URLs and filter by "dark" or "moody":

- [`unsplash.com/s/photos/boardroom-night`](https://unsplash.com/s/photos/boardroom-night)
- [`unsplash.com/s/photos/executive-meeting`](https://unsplash.com/s/photos/executive-meeting)
- [`unsplash.com/s/photos/negotiation`](https://unsplash.com/s/photos/negotiation) — sort by "Latest," prefer moody/dark results
- [`unsplash.com/s/photos/board-room`](https://unsplash.com/s/photos/board-room) — filter to low-key lighting

### Ideal Image Description

An empty boardroom with dramatic side-lighting — long table, leather chairs, floor-to-ceiling windows showing a city at dusk or at night. No people. The emptiness conveys the weight of what is about to happen. The city lights in the background add premium context. This image works with a dark overlay and white text, and it does not date quickly.

Alternatively: a single suited figure viewed from behind, standing at a floor-to-ceiling window in a high-rise office, hands clasped behind their back, looking out over the city. The posture communicates: *calculated, private, in control.* No face, no ethnicity, no cultural markers.

### How to Replace the URL

The deprecated `source.unsplash.com/PHOTO_ID/1600x900` format must be replaced with the modern direct CDN format:

```
https://images.unsplash.com/photo-PHOTO_ID?w=1600&q=80&fit=crop&auto=format
```

Replace the `heroImages` array in the `<script>` block of each of the 6 files:

```js
// BEFORE (deprecated — returns broken image):
var heroImages = [
    'https://source.unsplash.com/Lr6EUvV3qn4/1600x900'
];

// AFTER (working CDN format — use the actual chosen photo ID):
var heroImages = [
    'https://images.unsplash.com/photo-CHOSEN_ID?w=1600&h=900&fit=crop&q=80&auto=format'
];
```

---

## `commercial-spying` — Recommended Image Direction

### The Narrative This Image Must Tell

*Someone or something is being watched — but the subject does not know it yet. The threat is invisible, inside, ambient. The setting is corporate but the atmosphere is shadowed and uncertain.*

### Visual Specification

| Attribute | Requirement |
|---|---|
| Setting | Dark office corridor, server room edge, executive desk at night, or abstract digital environment |
| Mood | Shadow, surveillance, quiet threat — not thriller-movie explosions |
| Human presence | Optional: a lone figure working late, a silhouette at a screen — or no people at all |
| Color palette | Dark blue, near-black, amber/orange monitor glow, cool grey |
| Composition | Strong depth of field; light sources should be artificial (screens, strip lights, exit signs) |
| What to avoid | Hooded figures (too clichéd/threatful rather than professional), green Matrix rain, stock "hacker" aesthetics, red/yellow warning-color palettes |

### Specific Unsplash Searches to Find This Image

- [`unsplash.com/s/photos/dark-office`](https://unsplash.com/s/photos/dark-office) — filter to high-contrast, minimal
- [`unsplash.com/s/photos/server-room`](https://unsplash.com/s/photos/server-room) — blue-lit rows of servers read as professional, not consumer
- [`unsplash.com/s/photos/surveillance`](https://unsplash.com/s/photos/surveillance) — prefer abstract CCTV-grid or shadow imagery over literal spy iconography
- [`unsplash.com/s/photos/office-night`](https://unsplash.com/s/photos/office-night) — a single illuminated desk in an otherwise dark open-plan office

### Ideal Image Description

**Option A — The Surveilled Office:** A wide shot of an open-plan corporate office photographed from above or from the end of a corridor, at night, with almost all lights off. One or two workstations are lit. The CCTV camera in the corner is visible but not dominant. The image is about the **potential** for observation, not observation itself.

**Option B — The Server Corridor:** A long corridor of server racks, illuminated in cool blue, shot from a low angle. No people. Conveys digital infrastructure that is either protecting or threatening something. This image is technically neutral — it can read as "we protect what's in here" with the right headline overlay.
https://unsplash.com/photos/a-close-up-of-a-rack-of-computer-equipment-eqd0f78u9nI
https://unsplash.com/photos/modern-office-interior-with-glass-walls-and-reflections-lIipHR8mi3o
https://unsplash.com/photos/a-man-sitting-in-front-of-a-computer-in-a-dark-room-4Uj0OFn-m3E
https://unsplash.com/photos/man-in-black-suit-jacket-S8vMGLKG2b0
https://unsplash.com/photos/a-man-standing-in-an-office-looking-out-the-window-N_SqLGtyTGU
https://unsplash.com/photos/woman-in-white-coat-sitting-on-black-chair-JQUyYo7jAlI
https://unsplash.com/photos/woman-in-white-shirt-holding-black-iphone-4-VGmgsDsck58
https://www.pexels.com/photo/two-girl-walking-on-a-street-17757460/
https://unsplash.com/photos/woman-looks-at-her-phone-in-a-dimly-lit-corridor-GVGC_6IgWJ4
https://unsplash.com/photos/a-woman-sitting-at-a-table-looking-at-her-cell-phone-n51MHCRorEM

**Option C — The Executive at Night:** A single figure in a suit sitting at a desk late at night, lit by their monitor. Face not visible. Documents on the desk. City visible through the window behind them. This version carries the most narrative weight — it implies a person who has stayed late to handle something important and private.

**Option C is the strongest choice for commercial-spying** because it mirrors the exact persona: a founder or executive alone with their devices, acutely aware that what they do next matters.

---

## Cross-Page Consistency Note

Since `business-dispute` and `commercial-spying` are sister pages (linked from each other's navigation), the two images should feel like they belong to the same visual family — same color temperature, same level of darkness, same absence of clichéd stock aesthetics — without being confusingly similar.

A reliable pairing: **boardroom empty at night** (business-dispute) + **executive alone at monitor at night** (commercial-spying). Both are dark. Both are premium. Both avoid visual clichés. They are differentiated by scale: one is about the room (the deal, the negotiation), the other is about the individual (the person whose IP is at risk).

---

## Implementation Checklist

- [ ] Choose `business-dispute` image → note Unsplash photo ID
- [ ] Choose `commercial-spying` image → note Unsplash photo ID
- [ ] Verify both images exist at `images.unsplash.com/photo-{ID}?w=1&q=1` (quick load test)
- [ ] Update `heroImages` array in:
  - [ ] `en/business-dispute.html` (line 236)
  - [ ] `he/business-dispute.html` (line 236)
  - [ ] `ru/business-dispute.html` (line 236)
  - [ ] `ru/business-dispute ru.html` (line 228)
  - [ ] `en/commercial-spying.html` (line 236)
  - [ ] `he/commercial-spying.html` (line 259)
  - [ ] `ru/commercial-spying.html` (line 236)
  - [ ] `ru/commercial-spying ru.html` (line 228)
- [ ] Test hero rendering in all three language versions (EN/HE/RU)
- [ ] Verify dark overlay text remains legible on new images
- [ ] Add `alt` text to hero `<img>` tags per `landing-copy.md` specifications (already written per language)

> **Note on the Ru folder duplication:** The `ru/` directory contains both `business-dispute.html` and `business-dispute ru.html` (with space), and similarly for commercial-spying. Both files contain the deprecated URL. Both must be updated.

---

## URL Format Reference

| Deprecated (broken) | Working replacement |
|---|---|
| `https://source.unsplash.com/PHOTO_ID/1600x900` | `https://images.unsplash.com/photo-PHOTO_ID?w=1600&h=900&fit=crop&q=80&auto=format` |

The `source.unsplash.com` API was shut down in 2024. All existing hotlinks to this domain return a broken image or redirect error. This is the cause of the current blank hero backgrounds on all 6 affected pages.
