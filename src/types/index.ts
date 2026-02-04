// Status types
export const PACIENTE_STATUS = {
    INATIVO: "inativo",
    EM_VIAGEM: "em viagem",
    HOSPEDADO: "hospedado",
} as const;

export const VEICULOS_STATUS = {
    INATIVO: "Inativo",
    EM_VIAGEM: "Em viagem",
} as const;

export const VIAGEM_STATUS = {
    PLANEJADA: "Planejada",
    EM_ANDAMENTO: "Em andamento",
    CONCLUIDA: "Concluída",
    CANCELADA: "Cancelada",
} as const;

export type PacienteStatus = (typeof PACIENTE_STATUS)[keyof typeof PACIENTE_STATUS];
export type VeiculoStatus = (typeof VEICULOS_STATUS)[keyof typeof VEICULOS_STATUS];
export type ViagemStatus = (typeof VIAGEM_STATUS)[keyof typeof VIAGEM_STATUS];

export type User = {
    id: string;
    nomeCompleto: string;
    cpf: string;
    email: string;
    matricula: string;
    telefone: string;
    cargo: string;
    password: string;
};

export type CreateUserDto = Omit<User, "id">;
export type UpdateUserDto = Partial<CreateUserDto>;

export type ViagemPaciente = {
    id: string;
    dataIda: string;
    dataVolta?: string;
    origem: string;
    destino: string;
    isPresente?: boolean;
    status: ViagemStatus;
};

export type Acompanhante = {
    id: string;
    nomeCompleto: string;
    cpf: string;
    telefone: string;
    parentesco: string;
};

export type CreateAcompanhanteDto = Omit<Acompanhante, "id">;
export type UpdateAcompanhanteDto = Partial<CreateAcompanhanteDto>;

export type Viagem = {
    id: string;
    tipo: "Ida" | "Volta";
    enderecoDestino: string;
    localSaida?: string;
    horarioSaida?: string;
    observacoes?: string;
    dataHora: string;
    veiculo: Veiculo[];
    motorista: Motorista[];
    passageiros: PacienteViagemEntry[];
    paradas: CasaApoio[];
    status: ViagemStatus;
};

export type CreateViagemDto = Omit<Viagem, "id">;
export type UpdateViagemDto = Partial<CreateViagemDto>;

export type Paciente = {
    id: string;
    nomeCompleto: string;
    cpf: string;
    rg: string;
    endereco: string;
    telefone: string;
    dataNascimento: string;
    status: PacienteStatus;
    historicoViagens?: ViagemPaciente[];
    documentosAnexados?: string[];
    acompanhantes?: Acompanhante[];
};

export type PacienteViagemEntry = {
    paciente: Paciente;
    acompanhante?: Acompanhante;
};

export type CreatePacienteDto = Omit<Paciente, "id" | "historicoViagens">;
export type UpdatePacienteDto = Partial<CreatePacienteDto>;

export type CasaApoio = {
    id: string;
    nome: string;
    endereco: string;
    capacidadeMaxima: number;
    lotacaoAtual: number;
};

export type CreateCasaApoioDto = Omit<CasaApoio, "id">;
export type UpdateCasaApoioDto = Partial<CreateCasaApoioDto>;

export type Motorista = {
    id: string;
    nomeCompleto: string;
    telefone: string;
    matricula: string;
    status?: string;
    documentosAnexados?: string[];
};

export type CreateMotoristaDto = Omit<Motorista, "id">;
export type UpdateMotoristaDto = Partial<CreateMotoristaDto>;

export type Veiculo = {
    id: string;
    placa: string;
    chassi: string;
    modelo: string;
    ano: number;
    cor: string;
    capacidade: number;
    status: VeiculoStatus;
    documentosAnexados?: string[];
};

export type CreateVeiculoDto = Omit<Veiculo, "id">;
export type UpdateVeiculoDto = Partial<CreateVeiculoDto>;

export type AuthCredentials = {
    matricula: string;
    password: string;
};

export type AuthResponse = {
    token: string;
    user: Omit<User, "password">;
};

export type JwtPayload = {
    userId: string;
    matricula: string;
};
