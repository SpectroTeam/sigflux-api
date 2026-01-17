import { z } from "zod";

export const createSupportHouseSchema = z.object({
    name: z
        .string()
        .min(3, 'Name must have at least 3 characters')
        .max(255, 'Name must have at most 255 characters'),

    address: z
        .string()
        .min(10, "Address must have at least 10 characters"),

    capacity: z
        .number()
        .int("Capacity must be an integer")
        .positive("Capacity must be greater than zero")
        .nullable()
        .optional(),

    phone: z.string()
        .transform((value) => value.replace(/\D/g, ""))
        .refine(
            (value) => /^([1-9]{2})9\d{8}$/.test(value),
            { message: "Invalid mobile number. Ex: (83) 9XXXX-XXXX" })
        .nullable()
        .optional()

})

export const updateSupportHouseSchema = createSupportHouseSchema.partial();