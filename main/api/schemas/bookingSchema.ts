import { z } from 'zod';

const BookingDatesSchema = z.object({
  checkin: z.string(),
  checkout: z.string(),
});

const BookingSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  totalprice: z.number().int().positive(),
  depositpaid: z.boolean(),
  bookingdates: BookingDatesSchema,
  additionalneeds: z.string().optional(),
});

const BookingCreateResponseSchema = z.object({
  bookingid: z.number().int().positive(),
  booking: BookingSchema,
});

export type BookingRequest = z.infer<typeof BookingSchema>;
export type BookingCreateResponse = z.infer<typeof BookingCreateResponseSchema>;

export { BookingSchema, BookingCreateResponseSchema, BookingDatesSchema };
