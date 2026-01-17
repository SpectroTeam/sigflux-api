import { Employee, Person } from '@prisma/client';

declare global {
  namespace Express {
    interface Request {
      employee?: Employee & {
        person: Person;
      };
    }
  }
}

export {};
