import { test, expect } from '@playwright/test';

test('Homepage loads on mobile 375px', async ({ page }) => {

  await page.setViewportSize({
    width: 375,
    height: 812
  });

  await page.goto('https://techdome.io');

  await page.screenshot({ path: 'mobile-homepage.png', fullPage: true });

});