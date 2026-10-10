'use strict';
const assert=require('node:assert/strict');
const {exact,pages,assertAuthority}=require('./accepted-copy.cjs');
const tables=s=>s.match(/(?:^\|.*\n?)+/gm)||[];
const sections=s=>new Map([...s.matchAll(/^## (.+)\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)].map(m=>[m[1],m[2].trim()]));
assertAuthority();
const current=pages();
const priorPricing=exact('revisions/en-02-v2/02-pricing.md');
const pricing=current.find(p=>p.route==='pricing').source;
assert.deepEqual(tables(pricing),tables(priorPricing),'All four commercial tables remain exactly unchanged');
const oldSections=sections(priorPricing),newSections=sections(pricing);
for(const heading of ['Before you book','Your initial fee counts toward the full service','Urgent visits in Central Israel','Additional work','What the service covers','You do not need to know where to look. {#contact}']){
 assert.equal(newSections.get(heading),oldSections.get(heading),'Unchanged commercial/operational section: '+heading);
}
for(const page of current.filter(p=>!['index','pricing','private-exposure-assessment'].includes(p.route)))assert.equal(page.source,exact('revisions/en-02-v2/'+page.sourceName+'.md'),page.route+': original approved source');
console.log('COPY AMENDMENT VERIFIED: two approved pages; unchanged commercial tables/terms and other accepted source pages');
