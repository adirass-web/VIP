const fs = require('node:fs');
const {expect,test} = require('@playwright/test');
const {createSiteServer} = require('./helpers/site-server.cjs');
const {pages,md} = require('../scripts/accepted-copy.cjs');
let server,siteUrl;
test.beforeAll(async()=>{
  server=createSiteServer();
  await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolve);});
  siteUrl='http://127.0.0.1:'+server.address().port;
});
test.afterAll(async()=>{if(server) await new Promise(resolve=>server.close(resolve));});
const normalize=s=>s.replace(/\s+/g,' ').trim();
async function noOverflow(page) {
  const b=await page.evaluate(()=>({client:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth}));
  expect(b.scroll).toBeLessThanOrEqual(b.client+1);
}
for(const copy of pages()) test('accepted copy, metadata and layout: '+copy.route,async({page},testInfo)=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const failures=[];page.on('response',r=>{if(r.status()>=400) failures.push(r.url());});
  await page.goto(siteUrl+'/en/'+(copy.route==='index'?'':copy.route+'.html'));
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('#contact')).toHaveCount(1);
  await expect(page).toHaveTitle(copy.metadata.title);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content',copy.metadata.description);
  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content',copy.metadata.og_description);
  const main=normalize(await page.locator('main').textContent());
  // Accepted blocks remain verbatim; the approved layout may move whole blocks.
  // verify-presentation.cjs also compares exact block inventories and table row associations.
  if(copy.route==='pricing') {
    for(const text of ['Private Exposure Assessment','₪4,000','Shield comparison','Personal Shield','₪32,000','Personal Shield for Two','₪45,000','Inner Circle','₪70,000','WhatsApp','iCloud'])
      expect(main,'Missing accepted pricing text: '+text).toContain(text);
  } else {
    const raw=copy.source.split(/#{2,3} Hero\n\n/)[1];
    for(const token of md.parse(raw,{}).filter(t=>t.type==='inline')) {
      let text=token.children.map(t=>t.type==='text'||t.type==='code_inline'?t.content:t.type==='softbreak'?' ':'').join('').replace(/ \{#[\w-]+\}$/,'');
      text=normalize(text);
      if(!text || /^(Portrait caption:|Portrait alt text:|External link to cyberdrtabansky\.com\.)/.test(text)) continue;
      if(text==='Request a private conversation: WhatsApp / Signal' || text==='Request a private conversation') continue;
      expect(main,'Missing accepted text: '+text).toContain(text);
    }
  }
  await expect(page.locator('.brand')).toHaveAttribute('aria-label','Toza home');
  await expect(page.locator('.brand .name')).toHaveText('toza');
  const contact=page.locator(copy.route==='pricing'?'.pricing-contact':'#contact');
  const wa=contact.locator('a[href^="https://wa.me/"]');
  const signal=contact.locator('a[href^="https://signal.me/"]');
  await expect(wa).toHaveText('Message on WhatsApp');
  const url=new URL(await wa.getAttribute('href'));
  expect(url.pathname).toBe('/972533366276');
  expect(url.searchParams.get('text')).toBe("I'd like a private conversation. Please let me know the next step.");
  await expect(signal).toHaveAttribute('href','https://signal.me/#p/+972533366276');
  await noOverflow(page);
  expect(errors).toEqual([]);expect(failures).toEqual([]);
  if(['index','pricing','faq','why-us','private-exposure-assessment','separation-divorce','they-know-something'].includes(copy.route)) {
    await page.screenshot({path:testInfo.outputPath(copy.route+'.png'),fullPage:true});
    await page.screenshot({path:testInfo.outputPath(copy.route+'-viewport.png'),fullPage:false});
  }
});
test('mobile menu, keyboard focus and narrow reflow',async({page})=>{
  await page.setViewportSize({width:320,height:800});
  await page.goto(siteUrl+'/en/');
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  const toggle=page.locator('[data-nav-toggle]');
  await toggle.click();await expect(toggle).toHaveAttribute('aria-expanded','true');
  await noOverflow(page);
  const menuBounds=await page.locator('#site-menu').evaluate(menu=>({left:menu.getBoundingClientRect().left,right:menu.getBoundingClientRect().right,width:document.documentElement.clientWidth}));
  expect(menuBounds.left).toBeGreaterThanOrEqual(-1);expect(menuBounds.right).toBeLessThanOrEqual(menuBounds.width+1);
  await page.keyboard.press('Escape');await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute('aria-expanded','false');
  await toggle.click();await page.locator('#site-menu a[href="#contact"]').click();
  await expect(toggle).toHaveAttribute('aria-expanded','false');
  await noOverflow(page);
  for(const width of [640,768,1024]) {
    await page.setViewportSize({width,height:900});await noOverflow(page);
  }
});
test('FAQ expands, collapses, opens group and question deep links',async({page})=>{
  await page.goto(siteUrl+'/en/faq.html#privacy');
  const privacy=page.locator('#privacy details');
  expect(await privacy.evaluateAll(items=>items.every(i=>i.open))).toBe(true);
  const all=page.locator('.faq details');const toggle=page.locator('[data-faq-toggle-all]');
  await toggle.click();expect(await all.evaluateAll(items=>items.every(i=>i.open))).toBe(true);
  await toggle.click();expect(await all.evaluateAll(items=>items.every(i=>!i.open))).toBe(true);
  const question=await all.first().getAttribute('id');
  await page.evaluate(id=>{location.hash=id;},question);
  await expect(all.first()).toHaveAttribute('open','');
  await page.evaluate(()=>{location.hash='boundaries';});
  expect(await page.locator('#boundaries details').evaluateAll(items=>items.every(i=>i.open))).toBe(true);
  await all.first().locator('summary').focus();await page.keyboard.press('Enter');
  await expect(all.first()).not.toHaveAttribute('open','');
});
test('Shield comparison matrix reflows with preserved row and column headers',async({page})=>{
  await page.setViewportSize({width:320,height:800});
  await page.goto(siteUrl+'/en/pricing.html');
  const matrix=page.locator('.shield-matrix');
  await expect(matrix).toHaveCount(1);
  await expect(matrix.locator('thead th[scope="col"]')).toHaveCount(4);
  await expect(matrix.locator('tbody th[scope="row"]')).toHaveText(['People','Everyday devices, up to','Security keys, supplied and configured','Review visit at 12 months']);
  for(const header of await matrix.locator('thead th:not(:first-child)').all())await expect(header).toBeVisible();
  const bounds=await page.locator('.matrix-scroll').evaluate(el=>({client:el.clientWidth,scroll:el.scrollWidth,overflow:getComputedStyle(el).overflowX}));
  expect(bounds.overflow).toMatch(/auto|scroll/);expect(bounds.scroll).toBeGreaterThan(bounds.client);
  await page.locator('.matrix-scroll').focus();await page.keyboard.press('End');
  await noOverflow(page);
});
test('founder portrait and explicit professional link',async({page})=>{
  await page.goto(siteUrl+'/en/why-us.html');
  const portrait=page.locator('.portrait img');
  await portrait.scrollIntoViewIfNeeded();
  await expect(portrait).toHaveAttribute('alt','Portrait of Dr. Lior Tabansky');
  await expect.poll(()=>portrait.evaluate(i=>i.complete&&i.naturalWidth===640)).toBe(true);
  await expect(page.locator('main a[href="https://cyberdrtabansky.com/en/"]')).toHaveAttribute('target','_blank');
});
for(const legal of ['terms','privacy']) test('retained Hebrew legal document: '+legal,async({page})=>{
  await page.goto(siteUrl+'/'+legal+'.html');
  await expect(page.locator('html')).toHaveAttribute('lang','he');
  await expect(page.locator('html')).toHaveAttribute('dir','rtl');
  expect(await page.locator('main').innerText()).toMatch(/[\u0590-\u05ff]/);
  await noOverflow(page);
});
test('reduced motion and fresh versioned assets on repeat navigation',async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto(siteUrl+'/en/');
  expect(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  await expect(page.locator('link[href="/assets/css/clear-practice.css?v=clear-practice-2"]')).toHaveCount(1);
  await expect(page.locator('script[src="/assets/js/home-pricing.js?v=narrative-1"]')).toHaveCount(1);
  await page.reload();await expect(page.locator('h1')).toHaveText('Private information can be used against you.');
});

test('pricing notes, credit conditions, deep links and print retain access',async({page})=>{
  await page.goto(siteUrl+'/en/pricing.html');
  const all=page.locator('main details');await expect(all).toHaveCount(1);
  const other=page.locator('#other-pricing-and-credit');await expect(other).not.toHaveAttribute('open','');
  await expect(page.locator('.pricing-notes')).toContainText('within 30 days of Assessment completion');
  await other.locator('summary').focus();await page.keyboard.press('Enter');await expect(other).toHaveAttribute('open','');
  await expect(other).toContainText('The credit applies once to a group engagement');
  await page.goto(siteUrl+'/en/pricing.html#other-pricing-and-credit');await expect(other).toHaveAttribute('open','');
  const before=await all.evaluateAll(items=>items.map(i=>i.open));
  await page.evaluate(()=>dispatchEvent(new Event('beforeprint')));expect(await all.evaluateAll(items=>items.every(i=>i.open))).toBe(true);
  await page.evaluate(()=>dispatchEvent(new Event('afterprint')));expect(await all.evaluateAll(items=>items.map(i=>i.open))).toEqual(before);
});
test('main section order and core scope remain consistent across widths',async({page})=>{
  for(const route of ['index','pricing','separation-divorce','they-know-something']) {
    let expected;
    for(const width of [1440,768,390,320]) {
      await page.setViewportSize({width,height:900});
      await page.goto(siteUrl+'/en/'+(route==='index'?'':route+'.html'));
      const order=await page.locator(route==='pricing'?'.pricing-matrix-content>section,.pricing-matrix-content>details':'main>section[id]').evaluateAll(items=>items.map(i=>({tag:i.tagName,id:i.id,className:i.className})));
      if(expected)expect(order).toEqual(expected);else expected=order;
      await noOverflow(page);
      if(route==='pricing'){
        await expect(page.locator('.assessment')).toContainText('₪4,000');
        await expect(page.locator('.shield-matrix')).toContainText('₪32,000');
        await expect(page.locator('.shield-matrix')).toContainText('₪45,000');
        await expect(page.locator('.shield-matrix')).toContainText('₪70,000');
      }else if(route==='index'){
        await expect(page.locator('.copy-hero')).toContainText('₪32,000 including VAT');
        await expect(page.locator('#assessment')).toContainText('₪4,000 including VAT');
      } else await expect(page.locator('.copy-offer .offer-price')).toBeVisible();
      if(route==='pricing') {
        await expect(page.getByRole('rowheader',{name:'Review visit at 12 months',exact:true})).toBeVisible();
        await expect(page.locator('.brand-list li')).toHaveCount(12);
      }
    }
  }
});

test('marketing Home exposes stakes, full-service scope and separate Assessment',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await page.goto(siteUrl+'/en/');
  await expect(page.locator('.copy-hero')).toContainText('Are you sure your private information is still private?');
  await expect(page.locator('.copy-hero')).toContainText('money, reputation and decisions');
  const outcome=page.locator('#personal-shield');
  await expect(outcome).toContainText('Two compatible physical security keys');
  await expect(outcome).toContainText('You remain present, control your credentials and approve material changes');
  expect(await outcome.evaluate((element)=>Boolean(element.compareDocumentPosition(document.querySelector('#assessment'))&Node.DOCUMENT_POSITION_FOLLOWING))).toBe(true);
  await expect(page.locator('.copy-hero')).toContainText('Personal Shield is a separate purchase');
  for(const paragraph of await outcome.locator('p').all())await expect(paragraph).toBeVisible();
  const before=await page.locator('main details').evaluateAll(items=>items.map(i=>i.open));
  await page.keyboard.press('Tab');await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  expect(await page.locator('main details').evaluateAll(items=>items.map(i=>i.open))).toEqual(before);
});

