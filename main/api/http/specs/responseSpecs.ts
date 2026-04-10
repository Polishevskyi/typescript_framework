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

const OK_VALIDATOR = new ResponseValidator(StatusCodes.OK);
const OK_OR_NOT_FOUND_VALIDATOR = new ResponseValidator([StatusCodes.OK, StatusCodes.NOT_FOUND]);

const ResponseValidators = {
  requestReturnsOKSpec(): ResponseValidator {
    return OK_VALIDATOR;
  },

  requestReturnsOKOrNotFoundSpec(): ResponseValidator {
    return OK_OR_NOT_FOUND_VALIDATOR;
  },
} as const;

export { ResponseValidators };
