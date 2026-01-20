import { z } from 'zod';

export const PetCategorySchema = z.object({
  id: z.number().int().positive().optional(),
  name: z.string().optional(),
});

export type PetCategory = z.infer<typeof PetCategorySchema>;
