'use strict';
const crypto = require('node:crypto');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt({html:false,typographer:false});
const sourceSha256 = '41ffe67ec80f33cbd0169ea3d635982bab3d508422234d974d4f1b23ed7b868f';
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const brands = [
  {name:'WhatsApp',icon:'whatsapp'}, {name:'Messenger',icon:'facebookmessenger'},
  {name:'Outlook',icon:'microsoftoutlook'}, {name:'Gmail',icon:'gmail'},
  {name:'Chrome',icon:'googlechrome'}, {name:'Safari',icon:'safari'},
  {name:'Instagram',icon:'instagram'}, {name:'Facebook',icon:'facebook'},
  {name:'Photos',icon:'googlephotos'}, {name:'iCloud',icon:'icloud'},
  {name:'Waze',icon:'waze'}, {name:'Maps',icon:'googlemaps'},
];
function render(page) {
  if (page.route !== 'pricing') throw Error('Pricing matrix layout can render only Pricing');
  if (hash(page.source) !== sourceSha256) throw Error('Pricing matrix source changed without an acceptance amendment');
  const metadata = Object.fromEntries([['Title','title'],['Description','description'],['Social description','og_description']].map(([label,key])=>{
    const value = page.source.match(new RegExp('^'+label+': (.+)$','m'))?.[1];
    if (!value || page.metadata[key] !== value) throw Error('Pricing matrix metadata drift: '+key);
    return [key,value];
  }));
  const chunks = page.source.split(/\n(?=## )/);
  chunks.shift(); // metadata
  const sections = chunks.map(chunk=>{
    const lineBreak=chunk.indexOf('\n');
    const heading=chunk.slice(0,lineBreak).replace(/^## /,'').replace(/ \{#[^}]+\}$/,'');
    const id=chunk.match(/ \{#([^}]+)\}$/m)?.[1] || heading.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
    return {heading,id,html:md.render(chunk.slice(lineBreak+1).trim())};
  });
  const hero=sections.find(s=>s.id==='hero');
  const assessment=sections.find(s=>s.id==='assessment');
  const matrix=sections.find(s=>s.id==='shield-comparison');
  const shared=sections.find(s=>s.id==='shared-inclusions');
  const apps=sections.find(s=>s.id==='everyday-apps-and-accounts');
  const notes=sections.find(s=>s.id==='pricing-notes');
  const other=sections.find(s=>s.id==='other-pricing-and-credit');
  if (![assessment,matrix,shared,apps,notes,other].every(Boolean)) throw Error('Pricing matrix source is missing a required section: '+JSON.stringify(sections.map(s=>s.id)));
  let table=matrix.html.replace('<table>','<table class="shield-matrix" aria-labelledby="shield-comparison-heading">');
  table=table.replace(/\sstyle="text-align:right"/g,'');
  table=table.replace(/<th>(Personal Shield(?: for Two)?|Inner Circle) — (₪[\d,]+)<\/th>/g,'<th scope="col">$1<span class="price">$2</span></th>');
  table=table.replace(/<th>/g,()=>'<th scope="col">');
  table=table.replace(/<tr>\s*<td>([\s\S]*?)<\/td>/g,(_,value)=>`<tr><th scope="row">${value}</th>`);
  table=table.replace(/<td>—<\/td>/g,'<td><span aria-hidden="true">—</span><span class="sr-only">Not included</span></td>');
  table=table.replace(/<td>✓<\/td>/g,'<td class="yes"><span aria-hidden="true">✓</span><span class="sr-only">Included</span></td>');
  const appNames=apps.html.match(/<li>([\s\S]*?)<\/li>/g)||[];
  const sourceNames=appNames.map(li=>li.replace(/<[^>]+>/g,'').trim());
  if (sourceNames.length!==brands.length || sourceNames.some((name,i)=>name!==brands[i].name)) throw Error('Unapproved brand icon list');
  const iconList=brands.map(({name,icon})=>{
    return `<li><img src="https://cdn.simpleicons.org/${icon}/232323" alt="" width="20" height="20" loading="lazy"><span>${name}</span></li>`;
  }).join('');
  const body=`<div class="wrap pricing-matrix-content">
<header class="pricing-matrix-title">${hero.html}</header>
<section class="assessment" aria-labelledby="assessment-heading">${assessment.html.replace('<h3>','<h2 id="assessment-heading">').replace('</h3>','</h2>')}</section>
<section class="shield-comparison" aria-labelledby="shield-comparison-heading"><h2 id="shield-comparison-heading">${matrix.heading}</h2><div class="matrix-scroll" role="region" aria-label="Compare Shield inclusions" tabindex="0">${table}</div></section>
<section class="shared-inclusions" aria-label="Shared inclusions">${shared.html}</section>
<section class="everyday-apps" aria-labelledby="everyday-apps-heading"><h2 id="everyday-apps-heading">Apps and accounts we help secure</h2><p class="examples-note">${apps.html.match(/<p>([\s\S]*?)<\/p>/)?.[1]||'Examples of everyday services'}</p><ul class="brand-list" aria-label="Examples of common services">${iconList}</ul><p class="brand-credit">Icons: <a href="https://github.com/simple-icons/simple-icons">Simple Icons</a>, CC0. Product names and trademarks belong to their owners.</p></section>
<section class="pricing-notes" aria-label="Pricing notes">${notes.html}</section>
<details class="other-pricing" id="other-pricing-and-credit"><summary>${other.heading}</summary>${other.html}</details>
<section class="pricing-contact" id="contact"><h2>Request a private conversation</h2><p>The first conversation is free and does not commit you to purchase.</p>{% include "contact-channels.njk" %}</section>
</div>`;
  const frontmatter={layout:'layouts/vault.njk',permalink:'/en/pricing.html',slug:'pricing',page_id:'pricing',...metadata,canonical:'https://toza-site.pages.dev/en/pricing',body_class:'accepted-page pricing-page pricing-matrix',pricing_matrix:true};
  return '---\n'+Object.entries(frontmatter).map(([key,value])=>key+': '+JSON.stringify(value)).join('\n')+'\n---\n{# Generated from the approved pricing matrix source. #}\n'+body+'\n';
}
module.exports={render,sourceSha256};
