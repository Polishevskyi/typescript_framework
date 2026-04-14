import { test, expect, StatusCodes, BookingCreateResponseSchema } from '../../main/api/fixtures/baseTest.js';

test.describe('Create Booking', () => {
  test('Verify that booking can be created successfully with valid data', async ({ bookingService }) => {
    const { requestData, responseData, status } = await bookingService.create();
    expect(status).toBe(StatusCodes.OK);
    BookingCreateResponseSchema.parse(responseData);
    expect.soft(responseData.booking.firstname).toBe(requestData.firstname);
    expect.soft(responseData.booking.lastname).toBe(requestData.lastname);
  });
});
