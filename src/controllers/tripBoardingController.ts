import { Request, Response } from "express";
import { TripBoardingService } from "../services/tripBoardingService";

export class TripBoardingController {
    static async depart(req: Request, res: Response) {
        try {
            const { tripId } = req.params;

            if (!tripId || typeof tripId !== "string") {
                return res.status(400).json({ message: "ID da viagem inválido", });
            }

            const trip = await TripBoardingService.confirmDeparture(tripId);

            if (!trip) {
                return res.status(404).json({ message: "Viagem não encontrada", });
            }

            return res.status(200).json({ message: "Saída da viagem confirmada", trip, });
        } catch (error: any) {
            if (error.code === "P2025") {
                return res.status(404).json({ message: "Viagem não encontrada no banco de dados" });
            }

            if (error.message.includes("Trip cannot be started")) {
                return res.status(400).json({ message: "A viagem não pode ser iniciada, status inválido" });
            }

            return res.status(500).json({
                message: error.message || "Erro interno do servidor",
            });
        }
    }

    static async arrive(req: Request, res: Response) {
        try {
            const { tripId } = req.params;

            if (!tripId || typeof tripId !== "string") {
                return res.status(400).json({ message: "ID da viagem inválido", });
            }

            const trip = await TripBoardingService.confirmArrival(tripId);

            if (!trip) {
                return res.status(404).json({ message: "Viagem não encontrada", });
            }

            return res.status(200).json({ message: "Chegada da viagem confirmada", trip, });
        } catch (error: any) {
            if (error.code === "P2025") {
                return res.status(404).json({ message: "Viagem não encontrada no banco de dados" });
            }

            if (error.message.includes("Trip cannot be finished")) {
                return res.status(400).json({ message: "A viagem não pode ser finalizada, status inválido" });
            }

            return res.status(500).json({ 
                message: error.message || "Erro interno do servidor",
            });
        }
    }
}
