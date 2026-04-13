import { test as setup } from '@playwright/test';
import { mkdir } from 'fs/promises';
import { STORAGE_STATE } from '../../../playwright.config.js';
import { LoginPage } from '../pages/LoginPage.js';

setup('authenticate', async ({ page }) => {
  await mkdir('.auth', { recursive: true });
  const loginPage = new LoginPage(page);
  await loginPage.navigateTo();
  await loginPage.login(process.env.WEB_CREDENTIALS_USERNAME!, process.env.WEB_CREDENTIALS_PASSWORD!);
  await page.waitForURL('**/inventory.html');
  await page.context().storageState({ path: STORAGE_STATE });
});
