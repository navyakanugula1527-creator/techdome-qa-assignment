import { test, expect, chromium } from '@playwright/test';

test('Exactly 5 concurrent users', async () => {
  const browser = await chromium.launch();

  const tasks = Array.from({ length: 5 }, async (_, i) => {
    const page = await browser.newPage();

    const url =
      i % 2 === 0
        ? 'https://techdome.io'
        : 'https://techdome.io/contact-us';

    const response = await page.goto(url);

    await page.close();

    return response?.status();
  });

  const results = await Promise.all(tasks);

  results.forEach(status => {
    expect(status).toBeLessThan(600);
  });

  await browser.close();
});