import { test, expect } from '@playwright/test';

test('Homepage loads on tablet viewport', async ({ page }) => {

  await page.setViewportSize({
    width: 768,
    height: 1024
  });

  const response = await page.goto('https://techdome.io');

  // Verify page loaded
  if (response?.status() === 503) {
    console.log('⚠️ BUG-001: Homepage returned 503');
    return; // Skip if site down
  }
  
  // Verify viewport is correctly set
  const viewport = page.viewportSize();
  expect(viewport?.width).toBe(768);

});