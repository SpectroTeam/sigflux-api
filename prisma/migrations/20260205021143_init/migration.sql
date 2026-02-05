-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pacientes" (
    "id" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'inativo',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "documentosAnexados" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acompanhantes" (
    "id" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "parentesco" TEXT NOT NULL,
    "pacienteId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "acompanhantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historico_viagens" (
    "id" TEXT NOT NULL,
    "dataIda" TEXT NOT NULL,
    "dataVolta" TEXT,
    "origem" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "isPresente" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL,
    "pacienteId" TEXT NOT NULL,
    "viagemId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "historico_viagens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "motoristas" (
    "id" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ativo',
    "documentosAnexados" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "motoristas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "veiculos" (
    "id" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "chassi" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "cor" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Inativo',
    "documentosAnexados" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "veiculos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "casas_apoio" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "capacidade_maxima" INTEGER NOT NULL,
    "lotacao_atual" INTEGER NOT NULL DEFAULT 0,
    "acomodacoes" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "casas_apoio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "viagens" (
    "id" TEXT NOT NULL,
    "tipo" TEXT,
    "endereco_destino" TEXT NOT NULL,
    "local_saida" TEXT,
    "horario_saida" TEXT,
    "observacoes" TEXT,
    "data_hora" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Planejada',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "viagens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "viagem_veiculos" (
    "id" TEXT NOT NULL,
    "viagemId" TEXT NOT NULL,
    "veiculoId" TEXT NOT NULL,

    CONSTRAINT "viagem_veiculos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "viagem_motoristas" (
    "id" TEXT NOT NULL,
    "viagemId" TEXT NOT NULL,
    "motoristaId" TEXT NOT NULL,

    CONSTRAINT "viagem_motoristas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "viagem_passageiros" (
    "id" TEXT NOT NULL,
    "viagemId" TEXT NOT NULL,
    "pacienteId" TEXT NOT NULL,
    "acompanhanteId" TEXT,

    CONSTRAINT "viagem_passageiros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "viagem_paradas" (
    "id" TEXT NOT NULL,
    "viagemId" TEXT NOT NULL,
    "casaApoioId" TEXT NOT NULL,

    CONSTRAINT "viagem_paradas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_matricula_key" ON "users"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "pacientes_cpf_key" ON "pacientes"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "motoristas_matricula_key" ON "motoristas"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "veiculos_placa_key" ON "veiculos"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "veiculos_chassi_key" ON "veiculos"("chassi");

-- CreateIndex
CREATE UNIQUE INDEX "viagem_veiculos_viagemId_veiculoId_key" ON "viagem_veiculos"("viagemId", "veiculoId");

-- CreateIndex
CREATE UNIQUE INDEX "viagem_motoristas_viagemId_motoristaId_key" ON "viagem_motoristas"("viagemId", "motoristaId");

-- CreateIndex
CREATE UNIQUE INDEX "viagem_passageiros_viagemId_pacienteId_key" ON "viagem_passageiros"("viagemId", "pacienteId");

-- CreateIndex
CREATE UNIQUE INDEX "viagem_paradas_viagemId_casaApoioId_key" ON "viagem_paradas"("viagemId", "casaApoioId");

-- AddForeignKey
ALTER TABLE "acompanhantes" ADD CONSTRAINT "acompanhantes_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_viagens" ADD CONSTRAINT "historico_viagens_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_viagens" ADD CONSTRAINT "historico_viagens_viagemId_fkey" FOREIGN KEY ("viagemId") REFERENCES "viagens"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagem_veiculos" ADD CONSTRAINT "viagem_veiculos_viagemId_fkey" FOREIGN KEY ("viagemId") REFERENCES "viagens"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagem_veiculos" ADD CONSTRAINT "viagem_veiculos_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "veiculos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagem_motoristas" ADD CONSTRAINT "viagem_motoristas_viagemId_fkey" FOREIGN KEY ("viagemId") REFERENCES "viagens"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagem_motoristas" ADD CONSTRAINT "viagem_motoristas_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES "motoristas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagem_passageiros" ADD CONSTRAINT "viagem_passageiros_viagemId_fkey" FOREIGN KEY ("viagemId") REFERENCES "viagens"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagem_passageiros" ADD CONSTRAINT "viagem_passageiros_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagem_passageiros" ADD CONSTRAINT "viagem_passageiros_acompanhanteId_fkey" FOREIGN KEY ("acompanhanteId") REFERENCES "acompanhantes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagem_paradas" ADD CONSTRAINT "viagem_paradas_viagemId_fkey" FOREIGN KEY ("viagemId") REFERENCES "viagens"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagem_paradas" ADD CONSTRAINT "viagem_paradas_casaApoioId_fkey" FOREIGN KEY ("casaApoioId") REFERENCES "casas_apoio"("id") ON DELETE CASCADE ON UPDATE CASCADE;
