import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
  console.log(" before all ---");
});
test.beforeEach(async () => {
  console.log(" before each ---");
});
test.afterAll(async () => {
  console.log(" after all ---");
});
test.afterEach(async () => {
  console.log(" after each ---");
});

test.describe("group 1", () => {
  test(" this is test 1", async ({ page }) => {
    console.log("This is test 1....");
  });
  test(" this is test 2", async ({ page }) => {
    console.log("This is test 2....");
  });
});
test.describe.only("group 2", () => {
  test(" this is test 3", async ({ page }) => {
    console.log("This is test 3....");
  });
  test(" this is test 4", async ({ page }) => {
    console.log("This is test 4....");
  });
});
