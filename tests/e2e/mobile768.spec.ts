import { test, expect } from '@playwright/test';

test('Homepage loads on tablet viewport', async ({ page }) => {

  await page.setViewportSize({
    width: 768,
    height: 1024
  });

  await page.goto('https://techdome.io');

  await expect(page).toHaveTitle(/Techdome/i);

});