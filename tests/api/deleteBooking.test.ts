import { test, expect, StatusCodes } from '../../main/api/fixtures/baseTest.js';

test.describe('Delete Booking', () => {
  test('Verify that booking can be deleted successfully by ID', async ({ bookingService }) => {
    const createdBooking = await bookingService.create();
    expect(createdBooking.status).toBe(StatusCodes.OK);

    const bookingId = createdBooking.responseData.bookingid;
    const deletedBooking = await bookingService.delete(bookingId);
    expect(deletedBooking.status).toBe(StatusCodes.CREATED);

    const retrievedBooking = await bookingService.get(bookingId);
    expect(retrievedBooking.status).toBe(StatusCodes.NOT_FOUND);
  });
});
