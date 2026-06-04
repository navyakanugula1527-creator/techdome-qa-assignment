import { test, expect } from '@playwright/test';

test('No obvious secrets exposed', async ({ page }) => {

  await page.goto('https://techdome.io');

  const html = await page.content();

  expect(html).not.toContain('apikey');
  expect(html).not.toContain('secret');
  expect(html).not.toContain('password');

});