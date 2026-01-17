import { Employee, Person } from '../../generated/prisma';

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
