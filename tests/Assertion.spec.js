import { test, expect } from "@playwright/test";

test("assertion", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(page).toHaveTitle("demosite");
  await expect
    .soft(page)
    .not.toHaveURL("https://demoqa.com/automation-practice-for");
  const gender = page.locator("#gender-radio-1");
  await gender.check();
  await expect(gender).toBeChecked();
  await page.close();
});
