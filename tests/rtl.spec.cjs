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
  const raw=copy.source.split(/#{2,3} Hero\n\n/)[1];
  for(const token of md.parse(raw,{}).filter(t=>t.type==='inline')) {
    let text=token.children.map(t=>t.type==='text'||t.type==='code_inline'?t.content:t.type==='softbreak'?' ':'').join('').replace(/ \{#[\w-]+\}$/,'');
    text=normalize(text);
    if(!text || /^(Portrait caption:|Portrait alt text:|External link to cyberdrtabansky.com\.)/.test(text)) continue;
    if(text==='Request a private conversation: WhatsApp / Signal' || text==='Request a private conversation') continue;
    expect(main,'Missing accepted text: '+text).toContain(text);
  }
  await expect(page.locator('.brand')).toHaveAttribute('aria-label','Toza home');
  await expect(page.locator('.brand .name')).toHaveText('toza');
  const wa=page.locator('#contact a[href^="https://wa.me/"]');
  const signal=page.locator('#contact a[href^="https://signal.me/"]');
  await expect(wa).toHaveText('Message on WhatsApp');
  const url=new URL(await wa.getAttribute('href'));
  expect(url.pathname).toBe('/972533366276');
  expect(url.searchParams.get('text')).toBe("I'd like a private conversation. Please let me know the next step.");
  await expect(signal).toHaveAttribute('href','https://signal.me/#p/+972533366276');
  await noOverflow(page);
  expect(errors).toEqual([]);expect(failures).toEqual([]);
  if(['index','pricing','faq','why-us','private-exposure-assessment','separation-divorce'].includes(copy.route)) {
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
test('comparison tables reflow with preserved row and column headers',async({page})=>{
  await page.setViewportSize({width:320,height:800});
  await page.goto(siteUrl+'/en/pricing.html');
  await page.locator('[data-expand-details]').click();
  const tables=page.locator('.copy-table');
  await expect(tables).toHaveCount(5);
  for(const table of await tables.all()) {
    await expect(table).toHaveAttribute('tabindex','0');
    expect(await table.locator('thead th[scope="col"]').count()).toBeGreaterThan(1);
    expect(await table.locator('tbody th[scope="row"]').count()).toBeGreaterThan(0);
    await table.focus();await expect(table).toBeFocused();
    const bounds=await table.evaluate(t=>({client:t.clientWidth,scroll:t.scrollWidth}));
    expect(bounds.scroll).toBeLessThanOrEqual(bounds.client+1);
  }
  await noOverflow(page);
});
test('founder portrait and explicit professional link',async({page})=>{
  await page.goto(siteUrl+'/en/why-us.html');
  const portrait=page.locator('.portrait img');
  await portrait.scrollIntoViewIfNeeded();
  await expect(portrait).toHaveAttribute('alt','Portrait of Dr. Lior Tabansky');
  await expect.poll(()=>portrait.evaluate(i=>i.complete&&i.naturalWidth===640)).toBe(true);
  await expect(page.locator('main a[href="https://cyberdrtabansky.com"]')).toHaveAttribute('target','_blank');
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
  await expect(page.locator('link[href="/assets/css/clear-practice.css?v=clear-practice-1"]')).toHaveCount(1);
  await expect(page.locator('script[src="/assets/js/home-pricing.js?v=narrative-1"]')).toHaveCount(1);
  await page.reload();await expect(page.locator('h1')).toHaveText('Your private life deserves more care than a default setting.');
});

test('supporting details, credit conditions, deep links and print retain access',async({page})=>{
  await page.goto(siteUrl+'/en/pricing.html');
  const toggle=page.locator('[data-expand-details]');
  const all=page.locator('main details');
  expect(await all.evaluateAll(items=>items.every(i=>!i.open))).toBe(true);
  const credit=page.locator('#your-initial-fee-counts-toward-the-full-service');
  await expect(credit.getByText(/Booking alone does not qualify/)).toBeVisible();
  await expect(credit.getByText(/The credit applies once to the group engagement/)).toBeVisible();
  const compare=page.locator('summary').filter({hasText:'Compare all inclusions and support'});
  await compare.focus();await page.keyboard.press('Enter');
  await expect(page.locator('details').filter({has:compare})).toHaveAttribute('open','');
  await toggle.click();expect(await all.evaluateAll(items=>items.every(i=>i.open))).toBe(true);
  await toggle.click();expect(await all.evaluateAll(items=>items.every(i=>!i.open))).toBe(true);
  await page.goto(siteUrl+'/en/pricing.html#urgent-visits-in-central-israel');
  await expect(page.locator('#urgent-visits-in-central-israel details')).toHaveAttribute('open','');
  const before=await all.evaluateAll(items=>items.map(i=>i.open));
  await page.evaluate(()=>dispatchEvent(new Event('beforeprint')));
  expect(await all.evaluateAll(items=>items.every(i=>i.open))).toBe(true);
  await page.evaluate(()=>dispatchEvent(new Event('afterprint')));
  expect(await all.evaluateAll(items=>items.map(i=>i.open))).toEqual(before);
});

test('main section order and core scope remain consistent across widths',async({page})=>{
  for(const route of ['index','pricing','separation-divorce']) {
    let expected;
    for(const width of [1440,768,390,320]) {
      await page.setViewportSize({width,height:900});
      await page.goto(siteUrl+'/en/'+(route==='index'?'':route+'.html'));
      const order=await page.locator('main>section[id]').evaluateAll(items=>items.map(i=>i.id));
      if(expected)expect(order).toEqual(expected);else expected=order;
      await noOverflow(page);
      await expect(page.locator(route==='pricing'?'.pricing-first-visit-facts .offer-price':'.copy-offer .offer-price')).toBeVisible();
      if(route==='pricing') {
        await expect(page.getByRole('cell',{name:'From ₪42,000',exact:true})).toBeVisible();
        await expect(page.getByRole('rowheader',{name:'Shared home/home-office network and router'})).toBeVisible();
      }
    }
  }
});

test('approved narrative exposes qualified risk and independent full-service scope',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await page.goto(siteUrl+'/en/');
  const risk=page.locator('.narrative-risk');
  const outcome=page.locator('.narrative-outcome');
  await expect(risk.locator('h2')).toBeVisible();
  await expect(outcome.locator('p')).toHaveCount(2);
  for(const paragraph of await outcome.locator('p').all())await expect(paragraph).toBeVisible();
  const lastOutcome=await outcome.locator('p').last().boundingBox();
  expect(lastOutcome.y+lastOutcome.height).toBeLessThan(2*844);
  const before=await page.locator('main details').evaluateAll(items=>items.map(i=>i.open));
  await page.keyboard.press('Tab');await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  expect(await page.locator('main details').evaluateAll(items=>items.map(i=>i.open))).toEqual(before);
});

test('pricing exposes fee, six comparison rows and adjoining qualified credit',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await page.goto(siteUrl+'/en/pricing.html');
  const fee=page.locator('.pricing-first-visit-facts .offer-price');
  const feeBounds=await fee.boundingBox();
  expect(feeBounds.y+feeBounds.height).toBeLessThan(844);
  const index=await page.locator('.page-index').boundingBox();
  expect(index.y).toBeLessThan(feeBounds.y);
  expect(await page.locator('.primary-comparison tbody th').allTextContents()).toEqual([
    'Price, including VAT','People','Personal devices','Training and verification','In-person work','Shared home/home-office network and router'
  ]);
  await expect(page.locator('.primary-comparison + #your-initial-fee-counts-toward-the-full-service')).toHaveCount(1);
  for(const selector of ['.assessment-benefits','.hardening-introduction','#before-you-book'])await expect(page.locator(selector)).toBeVisible();
});

for(const route of ['index','pricing'])test('short-screen contact and responsive narrative: '+route,async({page})=>{
  await page.setViewportSize({width:390,height:667});
  await page.goto(siteUrl+'/en/'+(route==='index'?'':route+'.html'));
  await page.locator('main a[href="#contact"]').first().click();
  for(const channel of await page.locator('#contact .contact-channels a').all()){
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
  await expect(page.locator('script[src="/assets/js/site.js?v=clear-practice-1"]')).toHaveCount(1);
});
