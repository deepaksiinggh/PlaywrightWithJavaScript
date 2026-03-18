import { test } from "@playwright/test";

test("Mouse Hover", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");
  const loginBtn = await page.getByText("Login", { exact: true });
  const order = await page.getByText("Orders", { exact: true });

  await loginBtn.hover();
  await order.click();
});
