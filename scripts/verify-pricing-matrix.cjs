'use strict';
const fs=require('node:fs');
const assert=require('node:assert/strict');
const {parseDocument}=require('htmlparser2');
const D=require('domutils');
const find=(n,p)=>D.findAll(p,n.children||[]);
const text=n=>D.textContent(n).replace(/\s+/g,' ').trim();
function verify(page){
  assert.equal(page.route,'pricing','matrix applies only to English Pricing');
  const html=fs.readFileSync('_site/en/pricing.html','utf8');
  const doc=parseDocument(html), main=find(doc,n=>n.name==='main')[0];
  assert(main,'site shell main landmark');
  assert.equal(find(main,n=>n.name==='h1').length,1,'one Pricing h1');
  const assessment=find(main,n=>n.attribs?.class==='assessment')[0];
  const matrix=find(main,n=>n.name==='table'&&n.attribs?.class==='shield-matrix')[0];
  const shared=find(main,n=>n.attribs?.class==='shared-inclusions')[0];
  const apps=find(main,n=>n.attribs?.class==='everyday-apps')[0];
  assert(assessment&&matrix&&shared&&apps,'Assessment, comparison, shared inclusions and app examples exist');
  const positions=['class="assessment"','class="shield-comparison"','class="shared-inclusions"','class="everyday-apps"'].map(marker=>html.indexOf(marker));
  assert(positions.every((pos,i)=>pos>=0&&(i===0||positions[i-1]<pos)),'approved presentation order');
  for(const [label,price]of [['Personal Shield','₪32,000'],['Personal Shield for Two','₪45,000'],['Inner Circle','₪70,000']]){
    assert(html.includes(label)&&html.includes(price),label+': visible price and product');
  }
  const rows=find(matrix,n=>n.name==='tbody')[0];
  const parsedRows=find(rows,n=>n.name==='tr').map(row=>row.children.filter(c=>['th','td'].includes(c.name)).map(text));
  assert.deepEqual(parsedRows,[
    ['People','1','2','Up to 4'],
    ['Everyday devices, up to','3','6, pooled','12, pooled'],
    ['Security keys, supplied and configured','2','4','8'],
    ['Review visit at 12 months','—Not included','—Not included','✓Included'],
  ],'comparison values and associations');
  assert(text(assessment).includes('₪4,000'),'separate Assessment price');
  assert(text(assessment).includes('Threat model built together'),'assessment value');
  assert(text(assessment).includes('Urgent first aid within scope'),'bounded urgent first aid');
  assert(text(shared).includes('60-day question line')&&text(shared).includes('about 4 weeks'),'shared inclusions');
  assert(text(shared).includes('One home network and router'),'shared network inclusion');
  const brandItems=find(apps,n=>n.name==='li');
  assert.equal(brandItems.length,12,'twelve labelled examples');
  for(const item of brandItems){
    const img=find(item,n=>n.name==='img')[0],label=find(item,n=>n.name==='span')[0];
    const iconUrl = img?.attribs?.src ? new URL(img.attribs.src) : null;
    assert(iconUrl && iconUrl.protocol === 'https:' && iconUrl.hostname === 'cdn.simpleicons.org' && /^\/[a-z]+\/232323$/.test(iconUrl.pathname),'Simple Icons source');
    assert.equal(img.attribs.alt,'','decorative icon has no duplicate accessible label');
    assert(label&&text(label),'every icon has a visible label');
  }
  const iconSourceLinks=find(main,n=>n.name==='a').map(link=>new URL(link.attribs.href,'https://toza.local'));
  assert(iconSourceLinks.some(url=>url.protocol==='https:'&&url.hostname==='github.com'&&url.pathname==='/simple-icons/simple-icons')&&html.includes('CC0'),'icon source and license credited');
  assert(html.includes('within 30 days of Assessment completion'),'credit window');
  const other=find(main,n=>n.name==='details'&&n.attribs?.class==='other-pricing')[0];
  assert(other,'secondary pricing details remain available below the compact comparison');
  for(const price of ['₪90,000','₪12,000','₪15,000','₪20,000','₪4,800','₪6,000','₪28,000','₪41,000','₪66,000'])assert(text(other).includes(price),'other current price '+price);
  assert(html.includes('/assets/css/pricing-matrix.css'),'page-scoped matrix CSS');
  assert(!/₪(?:3,600|14,000|10,400|42,000|38,400)/.test(text(main)),'no superseded English prices on Pricing');
  assert(find(main,n=>n.name==='section'&&n.attribs?.id==='contact').length===1,'one contact destination');
  return true;
}
if(require.main===module){const p=require('./accepted-copy.cjs');p.assertAuthority();verify(p.pages().find(x=>x.route==='pricing'));console.log('PRICING MATRIX VERIFIED: current English price source, separate Assessment, three Shield tiers, inclusions, icons and credit.');}
module.exports={verify};
