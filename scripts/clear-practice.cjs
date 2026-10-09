// Presentation only. The accepted Markdown remains the editorial source of truth.
const {parseDocument} = require('htmlparser2');
const D = require('domutils');
const serialize = require('dom-serializer').default;
const tags = (n,name) => D.findAll(e=>e.type==='tag'&&e.name===name,n.children||[]);
const cls = (n,name) => D.findAll(e=>(e.attribs?.class||'').split(' ').includes(name),n.children||[]);
const element = html => parseDocument(html).children[0];
const text = n => D.textContent(n).replace(/\s+/g,' ').trim();
const escape = s => s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const move = (node,parent) => D.appendChild(parent,node);
function group(nodes,className) {const n=element(`<div class="${className}"></div>`);nodes.forEach(x=>move(x,n));return n;}
function foldNodes(nodes,label) {
  const detail=element(`<details class="supporting-detail"><summary><span data-presentation-ui>${escape(label)}</span></summary><div class="detail-content"></div></details>`);
  const content=cls(detail,'detail-content')[0];nodes.forEach(n=>move(n,content));return detail;
}
function foldSection(section) {
  const content=cls(section,'copy-body')[0],rail=cls(content,'section-title')[0],body=cls(content,'section-detail')[0],heading=tags(rail,'h2')[0];
  const details=element('<details class="section-disclosure"><summary></summary></details>');
  move(heading,tags(details,'summary')[0]);move(body,details);D.removeElement(rail);D.appendChild(content,details);section.attribs.class+=' is-disclosure';
}
function foldInPlace(node,label) {const marker=element('<div></div>');D.prepend(node,marker);D.replaceElement(marker,foldNodes([node],label));}
function detailOf(section) {return cls(section,'section-detail')[0];}
function paragraphs(n) {return n.children.filter(c=>c.name==='p');}

