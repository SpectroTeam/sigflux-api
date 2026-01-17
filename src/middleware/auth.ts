import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/authService';

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({ error: 'No token provided' });
      return;
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
      res.status(401).json({ error: 'Token error' });
      return;
    }

    const [scheme, token] = parts as [string, string];

    if (!/^Bearer$/i.test(scheme)) {
      res.status(401).json({ error: 'Token malformatted' });
      return;
    }

    try {
      const decoded = AuthService.verifyToken(token);
      const employee = await AuthService.getEmployeeById(decoded.employeeId);

      if (!employee) {
        res.status(401).json({ error: 'Employee not found' });
        return;
      }

      req.employee = employee;
      next();
    } catch (error) {
      res.status(401).json({ error: 'Invalid token' });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
    return;
  }
};
