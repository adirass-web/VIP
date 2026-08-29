const { expect, test } = require("@playwright/test");
const { createSiteServer } = require("./helpers/site-server.cjs");

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

const clarityPages = [
  { path: "/en/", headline: "Your digital life reveals more than you realize.", ledgers: 3, devicesTest: true },
  {
    path: "/en/separation-divorce.html",
    headline: "Before separation or divorce moves, understand what your shared digital life still reveals.",
    ledgers: 1,
    devicesTest: false,
  },
  {
    path: "/en/business-dispute.html",
    headline: "You know your legal and commercial position. Do you know your digital one?",
    ledgers: 1,
    devicesTest: false,
  },
];

for (const clarityPage of clarityPages) {
  test(`${clarityPage.path} renders the approved clarity page without overflow`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark", reducedMotion: "reduce" });
    await page.goto(`${siteUrl}${clarityPage.path}`);

    await expect(page.locator("body")).toContainClass("clarity-page");
    if (clarityPage.devicesTest) {
      await expect(page.locator("body")).toContainClass("devices-test");
    } else {
      await expect(page.locator("body")).toHaveClass("clarity-page");
    }
    await expect(page.locator("h1")).toHaveText(clarityPage.headline);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator(".exposure-ledger")).toHaveCount(clarityPage.ledgers);
    await expect(page.locator("main details")).toHaveCount(0);
    await expect(page.locator('script[src*="guilloche"]')).toHaveCount(0);
    await expect(page.locator('link[href*="clarity.css"]')).toHaveCount(1);
    await expect(page.locator('link[href*="dossier.css"]')).toHaveCount(0);

    const portrait = page.locator('.hero-portrait img[src="/assets/img/dr-tabansky-portrait-square-640.webp"]');
    await expect(portrait).toBeVisible();
    expect(await portrait.evaluate((image) => image.complete && image.naturalWidth === 640)).toBe(true);

    const primaryLabels = await page.locator('a[href="#contact"]').allTextContents();
    expect(primaryLabels.length).toBeGreaterThanOrEqual(3);
    expect(primaryLabels.every((label) => label.trim() === "Request a private conversation")).toBe(true);

    const metrics = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      background: getComputedStyle(document.body).backgroundColor,
      headings: [...document.querySelectorAll("main h1, main h2, main h3")].map((heading) => Number(heading.tagName[1])),
      duplicateIds: [...document.querySelectorAll("[id]")]
        .map((element) => element.id)
        .filter((id, index, ids) => ids.indexOf(id) !== index),
      unlabelledImages: [...document.images].filter((image) => !image.hasAttribute("alt")).length,
    }));
    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
    expect(metrics.background).toBe("rgb(246, 245, 240)");
    expect(metrics.headings[0]).toBe(1);
    expect(metrics.headings.every((level, index) => index === 0 || level <= metrics.headings[index - 1] + 1)).toBe(true);
    expect(metrics.duplicateIds).toEqual([]);
    expect(metrics.unlabelledImages).toBe(0);

    const menuButton = page.locator("[data-nav-toggle]");
    const viewport = page.viewportSize();
    if (viewport && viewport.width <= 940) {
      await expect(menuButton).toBeVisible();
      await menuButton.click();
      await expect(page.locator("#site-menu")).toHaveClass(/open/);
    } else {
      await expect(menuButton).toBeHidden();
    }
  });
}

test("Home reflows at 320px without clipping the exposure ledgers", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto(`${siteUrl}/en/`);
  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
  await expect(page.locator(".ledger-result").first()).toBeVisible();
});
