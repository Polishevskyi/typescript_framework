import { z } from 'zod';
import { PetRequestSchema, PetResponseSchema } from '../schemas/petSchema.js';

class ResourceEndpoint<TRequest extends z.ZodType = z.ZodType, TResponse extends z.ZodType = z.ZodType> {
  url: string;

  requestSchema: TRequest;

  responseSchema: TResponse;

  constructor(url: string, requestSchema: TRequest, responseSchema: TResponse) {
    this.url = url;
    this.requestSchema = requestSchema;
    this.responseSchema = responseSchema;
  }

  getUrl(pathParams: Record<string, string | number> = {}): string {
    let { url } = this;
    Object.entries(pathParams).forEach(([key, value]) => {
      url = url.replace(`{${key}}`, String(value));
    });
    return url;
  }
}

export const CREATE_PET = new ResourceEndpoint('/pet', PetRequestSchema, PetResponseSchema);
export const GET_PET = new ResourceEndpoint('/pet/{petId}', z.undefined(), PetResponseSchema);
export const UPDATE_PET = new ResourceEndpoint('/pet', PetRequestSchema, PetResponseSchema);
export const DELETE_PET = new ResourceEndpoint('/pet/{petId}', z.undefined(), z.undefined());

export type { ResourceEndpoint as ResourceEndpointType };
