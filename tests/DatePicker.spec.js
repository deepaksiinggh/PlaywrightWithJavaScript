import { test } from "@playwright/test";
import { get } from "node:http";

test("simple date picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#datepicker").fill("12/12/2002");
});

test("select date from dropdown ", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.click("#txtDate");
  await page.locator(".ui-datepicker-year").selectOption("2019");
  await page.locator(".ui-datepicker-month").selectOption("May");
  await page.getByRole("link", { name: "22" }).click();
  await page.waitForTimeout(4000);
  await page.close();
});

test("Select start and end date using HTML5 date picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.fill("#start-date", "2025-11-18");
  await page.fill("#end-date", "2025-11-25");
});

test("select date by using loop", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.click("#datepicker");

  const day = 12;
  const month = "March";
  const year = 1999;

  const prev = page.locator(".ui-datepicker-prev");
  const next = page.locator(".ui-datepicker-next");

  while (true) {
    const getMonth = (
      await page.locator(".ui-datepicker-month").textContent()
    ).trim();
    const getYear = await page.locator(".ui-datepicker-year").textContent();

    if (getMonth === month && parseInt(getYear) === year) {
      break;
    }

    if (year < parseInt(getYear)) {
      await prev.click();
    } else if (year > parseInt(getYear)) {
      await next.click();
    } else {
      await prev.click();
    }
  }

  await page.getByRole("link", { name: day.toString() }).click();
});
