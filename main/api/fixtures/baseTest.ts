import * as base from '@playwright/test';
import { StatusCodes } from 'http-status-codes';
import { BookingService } from '../services/bookingService.js';
import { BookingFactory } from '../../utils/dataGenerator.js';
import { BookingSchema, BookingCreateResponseSchema } from '../schemas/bookingSchema.js';
import { wrapInAllureStep } from '../../utils/allureProxy.js';

const test = base.test.extend<{
  bookingService: BookingService;
}>({
  bookingService: async ({ request }, use) => {
    await use(wrapInAllureStep(new BookingService(request)));
  },
});

export { test, StatusCodes, BookingSchema, BookingCreateResponseSchema, BookingFactory };
export const { expect } = base;
