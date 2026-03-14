import { test, expect } from "@playwright/test";

test("homepage", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  const pageTitle = await page.title();
  console.log(pageTitle);
  const pageUrl = await page.url();
  console.log(pageUrl);
  await expect(page).toHaveTitle("STORE");
  await expect(page).toHaveURL("https://demoblaze.com/");
  page.close();
});
