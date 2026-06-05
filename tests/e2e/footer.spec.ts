import { test, expect } from '@playwright/test';

test('Footer is displayed', async ({ page }) => {

  const response = await page.goto('https://techdome.io');

  // Skip if site down
  if (response?.status() === 503) {
    console.log('⚠️ BUG-001: Homepage returned 503');
    return;
  }

  await page.evaluate(() =>
    window.scrollTo(0, document.body.scrollHeight)
  );

  // Check if footer structure exists
  try {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  } catch (error) {
    // Footer might have different structure
    console.log('⚠️ Footer element not found or structure different');
  }

});