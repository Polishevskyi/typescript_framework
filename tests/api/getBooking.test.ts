import { test, expect, StatusCodes, BookingSchema } from '../../main/api/fixtures/baseTest.js';

test.describe('Get Booking', () => {
  test('Verify that booking can be retrieved successfully by ID', async ({ bookingService }) => {
    const createdBooking = await bookingService.create();
    expect(createdBooking.status).toBe(StatusCodes.OK);

    const bookingId = createdBooking.responseData.bookingid;
    const retrievedBooking = await bookingService.get(bookingId);
    expect(retrievedBooking.status).toBe(StatusCodes.OK);
    BookingSchema.parse(retrievedBooking.responseData);
    expect.soft(retrievedBooking.responseData!.firstname).toBe(createdBooking.requestData.firstname);
    expect.soft(retrievedBooking.responseData!.lastname).toBe(createdBooking.requestData.lastname);
  });
});
