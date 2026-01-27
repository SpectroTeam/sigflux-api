import { Request, Response } from 'express';
import { VehicleService } from '../services/vehicleService';

export class VehicleController {
    static async createVehicle(req: Request, res: Response) {
        try {
            const vehicle = await VehicleService.createVehicle(req.body);
            res.status(201).json({
                message: 'Vehicle registered successfully',
                vehicle,

            });
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            res.status(400).json({ error: message });
        }
    }

    static async getVehicleById(req: Request, res: Response) {
        try {
            const id = String(req.params.id);
            const vehicle = await VehicleService.getVehicleById(id);
            res.status(200).json(vehicle);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            res.status(404).json({ error: message });
        }
    }

    static async getVehicleByPlate(req: Request, res: Response) {
        try {
            const plate = String(req.params.plate);
            const vehicle = await VehicleService.getVehicleByPlate(plate);
            res.status(200).json(vehicle);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            res.status(404).json({ error: message });
        }
    }

    static async searchVehicles(req: Request, res: Response) {
        try {
            const skip = req.query.skip ? parseInt(req.query.skip as string) : 0;
            const take = req.query.take ? parseInt(req.query.take as string) : 10;
            const search = req.query.search as string | undefined;

            const result = await VehicleService.searchVehicles(search, skip, take);
            res.status(200).json({
                vehicles: result.vehicles,
                pagination: {
                    skip,
                    take,
                    total: result.total,
                    pages: Math.ceil(result.total / take),
                },
            });
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            res.status(500).json({ error: message });
        }
    }

    static async updateVehicle(req: Request, res: Response) {
        try {
            const id = String(req.params.id);
            const vehicle = await VehicleService.updateVehicle(id, req.body);
            res.status(200).json({
                message: 'Vehicle updated successfully',
                vehicle,
            });
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            res.status(400).json({ error: message });
        }
    }

    static async deleteVehicle(req: Request, res: Response) {
        try {
            const id = String(req.params.id);
            await VehicleService.deleteVehicle(id);
            res.status(200).json({
                message: 'Vehicle deleted successfully',
            });
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            const status = message.includes('not found') ? 404 : 400; // 400 for foreign key constraint
            res.status(status).json({ error: message });
        }
    }
}
