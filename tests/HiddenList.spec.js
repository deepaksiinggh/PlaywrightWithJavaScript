import { test, expect } from "@playwright/test";

test("hidden elem", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.locator("//span[text()='PIM']").click();
  await page
    .locator(
      "((//div[@class='oxd-select-text-input'][normalize-space()='-- Select --'])[2])",
    )
    .click();

  await page.waitForSelector(
    "(//div[@class='oxd-select-wrapper'])[3]/div[2]/div/span",
  );
  const alloption = await page.$$(
    "(//div[@class='oxd-select-wrapper'])[3]/div[2]/div/span",
  );

  for (const option of alloption) {
    const text = await option.textContent();
    if (text.includes("Chief Technical Officer")) {
      await option.click();
      break;
    }
  }
  await page.waitForTimeout(3000);
});
