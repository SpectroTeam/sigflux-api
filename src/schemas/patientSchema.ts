import { z } from 'zod';

export const createPatientSchema = z.object({
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Invalid CPF format')
    .describe('CPF in format: XXX.XXX.XXX-XX'),
  name: z
    .string()
    .min(3, 'Name must have at least 3 characters')
    .max(255, 'Name must have at most 255 characters'),
  birthDate: z
    .string()
    .refine(
      (date) => {
        const d = new Date(date);
        return d instanceof Date && !isNaN(d.getTime());
      },
      'Invalid date format. Use YYYY-MM-DD'
    ),
  rg: z.string().optional(),
  medicalNotes: z.string().optional(),
  phones: z
    .array(
      z.object({
        number: z
          .string()
          .regex(/^\(\d{2}\)\s?\d{4,5}-\d{4}$/, 'Invalid phone format'),
      })
    )
    .optional(),
  address: z
    .object({
      street: z.string().min(1, 'Street is required'),
      number: z.string().optional(),
      neighborhood: z.string().optional(),
      city: z.string().min(1, 'City is required'),
      state: z.string().length(2, 'State must be 2 characters'),
      zipCode: z.string().optional(),
    })
    .optional(),
});

export const updatePatientSchema = createPatientSchema.partial();

export type CreatePatientInput = z.infer<typeof createPatientSchema>;
export type UpdatePatientInput = z.infer<typeof updatePatientSchema>;
