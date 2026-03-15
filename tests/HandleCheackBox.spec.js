import { test, expect } from "@playwright/test";

test("cheackbox", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/checkboxes");
  const chackbox1 = await page.locator("#checkbox1");
  await expect(chackbox1).not.toBeChecked();
  const chackbox2 = await page.locator("#checkbox2");
  await expect(chackbox2).toBeChecked();
  await page.close();
});
