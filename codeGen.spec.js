import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Electronics' }).first().click();
  await page.getByRole('link', { name: 'Picture for category Camera,' }).click();
  await page.getByRole('link', { name: 'Picture of 1MP 60GB Hard' }).click();
  await page.getByRole('button', { name: 'Add to compare list' }).click();
  await page.getByRole('link', { name: 'Digital downloads' }).first().click();
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.getByRole('link', { name: 'Shopping cart (1)' }).click();
  await page.locator('#termsofservice').check();
  await page.getByRole('button', { name: 'Checkout' }).click();
});