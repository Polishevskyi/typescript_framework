import 'dotenv/config';
import type { APIRequestContext } from '@playwright/test';

class ApiHttpClient {
  protected requestContext: APIRequestContext;

  protected endpoint: unknown;

  protected responseValidator: unknown;

  protected baseURL: string;

  protected defaultHeaders: Record<string, string>;

  constructor(requestContext: APIRequestContext, endpoint: unknown = null, responseValidator: unknown = null) {
    this.requestContext = requestContext;
    this.endpoint = endpoint;
    this.responseValidator = responseValidator;
    this.baseURL = process.env.API_BASE_URL || '';
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }
}

export default ApiHttpClient;
