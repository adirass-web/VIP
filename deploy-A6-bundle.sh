#!/usr/bin/env bash
# Deploy bundle: A-6 "Leaving a Controlling Relationship" page + site-wide removal of the
# "based on a true case" vignette attribution (EN/HE/RU). Pushes to the vault-redesign PREVIEW
# branch (production stays on main until the PR is merged).
#
# Drift-proof: starts from a FRESH clone of the branch and re-applies the changes
# deterministically (it does NOT copy from the possibly-dirty OneDrive tree, except the one
# brand-new page file). Run from a machine with network + the repo PAT.
#
#   bash deploy-A6-bundle.sh
set -euo pipefail

SRC="$(cd "$(dirname "$0")" && pwd)"          # this OneDrive working copy
CLONE="/tmp/vip-push-a6"
BRANCH="vault-redesign"
REMOTE="${REMOTE:-$(git -C "$SRC" config --get remote.origin.url)}"   # PAT-bearing URL from .git/config

echo "→ fresh clone of $BRANCH"
rm -rf "$CLONE"; git clone -b "$BRANCH" "$REMOTE" "$CLONE"; cd "$CLONE"
[ -e node_modules ] || ln -s "$SRC/node_modules" node_modules        # build deps (gitignored)

echo "→ add the new A-6 page (brand-new file, no drift risk)"
cp "$SRC/src/en/leaving-controlling-relationship.njk" src/en/

echo "→ remove vignette attribution site-wide"
sed -i '/class="src"/d' src/en/index.njk src/en/business-dispute.njk src/en/commercial-spying.njk \
  src/en/inheritance-clash.njk src/en/private-investigator.njk src/en/separation-divorce.njk
sed -i '/class="vignette-source"/d' src/he/*.njk src/ru/*.njk

echo "→ wire grid / cross-links / sitemap / llms (idempotent)"
python3 - <<'PY'
import io
SLUG="leaving-controlling-relationship"; LABEL="Leaving a Controlling Relationship"
def rd(p): return io.open(p,encoding="utf-8").read().split("\n")
def wr(p,L): io.open(p,"w",encoding="utf-8").write("\n".join(L))
p="src/en/index.njk"; L=rd(p)
if SLUG not in "\n".join(L):
    c='            <a class="sit" href="/en/%s.html"><span><span class="t">%s</span><span class="o">Close the tracking, accounts, and shared devices a controlling ex still holds — safely, on your timeline.</span></span><span class="arr" aria-hidden="true">&rarr;</span></a>'%(SLUG,LABEL)
    for i,l in enumerate(L):
        if 'class="sit"' in l and 'private-investigator.html' in l: L.insert(i+1,c); break
    wr(p,L)
link='            <a href="/en/%s.html">%s</a>'%(SLUG,LABEL)
for n in ["separation-divorce","business-dispute","inheritance-clash","commercial-spying","private-investigator"]:
    p="src/en/%s.njk"%n; L=rd(p)
    if SLUG in "\n".join(L): continue
    for i,l in enumerate(L):
        if "</nav>" in l: L.insert(i,link); break
    wr(p,L)
p="sitemap.xml"; L=rd(p)
if SLUG not in "\n".join(L):
    b=['  <url>','    <loc>https://www.magenvip.tech/en/%s.html</loc>'%SLUG,'    <lastmod>2026-06-10</lastmod>','    <changefreq>monthly</changefreq>','    <priority>0.8</priority>','  </url>']
    for i,l in enumerate(L):
        if "pricing.html</loc>" in l:
            j=i
            while j>0 and "<url>" not in L[j]: j-=1
            L[j:j]=b; break
    wr(p,L)
p="llms.txt"; L=rd(p)
if SLUG not in "\n".join(L):
    svc="- [%s](/en/%s.html): Stalking and coercive control after a relationship — stalkerware, location trackers, shared accounts, and smart-home access. We find and close what's tracking you, on your timeline, planned around your safety."%(LABEL,SLUG)
    who="- Anyone leaving a controlling or abusive relationship who needs tracking, stalkerware, and shared access closed safely"
    for i,l in enumerate(L):
        if l.startswith("- [Private Investigator Defence]"): L.insert(i+1,svc); break
    for i,l in enumerate(L):
        if l.startswith("- Anyone who expects, or already senses, private-investigator surveillance"): L.insert(i+1,who); break
    wr(p,L)
PY

echo "→ append .safety CSS rule"
if ! grep -q '\.safety{' assets/css/vault.css; then
cat >> assets/css/vault.css <<'CSS'

/* situation safety callout (A-6 + future precautionary pages) */
.safety{margin-top:1.6rem;padding:1.05rem 1.3rem;border:1px solid var(--hairline-gold);background:var(--gold-wash);border-radius:var(--r-1);font-size:.9rem;color:var(--ink-dim);max-width:var(--w-prose)}
.safety b{color:var(--ink);font-weight:500}
.safety a{color:var(--gold-ink);border-bottom:1px solid var(--hairline-gold);padding-bottom:1px}
CSS
fi

echo "→ build + verify"
npx @11ty/eleventy --output=/tmp/vsite >/dev/null
test -f /tmp/vsite/en/leaving-controlling-relationship.html || { echo "A-6 page did not build"; exit 1; }
if grep -ral 'class="\(src\|vignette-source\)"' src/ >/dev/null; then echo "attribution still present — abort"; exit 1; fi
echo "  build OK, attribution CLEAN, A-6 page present"

echo "→ commit + push to $BRANCH"
git add -A
git commit -m "Add A-6 'Leaving a Controlling Relationship' page (vault); remove 'based on a true case' attribution site-wide (EN/HE/RU)"
git push origin "$BRANCH"
echo "✓ pushed. Preview: https://vault-redesign.magenvip.pages.dev/en/leaving-controlling-relationship.html"
