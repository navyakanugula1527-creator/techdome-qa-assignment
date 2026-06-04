import { test, expect } from '@playwright/test';

test('Homepage returns successful status', async ({ request }) => {

  const response = await request.get('https://techdome.io');

  expect(response.status()).toBeLessThan(500);

});