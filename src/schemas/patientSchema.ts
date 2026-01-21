import { z } from 'zod';

export const createPatientSchema = z
  .object({
    cpf: z
      .string()
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Invalid CPF format')
      .meta({ example: '123.456.789-10', description: 'CPF in format XXX.XXX.XXX-XX' }),
    name: z
      .string()
      .min(3, 'Name must have at least 3 characters')
      .max(255, 'Name must have at most 255 characters')
      .meta({ example: 'Maria Santos Silva', description: 'Patient full name' }),
    birthDate: z
      .string()
      .refine(
        (date) => {
          const d = new Date(date);
          return d instanceof Date && !isNaN(d.getTime());
        },
        'Invalid date format. Use YYYY-MM-DD'
      )
      .meta({ example: '1990-01-15', description: 'Birth date (YYYY-MM-DD)' }),
    rg: z.string().optional().meta({ example: '12.345.678-9', description: 'RG number (optional)' }),
    medicalNotes: z.string().optional().meta({ example: 'Alergia a penicilina. Hipertensão controlada.', description: 'Medical notes (optional)' }),
    phones: z
      .array(
        z.object({
          number: z
            .string()
            .regex(/^\(\d{2}\)\s?\d{4,5}-\d{4}$/, 'Invalid phone format')
            .meta({ example: '(11) 98765-4321', description: 'Phone number in format (XX) XXXXX-XXXX' }),
        })
      )
      .optional()
      .meta({ example: [{ number: '(11) 98765-4321' }, { number: '(11) 3456-7890' }], description: 'Patient phone numbers (optional)' }),
    address: z
      .object({
        street: z.string().min(1, 'Street is required').meta({ example: 'Rua das Flores', description: 'Street name' }),
        number: z.string().optional().meta({ example: '123', description: 'Street number (optional)' }),
        neighborhood: z.string().optional().meta({ example: 'Centro', description: 'Neighborhood (optional)' }),
        city: z.string().min(1, 'City is required').meta({ example: 'São Paulo', description: 'City name' }),
        state: z.string().length(2, 'State must be 2 characters').meta({ example: 'SP', description: 'State code (2 letters)' }),
        zipCode: z.string().optional().meta({ example: '01234-567', description: 'Zip code (optional)' }),
      })
      .optional()
      .meta({ description: 'Patient address (optional)' }),
  })
  .meta({
    id: 'CreatePatientRequest',
    description: 'Create patient payload',
  });

export const updatePatientSchema = createPatientSchema.partial().meta({
  id: 'UpdatePatientRequest',
  description: 'Update patient payload',
});

export type CreatePatientInput = z.infer<typeof createPatientSchema>;
export type UpdatePatientInput = z.infer<typeof updatePatientSchema>;

export const patientResponseSchema = z
  .object({
    id: z.string().meta({ example: 'pat_abc123xyz', description: 'Patient ID' }),
    cpf: z.string().meta({ example: '123.456.789-10', description: 'Patient CPF' }),
    name: z.string().meta({ example: 'Maria Santos Silva', description: 'Patient name' }),
    birthDate: z.string().meta({ example: '1990-01-15', description: 'Birth date' }),
    rg: z.string().optional().meta({ example: '12.345.678-9', description: 'RG number' }),
    medicalNotes: z.string().optional().meta({ example: 'Alergia a penicilina. Hipertensão controlada.', description: 'Medical notes' }),
    createdAt: z.string().meta({ example: '2024-01-15T10:30:00Z', description: 'Creation date (ISO 8601)' }),
    updatedAt: z.string().meta({ example: '2024-01-20T14:45:00Z', description: 'Last update date (ISO 8601)' }),
  })
  .meta({
    id: 'PatientResponse',
    description: 'Patient response data',
  });

export type PatientResponse = z.infer<typeof patientResponseSchema>;
