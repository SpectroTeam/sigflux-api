import {Relationship} from '@prisma/client';

export interface createCompanion {
    cpf: string;
    name: string;
    phone: string;

    relationship: Relationship;
    patientId: string;
    tripId: string;

    rg?: string;
    birthDate: string;
    medicalNotes?: string;
}