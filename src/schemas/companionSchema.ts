import { z } from 'zod';
import { Relationship } from '@prisma/client';

export const createCompanionSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Name must have at least 3 characters')
      .max(255, 'Name must have at most 255 characters')
      .meta({ example: 'Carlos Oliveira Santos', description: 'Companion full name' }),

    cpf: z
      .string()
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Invalid CPF format')
      .meta({ example: '987.654.321-00', description: 'CPF in format XXX.XXX.XXX-XX' }),

    phone: z
      .string()
      .transform((value) => value.replace(/\D/g, ''))
      .refine((value) => /^([1-9]{2})9\d{8}$/.test(value), {
        message: 'Invalid mobile number. Ex: (83) 9XXXX-XXXX',
      })
      .meta({ example: '83987654321', description: 'Mobile phone number' }),

    birthDate: z
      .string()
      .refine(
        (date) => {
          const d = new Date(date);
          return d instanceof Date && !isNaN(d.getTime());
        },
        'Invalid date format. Use YYYY-MM-DD'
      )
      .meta({ example: '1985-03-20', description: 'Birth date (YYYY-MM-DD)' }),

    patientId: z.string().uuid().meta({ example: 'pat_abc123xyz', description: 'Patient ID (UUID)' }),
    relationship: z.nativeEnum(Relationship).meta({ example: 'PARENT', description: 'Relationship type' }),
    tripId: z.string().uuid().meta({ example: 'trip_xyz789abc', description: 'Trip ID (UUID)' }),
  })
  .meta({
    id: 'CreateCompanionRequest',
    description: 'Create companion request payload',
  });

export const companionResponseSchema = z
  .object({
    id: z.string().meta({ example: 'comp_abc123', description: 'Companion ID' }),
    name: z.string().meta({ example: 'Carlos Oliveira Santos', description: 'Companion name' }),
    cpf: z.string().meta({ example: '987.654.321-00', description: 'Companion CPF' }),
    phone: z.string().meta({ example: '83987654321', description: 'Phone number' }),
    birthDate: z.string().meta({ example: '1985-03-20', description: 'Birth date' }),
    patientId: z.string().meta({ example: 'pat_abc123xyz', description: 'Patient ID' }),
    relationship: z.string().meta({ example: 'PARENT', description: 'Relationship type' }),
    tripId: z.string().meta({ example: 'trip_xyz789abc', description: 'Trip ID' }),
    createdAt: z.string().meta({ example: '2024-01-15T10:30:00Z', description: 'Creation date' }),
    updatedAt: z.string().meta({ example: '2024-01-20T14:45:00Z', description: 'Last update' }),
  })
  .meta({
    id: 'CompanionResponse',
    description: 'Companion response data',
  });

export type CreateCompanionInput = z.infer<typeof createCompanionSchema>;
export type CompanionResponse = z.infer<typeof companionResponseSchema>;