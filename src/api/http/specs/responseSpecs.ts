import type { APIResponse } from '@playwright/test';
import { HTTP_STATUS } from '../../../utils/constants.js';

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
    return new ResponseValidator(HTTP_STATUS.OK);
  },

  requestReturnsOKOrNotFoundSpec(): ResponseValidator {
    return new ResponseValidator([HTTP_STATUS.OK, HTTP_STATUS.NOT_FOUND]);
  },
} as const;

export { HTTP_STATUS, ResponseValidators };
