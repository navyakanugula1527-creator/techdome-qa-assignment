import { test, expect } from '@playwright/test';

test('Careers page loads successfully', async ({ page }) => {

  await page.goto('https://techdome.io/careers/');

  await expect(
    page.getByText('Careers at Techdome')
  ).toBeVisible();

});