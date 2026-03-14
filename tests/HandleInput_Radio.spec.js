import { test, expect } from "@playwright/test";

test("input testcase", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const nameInput = await page.getByPlaceholder("Enter Name");
  await expect(nameInput).toBeEnabled();
  await expect(nameInput).toBeVisible();
  await nameInput.fill("Deepak");
  await page.close();
});

test("cheackbox testcase", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const cheackbox = await page.locator("//input[@id='male']");
  await cheackbox.check();
  await expect(cheackbox).toBeChecked();

  console.log("deepak");
});
