import { test, expect } from "@playwright/test";

test("assertion", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  const table = await page.locator("#productTable");
  const coloumn = await table.locator("thead tr th");
  await expect(coloumn).toHaveCount(4);

  const rows = await table.locator("tbody tr");
  await expect(rows).toHaveCount(5);

 const filterRows =rows.filter({
    has:page.locator('td'),
    hasText:'Smartwatch'

})
  await page.close();
});
