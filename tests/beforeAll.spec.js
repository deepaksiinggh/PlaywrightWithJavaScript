import { test, expect } from "@playwright/test";
let page;
test.beforeAll("launch demowebshop ", async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://demowebshop.tricentis.com/");
});

test("search product", async () => {
  await page.locator("#small-searchterms").fill("computer");
  await page.locator('input[type="submit"]').click();
  await page.setDefaultTimeout(4000);
});

test("click on ", async () => {
  await page.locator('span:has-text("Wishlist")').click();
  await page.setDefaultTimeout(4000);
});
test.afterAll("close demowebshop", async () => {
  await page.close();
});
