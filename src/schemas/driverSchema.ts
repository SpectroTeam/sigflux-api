import { z } from 'zod';

export const createDriverSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Name must have at least 3 characters')
      .max(255, 'Name must have at most 255 characters')
      .meta({ example: 'Pedro Almeida', description: 'Driver full name' }),

    cpf: z
      .string()
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Invalid CPF format')
      .meta({ example: '111.222.333-44', description: 'CPF in format XXX.XXX.XXX-XX' }),

    birthDate: z
      .string()
      .refine(
        (date) => {
          const d = new Date(date);
          return d instanceof Date && !isNaN(d.getTime());
        },
        'Invalid date format. Use YYYY-MM-DD'
      )
      .meta({ example: '1980-07-10', description: 'Birth date (YYYY-MM-DD)' }),

    phone: z
      .string()
      .transform((value) => value.replace(/\D/g, ''))
      .refine((value) => /^([1-9]{2})9\d{8}$/.test(value), {
        message: 'Invalid mobile number. Ex: (83) 9XXXX-XXXX',
      })
      .meta({ example: '83991234567', description: 'Mobile phone number' }),

    email: z.string().email('Invalid email format').meta({ example: 'pedro.almeida@example.com', description: 'Driver email' }),
    password: z.string().min(6, 'Password must be at least 6 characters').meta({ example: 'Driver@123', description: 'Password' }),
    registrationNumber: z.string().min(1, 'Registration number is required').meta({ example: 'DRV-2024-001', description: 'Registration number' }),
  })
  .meta({
    id: 'CreateDriverRequest',
    description: 'Create driver request payload',
  });

export const updateDriverSchema = createDriverSchema.partial().meta({
  id: 'UpdateDriverRequest',
  description: 'Update driver request payload',
});

export const driverResponseSchema = z
  .object({
    id: z.string().meta({ example: 'drv_abc123', description: 'Driver ID' }),
    name: z.string().meta({ example: 'Pedro Almeida', description: 'Driver name' }),
    cpf: z.string().meta({ example: '111.222.333-44', description: 'Driver CPF' }),
    birthDate: z.string().meta({ example: '1980-07-10', description: 'Birth date' }),
    phone: z.string().meta({ example: '83991234567', description: 'Phone number' }),
    email: z.string().meta({ example: 'pedro.almeida@example.com', description: 'Email' }),
    registrationNumber: z.string().meta({ example: 'DRV-2024-001', description: 'Registration number' }),
    createdAt: z.string().meta({ example: '2024-01-15T10:30:00Z', description: 'Creation date' }),
    updatedAt: z.string().meta({ example: '2024-01-20T14:45:00Z', description: 'Last update' }),
  })
  .meta({
    id: 'DriverResponse',
    description: 'Driver response data',
  });

export type CreateDriverInput = z.infer<typeof createDriverSchema>;
export type UpdateDriverInput = z.infer<typeof updateDriverSchema>;
export type DriverResponse = z.infer<typeof driverResponseSchema>;