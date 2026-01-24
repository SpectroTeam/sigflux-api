import { z } from 'zod';
import { VehicleStatus } from '../types/enums';

export const createVehicleSchema = z
    .object({
        plate: z
            .string()
            .regex(/^[A-Z]{3}[0-9][0-9A-Z][0-9]{2}$/, 'Invalid Plate format (Mercosul or Old Standard)')
            .meta({ example: 'ABC1D23', description: 'Vehicle License Plate' }),
        chassis: z
            .string()
            .length(17, 'Chassis must be 17 characters long')
            .meta({ example: '9BWZZZ377VT004251', description: 'Vehicle Chassis Number' }),
        model: z
            .string()
            .min(2, 'Model must have at least 2 characters')
            .max(100, 'Model must have at most 100 characters')
            .meta({ example: 'Toyota Corolla', description: 'Vehicle Model' }),
        year: z
            .number()
            .int()
            .min(1900, 'Year must be greater than 1900')
            .max(new Date().getFullYear() + 1, 'Year cannot be in the far future')
            .meta({ example: 2023, description: 'Vehicle Manufacture Year' }),
        color: z
            .string()
            .min(2, 'Color must have at least 2 characters')
            .meta({ example: 'White', description: 'Vehicle Color' }),
        maxCapacity: z
            .number()
            .int()
            .positive('Capacity must be positive')
            .meta({ example: 5, description: 'Maximum Passenger Capacity' }),
        status: z.nativeEnum(VehicleStatus).optional().default(VehicleStatus.ACTIVE)
            .meta({ example: 'ACTIVE', description: 'Vehicle Status' }),
    })
    .meta({
        id: 'CreateVehicleRequest',
        description: 'Create vehicle payload',
    });

export const updateVehicleSchema = createVehicleSchema.partial().meta({
    id: 'UpdateVehicleRequest',
    description: 'Update vehicle payload',
});

export type CreateVehicleInput = z.infer<typeof createVehicleSchema>;
export type UpdateVehicleInput = z.infer<typeof updateVehicleSchema>;

export const vehicleResponseSchema = z
    .object({
        id: z.string().meta({ example: 'veh_12345', description: 'Vehicle ID' }),
        plate: z.string().meta({ example: 'ABC1D23', description: 'Vehicle Plate' }),
        chassis: z.string().meta({ example: '9BWZZZ377VT004251', description: 'Chassis Number' }),
        model: z.string().meta({ example: 'Toyota Corolla', description: 'Vehicle Model' }),
        year: z.number().meta({ example: 2023, description: 'Manufacture Year' }),
        color: z.string().meta({ example: 'White', description: 'Vehicle Color' }),
        maxCapacity: z.number().meta({ example: 5, description: 'Maximum Capacity' }),
        status: z.nativeEnum(VehicleStatus).meta({ example: 'ACTIVE', description: 'Vehicle Status' }),
        createdAt: z.string().meta({ example: '2024-01-15T10:30:00Z', description: 'Creation date' }),
        updatedAt: z.string().meta({ example: '2024-01-20T14:45:00Z', description: 'Last update date' }),
    })
    .meta({
        id: 'VehicleResponse',
        description: 'Vehicle response data',
    });

export type VehicleResponse = z.infer<typeof vehicleResponseSchema>;
