import { test, expect } from "@playwright/test";

test("Drag and drop", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
  const coloumnA = await page.locator("#column-a");
  const coloumnB = await page.locator("#column-b");

  //   await coloumnA.hover();
  //   await page.mouse.down();

  //   await coloumnB.hover();
  //   await page.mouse.up();

  coloumnA.dragTo(coloumnB);

  await page.waitForTimeout(4000);

  await page.close();
});
