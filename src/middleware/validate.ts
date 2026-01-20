import { Request, Response, NextFunction } from 'express';
import {  ZodObject, ZodRawShape } from 'zod';

export const validate = (schema: ZodObject<ZodRawShape>) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const validated = await schema.parseAsync(req.body);
      req.body = {
        ...req.body,
        ...validated,

      }
      next();
    } catch (error: any) {
      if (error.errors) {
        const messages = error.errors.map((err: any) => ({
          path: err.path.join('.'),
          message: err.message,
        }));
        res.status(400).json({ errors: messages });
        return;
      }
      res.status(400).json({ error: 'Validation error' });
    }
  };
};
