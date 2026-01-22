import type { APIRequestContext } from '@playwright/test';
import { StatusCodes } from 'http-status-codes';
import ResourceClient from '../http/client/crudRequester.js';
import { CREATE_PET, GET_PET, UPDATE_PET, DELETE_PET } from '../http/endpoint.js';
import { ResponseValidators } from '../http/specs/responseSpecs.js';
import { PetFactory } from '../../utils/dataGenerator.js';
import type { PetRequest, PetResponse } from '../schemas/petSchema.js';
import { PetResponseSchema } from '../schemas/petSchema.js';

export interface PetStepResult {
  requestData: PetRequest | null;
  responseData: PetResponse | null;
  status: number;
}

export class PetSteps {
  private readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async create(petData?: PetRequest): Promise<PetStepResult> {
    const requestData = petData ?? PetFactory.generatePetRequest();
    const requester = new ResourceClient(this.request, CREATE_PET, ResponseValidators.requestReturnsOKSpec());
    const response = await requester.create(requestData);
    const responseDataRaw: unknown = await response.json();
    const responseData = PetResponseSchema.parse(responseDataRaw);

    return {
      requestData,
      responseData,
      status: response.status(),
    };
  }

  async get(petId: number): Promise<PetStepResult> {
    const requester = new ResourceClient(this.request, GET_PET, ResponseValidators.requestReturnsOKOrNotFoundSpec());
    const response = await requester.read(petId);
    const status = response.status();
    const responseDataRaw: unknown = status !== StatusCodes.NOT_FOUND ? await response.json() : null;
    const responseData = responseDataRaw ? PetResponseSchema.parse(responseDataRaw) : null;

    return {
      requestData: null,
      responseData,
      status,
    };
  }

  async update(petData: PetRequest): Promise<PetStepResult> {
    const requester = new ResourceClient(this.request, UPDATE_PET, ResponseValidators.requestReturnsOKSpec());
    const response = await requester.update(petData);
    const responseDataRaw: unknown = await response.json();
    const responseData = PetResponseSchema.parse(responseDataRaw);

    return {
      requestData: petData,
      responseData,
      status: response.status(),
    };
  }

  async delete(petId: number): Promise<PetStepResult> {
    const requester = new ResourceClient(this.request, DELETE_PET, ResponseValidators.requestReturnsOKSpec());
    const response = await requester.remove(petId);
    return {
      requestData: null,
      responseData: null,
      status: response.status(),
    };
  }
}
