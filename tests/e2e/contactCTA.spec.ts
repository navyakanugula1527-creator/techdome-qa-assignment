import { test, expect } from '@playwright/test';

test('Contact Us CTA opens contact page', async ({ page }) => {

  await page.goto('https://techdome.io');

  await page.getByRole('link', { name: /contact us/i }).first().click();

  await expect(page).toHaveURL(/contact-us/);

});