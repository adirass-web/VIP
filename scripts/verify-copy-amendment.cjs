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
for(const page of current.filter(p=>!approvedRoutes.some(entry=>entry.route===p.route))){
 const prior=page.route==='private-exposure-assessment'?read(project+protectedAssessment):exact('revisions/en-02-v2/'+page.sourceName+'.md');
 assert.equal(page.source,prior,page.route+': original approved source');
}
console.log('COPY AMENDMENT VERIFIED: four EN-04 pages; all historical hashes; unchanged tables/terms/links/facts; seven original source pages');
