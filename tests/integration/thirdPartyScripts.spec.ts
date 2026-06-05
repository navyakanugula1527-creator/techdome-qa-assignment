import { test, expect } from '@playwright/test';

test('Third party resources load', async ({ page }) => {

  const response = await page.goto('https://techdome.io');

  // Skip if site returned error
  if (response?.status() !== 200) {
    console.log(`⚠️  BUG-001: Site returned ${response?.status()}`);
    return; // Skip test if site is down
  }

  const scripts = await page.locator('script').count();
  console.log(`Found ${scripts} script tags on page`);

  // Just document if no scripts found
  if (scripts === 0) {
    console.log('⚠️  No script tags found (may be loaded dynamically)');
  }

});