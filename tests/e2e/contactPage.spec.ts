import { test, expect } from '@playwright/test';

test('User can fill contact form', async ({ page }) => {

  await page.goto('https://techdome.io/contact-us/');

  await page.getByRole('textbox', { name: 'Company *' })
    .fill('Techdome');

  await page.getByRole('textbox', { name: 'First Name *' })
    .fill('Navya');

  await page.getByRole('textbox', { name: 'Last Name *' })
    .fill('Kanugula');

  await expect(
    page.getByRole('textbox', { name: 'First Name *' })
  ).toHaveValue('Navya');

});