import { z } from 'zod';

export const PetTagSchema = z.object({
  id: z.number().int().positive().optional(),
  name: z.string().optional(),
});

export type PetTag = z.infer<typeof PetTagSchema>;
