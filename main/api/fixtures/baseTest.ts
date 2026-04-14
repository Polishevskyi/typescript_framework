import * as base from '@playwright/test';
import { StatusCodes } from 'http-status-codes';
import { PetService } from '../services/petService.js';
import { PetFactory } from '../../utils/dataGenerator.js';
import { PetResponseSchema } from '../schemas/petSchema.js';
import { wrapInAllureStep } from '../../utils/allureProxy.js';

const test = base.test.extend<{
  petService: PetService;
}>({
  petService: async ({ request }, use) => {
    await use(wrapInAllureStep(new PetService(request)));
  },
});

export { test, StatusCodes, PetResponseSchema, PetFactory };
export const { expect } = base;
