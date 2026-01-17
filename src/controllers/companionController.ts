import { Response, Request } from "express";
import { CompanionService } from "../services/companionService";

export class CompanionController {

    static async createCompanion(req: Request, res: Response) {
        try {
            const companion = await CompanionService.createCompanion(req.body);
            res.status(201).json({
                message: "Companion registered successfully",
                companion,
            })


        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            res.status(400).json({ error: message });
        }
    }

    static async findAllByPatient(req: Request, res: Response){
        try {
            const patientId = String(req.params.patientId);
            const companion = await CompanionService.findAllByPatient(patientId);
            res.status(200).json(companion)
            
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unknown error";
            res.status(400).json({error: message});
        }
    }

    static async findById(req: Request, res: Response){
        try {
            const id = String(req.params.id_);
            const companion = await CompanionService.findById(id);
            res.status(200).json(companion)
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unknown error";
            res.status(400).json({error: message});
        }
    }
}