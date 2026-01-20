import { test, expect, HTTP_STATUS } from '../../src/api/fixtures/baseTest.js';

test.describe('Delete Pet', () => {
  test('Verify that pet can be deleted successfully by ID', async ({ petSteps }) => {
    const createdPet = await petSteps.create();
    expect(createdPet.status).toBe(HTTP_STATUS.OK);

    const petId = createdPet.responseData!.id;
    const deletedPet = await petSteps.delete(petId);
    expect(deletedPet.status).toBe(HTTP_STATUS.OK);

    const retrievedPet = await petSteps.get(petId);
    expect(retrievedPet.status).toBe(HTTP_STATUS.NOT_FOUND);
  });
});
