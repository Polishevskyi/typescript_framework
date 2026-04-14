import { test, expect, StatusCodes, PetResponseSchema, PetFactory } from '../../main/api/fixtures/baseTest.js';

test.describe('Update Pet', () => {
  test('Verify that pet can be updated successfully with new data', async ({ petService }) => {
    const createdPet = await petService.create();
    expect(createdPet.status).toBe(StatusCodes.OK);

    const createdPetResponseData = createdPet.responseData!;
    const updatedPetData = PetFactory.generatePetUpdate(createdPetResponseData);
    const updatedPet = await petService.update(updatedPetData);
    expect(updatedPet.status).toBe(StatusCodes.OK);
    PetResponseSchema.parse(updatedPet.responseData);
    expect.soft(updatedPet.responseData!.id).toBe(createdPetResponseData.id);
    expect.soft(updatedPet.responseData!.name).toBe(updatedPetData.name);
  });
});
