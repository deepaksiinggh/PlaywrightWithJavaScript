import { test } from "@playwright/test";

test("right click on element", async ({ page }) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
  const rightClick = await page.getByText("right click me").nth(0);
  await rightClick.click({ button: "right" });
});
