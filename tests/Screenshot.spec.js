import { test, expect } from "@playwright/test";

test("page screenshot", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  await page.screenshot({
    path: "tests/Screenshot/" + Date.now() + "Homepage.png",
  });
});
test.only(" full page screenshot", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  await page.screenshot({
    path: "tests/Screenshot/" + Date.now() + "Fullpage.png",
    fullPage: true,
  });
});
test("Element screenshot", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  const inputBox = await page.locator("#small-searchterms");
  await inputBox.screenshot({
    path: "tests/Screenshot/" + Date.now() + "Element.png",
  });
});