function present(template,route) {
  const start=template.indexOf('<section');
  const prefix=template.slice(0,start);
  const directives=[];
  const markup=template.slice(start).replace(/\{%[\s\S]*?%\}/g,token=>{directives.push(token);return `<!--TOZA_DIRECTIVE_${directives.length-1}-->`;});
  const doc=parseDocument(markup);
  cls(doc,'field').forEach(D.removeElement);
  const hero=cls(doc,'copy-hero')[0],wrap=cls(hero,'wrap')[0];
  // PA retains its approved content sequence, including its original hero.
  if(route!=='private-exposure-assessment') {
    const kicker=cls(wrap,'hero-kicker')[0],h1=tags(wrap,'h1')[0],trust=cls(wrap,'trust')[0];
    const paras=paragraphs(wrap).filter(p=>p!==kicker&&p!==trust);
    const action=paras.find(p=>cls(p,'btn').length),prose=paras.filter(p=>p!==action);
    const lead=group([kicker,h1,prose[0],action,trust].filter(Boolean),'hero-lead');
    D.appendChild(wrap,lead);
    const portraitRoutes=['index','separation-divorce'];
    if(portraitRoutes.includes(route)) {
      if(route==='index')move(prose[1],lead);
      const panel=element('<aside class="expert-panel" aria-label="Your expert"><figure><img src="/assets/img/dr-tabansky-portrait-square-640.webp" width="640" height="640" alt="Portrait of Dr. Lior Tabansky" decoding="async"><figcaption data-presentation-ui>Dr. Lior Tabansky, founder of Toza</figcaption></figure></aside>');
      move(prose[prose.length-1],panel);D.appendChild(wrap,panel);
    }else prose.slice(1).forEach(p=>move(p,lead));
  }
  const sections=cls(doc,'copy-section');
  const contact=sections.find(s=>s.attribs.id==='contact');
  const offer=sections.find(s=>(s.attribs.class||'').includes('copy-offer'));
  let links=[];
  if(route==='index')links=[[offer,'First paid visit'],[sections.find(s=>s.attribs.id==='situations'),'Your situation'],[contact,'Contact']];
  else if(route==='pricing')links=[[offer,'First paid visit'],[sections[2],'Full services'],[contact,'Contact']];
  else if(route==='separation-divorce')links=[[offer,'First paid visit'],[sections[3],'After the visit'],[contact,'Contact']];
  else if(route==='faq')links=sections.slice(0,-1).map((s,i)=>[s,['Service fit','Getting started','The Assessment','Full services','Pricing','Privacy','Boundaries'][i]]);
  else if(route==='why-us')links=[[sections[0],'Personal note'],[sections[4],'Professional experience'],[contact,'Contact']];
  else if(route==='what-happens-during-the-visit')links=[[sections[0],'Before you buy'],[sections[1],'The Assessment'],[sections[2],'Full engagement'],[contact,'Contact']];
  else if(route!=='private-exposure-assessment')links=[[sections[0],'Your situation'],[offer,'First paid visit'],[contact,'Contact']];
  let jump;
  if(links.length) {
    jump=element('<nav class="page-index wrap" aria-label="On this page" data-presentation-ui></nav>');
    for(const [section,label] of links.filter(([s])=>s))D.appendChild(jump,element(`<a href="#${section.attribs.id}">${escape(label)}</a>`));
    D.append(hero,jump);
  }
  for(const section of sections) {
    const content=cls(section,'copy-body')[0],heading=tags(content,'h2')[0];
    const rest=content.children.filter(n=>n!==heading);
    const rail=group([heading],'section-title'),detail=group(rest,'section-detail');
    D.appendChild(content,rail);D.appendChild(content,detail);
    if(section===offer&&route!=='private-exposure-assessment') {
      const ps=paragraphs(detail);ps.slice(0,2).forEach(p=>move(p,rail));ps[1].attribs.class='offer-price';
    }
    if(tags(detail,'table').length)section.attribs.class+=' has-tables';
    if(section===contact&&route!=='private-exposure-assessment') {
      for(const p of paragraphs(detail)) {
        if(text(p).startsWith('Suggested message:'))break;
        if(text(p).startsWith('If the service fits,')){move(p,detail);p.attribs.class='contact-scheduling';}
        else move(p,rail);
      }
    }
  }
  cls(doc,'table-hint').forEach(D.removeElement);
  for(const table of tags(doc,'table')) {
    table.attribs.role='table';const headers=tags(tags(table,'thead')[0],'th').map(text);
    tags(table,'thead')[0].attribs.role='rowgroup';tags(table,'tbody')[0].attribs.role='rowgroup';
    for(const row of tags(table,'tr'))row.attribs.role='row';
    for(const th of tags(table,'th')){th.attribs.role=th.attribs.scope==='row'?'rowheader':'columnheader';delete th.attribs.style;}
    for(const row of tags(tags(table,'tbody')[0],'tr'))tags(row,'td').forEach((cell,i)=>{
      cell.attribs.role='cell';delete cell.attribs.style;
      D.prependChild(cell,element(`<span class="mobile-col" aria-hidden="true" data-presentation-ui>${escape(headers[i+1])}</span>`));
    });
  }
  if(route==='index') {
    D.append(jump,offer);[0,1].forEach(i=>foldSection(sections[i]));
    const trust=detailOf(sections[5]);D.appendChild(trust,foldNodes(paragraphs(trust).slice(1),'Service boundaries and privacy details'));
  }else if(route==='separation-divorce') {
    D.append(jump,offer);foldSection(sections[0]);
    const trust=detailOf(sections[4]);D.appendChild(trust,foldNodes(paragraphs(trust).slice(1),'Coordination with counsel and service boundaries'));
    const effects=detailOf(sections[1]);D.appendChild(effects,foldNodes([paragraphs(effects)[1]],'How we agree the sequence of changes'));
  }else if(route==='pricing') {
    D.append(jump,offer);
    foldInPlace(tags(detailOf(offer),'ul')[0],'What we examine, fix and record');
    const services=detailOf(sections[2]);foldInPlace(paragraphs(services)[0],'How hardening and teaching work');
    const table=tags(services,'table')[0],tbody=tags(table,'tbody')[0];
    const restRows=tags(tbody,'tr').filter((row,i)=>i>2&&!text(row).startsWith('Shared home/home-office network and router'));
    const continuation=element('<div class="copy-table" role="region" aria-label="Full service inclusions" tabindex="0"><table role="table"><tbody role="rowgroup"></tbody></table></div>');
    const nextTable=tags(continuation,'table')[0],nextBody=tags(nextTable,'tbody')[0];
    const repeatedHeader=element(serialize(tags(table,'thead')[0]));repeatedHeader.attribs['data-presentation-ui']='';D.prependChild(nextTable,repeatedHeader);
    restRows.forEach(row=>move(row,nextBody));D.append(table.parent,foldNodes([continuation],'Compare all inclusions and support'));
    for(const heading of tags(services,'h3').filter(h=>/^(Personal Shield:|Inner Circle Shield:)/.test(text(h)))) {
      const nodes=[];for(let next=heading.next;next&&next.name!=='h3';next=next.next)nodes.push(next);
      const detail=element('<details class="supporting-detail"><summary></summary><div class="detail-content"></div></details>');
      D.prepend(heading,detail);move(heading,tags(detail,'summary')[0]);nodes.forEach(n=>move(n,cls(detail,'detail-content')[0]));
    }
    const credit=sections.find(s=>s.attribs.id==='your-initial-fee-counts-toward-the-full-service');
    sections.forEach((s,i)=>{if(s!==offer&&i!==2&&s!==contact&&s!==credit)foldSection(s);});
    foldInPlace(cls(detailOf(credit),'copy-table')[0],'See balances with the eligible credit');
  }
  // Other pages adopt the common type/layout without speculative content hiding.
  // FAQ retains its own answer controls; protected PA stays fully expanded.
  if(jump&&route!=='faq'&&tags(doc,'details').length) {
    D.append(jump,element('<div class="detail-controls wrap" data-presentation-ui><button type="button" data-expand-details aria-expanded="false">Show all details</button><span>Open any heading for more, or show everything.</span></div>'));
  }
  return prefix+serialize(doc).replace(/<!--TOZA_DIRECTIVE_(\d+)-->/g,(_,i)=>directives[Number(i)]);
}
module.exports={present};
