import prisma from '../lib/prisma';
import { EmployeeType, DocumentType, PersonType } from '@prisma/client';
import { CreateDriver, UpdateDriver} from '../types/driver';

export class DriverService {

    static async createDriver(data: CreateDriver) {

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
                        password: data.password,
                        registrationNumber: data.registrationNumber,
                        type: EmployeeType.DRIVER
                    }
                },

                documents: {
                    create: {
                        name: "CNH",
                        type: DocumentType.CNH,
                        size: data.file.size,
                        path: data.file.path,
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
            include: {
                person: {
                    include: {
                        phones: true,
                        documents: true
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
            include: {
                person: {
                    include: {
                        phones: true,
                        documents: true
                    }
                }
            }
        })
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
                upsert: {
                    where: {
                        personId_type: {
                            personId: employee.personId,
                            type: DocumentType.CNH
                        }
                    },
                    update: {
                        path: data.file.path,
                        size: data.file.size
                    },
                    create: {
                        name: "CNH",
                        type: DocumentType.CNH,
                        size: data.file.size,
                        path: data.file.path,
                        personId: employee.personId
                    }
                }
            };
        }

        return prisma.employee.update({
            where: { id },
            data:{
                person: {
                    update: personUpdateData
                }
            }
        });
    }


    static async deleteDriver(id: string) {
        return await prisma.employee.delete({
            where: {
                id
            }
        })
    }
}