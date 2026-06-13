#!/usr/bin/env node
/**
 * מגן · Personal Cyber Shield — CSS build script
 *
 * Concatenates partials/ → vault.css in ITCSS (numeric) order.
 * Run automatically via:
 *   npm run build   (prebuild hook)
 *   npm start       (prepended to serve command)
 *
 * NEVER edit vault.css directly — it is a generated artifact.
 * Edit files in assets/css/partials/ instead.
 */
'use strict';
const fs   = require('fs');
const path = require('path');

const PARTIALS_DIR = path.join(__dirname, 'partials');
const OUTPUT       = path.join(__dirname, 'vault.css');

const header = [
  '/*',
  ' * מגן · Personal Cyber Shield — Vault design system',
  ' * ⚠  GENERATED FILE — do not edit here.',
  ' *    Source: assets/css/partials/   Build: npm run build',
  ' * Tokens v2.x | ITCSS order (Settings → Generic → Elements →',
  ' *   Objects → Components → Trumps)',
  ' */',
  ''
].join('\n');

const files = fs.readdirSync(PARTIALS_DIR)
  .filter(f => f.endsWith('.css'))
  .sort();                   // numeric sort: 01-, 02-, ..., 99-

if (files.length === 0) {
  console.error('[css] ERROR: no partials found in', PARTIALS_DIR);
  process.exit(1);
}

const combined = files
  .map(f => {
    const src = path.join(PARTIALS_DIR, f);
    return fs.readFileSync(src, 'utf8').trimEnd();
  })
  .join('\n\n');

const output = header + '\n' + combined + '\n';
fs.writeFileSync(OUTPUT, output, 'utf8');

const kb = (Buffer.byteLength(output, 'utf8') / 1024).toFixed(1);
console.log(`[css] vault.css  ← ${files.length} partials  ${kb} kB`);
