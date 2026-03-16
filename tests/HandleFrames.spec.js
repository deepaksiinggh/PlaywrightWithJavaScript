import { test, expect } from "@playwright/test";
test("handle frame", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Frames.html");
  const frame = await page.frames();
  console.log(await frame.length);

  const frame1 = await page.frame({ name: "SingleFrame" });
  await frame1.locator("input:visible").fill("deepak");
  await page.waitForTimeout(3000);

  const frame2 = await page.frame({
    url: "https://demo.automationtesting.in/SingleFrame.html",
  });
  frame2.locator("input:visible").fill("mohit");
  await page.waitForTimeout(3000);

  const frame3 = await page.frameLocator("#singleframe");
  await frame3.locator("input:visible").fill("Lavya");
});
