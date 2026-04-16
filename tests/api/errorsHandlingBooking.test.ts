import { expect, getReasonPhrase, StatusCodes, test } from '../../main/api/fixtures/baseMockTest.js';
import { ApiConstants } from '../../main/utils/constants.js';

const errorStatuses = [
  StatusCodes.BAD_REQUEST,
  StatusCodes.UNAUTHORIZED,
  StatusCodes.FORBIDDEN,
  StatusCodes.NOT_FOUND,
  StatusCodes.UNPROCESSABLE_ENTITY,
  StatusCodes.TOO_MANY_REQUESTS,
  StatusCodes.INTERNAL_SERVER_ERROR,
  StatusCodes.BAD_GATEWAY,
  StatusCodes.SERVICE_UNAVAILABLE,
  StatusCodes.GATEWAY_TIMEOUT,
];

test.describe('Booking Error Handling', () => {
  errorStatuses.forEach((status) => {
    test.describe(`${status} ${getReasonPhrase(status)}`, () => {
      test.use({ mockStatus: status });

      test(`Verify that ${status} ${getReasonPhrase(status)} response is handled correctly`, async ({
        mockRequest,
      }) => {
        const response = await mockRequest.get(ApiConstants.ENDPOINTS.BOOKING_BY_ID(1));

        expect(response.status()).toBe(status);
        expect(await response.json()).toEqual({ error: getReasonPhrase(status) });
      });
    });
  });
});
