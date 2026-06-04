import { test, expect } from '@playwright/test';

test('Verify security headers', async ({ request }) => {

  const response = await request.get('https://techdome.io');

  const headers = response.headers();

  console.log(headers);

  expect(headers['x-frame-options']).toBeDefined();
  expect(headers['content-security-policy']).toBeDefined();
  expect(headers['strict-transport-security']).toBeDefined();

});