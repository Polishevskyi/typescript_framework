import { APIRequestContext, expect } from '@playwright/test';
import { StatusCodes } from 'http-status-codes';
import { PetFactory } from '../../utils/dataGenerator.js';
import type { PetRequest, PetResponse } from '../schemas/petSchema.js';
import { PetResponseSchema } from '../schemas/petSchema.js';

export interface PetServiceResult {
  requestData: PetRequest | null;
  responseData: PetResponse | null;
  status: number;
}

export class PetService {
  private readonly baseURL = process.env.API_BASE_URL ?? '';
  private readonly headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  constructor(private readonly request: APIRequestContext) {}

  async create(petData?: PetRequest): Promise<PetServiceResult> {
    const requestData = petData ?? PetFactory.generatePetRequest();
    const response = await this.request.post(`${this.baseURL}/pet`, {
      headers: this.headers,
      data: requestData,
    });
    const status = response.status();
    expect(status).toBe(StatusCodes.OK);
    const responseData = PetResponseSchema.parse(await response.json());
    return { requestData, responseData, status };
  }

  async get(petId: number): Promise<PetServiceResult> {
    const response = await this.request.get(`${this.baseURL}/pet/${petId}`, {
      headers: this.headers,
    });
    const status = response.status();
    const responseData = status !== StatusCodes.NOT_FOUND ? PetResponseSchema.parse(await response.json()) : null;
    return { requestData: null, responseData, status };
  }

  async update(petData: PetRequest): Promise<PetServiceResult> {
    const response = await this.request.put(`${this.baseURL}/pet`, {
      headers: this.headers,
      data: petData,
    });
    const status = response.status();
    expect(status).toBe(StatusCodes.OK);
    const responseData = PetResponseSchema.parse(await response.json());
    return { requestData: petData, responseData, status };
  }

  async delete(petId: number): Promise<PetServiceResult> {
    const response = await this.request.delete(`${this.baseURL}/pet/${petId}`, {
      headers: this.headers,
    });
    const status = response.status();
    expect(status).toBe(StatusCodes.OK);
    return { requestData: null, responseData: null, status };
  }
}