test('pricing exposes separate Assessment, Shield matrix and app examples',async({page})=>{
  await page.setViewportSize({width:390,height:844});await page.goto(siteUrl+'/en/pricing.html');
  const assessment=page.locator('.assessment');
  await expect(assessment).toContainText('₪4,000');
  await expect(assessment).toContainText('Risk assessment');
  await expect(assessment).toContainText('Threat model built together');
  await expect(assessment).toContainText('Urgent first aid within scope');
  const matrix=page.locator('.shield-matrix');
  await expect(matrix.locator('thead th[scope="col"]')).toHaveCount(4);
  await expect(matrix.locator('tbody tr')).toHaveCount(4);
  for(const [label,price] of [['Personal Shield','₪32,000'],['Personal Shield for Two','₪45,000'],['Inner Circle','₪70,000']])
    await expect(matrix.locator('thead')).toContainText(label+price);
  await expect(matrix).toContainText('Up to 4');
  await expect(matrix).toContainText('12, pooled');
  await expect(page.locator('.shared-inclusions')).toContainText('One home network and router');
  await expect(page.locator('.brand-list li')).toHaveCount(12);
  await expect(page.locator('.brand-credit a')).toHaveAttribute('href','https://github.com/simple-icons/simple-icons');
  await expect(page.locator('.pricing-contact .contact-channels a')).toHaveCount(2);
  await noOverflow(page);
});
test('situation pages keep material controls and separate purchases with their scope',async({page})=>{
  for(const width of [1440,390,320]){
    await page.setViewportSize({width,height:844});
    await page.goto(siteUrl+'/en/separation-divorce.html');
    const effects=page.locator('#make-changes-with-their-consequences-in-view');
    await expect(effects.getByText(/We do not promise invisible changes/)).toBeVisible();
    const later=page.locator('#a-setup-for-the-life-you-are-moving-into');
    await expect(later.getByText(/Scope and price are agreed separately; there is no automatic continuation/)).toBeVisible();
    await expect(page.locator('.page-index').getByRole('link',{name:'After the visit'})).toHaveAttribute('href','#a-setup-for-the-life-you-are-moving-into');
    await noOverflow(page);

    await page.goto(siteUrl+'/en/they-know-something.html');
    const assessment=page.locator('#have-someone-examine-the-access-and-address-urgent-problems');
    const hardening=page.locator('#hardening-beyond-the-first-visit');
    await expect(assessment.getByText(/Any expansion of scope or price needs your agreement/)).toBeVisible();
    await expect(assessment.getByRole('link',{name:'Initial visit details'})).toBeVisible();
    await expect(assessment.getByRole('link',{name:'See availability, fees and arrival conditions'})).toBeVisible();
    await expect(page.locator('#have-someone-examine-the-access-and-address-urgent-problems + #hardening-beyond-the-first-visit')).toHaveCount(1);
    await expect(hardening.getByText(/Scope, price and purchase are agreed separately/)).toBeVisible();
    await expect(assessment.getByText(/Personal Shield/)).toHaveCount(0);
    await expect(page.getByText(/Recovering copies of information already shared is outside this service/)).toBeVisible();
    await expect(page.locator('#contact').getByText(/Contact through WhatsApp or Signal is not guaranteed to be invisible/)).toBeVisible();
    await noOverflow(page);
  }
});

