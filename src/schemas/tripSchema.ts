import { z } from 'zod';
import { TripStatus, TripType } from '../types/enums';

export const createTripSchema = z
    .object({
        type: z.nativeEnum(TripType).meta({ example: 'OUTBOUND', description: 'Trip type (OUTBOUND or RETURN)' }),
        vehicleId: z.string().uuid('Invalid vehicle ID').meta({ example: 'veh_123', description: 'Vehicle ID' }),
        driverId: z.string().uuid('Invalid driver ID').meta({ example: 'drv_456', description: 'Driver ID (Employee)' }),
        origin: z.string().min(1, 'Origin is required').meta({ example: 'João Pessoa', description: 'Origin location' }),
        destination: z.string().min(1, 'Destination is required').meta({ example: 'Campina Grande', description: 'Destination location' }),
        departureDate: z
            .string()
            .datetime({ message: 'Invalid datetime format (ISO 8601)' })
            .optional()
            .meta({ example: '2024-02-20T08:00:00Z', description: 'Departure date and time' }),
        arrivalDate: z
            .string()
            .datetime({ message: 'Invalid datetime format (ISO 8601)' })
            .optional()
            .meta({ example: '2024-02-20T12:00:00Z', description: 'Arrival date and time (optional)' }),
        passengerIds: z
            .array(z.string().uuid())
            .min(1, 'At least one passenger is required')
            .meta({ example: ['pat_789', 'pat_012'], description: 'List of passenger IDs (Patients)' }),
        routeSupportHouseIds: z
            .array(z.string().uuid())
            .optional()
            .meta({ example: ['house_345'], description: 'List of Support House IDs for the route (optional)' }),
    })
    .meta({
        id: 'CreateTripRequest',
        description: 'Create trip payload',
    });

export const updateTripSchema = createTripSchema
    .partial()
    .extend({
        status: z.nativeEnum(TripStatus).optional().meta({ example: 'SCHEDULED', description: 'Trip status' }),
    })
    .meta({
        id: 'UpdateTripRequest',
        description: 'Update trip payload',
    });

export const updateTripStatusSchema = z
    .object({
        status: z.nativeEnum(TripStatus).meta({ example: 'IN_PROGRESS', description: 'New trip status' }),
    })
    .meta({
        id: 'UpdateTripStatusRequest',
        description: 'Update trip status payload',
    });

export type CreateTripInput = z.infer<typeof createTripSchema>;
export type UpdateTripInput = z.infer<typeof updateTripSchema>;
export type UpdateTripStatusInput = z.infer<typeof updateTripStatusSchema>;

export const tripResponseSchema = z
    .object({
        id: z.string().meta({ example: 'trip_999', description: 'Trip ID' }),
        vehicleId: z.string(),
        driverId: z.string(),
        origin: z.string(),
        destination: z.string(),
        departureDate: z.string(),
        arrivalDate: z.string().optional(),
        status: z.nativeEnum(TripStatus),
        type: z.nativeEnum(TripType),
        vehicle: z
            .object({
                plate: z.string(),
                model: z.string(),
            })
            .optional(),
        driver: z
            .object({
                name: z.string(),
            })
            .optional(),
        passengers: z
            .array(
                z.object({
                    id: z.string(),
                    name: z.string(),
                })
            )
            .optional(),
        createdAt: z.string(),
        updatedAt: z.string(),
    })
    .meta({
        id: 'TripResponse',
        description: 'Trip response data',
    });

export type TripResponse = z.infer<typeof tripResponseSchema>;
