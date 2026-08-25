module.exports = {
  testDir: "./tests",
  outputDir: "test-results",
  testMatch: "**/*.spec.cjs",
  timeout: 30_000,
  expect: { timeout: 10_000 },
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : "list",
  use: {
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "hebrew-desktop", use: { viewport: { width: 1440, height: 900 } } },
    { name: "hebrew-mobile", use: { viewport: { width: 390, height: 844 } } },
  ],
};
