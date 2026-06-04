import { test, expect } from '@playwright/test';

test('Third party resources load', async ({ page }) => {

  await page.goto('https://techdome.io');

  const scripts = await page.locator('script').count();

  expect(scripts).toBeGreaterThan(0);

});