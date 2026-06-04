import { test, expect } from '@playwright/test';

test('Contact form network request', async ({ page }) => {

  await page.goto('https://techdome.io/contact-us');

  const requestPromise = page.waitForRequest(request =>
    request.method() === 'POST'
  );

  await page.getByRole('textbox', { name: 'Company *' }).fill('Techdome');
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Navya');
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Kanugula');

  // Submit button locator may need adjustment
  // await page.getByRole('button', { name: /submit|send/i }).click();

  // const request = await requestPromise;
  // expect(request.method()).toBe('POST');
});