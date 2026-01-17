import { z } from 'zod';
import { Relationship } from '@prisma/client';

export const createCompanionSchema = z.object({
    name: z
        .string()
        .min(3, 'Name must have at least 3 characters')
        .max(255, 'Name must have at most 255 characters'),

    cpf: z
        .string()
        .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Invalid CPF format')
        .describe('CPF in format: XXX.XXX.XXX-XX'),

    phone: z.string()
        .transform((value) => value.replace(/\D/g, ""))
        .refine(
            (value) => /^([1-9]{2})9\d{8}$/.test(value),
            { message: "Invalid mobile number. Ex: (83) 9XXXX-XXXX" }),

    birthDate: z
        .string()
        .refine(
            (date) => {
                const d = new Date(date);
                return d instanceof Date && !isNaN(d.getTime());
            },
            'Invalid date format. Use YYYY-MM-DD'
        ),

    patientId: z.string().uuid(),
    relationship: z.nativeEnum(Relationship),
    tripId: z.string().uuid(),
});