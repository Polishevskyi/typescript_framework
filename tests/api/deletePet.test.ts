import { test, expect, StatusCodes } from '../../main/api/fixtures/baseTest.js';

test.describe('Delete Pet', () => {
  test('Verify that pet can be deleted successfully by ID', async ({ petService }) => {
    const createdPet = await petService.create();
    expect(createdPet.status).toBe(StatusCodes.OK);

    const petId = createdPet.responseData!.id;
    const deletedPet = await petService.delete(petId);
    expect(deletedPet.status).toBe(StatusCodes.OK);

    const retrievedPet = await petService.get(petId);
    expect(retrievedPet.status).toBe(StatusCodes.NOT_FOUND);
  });
});
