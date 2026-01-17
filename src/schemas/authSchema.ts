import { z } from 'zod';
import { EmployeeType } from '../../generated/prisma';

export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  registrationNumber: z.string().min(1, 'Registration number is required'),
  type: z.enum(Object.values(EmployeeType) as [string, ...string[]]),
  personData: z.object({
    cpf: z.string().regex(/^\d{11}$/, 'CPF must be 11 digits'),
    name: z.string().min(3, 'Name must be at least 3 characters'),
    birthDate: z.string().datetime('Invalid date format'),
    rg: z.string().optional(),
    phone: z.string().regex(/^\d{10,11}$/, 'Phone must be 10 or 11 digits'),
  }),
});

export type LoginRequest = z.infer<typeof loginSchema>;
export type RegisterRequest = z.infer<typeof registerSchema>;