for(const route of ['index','pricing'])test('short-screen contact and responsive narrative: '+route,async({page})=>{
  await page.setViewportSize({width:390,height:667});
  await page.goto(siteUrl+'/en/'+(route==='index'?'':route+'.html'));
  if(route==='pricing') await page.locator('.pricing-contact').scrollIntoViewIfNeeded();
  else await page.locator('main a[href="#contact"]').first().click();
  const channels=page.locator(route==='pricing'?'.pricing-contact .contact-channels a':'#contact .contact-channels a');
  await expect(channels).toHaveCount(2);
  for(const channel of await channels.all()){
    await expect(channel).toBeInViewport({ratio:1});
    const bounds=await channel.boundingBox();expect(bounds.height).toBeGreaterThanOrEqual(44);
  }
  for(const width of [320,390,640,768,1024,1440]){
    await page.setViewportSize({width,height:900});await noOverflow(page);
  }
});

test('narrative assets are scoped and the script retains shared behavior',async({page})=>{
  const original=fs.readFileSync('assets/js/site.js','utf8');
  const expected=original.replace("var disclosure = target.querySelector('.section-disclosure');", "var disclosure = target.id === 'main-content' ? null : target.querySelector('.section-disclosure');");
  expect(expected).not.toBe(original);
  expect(fs.readFileSync('assets/js/home-pricing.js','utf8')).toBe(expected);
  await page.goto(siteUrl+'/en/why-us.html');
  await expect(page.locator('link[href*="home-pricing.css"]')).toHaveCount(0);
  await expect(page.locator('script[src="/assets/js/home-pricing.js?v=narrative-1"]')).toHaveCount(1);
  await expect(page.locator('link[href="/assets/css/marketing-02.css?v=marketing-02-1"]')).toHaveCount(1);
});

