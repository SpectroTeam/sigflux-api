import { z } from 'zod';

export const createSupportHouseSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Name must have at least 3 characters')
      .max(255, 'Name must have at most 255 characters')
      .meta({ example: 'Casa de Apoio São José', description: 'Support house name' }),

    address: z
      .string()
      .min(10, 'Address must have at least 10 characters')
      .meta({ example: 'Rua das Acácias, 456 - Centro, João Pessoa - PB', description: 'Full address' }),

    capacity: z
      .number()
      .int('Capacity must be an integer')
      .positive('Capacity must be greater than zero')
      .nullable()
      .optional()
      .meta({ example: 20, description: 'Maximum capacity (optional)' }),

    phone: z
      .string()
      .transform((value) => value.replace(/\D/g, ''))
      .refine((value) => /^([1-9]{2})9\d{8}$/.test(value), {
        message: 'Invalid mobile number. Ex: (83) 9XXXX-XXXX',
      })
      .nullable()
      .optional()
      .meta({ example: '83988887777', description: 'Contact phone (optional)' }),
  })
  .meta({
    id: 'CreateSupportHouseRequest',
    description: 'Create support house request payload',
  });

export const updateSupportHouseSchema = createSupportHouseSchema.partial().meta({
  id: 'UpdateSupportHouseRequest',
  description: 'Update support house request payload',
});

export const supportHouseResponseSchema = z
  .object({
    id: z.string().meta({ example: 'house_abc123', description: 'Support house ID' }),
    name: z.string().meta({ example: 'Casa de Apoio São José', description: 'Support house name' }),
    address: z.string().meta({ example: 'Rua das Acácias, 456 - Centro, João Pessoa - PB', description: 'Address' }),
    capacity: z.number().nullable().optional().meta({ example: 20, description: 'Capacity' }),
    phone: z.string().nullable().optional().meta({ example: '83988887777', description: 'Phone' }),
    createdAt: z.string().meta({ example: '2024-01-15T10:30:00Z', description: 'Creation date' }),
    updatedAt: z.string().meta({ example: '2024-01-20T14:45:00Z', description: 'Last update' }),
  })
  .meta({
    id: 'SupportHouseResponse',
    description: 'Support house response data',
  });

export type CreateSupportHouseInput = z.infer<typeof createSupportHouseSchema>;
export type UpdateSupportHouseInput = z.infer<typeof updateSupportHouseSchema>;
export type SupportHouseResponse = z.infer<typeof supportHouseResponseSchema>;