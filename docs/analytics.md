# Tracking setup (Meta Pixel, CAPI, TikTok Pixel)

This site is static; add the following snippets and server-side endpoints when deploying.

## Meta Pixel (client)
1. Paste the standard Meta Pixel base code in `<head>` on every page (replace `YOUR_PIXEL_ID`).
2. Fire events:
   - `fbq('track', 'PageView');` on load.
   - `fbq('track', 'ViewContent');` on landing pages.
   - `fbq('track', 'Contact');` on WhatsApp/Signal `onclick` and phone/mail links.
3. For static HTML, you can inline the pixel or load it via `/assets/js/pixel.js`.

## Meta Conversions API (server)
1. Add a lightweight server endpoint that receives event payloads from the frontend (event name, timestamp, event_id, url, fbp/fbc cookies).
2. Forward to Meta’s Graph API `/v17.0/<PIXEL_ID>/events` with the token; include `event_id` to dedupe against the pixel.
3. Run over HTTPS; log failures but do **not** store PII beyond what Meta requires. Rotate the access token regularly.

## TikTok Pixel
1. Insert TikTok base code with your `ttq.load('<PIXEL_ID>')` in `<head>`.
2. Track events:
   - `ttq.track('ViewContent');` on landings.
   - `ttq.track('Contact');` on messenger clicks.
3. For CAPI-equivalent, proxy events to `https://business-api.tiktok.com/open_api/v1.3/pixel/track/` with `event_id` to dedupe.

## Recommended instrumentation hooks
- Add `onclick` handlers on all WhatsApp/Signal/phone/email CTAs to trigger both Meta and TikTok `Contact` events.
- Include UTM parameters on WA/Signal URLs for downstream attribution.
- If using Plausible/GA4, mirror the same event names for easier comparison.

## Deployment tips
- Keep the pixel snippets in one shared include to avoid drift across locales.
- Validate firing with Meta Pixel Helper / TikTok Pixel Helper before launch.
- Where JavaScript is blocked, ensure CTAs remain plain `<a>` links so messaging still works.
