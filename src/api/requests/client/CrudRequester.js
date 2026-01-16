import BaseRequest from '../BaseRequest.js';
import RequestInterface from '../RequestInterface.js';
import BaseModel from '../../models/BaseModel.js';

class CrudRequester extends BaseRequest {
  constructor(requestContext, endpoint, responseSpecification) {
    super(requestContext, endpoint, responseSpecification);
  }

  async post(model) {
    const body = model || {};
    const url = this.endpoint.getUrl();
    const response = await this.requestContext.post(`${this.baseURL}${url}`, {
      headers: this.defaultHeaders,
      data: body instanceof BaseModel ? body.toJson() : body,
    });

    if (this.responseSpecification) {
      this.responseSpecification.validate(response);
    }

    return response;
  }

  async get(id) {
    const url = this.endpoint.getUrl({ petId: id });
    const response = await this.requestContext.get(`${this.baseURL}${url}`, {
      headers: this.defaultHeaders,
    });

    if (this.responseSpecification) {
      this.responseSpecification.validate(response);
    }

    return response;
  }

  async put(model) {
    const url = this.endpoint.getUrl();
    const response = await this.requestContext.put(`${this.baseURL}${url}`, {
      headers: this.defaultHeaders,
      data: model instanceof BaseModel ? model.toJson() : model,
    });

    if (this.responseSpecification) {
      this.responseSpecification.validate(response);
    }

    return response;
  }

  async delete(id) {
    const url = this.endpoint.getUrl({ petId: id });
    const response = await this.requestContext.delete(`${this.baseURL}${url}`, {
      headers: this.defaultHeaders,
    });

    if (this.responseSpecification) {
      this.responseSpecification.validate(response);
    }

    return response;
  }
}

export default CrudRequester;
