import { test, expect } from "@playwright/test";

test("multi select", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //   await page.locator("#colors").selectOption(["Red", "Blue", "Green"]);
  //   await page.selectOption("#colors", ["Red", "Blue", "Green"]);

  //   const options = await page.$$("#colors option");
  //   await expect(options.length).toBe(7);
  //   await page.close();

  const content = await page.locator("#colors").textContent();
  await expect(content.includes("Red")).toBeTruthy();
});
