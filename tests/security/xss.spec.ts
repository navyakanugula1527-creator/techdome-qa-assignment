import { test, expect } from '@playwright/test';

test('Contact form handles script injection', async ({ page }) => {

  const response = await page.goto('https://techdome.io/contact-us');

  expect(response?.status()).toBeLessThan(500);

  await page
    .getByRole('textbox', { name: 'First Name *' })
    .fill('<script>alert(1)</script>');

});