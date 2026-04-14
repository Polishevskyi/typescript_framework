import { test, expect, StatusCodes, PetResponseSchema } from '../../main/api/fixtures/baseTest.js';

test.describe('Create Pet', () => {
  test('Verify that pet can be created successfully with valid data', async ({ petService }) => {
    const { requestData, responseData, status } = await petService.create();
    expect(status).toBe(StatusCodes.OK);
    PetResponseSchema.parse(responseData);
    expect.soft(responseData!.name).toBe(requestData!.name);
  });
});
