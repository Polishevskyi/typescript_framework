import type { APIResponse } from '@playwright/test';
import ApiHttpClient from '../apiHttpClient.js';
import type { ResourceEndpointType } from '../endpoint.js';

interface ResponseValidator {
  validate(response: APIResponse): void;
}

type RequestBody = Record<string, unknown>;

class ResourceClient extends ApiHttpClient {
  async create(body: RequestBody): Promise<APIResponse> {
    const url = `${this.baseURL}${(this.endpoint as ResourceEndpointType).getUrl()}`;

    const response = await this.requestContext.post(url, {
      headers: this.defaultHeaders,
      data: body,
    });

    if (this.responseValidator) {
      (this.responseValidator as ResponseValidator).validate(response);
    }

    return response;
  }

  async read(id: string | number): Promise<APIResponse> {
    const url = `${this.baseURL}${(this.endpoint as ResourceEndpointType).getUrl({ petId: id })}`;

    const response = await this.requestContext.get(url, {
      headers: this.defaultHeaders,
    });

    if (this.responseValidator) {
      (this.responseValidator as ResponseValidator).validate(response);
    }

    return response;
  }

  async update(body: RequestBody): Promise<APIResponse> {
    const url = `${this.baseURL}${(this.endpoint as ResourceEndpointType).getUrl()}`;

    const response = await this.requestContext.put(url, {
      headers: this.defaultHeaders,
      data: body,
    });

    if (this.responseValidator) {
      (this.responseValidator as ResponseValidator).validate(response);
    }

    return response;
  }

  async remove(id: string | number): Promise<APIResponse> {
    const url = `${this.baseURL}${(this.endpoint as ResourceEndpointType).getUrl({ petId: id })}`;

    const response = await this.requestContext.delete(url, {
      headers: this.defaultHeaders,
    });

    if (this.responseValidator) {
      (this.responseValidator as ResponseValidator).validate(response);
    }

    return response;
  }
}

export default ResourceClient;
