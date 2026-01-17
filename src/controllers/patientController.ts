import { Request, Response } from 'express';
import { PatientService } from '../services/patientService';

export class PatientController {
  static async createPatient(req: Request, res: Response) {
    try {
      const patient = await PatientService.createPatient(req.body);
      res.status(201).json({
        message: 'Patient registered successfully',
        patient,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      res.status(400).json({ error: message });
    }
  }

  static async getPatientById(req: Request, res: Response) {
    try {
      const id = String(req.params.id);
      const patient = await PatientService.getPatientById(id);
      res.status(200).json(patient);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      res.status(404).json({ error: message });
    }
  }

  static async getPatientByCpf(req: Request, res: Response) {
    try {
      const cpf = String(req.params.cpf);
      const patient = await PatientService.getPatientByCpf(cpf);
      res.status(200).json(patient);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      res.status(404).json({ error: message });
    }
  }

  static async getAllPatients(req: Request, res: Response) {
    try {
      const skip = req.query.skip ? parseInt(req.query.skip as string) : 0;
      const take = req.query.take ? parseInt(req.query.take as string) : 10;

      const result = await PatientService.getAllPatients(skip, take);
      res.status(200).json({
        patients: result.patients,
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

  static async updatePatient(req: Request, res: Response) {
    try {
      const id = String(req.params.id);
      const patient = await PatientService.updatePatient(id, req.body);
      res.status(200).json({
        message: 'Patient updated successfully',
        patient,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      res.status(400).json({ error: message });
    }
  }

  static async deletePatient(req: Request, res: Response) {
    try {
      const id = String(req.params.id);
      await PatientService.deletePatient(id);
      res.status(200).json({
        message: 'Patient deleted successfully',
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      res.status(404).json({ error: message });
    }
  }
}
