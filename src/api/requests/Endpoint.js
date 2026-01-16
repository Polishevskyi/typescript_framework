import BaseModel from '../models/BaseModel.js';
import PetRequestModel from '../models/PetRequestModel.js';
import PetResponseModel from '../models/PetResponseModel.js';

class Endpoint {
  constructor(url, requestModel, responseModel) {
    this.url = url;
    this.requestModel = requestModel;
    this.responseModel = responseModel;
  }

  getUrl(pathParams = {}) {
    let url = this.url;
    Object.entries(pathParams).forEach(([key, value]) => {
      url = url.replace(`{${key}}`, String(value));
    });
    return url;
  }
}

export const CREATE_PET = new Endpoint('/pet', PetRequestModel, PetResponseModel);
export const GET_PET = new Endpoint('/pet/{petId}', BaseModel, PetResponseModel);
export const UPDATE_PET = new Endpoint('/pet', PetRequestModel, PetResponseModel);
export const DELETE_PET = new Endpoint('/pet/{petId}', BaseModel, PetResponseModel);

export { Endpoint };
