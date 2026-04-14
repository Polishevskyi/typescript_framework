import { test, expect, StatusCodes, BookingSchema, BookingFactory } from '../../main/api/fixtures/baseTest.js';

test.describe('Update Booking', () => {
  test('Verify that booking can be updated successfully with new data', async ({ bookingService }) => {
    const createdBooking = await bookingService.create();
    expect(createdBooking.status).toBe(StatusCodes.OK);

    const bookingId = createdBooking.responseData.bookingid;
    const updatedBookingData = BookingFactory.generateBookingUpdate(createdBooking.requestData);
    const updatedBooking = await bookingService.update(bookingId, updatedBookingData);
    expect(updatedBooking.status).toBe(StatusCodes.OK);
    BookingSchema.parse(updatedBooking.responseData);
    expect.soft(updatedBooking.responseData!.firstname).toBe(updatedBookingData.firstname);
    expect.soft(updatedBooking.responseData!.lastname).toBe(updatedBookingData.lastname);
    expect.soft(updatedBooking.responseData!.totalprice).toBe(updatedBookingData.totalprice);
  });
});
