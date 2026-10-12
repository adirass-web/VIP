'use strict';
const assert=require('node:assert/strict');
const {exact,pages,assertAuthority,read,project}=require('./accepted-copy.cjs');
const tables=s=>s.match(/(?:^\|.*\n?)+/gm)||[];
const sections=s=>new Map([...s.matchAll(/^## (.+)\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)].map(m=>[m[1],m[2].trim()]));
const links=s=>[...s.matchAll(/\]\(([^)]+)\)/g)].map(m=>m[1]).sort();
const facts=s=>s.match(/₪[\d,]+|\b\d+(?:–\d+)?\b/g);
assertAuthority();
const current=pages();
const approvedRoutes=[
 {route:'index',file:'06-home',previous:'en-03',fixed:['Metadata','Hero','Close unwanted access. Build stronger security habits.','The paid visit: inspection, diagnosis and urgent first aid','Your confidence matters. Your approval directs the work.','You can ask for help before you have answers. {#contact}']},
 {route:'pricing',file:'02-pricing',previous:'en-03',fixed:['Metadata','Hero','Before you book','Your initial fee counts toward the full service','Urgent visits in Central Israel','Additional work','What the service covers','You do not need to know where to look. {#contact}']},
 {route:'separation-divorce',file:'07-separation-divorce',previous:'en-02-v2',fixed:['Make changes with their consequences in view','Have your own devices and access examined, with urgent first aid','You decide what is changed and shared','Start with what is on your mind. {#contact}']},
 {route:'they-know-something',file:'09-they-know-something',previous:'en-02-v2',fixed:['Understand the effects before making isolated changes','What the findings can—and cannot—tell you','You can start without an explanation. {#contact}']},
];
for(const entry of approvedRoutes){
 const prior=exact('revisions/'+entry.previous+'/'+entry.file+'.md');
 const next=current.find(page=>page.route===entry.route).source;
 assert.equal(next,exact('revisions/en-04/'+entry.file+'.md'),entry.route+': latest approved overlay');
 assert.deepEqual(links(next),links(prior),entry.route+': original link destinations and counts');
 assert.deepEqual(facts(next),facts(prior),entry.route+': unchanged numeric service facts');
 const before=sections(prior),after=sections(next);
 for(const heading of entry.fixed){
  assert(before.has(heading)&&after.has(heading),entry.route+': required section '+heading);
  assert.equal(after.get(heading),before.get(heading),entry.route+': unchanged commercial/operational section '+heading);
 }
 if(entry.route==='pricing'){
  assert.deepEqual(tables(next),tables(prior),'All four commercial tables remain exactly unchanged');
  const privacy=[...prior.matchAll(/^Each participant receives a private dated record\.[\s\S]*?(?=\n\n|$)/gm)].map(m=>m[0]);
  assert.equal(privacy.length,1,'Prior participant privacy paragraph');
  assert.equal(next.split(privacy[0]).length,2,'Participant privacy retained exactly once');
  assert(next.indexOf(privacy[0])<next.indexOf('### Personal Shield:'),'Participant privacy accompanies the comparison');
 }
 if(entry.route==='they-know-something'){
  const heading='Have someone examine the access and address urgent problems';
  for(const block of before.get(heading).split('\n\n').filter(p=>!p.startsWith('Personal Shield')&&!p.startsWith('[Initial visit details]'))){
   assert(after.get(heading).includes(block),'They Know: original Assessment scope, independent value and urgent terms');
  }
  assert(after.get(heading).includes('[Initial visit details]'),'Initial visit link remains with the Assessment');
  assert(after.get(heading).includes('An urgent in-person visit may be available.'),'Urgent conditions remain with the Assessment');
  assert(after.has('Hardening beyond the first visit'),'Full hardening is a separate section');
 }
}
const protectedAssessment=JSON.parse(read(project+'approved/acceptance-manifest.json')).protectedAssessment.path;
// Batch A is a narrow, additive exception: reversing exactly these two approved
// paragraphs must reconstruct the entire prior payload, including metadata.
const whyPrior=exact('revisions/en-02-v2/01-why-toza.md');
const whyNext=current.find(page=>page.route==='why-us').source;
assert.equal(whyNext,exact('revisions/en-05/01-WHY-TOZA-CANDIDATE.md'),'Why: approved Batch A overlay');
const whyChanges=[
 {
  before:'A conversation you thought was private, an account someone once helped you set up, a service your family shares: each can connect to more of your life than you realize. I look at how the relevant devices, identities, accounts and apps work together, and what their access to your data means for you.',
  after:'A conversation you thought was private, an account someone once helped you set up, a service your family shares: each can connect to more of your life than you realize. Private information can be used to pressure you, cost you money or damage your reputation. I look at how the relevant devices, identities, accounts and apps work together, and what that access means in your circumstances.'
 },
 {
  before:'I learn your circumstances and carry out the technical work with you, in person. You do not have to retell a sensitive situation to a succession of people. A working phone can still leave private information accessible through arrangements that no longer suit your life; my work connects that personal context to the changes we make.',
  after:'I learn your circumstances and carry out the technical work with you, in person. You do not have to retell a sensitive situation to a succession of people. I use that understanding to judge which access deserves attention first. Before you decide what to approve, I explain what a proposed material change could affect, including account recovery and services you still need.'
 },
];
let reconstructed=whyNext;
for(const change of whyChanges){
 assert.equal(whyPrior.split(change.before).length,2,'Why: prior paragraph appears exactly once');
 assert.equal(whyNext.split(change.after).length,2,'Why: approved paragraph appears exactly once');
 reconstructed=reconstructed.replace(change.after,change.before);
}
assert.equal(reconstructed,whyPrior,'Why: only the two approved paragraphs change; all other blocks and metadata exact');
assert.deepEqual(links(whyNext),links(whyPrior),'Why: all links and counts unchanged');
assert.deepEqual(facts(whyNext),facts(whyPrior),'Why: numeric facts unchanged');
assert.deepEqual([...sections(whyNext).keys()],[...sections(whyPrior).keys()],'Why: headings and anchors unchanged');
for(const page of current.filter(p=>p.route!=='why-us'&&!approvedRoutes.some(entry=>entry.route===p.route))){
 const prior=page.route==='private-exposure-assessment'?read(project+protectedAssessment):exact('revisions/en-02-v2/'+page.sourceName+'.md');
 assert.equal(page.source,prior,page.route+': original approved source');
}
console.log('COPY AMENDMENT VERIFIED: four EN-04 pages; exactly two approved Why paragraphs; Process C0 and six original sources; historical and stage-map hashes; unchanged metadata/tables/terms/links/facts');
