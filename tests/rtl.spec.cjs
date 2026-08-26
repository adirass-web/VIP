const fs = require("node:fs");
const path = require("node:path");
const { expect, test } = require("@playwright/test");
const { createSiteServer } = require("./helpers/site-server.cjs");

const mixedFixture = fs.readFileSync(path.join(__dirname, "fixtures", "rtl-mixed.txt"), "utf8").trim();
let server;
let siteUrl;

test.beforeAll(async () => {
  server = createSiteServer();
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      server.off("error", reject);
      resolve();
    });
  });
  siteUrl = `http://127.0.0.1:${server.address().port}`;
});

test.afterAll(async () => {
  if (!server) return;
  await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
});

test("Hebrew home preserves RTL chrome and isolated mixed-direction text", async ({ page }, testInfo) => {
  await page.goto(`${siteUrl}/he/`);
  await expect(page.locator("html")).toHaveAttribute("lang", "he");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await expect(page.locator("h1")).toContainText("יש דברים בחיים הדיגיטליים שלך");

  const menuButton = page.locator("[data-nav-toggle]");
  const menu = page.locator("#site-menu");
  const viewport = page.viewportSize();
  if (viewport && viewport.width <= 760) {
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await expect(menu).toHaveClass(/open/);
    await menuButton.click();
    await expect(menu).not.toHaveClass(/open/);
  } else {
    await expect(menuButton).toBeHidden();
    await expect(menu).toBeVisible();
  }

  const isolatedRun = page.locator(".bidi-ltr").first();
  await expect(isolatedRun).toBeVisible();
  const bidiStyle = await isolatedRun.evaluate((element) => {
    const style = window.getComputedStyle(element);
    return { direction: style.direction, unicodeBidi: style.unicodeBidi };
  });
  expect(bidiStyle.direction).toBe("ltr");
  expect(bidiStyle.unicodeBidi).toContain("isolate");

  await page.locator("#main-content").evaluate((main, text) => {
    const fixture = document.createElement("p");
    fixture.id = "rtl-test-fixture";
    fixture.dir = "rtl";
    fixture.style.cssText = "max-width:none;margin:1.5rem 5%;padding:1rem;border:1px solid currentColor";
    fixture.append(document.createTextNode("שלום "));
    const ltr = document.createElement("bdi");
    ltr.className = "bidi-ltr";
    ltr.textContent = "John 050-1234567 ₪1,234";
    fixture.append(ltr);
    main.append(fixture);
    if (fixture.textContent !== text) throw new Error("RTL fixture text changed while rendering");
  }, mixedFixture);
  await expect(page.locator("#rtl-test-fixture")).toHaveText(mixedFixture);

  const bounds = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    header: document.querySelector(".site-header")?.getBoundingClientRect().toJSON(),
  }));
  expect(bounds.scrollWidth).toBeLessThanOrEqual(bounds.clientWidth + 1);
  expect(bounds.header.left).toBeGreaterThanOrEqual(-1);
  expect(bounds.header.right).toBeLessThanOrEqual(bounds.clientWidth + 1);

  const screenshot = testInfo.outputPath(`rtl-${testInfo.project.name}.png`);
  await page.screenshot({ path: screenshot, fullPage: true });
  expect(fs.existsSync(screenshot)).toBe(true);
});

test("Hebrew Leaving page remains an exposure-assessment page", async ({ page }) => {
  await page.goto(`${siteUrl}/he/leaving-controlling-relationship.html`);
  await expect(page.locator("h1")).toHaveText(
    "אם את חוששת שהוא רואה יותר ממה שהוא אמור לראות, אל תמהרי לשנות הכול.",
  );
  const mainText = await page.locator("main").innerText();
  expect(mainText).toContain("גישה, נראות ושליטה");
  expect(mainText).not.toMatch(/(?:בטיחות|בטוח|סכנה|קו חירום|שירות חירום|אלימות|התעללות|משטרה|מקלט|עו[״"]ס|118|100)/);
});

test("Hebrew FAQ control expands and collapses its localized answers", async ({ page }) => {
  await page.goto(`${siteUrl}/he/faq.html`);
  const toggle = page.locator("[data-faq-toggle-all]");
  const answers = page.locator(".faq details");

  await expect(toggle).toHaveText("פתיחת כל התשובות");
  await toggle.click();
  await expect(toggle).toHaveText("סגירת כל התשובות");
  expect(await answers.evaluateAll((items) => items.every((item) => item.open))).toBe(true);
  await toggle.click();
  await expect(toggle).toHaveText("פתיחת כל התשובות");
  expect(await answers.evaluateAll((items) => items.every((item) => !item.open))).toBe(true);
});

test("Why Toza stays local before the explicit external profile link", async ({ page }, testInfo) => {
  await page.goto(`${siteUrl}/en/why-us.html`);
  await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
  await expect(page.locator("h1")).toHaveText("Why I created Toza.");
  if (await page.locator("[data-nav-toggle]").isVisible()) {
    await page.locator("[data-nav-toggle]").click();
  }
  await expect(page.locator('#site-menu a[href="/en/why-us.html"]')).toBeVisible();
  if (await page.locator("[data-nav-toggle]").isVisible()) {
    await page.locator("[data-nav-toggle]").click();
  }

  const englishPortrait = page.locator('.portrait img[src="/assets/img/dr-tabansky-portrait-square-640.webp"]');
  await expect(englishPortrait).toBeVisible();
  expect(await englishPortrait.evaluate((image) => image.complete && image.naturalWidth === 640)).toBe(true);

  const englishProfile = page.locator('.external-profile a[href="https://cyberdrtabansky.com"]');
  await expect(englishProfile).toHaveAttribute("target", "_blank");
  await expect(englishProfile).toContainText("View my professional profile");

  const englishScreenshot = testInfo.outputPath(`why-toza-en-${testInfo.project.name}.png`);
  await page.screenshot({ path: englishScreenshot, fullPage: true });
  expect(fs.existsSync(englishScreenshot)).toBe(true);

  await page.goto(`${siteUrl}/he/why-us.html`);
  await expect(page.locator("html")).toHaveAttribute("lang", "he");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await expect(page.locator("h1")).toContainText("למה הקמתי את");
  if (await page.locator("[data-nav-toggle]").isVisible()) {
    await page.locator("[data-nav-toggle]").click();
  }
  await expect(page.locator('#site-menu a[href="/he/why-us.html"]')).toBeVisible();
  if (await page.locator("[data-nav-toggle]").isVisible()) {
    await page.locator("[data-nav-toggle]").click();
  }

  const hebrewPortrait = page.locator('.portrait img[src="/assets/img/dr-tabansky-portrait-square-640.webp"]');
  await expect(hebrewPortrait).toBeVisible();
  expect(await hebrewPortrait.evaluate((image) => image.complete && image.naturalWidth === 640)).toBe(true);

  const hebrewProfile = page.locator('.external-profile a[href="https://cyberdrtabansky.com"]');
  await expect(hebrewProfile).toHaveAttribute("target", "_blank");
  await expect(hebrewProfile).toContainText("לפרופיל המקצועי שלי");

  const bounds = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  expect(bounds.scrollWidth).toBeLessThanOrEqual(bounds.clientWidth + 1);

  const screenshot = testInfo.outputPath(`why-toza-${testInfo.project.name}.png`);
  await page.screenshot({ path: screenshot, fullPage: true });
  expect(fs.existsSync(screenshot)).toBe(true);
});
