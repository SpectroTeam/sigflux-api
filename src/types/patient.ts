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

export interface PatientDocument {
  id: string;
  name: string;
  type: string;
  path: string;
  uploadDate: Date;
}

export interface PatientCompanion {
  id: string;
  name: string;
  relationship: string;
}

export interface PatientTravel {
  id: string;
  origin: string;
  destination: string;
  departureDate: Date;
  status: string;
  driverName?: string;
  vehiclePlate?: string;
}

export interface PatientDetailsResponse {
  id: string;
  name: string;
  cpf: string;
  birthDate: Date;
  rg?: string | null;
  medicalNotes?: string | null;
  phones: Array<{
    id: string;
    number: string;
  }>;
  address?: {
    street: string;
    number?: string | null;
    neighborhood?: string | null;
    city: string;
    state: string;
    zipCode?: string | null;
  } | null;
  documents: PatientDocument[];
  companions: PatientCompanion[];
  travelHistory: PatientTravel[];
}
