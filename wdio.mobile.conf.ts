import type { Options } from '@wdio/types';
import { config as loadEnv } from 'dotenv';
import { CapabilitiesFactory } from './main/mobile/driver/capabilitiesFactory.js';

loadEnv();

const IS_CI = !!process.env.CI;
const isCloud = process.env.MOBILE_IS_CLOUD === 'true';
const serverUrl = new URL(isCloud ? process.env.BROWSERSTACK_HUB_URL! : process.env.APPIUM_LOCAL_URL!);
const defaultPort = serverUrl.protocol === 'https:' ? 443 : 80;
const serverPort = serverUrl.port ? Number(serverUrl.port) : defaultPort;

export const config: Options.Testrunner = {
  user: isCloud ? process.env.BROWSERSTACK_USERNAME : undefined,
  key: isCloud ? process.env.BROWSERSTACK_ACCESS_KEY : undefined,
  hostname: serverUrl.hostname,
  port: serverPort,
  protocol: serverUrl.protocol.replace(':', '') as 'http' | 'https',
  path: serverUrl.pathname,
  services: isCloud ? ['browserstack'] : [],
  specs: ['./tests/mobile/**/*.ts'],
  maxInstances: isCloud ? 4 : 1,
  capabilities: CapabilitiesFactory.createCapabilities(),
  framework: 'mocha',

  reporters: [
    [
      'spec',
      {
        showPreface: false,
        realtimeReporting: true,
      },
    ],
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  mochaOpts: {
    timeout: 120_000,
    retries: IS_CI ? 3 : 0,
  },

  autoCompileOpts: {
    tsNodeOpts: {
      project: './tsconfig.json',
      transpileOnly: true,
    },
  },
};
