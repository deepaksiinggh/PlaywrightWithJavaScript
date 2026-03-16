import { test, expect } from "@playwright/test";

test("Auto suggestion", async ({ page }) => {
  await page.goto("https://www.easemytrip.com/");

  // Click FROM field
  await page.locator("#FromSector_show").click();

  // Type like real user
  await page.locator("#a_FromSector_show").pressSequentially("delhi");

  // Wait for suggestions
  await page.waitForSelector("ul.ausuggest li");

  // Capture all suggestions
  const suggestions = await page.$$("ul.ausuggest li");

  for (const sug of suggestions) {
    const text = await sug.textContent();
    console.log(text);

    if (text.includes("Hissar")) {
      await sug.click();
      break;
    }
  }
});
