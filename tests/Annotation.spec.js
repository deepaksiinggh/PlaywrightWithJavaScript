import { test } from "@playwright/test";

//only
// test.only("test1", async ({ page }) => {
//   console.log("test 1");
// });

//skip
// test.skip("test2", async ({ page }) => {
//   console.log("test 2");
// });

//skip
// test("test3", async ({ page, browserName }) => {
//   if (browserName === "chromium") {
//     test.skip();
//   }
// });

//fixme
// test("test4", async ({ page, browserName }) => {
//   if (browserName === "chromium") {
//     test.fixme();
//   }
// });

//fixme
// test("test5", async ({ page, browserName }) => {
//   if (browserName === "chromium") {
//     test.fail();
//   }
// });

//fixme
// test("test5", async ({ page, browserName }) => {
//   if (browserName === "chromium") {
//     test.fail();
//   }
// });

//fixme
test("test5", async ({ page, browserName }) => {
  test.slow();
  //   test.setTimeout(1500);
  await page.goto("https://demowebshop.tricentis.com/");
});