test('Process stages preserve visible order, purchase boundaries and readable headings',async({page})=>{
  const processCopy=pages().find(copy=>copy.route==='what-happens-during-the-visit');
  const approvedStageBlocks=processCopy.sections.slice(0,3).map(section=>md.parse(section,{}).filter(token=>token.type==='inline').map(token=>normalize(token.children.map(child=>child.type==='text'||child.type==='code_inline'?child.content:child.type==='softbreak'?' ':'').join(''))));
  const stageIds=[
    'decide-whether-toza-fits-before-you-buy',
    'your-paid-assessment-inspection-diagnosis-and-urgent-first-aid',
    'have-the-agreed-setup-hardened-around-your-life',
  ];
  for(const width of [1440,768,390,320]){
    await page.setViewportSize({width,height:900});
    await page.goto(siteUrl+'/en/what-happens-during-the-visit.html');
    await expect(page.locator('main details')).toHaveCount(0);
    expect(await page.locator('.process-stage').evaluateAll(items=>items.map(i=>i.id))).toEqual(stageIds);
    expect(await page.locator('.process-stage').evaluateAll(items=>items.map(i=>i.querySelectorAll('.process-step').length))).toEqual([2,3,3]);
    expect(await page.locator('.process-step').evaluateAll(items=>items.map(i=>Number(i.dataset.processStep)))).toEqual([1,2,3,4,5,6,7,8]);
    const steps=await page.locator('.process-step').evaluateAll(items=>items.map(i=>({top:i.getBoundingClientRect().top,bottom:i.getBoundingClientRect().bottom})));
    for(let i=1;i<steps.length;i++)expect(steps[i].top).toBeGreaterThanOrEqual(steps[i-1].bottom);
    const stages=await page.locator('.process-stage').all();
    for(const [index,stage] of stages.entries()){
      expect((await stage.locator('h2,h3,p').allTextContents()).map(normalize)).toEqual(approvedStageBlocks[index]);
      const heading=stage.locator('h2');await expect(heading).toBeVisible();
      const bounds=await heading.boundingBox();
      const stageBounds=await stage.locator('.copy-body').boundingBox();
      expect(bounds.width).toBeGreaterThanOrEqual(stageBounds.width*.9);
      for(const block of await stage.locator('h3,p').all())await expect(block).toBeVisible();
    }
    const offer=page.locator('#'+stageIds[1]+' .section-title');
    await expect(offer).toContainText('Private Exposure Assessment · Typically four hours');
    await expect(offer.locator('.offer-price')).toHaveText('₪4,000 including VAT');
    const decision=page.locator('.process-decision');
    await expect(decision).toContainText('Broader hardening is a separate purchase decision');
    const assessment=await page.locator('#'+stageIds[1]).boundingBox();
    const full=await page.locator('#'+stageIds[2]).boundingBox();
    expect(full.y-(assessment.y+assessment.height)).toBeGreaterThanOrEqual(28);
    expect(await page.locator('main>.copy-section').evaluateAll(items=>items.slice(3).map(i=>i.id))).toEqual([
      'get-help-with-the-changes-afterward','you-approve-changes-and-decide-what-an-adviser-receives','need-an-urgent-visit','contact'
    ]);
    for(const block of await page.locator('main>.copy-section h2,main>.copy-section h3,main>.copy-section p').all())await expect(block).toBeVisible();
    await noOverflow(page);
  }
});

