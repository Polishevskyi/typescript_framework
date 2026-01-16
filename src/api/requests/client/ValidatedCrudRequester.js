import BaseRequest from '../BaseRequest.js';
import CrudRequester from './CrudRequester.js';
import BaseModel from '../../models/BaseModel.js';

class ValidatedCrudRequester extends BaseRequest {
  constructor(requestContext, endpoint, responseSpecification) {
    super(requestContext, endpoint, responseSpecification);
    this.crudRequester = new CrudRequester(requestContext, endpoint, responseSpecification);
  }

  async post(model) {
    const response = await this.crudRequester.post(model);
    const responseData = await response.json();
    const ResponseModel = this.endpoint.responseModel;
    return ResponseModel ? (ResponseModel.fromJson ? ResponseModel.fromJson(responseData) : new ResponseModel(responseData)) : responseData;
  }

  async get(id) {
    const response = await this.crudRequester.get(id);
    const responseData = await response.json();
    const ResponseModel = this.endpoint.responseModel;
    return ResponseModel ? (ResponseModel.fromJson ? ResponseModel.fromJson(responseData) : new ResponseModel(responseData)) : responseData;
  }

  async put(model) {
    const response = await this.crudRequester.put(model);
    const responseData = await response.json();
    const ResponseModel = this.endpoint.responseModel;
    return ResponseModel ? (ResponseModel.fromJson ? ResponseModel.fromJson(responseData) : new ResponseModel(responseData)) : responseData;
  }

  async delete(id) {
    const response = await this.crudRequester.delete(id);
    const status = typeof response.status === 'function' ? response.status() : response.status;
    const responseData = status !== 204 ? await response.json() : null;
    const ResponseModel = this.endpoint.responseModel;
    return ResponseModel && responseData ? (ResponseModel.fromJson ? ResponseModel.fromJson(responseData) : new ResponseModel(responseData)) : responseData;
  }
}

export default ValidatedCrudRequester;
