import { test, expect } from "@playwright/test";

test("nested frame", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame3 = page.frameLocator('[src*="frame_3.html"]');

  await frame3.locator("#id3 input").fill("deepak");

  const innerFrame = frame3.frameLocator("iframe");

  await innerFrame.getByText("Hi, I am the UI.Vision IDE").click();
});
