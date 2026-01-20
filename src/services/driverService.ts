import prisma from '../lib/prisma';
import { EmployeeType, DocumentType, PersonType } from '@prisma/client';
import { CreateDriver, UpdateDriver } from '../types/driver';
import bcrypt from 'bcryptjs';

export class DriverService {

    static async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    static async createDriver(data: CreateDriver) {

        const hashedPassword = await this.hashPassword(data.password);

        const driver = await prisma.person.create({
            data: {
                name: data.name,
                cpf: data.cpf,
                birthDate: new Date(data.birthDate),
                type: PersonType.EMPLOYEE,

                phones: {
                    create: { number: data.phone }
                },

                employee: {
                    create: {
                        email: data.email,
                        password: hashedPassword,
                        registrationNumber: data.registrationNumber,
                        type: EmployeeType.DRIVER
                    },
                },

                documents: {
                    create: {
                        name: "CNH",
                        type: DocumentType.CNH,
                        size: data.file.size,
                        path: data.file.path,
                    }
                }
            },
            include: {
                documents: true,
                phones: true,
                employee:{
                    select:{
                        email: true,
                        registrationNumber: true,
                        id: true,
                        type: true,
                        personId: true,
                        updatedAt: true,
                        createdAt: true
                    }
                }
            }
        })

        return driver;

    }

    static async findById(id: string) {
        return await prisma.employee.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                type: true,
                registrationNumber: true,
                email: true,
                createdAt: true,
                updatedAt: true,
                personId: true,

                person: {
                    select: {
                        id: true,
                        name: true,
                        birthDate: true,
                        cpf: true,
                        phones: true,
                        documents: true,
                        updatedAt: true,
                        createdAt: true,
                    }
                }
            }
        })
    }

    static async findAllDriver() {
        return await prisma.employee.findMany({
            where: {
                type: EmployeeType.DRIVER
            },
            select: {
                id: true,
                type: true,
                registrationNumber: true,
                email: true,
                createdAt: true,
                updatedAt: true,
                personId: true,

                person: {
                    select: {
                        id: true,
                        name: true,
                        birthDate: true,
                        cpf: true,
                        phones: true,
                        documents: true,
                        updatedAt: true,
                        createdAt: true,
                    }
                }
            }
        });
    }

    static async updateDriver(id: string, data: UpdateDriver) {

        const employee = await prisma.employee.findUnique({
            where: { id },
            include: { person: true }
        });

        if (!employee) {
            throw new Error("Driver not found");
        }

        const personUpdateData: any = {};

        if (data.name) {
            personUpdateData.name = data.name;
        }

        if (data.birthDate) {
            personUpdateData.birthDate = new Date(data.birthDate);
        }

        if (data.phone) {
            personUpdateData.phones = {
                updateMany: {
                    where: {},
                    data: { number: data.phone }
                }
            };
        }

        if (data.file) {
            personUpdateData.documents = {
                updateMany: {
                    where: { personId: employee.personId, type: DocumentType.CNH },
                    data: { path: data.file.path, size: data.file.size }
                }
            };
        }

        return prisma.employee.update({
            where: { id },
            data: {
                person: {
                    update: personUpdateData
                }
            },
            select: {
                id: true,
                type: true,
                registrationNumber: true,
                email: true,
                createdAt: true,
                updatedAt: true,
                personId: true,

                person: {
                    select: {
                        id: true,
                        name: true,
                        birthDate: true,
                        cpf: true,
                        phones: true,
                        documents: true,
                        updatedAt: true,
                        createdAt: true,
                    }
                }
            }
        });
    }


    static async deleteDriver(personId: string) {
        return await prisma.employee.delete({
            where: {
                personId
            }
        })

    }
    static async deleteDriverTablePerson(id: string) {
        return await prisma.person.delete({
            where: {
                id
            }
        })
    }
}