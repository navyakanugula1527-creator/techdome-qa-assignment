import { test, expect } from '@playwright/test';

test('Footer is displayed', async ({ page }) => {

  await page.goto('https://techdome.io');

  await page.evaluate(() =>
    window.scrollTo(0, document.body.scrollHeight)
  );

  await expect(
    page.getByText('Privacy Policy')
  ).toBeVisible();

});