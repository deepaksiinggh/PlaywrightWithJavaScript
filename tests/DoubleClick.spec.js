import { test, expect } from "@playwright/test";

test("assertion", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.getByText("Copy Text").dblclick();
  await expect(page.locator("#field2")).toHaveValue("Hello World!");

  await page.close();
});
