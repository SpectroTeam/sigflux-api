import { Document, EmployeeType, DocumentType } from '@prisma/client';


export interface CreateDriver {
    name: string;
    cpf: string;
    birthDate: string;
    registrationNumber: string;
    phone: string;
    email: string,
    password: string
    file:{
        path: string;
        size: number
    }
}

export interface UpdateDriver {
    name?: string;
    phone?: string;
    birthDate?: string;
    file?:{
        path: string;
        size: number
    }
}

export interface CNHDocument {
    name: string;
    size: number;
    path: string;
    type: DocumentType;
}

