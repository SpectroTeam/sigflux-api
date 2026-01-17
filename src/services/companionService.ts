import prisma from "../lib/prisma";
import { createCompanion } from "../types/companion";
import { PersonType } from "../types/enums";

export class CompanionService {

    static async createCompanion(data: createCompanion) {

        const patient = await prisma.person.findFirst({
            where: {
                id: data.patientId,
                type: 'PATIENT',
            },
        });

        if (!patient) {
            throw new Error('Patient not found');
        };

        const companion = await prisma.person.create({
            data: {
                name: data.name,
                cpf: data.cpf,
                birthDate: new Date(data.birthDate),
                type: PersonType.COMPANION,

                phones: {
                    create: [{ number: data.phone }],
                },

                companionGuardianships: {
                    create: {
                        patientId: data.patientId,
                        relationship: data.relationship,
                        tripId: data.tripId,
                    },
                },

            },
            include: {
                phones: true,
                companionGuardianships: {
                    include: {
                        patient: true,
                    },
                },
            }

        })

        return companion;

    }

    static async findAllByPatient(patientId: string) {
        return await prisma.patientGuardian.findMany({
            where: { patientId },
            include: {
                companion: {
                    include: {
                        phones: true,
                    },
                },
            },
        });
    }

    static async findById(id: string) {
        return await prisma.person.findUnique({
            where: {
                id
            }
        })
    }
}

