import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';

config();

export const STORAGE_STATE = '.auth/storageState.json';
export const API_STORAGE_STATE = '.auth/apiStorageState.json';
const IS_CI = !!process.env.CI;

const browsers = {
  chromium: devices['Desktop Chrome'],
  firefox: devices['Desktop Firefox'],
  webkit: devices['Desktop Safari'],
} as const;

const viewports = {
  desktop: { width: 1920, height: 1080 },
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
} as const;

export default defineConfig({
  fullyParallel: true,
  retries: IS_CI ? 3 : 0,
  workers: IS_CI ? 5 : undefined,
  testMatch: /.*\.(test|spec)\.(ts|js|tsx|jsx)/,

  reporter: [['list'], ['allure-playwright', { outputFolder: 'allure-results', detail: true, suiteTitle: true }]],

  use: {
    headless: process.env.WEB_HEADLESS !== 'false',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    navigationTimeout: 10_000,
    actionTimeout: 10_000,
  },

  projects: [
    {
      name: 'web-setup',
      testDir: './main/web/setup',
      testMatch: /globalSetup\.ts/,
      use: { baseURL: process.env.WEB_BASE_URL! },
    },

    {
      name: 'api-setup',
      testDir: './main/api/setup',
      testMatch: /globalSetup\.ts/,
      use: { baseURL: process.env.API_BASE_URL! },
    },

    ...Object.entries(browsers).flatMap(([browserName, device]) =>
      Object.entries(viewports).map(([viewportName, viewport]) => ({
        name: `${browserName}-${viewportName}`,
        testDir: './tests/web',
        dependencies: ['web-setup'],
        use: {
          ...device,
          baseURL: process.env.WEB_BASE_URL!,
          viewport,
          storageState: STORAGE_STATE,
        },
        metadata: { browser: browserName, viewport: viewportName, type: 'e2e' },
      }))
    ),

    {
      name: 'api',
      testDir: './tests/api',
      retries: 3,
      dependencies: ['api-setup'],
      use: { baseURL: process.env.API_BASE_URL!, storageState: API_STORAGE_STATE },
      metadata: { type: 'api' },
    },
  ],
});
