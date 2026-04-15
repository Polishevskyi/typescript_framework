import { APIRequestContext, expect } from '@playwright/test';
import { StatusCodes } from 'http-status-codes';
import { BookingFactory } from '../../utils/dataGenerator.js';
import type { BookingRequest, BookingCreateResponse } from '../schemas/bookingSchema.js';
import { BookingSchema, BookingCreateResponseSchema } from '../schemas/bookingSchema.js';

export interface BookingCreateResult {
  requestData: BookingRequest;
  responseData: BookingCreateResponse;
  status: number;
}

export interface BookingResult {
  requestData: BookingRequest | null;
  responseData: BookingRequest | null;
  status: number;
}

export class BookingService {
  private readonly baseURL = process.env.API_BASE_URL ?? '';
  private readonly headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  constructor(private readonly request: APIRequestContext) {}

  async create(bookingData?: BookingRequest): Promise<BookingCreateResult> {
    const requestData = bookingData ?? BookingFactory.generateBookingRequest();
    const response = await this.request.post(`${this.baseURL}/booking`, {
      headers: this.headers,
      data: requestData,
    });
    const status = response.status();
    expect(status).toBe(StatusCodes.OK);
    const responseData = BookingCreateResponseSchema.parse(await response.json());
    return { requestData, responseData, status };
  }

  async get(bookingId: number): Promise<BookingResult> {
    const response = await this.request.get(`${this.baseURL}/booking/${bookingId}`, {
      headers: this.headers,
    });
    const status = response.status();
    const responseData = status !== StatusCodes.NOT_FOUND ? BookingSchema.parse(await response.json()) : null;
    return { requestData: null, responseData, status };
  }

  async update(bookingId: number, bookingData: BookingRequest): Promise<BookingResult> {
    const response = await this.request.put(`${this.baseURL}/booking/${bookingId}`, {
      headers: this.headers,
      data: bookingData,
    });
    const status = response.status();
    expect(status).toBe(StatusCodes.OK);
    const responseData = BookingSchema.parse(await response.json());
    return { requestData: bookingData, responseData, status };
  }

  async delete(bookingId: number): Promise<BookingResult> {
    const response = await this.request.delete(`${this.baseURL}/booking/${bookingId}`, {
      headers: this.headers,
    });
    const status = response.status();
    expect(status).toBe(StatusCodes.CREATED);
    return { requestData: null, responseData: null, status };
  }
}
