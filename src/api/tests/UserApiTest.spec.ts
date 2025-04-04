
import { test, expect } from '@playwright/test';
import { api } from '../client/ApiClient';

test('GET user by ID', async () => {
  const res = await api.get('/users/1');
  expect(res.status).toBe(200);
  expect(res.body.id).toBe(1);
});
