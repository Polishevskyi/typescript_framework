import { generatePet } from '../../utils/dataGenerator.js';
import PetRequestModel from '../models/PetRequestModel.js';
import PetResponseModel from '../models/PetResponseModel.js';
import { CREATE_PET, GET_PET, UPDATE_PET, DELETE_PET } from '../requests/Endpoint.js';
import ValidatedCrudRequester from '../requests/client/ValidatedCrudRequester.js';
import { ResponseSpecs, HTTP_STATUS } from '../specs/ResponseSpecs.js';

class PetSteps {
  constructor(requestContext) {
    this.requestContext = requestContext;
  }

  async createPet(petData = null) {
    const requestData = petData || generatePet();
    const requester = this.createRequester(CREATE_PET);
    const responseData = await requester.post(new PetRequestModel(requestData));

    return {
      requestData,
      responseData,
      status: HTTP_STATUS.OK,
    };
  }

  async getPetById(petId) {
    const requester = this.createRequester(GET_PET);
    const responseData = await requester.get(petId);

    return {
      requestData: null,
      responseData,
      status: HTTP_STATUS.OK,
    };
  }

  async updatePet(petData) {
    const requester = this.createRequester(UPDATE_PET);
    const responseData = await requester.put(new PetRequestModel(petData));

    return {
      requestData: petData,
      responseData,
      status: HTTP_STATUS.OK,
    };
  }

  async deletePet(petId) {
    const requester = this.createRequester(DELETE_PET);
    await requester.delete(petId);

    return {
      requestData: null,
      responseData: null,
      status: HTTP_STATUS.OK,
    };
  }

  createRequester(endpoint) {
    const responseSpec = ResponseSpecs.requestReturnsOKSpec();
    return new ValidatedCrudRequester(this.requestContext, endpoint, responseSpec);
  }
}

export { PetSteps };
