import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('listitem').filter({ hasText: 'Apparel & Shoes' }).first().click();
  await page.getByText('11.00 Add to cart').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.getByRole('link', { name: 'Shopping cart (0)' }).click();
});