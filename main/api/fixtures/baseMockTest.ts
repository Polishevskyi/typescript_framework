import { createServer } from 'http';
import * as base from '@playwright/test';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { ApiConstants } from '../../utils/constants.js';

const test = base.test.extend<{
  mockStatus: number;
  mockRequest: base.APIRequestContext;
}>({
  mockStatus: [StatusCodes.INTERNAL_SERVER_ERROR, { option: true }],

  mockRequest: async ({ playwright, mockStatus }, use) => {
    const body = JSON.stringify({ error: getReasonPhrase(mockStatus) });
    const server = createServer((_req, res) => {
      res.writeHead(mockStatus, ApiConstants.HEADERS.JSON);
      res.end(body);
    });

    await new Promise<void>((resolve) => {
      server.listen(0, resolve);
    });
    const address = server.address();
    if (!address || typeof address === 'string') throw new Error('Mock server failed to bind to a port');
    const mockRequest = await playwright.request.newContext({ baseURL: `http://localhost:${address.port}` });

    try {
      await use(mockRequest);
    } finally {
      await mockRequest.dispose();
      await new Promise<void>((resolve) => {
        server.close(() => resolve());
      });
    }
  },
});

export { test, StatusCodes, getReasonPhrase };
export const { expect } = base;
