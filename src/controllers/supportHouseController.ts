import { SupportHouseService } from "../services/supportHouseService";
import { Response, Request } from "express";

export class SupportHouseController {

    static async createSupportHouse(req: Request, res: Response) {
        try {
            const supportHouse = await SupportHouseService.createSupportHouse(req.body);
            res.status(201).json({
                message: 'Support House registered successfully',
                supportHouse
            });
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            res.status(400).json({ error: message });
        }
    }
    static async findAllSupportHouses(req: Request, res: Response) {
        try {
            const supportHouses = await SupportHouseService.findAllSupportHouses();
            res.status(200).json(supportHouses);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            res.status(400).json({ error: message });
        }
    }
    static async findById(req: Request, res: Response) {
        try {
            const id = String(req.params.id);
            const supportHouse = await SupportHouseService.findById(id);
            res.status(200).json(supportHouse);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            res.status(400).json({ error: message });
        }
    }
    static async updateSupportHouse(req: Request, res: Response){
        try {
            const id = String(req.params.id);
            const data = req.body;
            const updatedHouse = await SupportHouseService.updateSupportHouse(id, data);
            res.status(200).json({
                message: "Support House updated successfully",
                updatedHouse
            })
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            res.status(400).json({ error: message });
        }
    }

    static async deleteSupportHouse(req: Request, res: Response){
        try {
            const id = String(req.params.id);
            await SupportHouseService.deleteSupportHouse(id);
            res.status(200).json({
                message: "Support House deleted successfully"
            })
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            res.status(400).json({ error: message });
        }
    }
}
