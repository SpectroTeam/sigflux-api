export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  registrationNumber: string;
  type: 'DRIVER' | 'MANAGER' | 'ADMIN' | 'OTHER';
  personData: {
    cpf: string;
    name: string;
    birthDate: string;
    rg?: string;
    phone: string;
  };
}

export interface AuthResponse {
  token: string;
  employee: {
    id: string;
    email: string;
    registrationNumber: string;
    type: string;
    person: {
      id: string;
      name: string;
      cpf: string;
    };
  };
}

export interface JwtPayload {
  employeeId: string;
  email: string;
  type: string;
}
