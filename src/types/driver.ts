import { Document, EmployeeType, DocumentType } from '@prisma/client';


export interface CreateDriver {
    name: string;
    cpf: string;
    birthDate: string;
    registrationNumber: string;
    phone: string;
    email: string,
    password: string
}

export interface UpdateDriver {
    name?: string;
    registrationNumber?: string;
    phone?: string;
    email?: string;
    birthDate?: string;
}

export interface CNHDocument {
    name: string;
    size: number;
    path: string;
    type: DocumentType;
}

