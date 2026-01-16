import { test, expect } from '@playwright/test';
import { PetSteps } from '../../src/api/steps/petSteps.js';
import { HTTP_STATUS } from '../../src/api/specs/ResponseSpecs.js';
import CreatePetResponse from '../../src/api/models/CreatePetResponse.js';
import { assertThatModels } from '../../src/api/models/comparison/modelAssertions.js';

test.describe('READ Pet Test', () => {
  test('should create and read pet data from response', async ({ request }) => {
    const petSteps = new PetSteps(request);
    const { requestData, responseData, status } = await petSteps.createPet();

    expect(status).toBe(HTTP_STATUS.OK);

    const expectedResponse = new CreatePetResponse(requestData);
    await assertThatModels(expectedResponse, responseData).match();
  });
});
