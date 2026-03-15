import { test, expect } from "@playwright/test";

test("selct option by select tag", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //   await page.locator("#country").selectOption("United Kingdom");
  //   await page.locator("#country").selectOption({ label: "United Kingdom" });
  //   await page.locator("#country").selectOption({ value: "uk" });
  //   await page.locator("#country").selectOption({ index: 5 });
  //   await page.waitForTimeout(5000);

  // cheack number of option in dropdown
  //   const countopt = await page.locator("#country option");
  //   await expect(countopt).toHaveCount(10);

  // cheack number of option in dropdown approch 2
  //   const options = await page.$$("#country option"); // $$ return  array
  //   await expect(options.length).toBe(10);

  //  const options = await page.$$("#country option");

  // for (const option of options) {
  //   const optionval = await option.textContent();
  //   if (optionval.includes("France")) {
  //     await page.locator("#country").selectOption(optionval.trim());
  //     break;
  //   }
  // }

  // cheack presense of value in dropdown
  //   const content = await page.locator("#country").textContent();
  //   await expect(content.includes("India")).toBeTruthy();

  // validate options by loop

  const options = await page.$$("#country option");

  let flag = false;
  for (const option of options) {
    const optiontext = await option.textContent();
    if (optiontext.includes("France")) {
      flag = true;
      break;
    }
  }
  await expect(flag).toBeTruthy();

  await page.waitForTimeout(5000);
  await page.close();
});
