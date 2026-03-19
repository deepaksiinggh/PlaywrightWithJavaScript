import { test } from "@playwright/test";

test("test1 @smoke ", async ({ page }) => {
  console.log("test 1");
});
test("test2 @regression", async ({ page }) => {
  console.log("test 2");
});
test("test3 @smoke", async ({ page }) => {
  console.log("test 3");
});
