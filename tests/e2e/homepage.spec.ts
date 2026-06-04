import { test, expect } from '@playwright/test';

test('Homepage loads successfully', async ({ page }) => {

  await page.goto('https://techdome.io');

  await expect(page).toHaveTitle(/Techdome/i);

});