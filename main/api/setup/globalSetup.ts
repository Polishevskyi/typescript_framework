import { request, test as setup } from '@playwright/test';
import { mkdir, writeFile } from 'fs/promises';
import { API_STORAGE_STATE } from '../../../playwright.config.js';

setup('api authenticate', async () => {
  await mkdir('.auth', { recursive: true });
  const req = await request.newContext({ baseURL: process.env.API_BASE_URL });
  const response = await req.post('/auth', {
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    data: {
      username: process.env.API_CREDENTIALS_USERNAME,
      password: process.env.API_CREDENTIALS_PASSWORD,
    },
  });
  const body = await response.json();
  if (!body.token) throw new Error(`Authentication failed: ${JSON.stringify(body)}`);
  const { token } = body;

  const url = new URL(process.env.API_BASE_URL!);
  await writeFile(
    API_STORAGE_STATE,
    JSON.stringify({
      cookies: [
        {
          name: 'token',
          value: token,
          domain: url.hostname,
          path: '/',
          expires: -1,
          httpOnly: false,
          secure: url.protocol === 'https:',
          sameSite: 'Lax',
        },
      ],
      origins: [],
    })
  );

  await req.dispose();
});
