import { Request, Response } from "express";
import { DriverService } from "../services/driverService";


export class DriverController {

    static async createDriver(req: Request, res: Response) {
        try {
            const driver = await DriverService.createDriver(req.body, req.body.file);
            res.status(201).json({
                message: "Driver registered successfully",
                driver,
            })

        } catch (error) {
            const message = error instanceof Error ? error.message : "Unknown error";
            res.status(400).json({ error: message });
        }
    }

    static async findById(req: Request, res: Response) {
        try {
            const id = String(req.params.id);
            const driver = await DriverService.findById(id);
            res.status(200).json(driver);

        } catch (error) {
            const message = error instanceof Error ? error.message : "Unknown error";
            res.status(400).json({ error: message });
        }
    }

    static async findAllDriver(req: Request, res: Response) {
        try {
            const drivers = await DriverService.findAllDriver();
            res.status(200).json(drivers);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unknown error";
            res.status(400).json({ error: message });
        }
    }

    static async updateDriver(req: Request, res: Response){
        try {
            const id = String(req.params.id);
            const data = req.body
            const driver = await DriverService.updateDriver(id, data);
            res.status(200).json({
                message: "Driver updated successfully",
                driver,
            })
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unknown error";
            res.status(400).json({ error: message });
        }
    }

    static async deleteDriver(req: Request, res: Response){
        try {
            const id = String(req.params.id);
            await DriverService.deleteDriver(id);
            res.status(200).json({
                message: "Driver deleted successfully",
            })
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unknown error";
            res.status(400).json({ error: message });
        }
    }
}