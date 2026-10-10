// Move approved whole content blocks; accepted Markdown remains the source of truth.
'use strict';
const {parseDocument}=require('htmlparser2');
const D=require('domutils');
const serialize=require('dom-serializer').default;
const find = (node, fn) => D.findAll(fn, node.children || []);
const tags = (node, name) => find(node, n => n.type === 'tag' && n.name === name);
const classes = (node, name) => find(node, n => (n.attribs?.class || '').split(/\s+/).includes(name));
const text = node => D.textContent(node).replace(/\s+/g, ' ').trim();
const el = html => parseDocument(html).children[0];
const addClass = (node, name) => { node.attribs.class = `${node.attribs.class || ''} ${name}`.trim(); };
const move = (node, parent) => { if (!node || !parent) throw Error('Missing required source block'); D.appendChild(parent, node); };
const group = (nodes, className) => { const node = el(`<div class="${className}"></div>`); nodes.forEach(n => move(n, node)); return node; };
const direct = (node, name) => (node.children || []).filter(n => n.name === name);
const section = (doc, id) => find(doc, n => n.attribs?.id === id)[0];
const bodyOf = node => classes(node, 'copy-body')[0];
const detailOf = node => classes(node, 'section-detail')[0];

function unfoldSection(node) {
  const disclosure = classes(node, 'section-disclosure')[0];
  if (!disclosure) return;
  const heading = tags(tags(disclosure, 'summary')[0], 'h2')[0];
  const detail = classes(disclosure, 'section-detail')[0];
  const body = bodyOf(node);
  move(group([heading], 'section-title'), body);
  move(detail, body);
  D.removeElement(disclosure);
  node.attribs.class = node.attribs.class.replace(/\bis-disclosure\b/g, '').trim();
}

function unfoldSupporting(disclosure, className) {
  const content = classes(disclosure, 'detail-content')[0];
  const replacement = group([...content.children], className);
  D.replaceElement(disclosure, replacement);
  return replacement;
}

function home(doc) {
  const main=tags(doc,'main')[0],hero=classes(doc,'copy-hero')[0],heroWrap=classes(hero,'wrap')[0],lead=classes(hero,'hero-lead')[0];
  const expert=classes(hero,'expert-panel')[0],figure=tags(expert,'figure')[0],expertIntro=direct(expert,'p')[0];
  const reassurance=direct(lead,'p').find(p=>text(p).startsWith('Perhaps something feels wrong.'));
  const offer=classes(doc,'copy-offer')[0],explanation=section(doc,'have-someone-work-through-the-details-with-you'),full=section(doc,'stronger-security-with-help-using-it');
  const risk=section(doc,'they-may-not-need-to-hack-you'),index=classes(doc,'page-index')[0];
  addClass(hero,'preview-home-hero');addClass(hero,'narrative-hero');
  addClass(reassurance,'home-reassurance');
  const relation=direct(detailOf(full),'p').find(p=>text(p).startsWith('The person who learns your situation'));
  const signature=group([figure],'hero-signature');move(signature,heroWrap);
  const interpretation=direct(detailOf(risk),'p')[1];
  const expertSection=group([group([expertIntro,interpretation],'expert-method'),relation],'narrative-expert wrap');
  D.removeElement(expert);
  // Keep the whole warm reassurance in the opening, before asking for contact.
  const action=direct(lead,'p').find(p=>classes(p,'btn').length);D.prepend(action,reassurance);
  unfoldSection(risk);addClass(risk,'narrative-risk');
  addClass(full,'preview-full-service');addClass(full,'narrative-outcome');
  addClass(offer,'preview-assessment');
  addClass(explanation,'assessment-explanation');
  // Supporting Assessment detail stays available without repeating the main sales story in full.
  const subheading=tags(explanation,'h2')[0];subheading.name='h3';
  const region=group([offer,explanation],'home-first-visit');
  const situations=section(doc,'situations');
  const positive=direct(detailOf(situations),'p').find(p=>text(p).startsWith('You can also come because'));
  D.prependChild(detailOf(situations),positive);
  const controls=classes(doc,'detail-controls')[0],privacy=section(doc,'your-confidence-matters-your-approval-directs-the-work'),contact=section(doc,'contact');
  [hero,index,risk,full,expertSection,region,controls,situations,privacy,contact].forEach(n=>move(n,main));
}

