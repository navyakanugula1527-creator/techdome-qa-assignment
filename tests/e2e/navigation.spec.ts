import { test, expect } from '@playwright/test';

test('Navigate to About Us page', async ({ page }) => {

  const response = await page.goto('https://techdome.io');

  expect(response?.status()).toBeLessThan(500);

  await page.getByRole('link', { name: 'About Us' }).first().click();

  await expect(page).toHaveURL(/about-us/);

});