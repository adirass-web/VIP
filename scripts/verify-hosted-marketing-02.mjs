// Validate the owned, isolated preview after deployment from its gated build.
// This step receives no deployment token. Fidelity requests use a fixed origin
// and reject foreign redirect targets before contacting them.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {createRequire} from 'node:module';
import {setTimeout as delay} from 'node:timers/promises';
const {pages, assertAuthority} = createRequire(import.meta.url)('./accepted-copy.cjs');
assertAuthority();
const checkout = spawnSync('git', ['rev-parse','HEAD'], {encoding:'utf8', timeout:10_000});
assert.equal(checkout.status, 0, 'Read checked-out revision');
assert.match(process.env.PREVIEW_HEAD_SHA || '', /^[a-f0-9]{40}$/, 'Exact PR revision supplied by workflow');
assert.equal(checkout.stdout.trim(), process.env.PREVIEW_HEAD_SHA, 'Hosted verification uses the checked-out PR head');
const origin = 'https://marketing-02-release.toza-site.pages.dev';
const hash = data => crypto.createHash('sha256').update(data).digest('hex');
const securityHeaders = {
  'x-frame-options': 'DENY',
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'permissions-policy': 'geolocation=(), camera=(), microphone=(), payment=()',
};
const checked = [];
async function fetchFile(file) {
  let url = new URL('/' + file, origin);
  const signal = AbortSignal.timeout(15_000);
  for (let redirects = 0; redirects <= 5; redirects++) {
    const response = await fetch(url, {redirect:'manual', headers:{'Cache-Control':'no-cache'}, signal});
    if (![301,302,303,307,308].includes(response.status)) return response;
    const location = response.headers.get('location');
    assert(location, file + ': redirect destination');
    const next = new URL(location, url);
    assert.equal(next.origin, origin, file + ': same-origin redirect destination');
    assert(redirects < 5, file + ': bounded redirect chain');
    await response.body?.cancel();
    url = next;
  }
  throw Error(file + ': redirect chain did not resolve');
}
async function check(file) {
  const response = await fetchFile(file);
  assert.equal(response.status, 200, file + ': successful response');
  assert.equal(new URL(response.url).origin, origin, file + ': retained preview origin');
  const actual = Buffer.from(await response.arrayBuffer());
  assert.equal(hash(actual), hash(fs.readFileSync(path.join('_site', file))), file + ': exact build bytes');
  assert.match(response.headers.get('x-robots-tag') || '', /\bnoindex\b/i, file + ': noindex');
  assert.match(response.headers.get('x-robots-tag') || '', /\bnofollow\b/i, file + ': nofollow');
  for (const [name, value] of Object.entries(securityHeaders)) assert.equal(response.headers.get(name), value, file + ': ' + name);
  checked.push({file, sha256:hash(actual), status:response.status, noindex:true, securityHeaders:true});
}
// Allow bounded edge propagation before checking the complete deployment.
const readyBy = Date.now() + 45_000;
let lastError;
while (true) {
  try { await check('en/index.html'); break; }
  catch (error) {
    lastError = error;
    if (Date.now() >= readyBy) throw lastError;
    await delay(3_000);
  }
}
const htmlFiles = pages().map(p => 'en/' + p.route + '.html').filter(p => p !== 'en/index.html');
function assets(dir) {
  return fs.readdirSync(dir, {withFileTypes:true}).flatMap(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? assets(file) : [file.replace(/^_site\//, '').replaceAll('\\', '/')];
  });
}
const files = [...htmlFiles, ...assets('_site/assets')];
for (let i = 0; i < files.length; i += 6) await Promise.all(files.slice(i, i + 6).map(check));
const routing = spawnSync(process.execPath, ['scripts/verify-pages-runtime.mjs'], {env:{...process.env, TOZA_RUNTIME_URL:origin}, encoding:'utf8', timeout:120_000});
assert.equal(routing.status, 0, 'Hosted route gate failed: ' + routing.stdout + routing.stderr);
assert(routing.stdout.includes('PAGES RUNTIME VERIFIED: 78 route, status, content and asset checks'));
const evidence = {status:'PASS', origin, head:process.env.PREVIEW_HEAD_SHA, workflowEventSha:process.env.GITHUB_SHA, htmlPages:11, assetFiles:files.length-htmlFiles.length, routeChecks:78, checks:checked.sort((a,b)=>a.file.localeCompare(b.file))};
fs.mkdirSync('.wrangler', {recursive:true});
fs.writeFileSync('.wrangler/hosted-preview-checks.json', JSON.stringify(evidence,null,2)+'\n');
console.log('HOSTED PREVIEW VERIFIED: 11 exact HTML pages, ' + evidence.assetFiles + ' exact assets, noindex/security headers and 78 route checks.');
