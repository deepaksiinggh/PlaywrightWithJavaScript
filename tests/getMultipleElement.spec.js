import { test, expect } from "@playwright/test";

test("handle multiple element ", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  const navBars = await page.$$("//ul[@class='top-menu']/li/a");

  for (const navBar of navBars) {
    const text = await navBar.textContent();
    console.log(text);
  }
});
