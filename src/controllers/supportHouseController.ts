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
    static async updateSupportHouse(req: Request, res: Response) {
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

    static async deleteSupportHouse(req: Request, res: Response) {
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

    static async getOccupancyByPeriod(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { startDate, endDate } = req.query;

            if (!id || typeof id !== "string") {
                return res.status(400).json({ message: "supportHouseId inválido", });
            }

            if (!startDate || !endDate) {
                return res.status(400).json({ error: "Os parâmetros de consulta startDate e endDate são obrigatórios" });
            }

            const occupancy = await SupportHouseService.getOccupancyByPeriod(id, new Date(String(startDate)), new Date(String(endDate)));

            res.status(200).json(occupancy);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unknown error";
            res.status(400).json({ error: message });
        }
    }

}
