import { test, expect } from "@playwright/test";

test("homepage", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");
  const inputbox1 = await page.getByPlaceholder(
    "Paste one version of the text here.",
  );
  const inputbox2 = page.getByPlaceholder(
    "Paste another version of the text here.",
  );

  await inputbox1.fill("deepak is a good boy");

  await page.keyboard.press("Control+A");
  await page.keyboard.press("Control+C");
  await page.keyboard.down("Tab");

  await page.keyboard.press("Control+V");

  await expect(inputbox2).toHaveValue("deepak is a good boy");
  await page.waitForTimeout(5000);
});
