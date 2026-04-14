import { z } from 'zod';

const PetCategorySchema = z.object({
  id: z.number().int().positive().optional(),
  name: z.string().optional(),
});

const PetTagSchema = z.object({
  id: z.number().int().positive().optional(),
  name: z.string().optional(),
});

const PetStatusSchema = z.enum(['available', 'pending', 'sold']);

const PetRequestSchema = z.object({
  id: z.number().int().positive().optional(),
  category: PetCategorySchema.optional().nullable(),
  name: z.string().min(1),
  photoUrls: z.array(z.string().url()).default([]),
  tags: z.array(PetTagSchema).optional().nullable(),
  status: PetStatusSchema.optional(),
});

const PetResponseSchema = z.object({
  id: z.number().int().positive(),
  category: PetCategorySchema.optional().nullable(),
  name: z.string().min(1),
  photoUrls: z.array(z.string().url()),
  tags: z.array(PetTagSchema).optional().nullable(),
  status: PetStatusSchema.optional(),
});

export type PetRequest = z.infer<typeof PetRequestSchema>;
export type PetResponse = z.infer<typeof PetResponseSchema>;
export type PetStatus = z.infer<typeof PetStatusSchema>;

export { PetStatusSchema, PetRequestSchema, PetResponseSchema };
