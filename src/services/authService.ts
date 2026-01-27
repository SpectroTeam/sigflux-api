import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';
import { LoginRequest, RegisterRequest, AuthResponse, JwtPayload } from '../types/auth';

const JWT_SECRET: string = process.env.JWT_SECRET || 'fallback-secret-key';
const JWT_EXPIRES_IN: string = process.env.JWT_EXPIRES_IN || '7d';

export class AuthService {
  static async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  static async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  static generateToken(payload: JwtPayload): string {
    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    } as any);
  }

  static verifyToken(token: string): JwtPayload {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  }

  static async login(data: LoginRequest): Promise<AuthResponse> {
    const employee = await prisma.employee.findUnique({
      where: { email: data.email },
      include: {
        person: true,
      },
    });

    if (!employee) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await this.comparePassword(data.password, employee.password);

    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const token = this.generateToken({
      employeeId: employee.id,
      email: employee.email,
      type: employee.type,
    });

    return {
      token,
      employee: {
        id: employee.id,
        email: employee.email,
        registrationNumber: employee.registrationNumber,
        type: employee.type,
        person: {
          id: employee.person.id,
          name: employee.person.name,
          cpf: employee.person.cpf,
        },
      },
    };
  }

  static async register(data: RegisterRequest): Promise<AuthResponse> {
    const existingEmployee = await prisma.employee.findUnique({
      where: { email: data.email },
    });

    if (existingEmployee) {
      throw new Error('Email already registered');
    }

    const existingPerson = await prisma.person.findUnique({
      where: { cpf: data.personData.cpf },
    });

    if (existingPerson) {
      throw new Error('CPF already registered');
    }

    const hashedPassword = await this.hashPassword(data.password);

    const employee = await prisma.employee.create({
      data: {
        email: data.email,
        password: hashedPassword,
        registrationNumber: data.registrationNumber,
        type: data.type,
        person: {
          create: {
            cpf: data.personData.cpf,
            name: data.personData.name,
            birthDate: new Date(data.personData.birthDate),
            rg: data.personData.rg ?? null,
            type: 'EMPLOYEE',
            phones: {
              create: {
                number: data.personData.phone,
              },
            },
          },
        },
      },
      include: {
        person: true,
      },
    });

    const token = this.generateToken({
      employeeId: employee.id,
      email: employee.email,
      type: employee.type,
    });

    return {
      token,
      employee: {
        id: employee.id,
        email: employee.email,
        registrationNumber: employee.registrationNumber,
        type: employee.type,
        person: {
          id: employee.person.id,
          name: employee.person.name,
          cpf: employee.person.cpf,
        },
      },
    };
  }

  static async getEmployeeById(employeeId: string) {
    return prisma.employee.findUnique({
      where: { id: employeeId },
      include: {
        person: true,
      },
    });
  }
}
