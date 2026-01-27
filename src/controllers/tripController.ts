import { Request, Response } from 'express';
import { TripService } from '../services/tripService';
import { createTripSchema, updateTripSchema, updateTripStatusSchema } from '../schemas/tripSchema';
import { TripStatus } from '../types/enums';

export class TripController {
    static async createTrip(req: Request, res: Response) {
        try {
            const data = createTripSchema.parse(req.body);
            const trip = await TripService.createTrip(data);
            res.status(201).json(trip);
        } catch (error: any) {
            if (error.name === 'ZodError') {
                res.status(400).json({ error: error.errors });
            } else if (error.message.includes('not found') || error.message.includes('not active')) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    }

    static async getTripById(req: Request, res: Response) {
        try {
            const trip = await TripService.getTripById(req.params.id as string);
            res.json(trip);
        } catch (error: any) {
            if (error.message === 'Trip not found') {
                res.status(404).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    }

    static async listTrips(req: Request, res: Response) {
        try {
            const page = req.query.page ? parseInt(req.query.page as string) : 1;
            const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
            const status = req.query.status as TripStatus | undefined;
            const driverId = req.query.driverId as string | undefined;
            const vehicleId = req.query.vehicleId as string | undefined;

            const skip = (page - 1) * limit;

            const result = await TripService.listTrips(skip, limit, status, driverId, vehicleId);
            res.json({
                data: result.trips,
                meta: {
                    total: result.total,
                    page,
                    limit,
                    pages: Math.ceil(result.total / limit),
                },
            });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async updateTrip(req: Request, res: Response) {
        try {
            const data = updateTripSchema.parse(req.body);
            const trip = await TripService.updateTrip(req.params.id as string, data);
            res.json(trip);
        } catch (error: any) {
            if (error.name === 'ZodError') {
                res.status(400).json({ error: error.errors });
            } else if (error.message === 'Trip not found') {
                res.status(404).json({ error: error.message });
            } else {
                res.status(500).json({ error: error.message || 'Internal server error' });
            }
        }
    }

    static async updateTripStatus(req: Request, res: Response) {
        try {
            const { status } = updateTripStatusSchema.parse(req.body);
            const trip = await TripService.updateTripStatus(req.params.id as string, status);
            res.json(trip);
        } catch (error: any) {
            if (error.name === 'ZodError') {
                res.status(400).json({ error: error.errors });
            } else if (error.message === 'Trip not found') {
                res.status(404).json({ error: error.message });
            } else {
                res.status(500).json({ error: error.message || 'Internal server error' });
            }
        }
    }

    static async deleteTrip(req: Request, res: Response) {
        try {
            await TripService.deleteTrip(req.params.id as string);
            res.status(204).send();
        } catch (error: any) {
            if (error.message === 'Trip not found') {
                res.status(404).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    }
}
