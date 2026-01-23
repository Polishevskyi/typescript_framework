import type { APIResponse } from '@playwright/test';
import { StatusCodes } from 'http-status-codes';

class ResponseValidator {
  private expectedStatuses: number[];

  constructor(expectedStatus: number | number[]) {
    this.expectedStatuses = Array.isArray(expectedStatus) ? expectedStatus : [expectedStatus];
  }

  validate(response: APIResponse): APIResponse {
    if (!response) {
      throw new Error('Response is null or undefined');
    }
    const status = response.status();
    if (!this.expectedStatuses.includes(status)) {
      throw new Error(`Expected status ${this.expectedStatuses.join(' or ')}, but got ${status}`);
    }
    return response;
  }
}

const ResponseValidators = {
  requestReturnsOKSpec(): ResponseValidator {
    return new ResponseValidator(StatusCodes.OK);
  },

  requestReturnsOKOrNotFoundSpec(): ResponseValidator {
    return new ResponseValidator([StatusCodes.OK, StatusCodes.NOT_FOUND]);
  },
} as const;

export { ResponseValidators };
