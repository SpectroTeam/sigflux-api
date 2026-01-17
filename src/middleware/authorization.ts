import { Request, Response, NextFunction } from 'express';

export const requireManager = (req: Request, res: Response, next: NextFunction) => {
  if (!req.employee) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.employee.type !== 'MANAGER' && req.employee.type !== 'ADMIN') {
    return res.status(403).json({ error: 'Insufficient permissions. Only managers can perform this action' });
  }

  next();
};

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.employee) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.employee.type !== 'ADMIN') {
    return res.status(403).json({ error: 'Insufficient permissions. Only admins can perform this action' });
  }

  next();
};
