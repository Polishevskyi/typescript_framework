import { faker } from '@faker-js/faker';
import type { BookingRequest } from '../api/schemas/bookingSchema.js';

// API data generators
class BookingDataGenerator {
  static generateBookingRequest(overrides: Partial<BookingRequest> = {}): BookingRequest {
    const checkin = faker.date.soon({ days: 30 });
    const checkout = new Date(checkin);
    checkout.setDate(checkout.getDate() + faker.number.int({ min: 1, max: 14 }));

    return {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      totalprice: faker.number.int({ min: 50, max: 500 }),
      depositpaid: faker.datatype.boolean(),
      bookingdates: {
        checkin: checkin.toISOString().split('T')[0],
        checkout: checkout.toISOString().split('T')[0],
      },
      additionalneeds: faker.helpers.arrayElement(['Breakfast', 'Lunch', 'Dinner', 'Airport Transfer']),
      ...overrides,
    };
  }

  static generateBookingUpdate(existing: BookingRequest): BookingRequest {
    return {
      ...existing,
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      totalprice: faker.number.int({ min: 50, max: 500 }),
    };
  }
}

// Web data generators
const WebDataGenerator = {
  generateUserInfo() {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      postalCode: faker.location.zipCode(),
    };
  },
} as const;

// Mobile data generators
export class MobileDataGenerator {
  static generateInvalidCredentials() {
    return {
      invalidUsername: faker.internet.email(),
      invalidPassword: faker.internet.password(),
      randomUsername: faker.internet.username(),
      randomPassword: faker.internet.password({ length: 15 }),
    };
  }
}

export default WebDataGenerator;
export { BookingDataGenerator };
export { BookingDataGenerator as BookingFactory };