function pricing(doc) {
  const main = tags(doc, 'main')[0];
  const hero = classes(doc, 'copy-hero')[0];
  const lead = classes(hero, 'hero-lead')[0];
  const offer = classes(doc, 'copy-offer')[0];
  const offerTitle = classes(offer, 'section-title')[0];
  const before = section(doc, 'before-you-book');
  const full = section(doc, 'strengthen-your-security-and-privacy-with-help-using-the-changes');
  const credit = section(doc, 'your-initial-fee-counts-toward-the-full-service');
  const intro = direct(lead, 'p').find(p => text(p).startsWith('You can come with a concern'));
  const action = direct(lead, 'p').find(p => classes(p, 'btn').length);
  const trust = classes(lead, 'trust')[0];
  addClass(hero, 'preview-pricing-hero');
  addClass(offer, 'preview-assessment');
  const identityAndPrice = direct(offerTitle, 'p');
  const quote = group(identityAndPrice, 'pricing-first-visit-facts');
  quote.attribs['aria-labelledby'] = tags(offerTitle, 'h2')[0].attribs.id;
  const vat = direct(lead, 'p').find(p => text(p) === 'All prices include VAT.');
  const introduction = group([intro, action, trust, vat], 'pricing-opening-copy');
  move(group([quote, introduction], 'pricing-opening-grid'), lead);
  const benefitDisclosure = tags(offer, 'details')[0];
  unfoldSupporting(benefitDisclosure, 'assessment-benefits');
  unfoldSection(before);
  addClass(before, 'preview-before-book');

  const fullDetail = detailOf(full);
  const hardeningDisclosure = tags(fullDetail, 'details').find(d => text(tags(d, 'summary')[0]) === 'How hardening and teaching work');
  const hardening = unfoldSupporting(hardeningDisclosure, 'hardening-introduction');
  const introParagraphs = direct(fullDetail, 'p').slice(0, 2);
  const overview = group([classes(full, 'section-title')[0], group([hardening, ...introParagraphs], 'service-intro-copy')], 'full-service-overview');
  D.prependChild(fullDetail, overview);
  addClass(full, 'preview-full-service');
  addClass(full, 'preview-comparison-section');

  const primaryTable = tags(fullDetail, 'table')[0];
  const primaryBody = tags(primaryTable, 'tbody')[0];
  const continuation = tags(fullDetail, 'details').find(d => text(tags(d, 'summary')[0]) === 'Compare all inclusions and support');
  const extraBody = tags(continuation, 'tbody')[0];
  const allRows = [...direct(primaryBody, 'tr'), ...direct(extraBody, 'tr')];
  const rows = new Map(allRows.map(row => [text(tags(row, 'th')[0]), row]));
  const visible = ['Price, including VAT', 'People', 'Personal devices', 'Training and verification', 'In-person work', 'Shared home/home-office network and router'];
  for(const row of allRows) move(row,extraBody);
  visible.forEach((name, index) => {
    const row = rows.get(name);
    move(row, primaryBody);
    if (index === 0) addClass(row, 'comparison-price');
    if (index === 3 || index === 4) addClass(row, 'comparison-value');
  });
  addClass(primaryTable.parent, 'primary-comparison');
  const choose = direct(fullDetail, 'h3').find(h => text(h) === 'Choose the scope that fits your life');
  addClass(choose, 'comparison-heading');
  const creditPs = direct(detailOf(credit), 'p');
  const creditDisclosure = tags(credit, 'details')[0];
  D.prepend(creditDisclosure, creditPs[creditPs.length - 1]);

  const index = classes(doc, 'page-index')[0];
  const heading=tags(lead,'h1')[0];D.append(heading,index);
  const creditHeading=tags(credit,'h2')[0];creditHeading.name='h3';addClass(credit,'narrative-credit');
  D.append(primaryTable.parent,credit);
  const controls = classes(doc, 'detail-controls')[0];
  const urgent = section(doc, 'urgent-visits-in-central-israel');
  const additional = section(doc, 'additional-work');
  const coverage = section(doc, 'what-the-service-covers');
  const contact = section(doc, 'contact');
  [hero, offer, before, full, controls, urgent, additional, coverage, contact].forEach(n => move(n, main));
}


function contactLayout(doc){
 const contact=section(doc,'contact'),body=bodyOf(contact),title=classes(contact,'section-title')[0],detail=detailOf(contact);
 const heading=tags(title,'h2')[0],intro=direct(title,'p'),message=direct(detail,'p').find(p=>text(p).startsWith('Suggested message:'));
 const warning=direct(detail,'p').find(p=>text(p).startsWith('Do not send passwords'));
 // The contact include is evaluated by Nunjucks after this adapter.
 const channels=detail.children.find(n=>n.type==='comment'&&n.data==='TOZA_CONTACT_CHANNELS');
 if(!channels)throw Error('Missing contact channels include');
 const remaining=direct(detail,'p').filter(p=>p!==message&&p!==warning);
 addClass(heading,'contact-heading');
 const introduction=group(intro,'contact-introduction');
 const actions=group([warning,channels,message,...remaining],'contact-action-panel');
 move(heading,body);move(introduction,body);move(actions,body);D.removeElement(title);D.removeElement(detail);
}


function present(template, route) {
  if (!['index', 'pricing'].includes(route)) return template;
  const start=template.indexOf('<section');
  if(start<0)throw Error('Missing presentation content: '+route);
  let prefix=template.slice(0,start);
  prefix=prefix.replace(/body_class: "([^"]+)"/, 'body_class: "home-pricing-preview narrative-preview $1"\nnarrative_layout: true');
  const directives=[];
  const markup=template.slice(start).replace(/\{%[\s\S]*?%\}/g,token=>{
    if(token==='{% include "contact-channels.njk" %}')return '<!--TOZA_CONTACT_CHANNELS-->';
    directives.push(token);return '<!--TOZA_DIRECTIVE_'+(directives.length-1)+'-->';
  });
  const doc=parseDocument('<main>'+markup+'</main>');
  (route==='index'?home:pricing)(doc);
  contactLayout(doc);
  return prefix+tags(doc,'main')[0].children.map(n=>serialize(n)).join('')
    .replace(/<!--TOZA_CONTACT_CHANNELS-->/g,'{% include "contact-channels.njk" %}')
    .replace(/<!--TOZA_DIRECTIVE_(\d+)-->/g,(_,i)=>directives[Number(i)]);
}
module.exports={present};
