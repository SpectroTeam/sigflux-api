import { z } from 'zod';

export const loginSchema = z
  .object({
    email: z
      .string()
      .email('Invalid email format')
      .meta({ example: 'user@example.com', description: 'User email address' }),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .meta({ example: 'password123', description: 'User password' }),
  })
  .meta({
    id: 'LoginRequest',
    description: 'Login request payload',
  });

export const registerSchema = z
  .object({
    email: z.string().email('Invalid email format').meta({ example: 'john.doe@example.com', description: 'User email address' }),
    password: z.string().min(6, 'Password must be at least 6 characters').meta({ example: 'SecurePass123', description: 'User password' }),
    registrationNumber: z.string().min(1, 'Registration number is required').meta({ example: 'EMP-2024-001', description: 'Registration number' }),
    type: z.enum(['DRIVER', 'MANAGER', 'ADMIN', 'OTHER']).meta({ example: 'DRIVER', description: 'User type' }),
    personData: z.object({
      cpf: z.string().regex(/^\d{11}$/, 'CPF must be 11 digits').meta({ example: '12345678901', description: 'CPF number (11 digits)' }),
      name: z.string().min(3, 'Name must be at least 3 characters').meta({ example: 'João Silva', description: 'Full name' }),
      birthDate: z.string().datetime('Invalid date format').meta({ example: '1990-05-15T00:00:00Z', description: 'Birth date in ISO 8601 format' }),
      rg: z.string().optional().meta({ example: '123456789', description: 'RG number (optional)' }),
      phone: z.string().regex(/^\d{10,11}$/, 'Phone must be 10 or 11 digits').meta({ example: '11987654321', description: 'Phone number (10-11 digits)' }),
    }).meta({ description: 'Personal data' }),
  })
  .meta({
    id: 'RegisterRequest',
    description: 'User registration payload',
  });

export type LoginRequest = z.infer<typeof loginSchema>;
export type RegisterRequest = z.infer<typeof registerSchema>;

export const authResponseSchema = z
  .object({
    token: z.string().meta({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', description: 'JWT authentication token' }),
    employee: z.object({
      id: z.string().meta({ example: 'emp_123abc', description: 'Employee ID' }),
      email: z.string().meta({ example: 'john.doe@example.com', description: 'Employee email' }),
      registrationNumber: z.string().meta({ example: 'EMP-2024-001', description: 'Registration number' }),
      type: z.string().meta({ example: 'DRIVER', description: 'Employee type' }),
    }).meta({ description: 'Employee data' }),
  })
  .meta({
    id: 'AuthResponse',
    description: 'Authentication response with token and employee data',
  });

export const errorResponseSchema = z
  .object({
    error: z.string().meta({ example: 'Invalid credentials', description: 'Error message' }),
  })
  .meta({
    id: 'ErrorResponse',
    description: 'Error response payload',
  });

export type AuthResponse = z.infer<typeof authResponseSchema>;
export type ErrorResponse = z.infer<typeof errorResponseSchema>;
