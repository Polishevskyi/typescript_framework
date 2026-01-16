import { generatePet } from '../../utils/dataGenerator.js';
import CrudRequester from '../requests/client/CrudRequester.js';
import { ENDPOINTS_KEY } from '../../utils/constants.js';
import CreatePetRequest from '../models/CreatePetRequest.js';

class PetSteps {
  constructor(requestContext) {
    this.requester = new CrudRequester(requestContext);

    return new Proxy(this, {
      get(target, prop) {
        const original = target[prop];
        if (typeof original === 'function' && prop !== 'constructor') {
          return async function (...args) {
            return original.apply(target, args);
          };
        }
        return original;
      },
    });
  }

  async createPet(petData = null) {
    const data = petData || generatePet();

    const response = await this.requester.request(ENDPOINTS_KEY.CREATE_PET, {
      data: new CreatePetRequest(data),
    });

    return {
      requestData: data,
      responseData: response.data,
      status: response.status,
    };
  }

  async updatePet(petData) {
    const response = await this.requester.request(ENDPOINTS_KEY.UPDATE_PET, {
      data: new CreatePetRequest(petData),
    });

    return {
      requestData: petData,
      responseData: response.data,
      status: response.status,
    };
  }

  async deletePet(petId) {
    const response = await this.requester.request(ENDPOINTS_KEY.DELETE_PET, {
      pathParams: { petId },
    });

    return {
      status: response.status,
    };
  }
}

export { PetSteps };
