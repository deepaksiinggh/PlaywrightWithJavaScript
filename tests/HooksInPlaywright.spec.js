import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  // Wait for dashboard (important stabilization)
  await expect(page.getByText("Dashboard")).toBeVisible();
});

test("Verify PIM navigation", async ({ page }) => {
  await page.getByRole("link", { name: "PIM" }).click();

  // Assertion
  await expect(page).toHaveURL(/pim/);
});

test("Verify Leave navigation", async ({ page }) => {
  await page.getByRole("link", { name: "Leave" }).click();

  // Assertion
  await expect(page).toHaveURL(/leave/);
});
