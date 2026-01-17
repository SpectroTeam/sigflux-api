import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export class AuthController {
  static async login(req: Request, res: Response): Promise<void> {
    try {
      const result = await AuthService.login(req.body);
      res.status(200).json(result);
    } catch (error) {
      if (error instanceof Error && error.message === 'Invalid credentials') {
        res.status(401).json({ error: error.message });
        return;
      }
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async register(req: Request, res: Response): Promise<void> {
    try {
      const result = await AuthService.register(req.body);
      res.status(201).json(result);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Email already registered' || error.message === 'CPF already registered') {
          res.status(409).json({ error: error.message });
          return;
        }
      }
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async me(req: Request, res: Response): Promise<void> {
    try {
      if (!req.employee) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }

      res.status(200).json({
        employee: {
          id: req.employee.id,
          email: req.employee.email,
          registrationNumber: req.employee.registrationNumber,
          type: req.employee.type,
          person: {
            id: req.employee.person.id,
            name: req.employee.person.name,
            cpf: req.employee.person.cpf,
            birthDate: req.employee.person.birthDate,
            rg: req.employee.person.rg,
          },
        },
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
