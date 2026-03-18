import { test, expect } from "@playwright/test";
import { only } from "node:test";

test("Single file Upload", async ({ page }) => {
  await page.goto("https://demoqa.com/upload-download");
  await page.locator("#uploadFile").setInputFiles("tests\\Files\\d1.png");

  await page.waitForTimeout(4000);
  await page.close();
});

test("Multiple file upload", async ({ page }) => {
  await page.goto("https://www.davidwalsh.name/demo/multiple-file-upload.php");
  await page
    .locator("#filesToUpload")
    .setInputFiles(["tests\\Files\\d1.png", "tests\\Files\\d2.pdf"]);
  await page.waitForTimeout(4000);

  const firstFile = await page.locator("#fileList li").nth(0).textContent();
  const secondFile = await page.locator("#fileList li").nth(1).textContent();

  await expect(firstFile).toContain("d1.png");
  await expect(secondFile).toContain("d2.pdf");
  await page.close();
});