test('Process anchors, short-screen contact, print and CSS scope remain accessible',async({page})=>{
  await page.setViewportSize({width:390,height:667});
  await page.goto(siteUrl+'/en/what-happens-during-the-visit.html');
  await expect(page.locator('link[href="/assets/css/process-stages.css?v=batch-a-1"]')).toHaveCount(1);
  for(const label of ['Before you buy','The Assessment','Full engagement']){
    const link=page.locator('.page-index').getByRole('link',{name:label,exact:true});
    const target=await link.getAttribute('href');
    await link.focus();await page.keyboard.press('Enter');
    await expect(page.locator(target+' h2')).toBeInViewport({ratio:1});
    expect(new URL(page.url()).hash).toBe(target);
  }
  await page.locator('.page-index').getByRole('link',{name:'Contact',exact:true}).click();
  for(const channel of await page.locator('#contact .contact-channels a').all())await expect(channel).toBeInViewport({ratio:1});
  const before=normalize(await page.locator('main').innerText());
  await page.emulateMedia({media:'print'});
  expect(normalize(await page.locator('main').innerText())).toBe(before);
  for(const block of await page.locator('main h2,main h3,main p').all())await expect(block).toBeVisible();
  await noOverflow(page);
  await page.emulateMedia({media:'screen'});
  await page.goto(siteUrl+'/en/why-us.html');
  await expect(page.locator('link[href*="process-stages.css"]')).toHaveCount(0);
});
