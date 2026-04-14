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
  private token: string | null = null;

  constructor(private readonly request: APIRequestContext) {}

  private async getToken(): Promise<string> {
    if (this.token) return this.token;
    const response = await this.request.post(`${this.baseURL}/auth`, {
      headers: this.headers,
      data: { username: 'admin', password: 'password123' },
    });
    const { token } = await response.json();
    this.token = token;
    return token;
  }

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
    const token = await this.getToken();
    const response = await this.request.put(`${this.baseURL}/booking/${bookingId}`, {
      headers: { ...this.headers, Cookie: `token=${token}` },
      data: bookingData,
    });
    const status = response.status();
    expect(status).toBe(StatusCodes.OK);
    const responseData = BookingSchema.parse(await response.json());
    return { requestData: bookingData, responseData, status };
  }

  async delete(bookingId: number): Promise<BookingResult> {
    const token = await this.getToken();
    const response = await this.request.delete(`${this.baseURL}/booking/${bookingId}`, {
      headers: { ...this.headers, Cookie: `token=${token}` },
    });
    const status = response.status();
    expect(status).toBe(StatusCodes.CREATED);
    return { requestData: null, responseData: null, status };
  }
}
