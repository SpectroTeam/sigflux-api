export interface CreatePatientRequest {
  cpf: string;
  name: string;
  birthDate: string;
  rg?: string;
  medicalNotes?: string;
  phones?: {
    number: string;
  }[];
  address?: {
    street: string;
    number?: string;
    neighborhood?: string;
    city: string;
    state: string;
    zipCode?: string;
  };
}

export interface PatientResponse {
  id: string;
  cpf: string;
  name: string;
  birthDate: string;
  rg?: string | undefined;
  medicalNotes?: string | undefined;
  createdAt: string;
  updatedAt: string;
}

export interface PatientWithDetails extends PatientResponse {
  phones?: Array<{
    id: string;
    number: string;
  }> | undefined;
  address?: {
    id: string;
    street: string;
    number?: string | undefined;
    neighborhood?: string | undefined;
    city: string;
    state: string;
    zipCode?: string | undefined;
  } | undefined;
}
