import { Request, Response } from "express";
import { TripHistoryService } from "../services/tripHistoryService";

export class TripHistoryController {
    static async getPatientHistory(req: Request, res: Response) {
        try {
            const { personId } = req.params;

            if (!personId || typeof personId !== "string") {
                return res.status(400).json({
                    message: "Invalid personId",
                });
            }

            const history = await TripHistoryService.getPatientTripHistory(personId);

            return res.status(200).json({
                history,
            });
        } catch (error: any) {
            return res.status(500).json({
                message: error.message || "Internal server error",
            });
        }
    }
}
