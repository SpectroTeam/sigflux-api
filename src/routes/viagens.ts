import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma';
import { CreateViagemDto, UpdateViagemDto, VIAGEM_STATUS, VEICULOS_STATUS, PACIENTE_STATUS, ViagemPaciente } from '../types';

const router = Router();

// Função auxiliar para criar objeto de histórico de viagem
function createViagemHistorico(viagem: any): ViagemPaciente {
    return {
        id: viagem.id,
        dataIda: viagem.data_hora,
        dataVolta: undefined,
        origem: "Cariri Paraibano",
        destino: viagem.cidade_destino,
        status: viagem.status,
        isPresente: true,
    };
}

// Helper para incluir relacionamentos
const viagemIncludes = {
    veiculos: {
        include: {
            veiculo: true,
        }
    },
    motoristas: {
        include: {
            motorista: true,
        }
    },
    passageiros: {
        include: {
            paciente: {
                include: {
                    acompanhantes: true,
                }
            },
            acompanhante: true,
        }
    },
    paradas: {
        include: {
            casaApoio: true,
        }
    },
};

// Formatar viagem para o formato esperado pelo frontend
function formatViagem(viagem: any) {
    return {
        ...viagem,
        veiculo: viagem.veiculos?.map((v: any) => ({
            id: v.veiculo.id,
            modelo: v.veiculo.modelo,
            marca: v.veiculo.marca,
            placa: v.veiculo.placa,
            capacidade: v.veiculo.capacidade,
        })) || [],
        motorista: viagem.motoristas?.map((m: any) => ({
            id: m.motorista.id,
            nome: m.motorista.nomeCompleto,
            cnh: m.motorista.matricula,
        })) || [],
        passageiros: viagem.passageiros?.map((p: any) => ({
            paciente: p.paciente,
            acompanhante: p.acompanhante || undefined,
        })) || [],
        paradas: viagem.paradas?.map((p: any) => p.casaApoio) || [],
    };
}

// Calcula quantos lugares estão ocupados na viagem (pacientes + acompanhantes)
function calcularOcupacao(passageiros: any[]): number {
    return passageiros.reduce((total: number, p: any) => {
        return total + 1 + (p.acompanhante ? 1 : 0);
    }, 0);
}

// GET /viagens - Lista todas as viagens
router.get('/', async (req: Request, res: Response) => {
    try {
        const viagens = await prisma.viagem.findMany({
            include: viagemIncludes,
        });
        res.json(viagens.map(formatViagem));
    } catch (error) {
        console.error('Erro ao listar viagens:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// GET /viagens/:id - Busca viagem por ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const viagem = await prisma.viagem.findUnique({
            where: { id },
            include: viagemIncludes,
        });

        if (!viagem) {
            res.status(404).json({ error: 'Viagem não encontrada' });
            return;
        }

        res.json(formatViagem(viagem));
    } catch (error) {
        console.error('Erro ao buscar viagem:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// GET /viagens/:id/capacidade - Retorna capacidade disponível
router.get('/:id/capacidade', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const viagem = await prisma.viagem.findUnique({
            where: { id },
            include: viagemIncludes,
        });

        if (!viagem) {
            res.status(404).json({ error: 'Viagem não encontrada' });
            return;
        }

        const formatted = formatViagem(viagem);
        const capacidadeTotal = formatted.veiculo[0]?.capacidade || 0;
        const ocupacao = calcularOcupacao(formatted.passageiros);
        const capacidadeDisponivel = capacidadeTotal - ocupacao;

        res.json({ capacidadeDisponivel, capacidadeTotal, ocupacao });
    } catch (error) {
        console.error('Erro ao buscar capacidade:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// POST /viagens - Cria nova viagem
router.post('/', async (req: Request, res: Response) => {
    try {
        const data = req.body as CreateViagemDto;

        const newViagem = await prisma.viagem.create({
            data: {
                dataHora: data.dataHora,
                enderecoDestino: data.enderecoDestino,
                localSaida: data.localSaida,
                horarioSaida: data.horarioSaida,
                observacoes: data.observacoes,
                status: data.status || VIAGEM_STATUS.PLANEJADA,
                veiculos: data.veiculo?.length ? {
                    create: data.veiculo.map((v: any) => ({
                        veiculo: { connect: { id: v.id } }
                    }))
                } : undefined,
                motoristas: data.motorista?.length ? {
                    create: data.motorista.map((m: any) => ({
                        motorista: { connect: { id: m.id } }
                    }))
                } : undefined,
                passageiros: data.passageiros?.length ? {
                    create: data.passageiros.map((p: any) => ({
                        paciente: { connect: { id: p.paciente.id } },
                        acompanhante: p.acompanhante ? { connect: { id: p.acompanhante.id } } : undefined,
                    }))
                } : undefined,
                paradas: data.paradas?.length ? {
                    create: data.paradas.map((p: any) => ({
                        casaApoio: { connect: { id: p.id } }
                    }))
                } : undefined,
            },
            include: viagemIncludes,
        });

        // Atualizar status do veículo se viagem não for planejada
        if (data.veiculo?.[0] && data.status !== VIAGEM_STATUS.PLANEJADA) {
            await prisma.veiculo.update({
                where: { id: data.veiculo[0].id },
                data: { status: VEICULOS_STATUS.EM_VIAGEM },
            });
        }

        // Adicionar ao histórico de cada passageiro
        if (data.passageiros?.length) {
            const viagemHistorico = createViagemHistorico(newViagem);
            for (const p of data.passageiros) {
                await prisma.historicoViagem.create({
                    data: {
                        pacienteId: p.paciente.id,
                        viagemId: newViagem.id,
                        dataIda: viagemHistorico.dataIda,
                        origem: viagemHistorico.origem,
                        destino: viagemHistorico.destino,
                        status: viagemHistorico.status,
                        isPresente: viagemHistorico.isPresente,
                    }
                });
            }
        }

        res.status(201).json(formatViagem(newViagem));
    } catch (error) {
        console.error('Erro ao criar viagem:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// PUT /viagens/:id - Atualiza viagem
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body as UpdateViagemDto;

        // Remove campos de relacionamento para atualização simples
        const { veiculo, motorista, passageiros, paradas, ...updateData } = data;

        const viagem = await prisma.viagem.update({
            where: { id },
            data: updateData,
            include: viagemIncludes,
        });

        res.json(formatViagem(viagem));
    } catch (error: any) {
        console.error('Erro ao atualizar viagem:', error);
        if (error.code === 'P2025') {
            res.status(404).json({ error: 'Viagem não encontrada' });
            return;
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// DELETE /viagens/:id - Remove viagem
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const viagem = await prisma.viagem.findUnique({
            where: { id },
            include: viagemIncludes,
        });

        if (!viagem) {
            res.status(404).json({ error: 'Viagem não encontrada' });
            return;
        }

        const formatted = formatViagem(viagem);

        // Liberar veículo
        if (formatted.veiculo[0]) {
            await prisma.veiculo.update({
                where: { id: formatted.veiculo[0].id },
                data: { status: VEICULOS_STATUS.INATIVO },
            });
        }

        // Atualizar status dos passageiros
        for (const p of formatted.passageiros) {
            await prisma.paciente.update({
                where: { id: p.paciente.id },
                data: { status: PACIENTE_STATUS.INATIVO },
            });
        }

        // Remover relacionamentos
        await prisma.viagemVeiculo.deleteMany({ where: { viagemId: id } });
        await prisma.viagemMotorista.deleteMany({ where: { viagemId: id } });
        await prisma.viagemPassageiro.deleteMany({ where: { viagemId: id } });
        await prisma.viagemParada.deleteMany({ where: { viagemId: id } });
        await prisma.historicoViagem.deleteMany({ where: { viagemId: id } });

        await prisma.viagem.delete({ where: { id } });
        res.status(204).send();
    } catch (error: any) {
        console.error('Erro ao remover viagem:', error);
        if (error.code === 'P2025') {
            res.status(404).json({ error: 'Viagem não encontrada' });
            return;
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// POST /viagens/:id/passageiros - Adiciona passageiro à viagem
router.post('/:id/passageiros', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { pacienteId, acompanhanteId } = req.body;

        const viagem = await prisma.viagem.findUnique({
            where: { id },
            include: viagemIncludes,
        });

        if (!viagem) {
            res.status(404).json({ error: 'Viagem não encontrada' });
            return;
        }

        const paciente = await prisma.paciente.findUnique({
            where: { id: pacienteId },
            include: { acompanhantes: true },
        });

        if (!paciente) {
            res.status(404).json({ error: 'Paciente não encontrado' });
            return;
        }

        const formatted = formatViagem(viagem);

        // Verificar se paciente já está na viagem
        if (formatted.passageiros.some((p: any) => p.paciente.id === pacienteId)) {
            res.status(400).json({ error: 'Paciente já está na viagem' });
            return;
        }

        // Verificar capacidade
        const capacidadeTotal = formatted.veiculo[0]?.capacidade || 0;
        const ocupacaoAtual = calcularOcupacao(formatted.passageiros);
        const pessoasParaAdicionar = 1 + (acompanhanteId ? 1 : 0);

        if (ocupacaoAtual + pessoasParaAdicionar > capacidadeTotal) {
            res.status(400).json({ error: 'Capacidade do veículo excedida' });
            return;
        }

        // Adicionar passageiro
        await prisma.viagemPassageiro.create({
            data: {
                viagemId: id,
                pacienteId: pacienteId,
                acompanhanteId: acompanhanteId || null,
            }
        });

        // Atualizar status do paciente
        await prisma.paciente.update({
            where: { id: pacienteId },
            data: { status: PACIENTE_STATUS.EM_VIAGEM },
        });

        // Adicionar ao histórico
        await prisma.historicoViagem.create({
            data: {
                pacienteId: pacienteId,
                viagemId: id,
                dataIda: viagem.dataHora,
                origem: "Cariri Paraibano",
                destino: viagem.enderecoDestino,
                status: viagem.status,
                isPresente: true,
            }
        });

        const updatedViagem = await prisma.viagem.findUnique({
            where: { id },
            include: viagemIncludes,
        });

        res.json(formatViagem(updatedViagem));
    } catch (error) {
        console.error('Erro ao adicionar passageiro:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// DELETE /viagens/:id/passageiros/:pacienteId - Remove passageiro da viagem
router.delete('/:id/passageiros/:pacienteId', async (req: Request, res: Response) => {
    try {
        const { id, pacienteId } = req.params;

        const viagem = await prisma.viagem.findUnique({
            where: { id },
            include: viagemIncludes,
        });

        if (!viagem) {
            res.status(404).json({ error: 'Viagem não encontrada' });
            return;
        }

        const passageiro = await prisma.viagemPassageiro.findFirst({
            where: { viagemId: id, pacienteId: pacienteId },
        });

        if (!passageiro) {
            res.status(404).json({ error: 'Passageiro não encontrado na viagem' });
            return;
        }

        await prisma.viagemPassageiro.delete({
            where: { id: passageiro.id },
        });

        // Atualizar status do paciente
        await prisma.paciente.update({
            where: { id: pacienteId },
            data: { status: PACIENTE_STATUS.INATIVO },
        });

        // Remover do histórico
        await prisma.historicoViagem.deleteMany({
            where: { pacienteId: pacienteId, viagemId: id },
        });

        const updatedViagem = await prisma.viagem.findUnique({
            where: { id },
            include: viagemIncludes,
        });

        res.json(formatViagem(updatedViagem));
    } catch (error) {
        console.error('Erro ao remover passageiro:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// PUT /viagens/:id/passageiros/:pacienteId/acompanhante - Atualiza acompanhante do passageiro
router.put('/:id/passageiros/:pacienteId/acompanhante', async (req: Request, res: Response) => {
    try {
        const { id, pacienteId } = req.params;
        const { acompanhanteId } = req.body;

        const viagem = await prisma.viagem.findUnique({
            where: { id },
            include: viagemIncludes,
        });

        if (!viagem) {
            res.status(404).json({ error: 'Viagem não encontrada' });
            return;
        }

        const passageiro = await prisma.viagemPassageiro.findFirst({
            where: { viagemId: id, pacienteId: pacienteId },
        });

        if (!passageiro) {
            res.status(404).json({ error: 'Passageiro não encontrado na viagem' });
            return;
        }

        const formatted = formatViagem(viagem);

        // Verificar capacidade se estiver adicionando acompanhante
        if (acompanhanteId && !passageiro.acompanhanteId) {
            const capacidadeTotal = formatted.veiculo[0]?.capacidade || 0;
            const ocupacaoAtual = calcularOcupacao(formatted.passageiros);

            if (ocupacaoAtual + 1 > capacidadeTotal) {
                res.status(400).json({ error: 'Capacidade do veículo excedida' });
                return;
            }
        }

        await prisma.viagemPassageiro.update({
            where: { id: passageiro.id },
            data: { acompanhanteId: acompanhanteId || null },
        });

        const updatedViagem = await prisma.viagem.findUnique({
            where: { id },
            include: viagemIncludes,
        });

        res.json(formatViagem(updatedViagem));
    } catch (error) {
        console.error('Erro ao atualizar acompanhante:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// POST /viagens/:id/paradas - Adiciona parada à viagem
router.post('/:id/paradas', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { casaApoioId } = req.body;

        const viagem = await prisma.viagem.findUnique({
            where: { id },
            include: viagemIncludes,
        });

        if (!viagem) {
            res.status(404).json({ error: 'Viagem não encontrada' });
            return;
        }

        const casa = await prisma.casaApoio.findUnique({
            where: { id: casaApoioId },
        });

        if (!casa) {
            res.status(404).json({ error: 'Casa de apoio não encontrada' });
            return;
        }

        const formatted = formatViagem(viagem);

        // Verificar se parada já existe
        if (formatted.paradas.some((p: any) => p.id === casaApoioId)) {
            res.status(400).json({ error: 'Parada já adicionada à viagem' });
            return;
        }

        await prisma.viagemParada.create({
            data: {
                viagemId: id,
                casaApoioId: casaApoioId,
            }
        });

        const updatedViagem = await prisma.viagem.findUnique({
            where: { id },
            include: viagemIncludes,
        });

        res.json(formatViagem(updatedViagem));
    } catch (error) {
        console.error('Erro ao adicionar parada:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// DELETE /viagens/:id/paradas/:casaApoioId - Remove parada da viagem
router.delete('/:id/paradas/:casaApoioId', async (req: Request, res: Response) => {
    try {
        const { id, casaApoioId } = req.params;

        const viagem = await prisma.viagem.findUnique({
            where: { id },
            include: viagemIncludes,
        });

        if (!viagem) {
            res.status(404).json({ error: 'Viagem não encontrada' });
            return;
        }

        const parada = await prisma.viagemParada.findFirst({
            where: { viagemId: id, casaApoioId: casaApoioId },
        });

        if (!parada) {
            res.status(404).json({ error: 'Parada não encontrada na viagem' });
            return;
        }

        await prisma.viagemParada.delete({
            where: { id: parada.id },
        });

        const updatedViagem = await prisma.viagem.findUnique({
            where: { id },
            include: viagemIncludes,
        });

        res.json(formatViagem(updatedViagem));
    } catch (error) {
        console.error('Erro ao remover parada:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// POST /viagens/:id/iniciar - Inicia a viagem
router.post('/:id/iniciar', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const viagem = await prisma.viagem.findUnique({
            where: { id },
            include: viagemIncludes,
        });

        if (!viagem) {
            res.status(404).json({ error: 'Viagem não encontrada' });
            return;
        }

        if (viagem.status !== VIAGEM_STATUS.PLANEJADA) {
            res.status(400).json({ error: 'Viagem não pode ser iniciada' });
            return;
        }

        const formatted = formatViagem(viagem);

        // Atualizar status do veículo
        if (formatted.veiculo[0]) {
            await prisma.veiculo.update({
                where: { id: formatted.veiculo[0].id },
                data: { status: VEICULOS_STATUS.EM_VIAGEM },
            });
        }

        // Atualizar status dos passageiros
        for (const p of formatted.passageiros) {
            await prisma.paciente.update({
                where: { id: p.paciente.id },
                data: { status: PACIENTE_STATUS.EM_VIAGEM },
            });
        }

        const updatedViagem = await prisma.viagem.update({
            where: { id },
            data: { status: VIAGEM_STATUS.EM_ANDAMENTO },
            include: viagemIncludes,
        });

        res.json(formatViagem(updatedViagem));
    } catch (error) {
        console.error('Erro ao iniciar viagem:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// POST /viagens/:id/concluir - Conclui a viagem
router.post('/:id/concluir', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const viagem = await prisma.viagem.findUnique({
            where: { id },
            include: viagemIncludes,
        });

        if (!viagem) {
            res.status(404).json({ error: 'Viagem não encontrada' });
            return;
        }

        if (viagem.status !== VIAGEM_STATUS.EM_ANDAMENTO) {
            res.status(400).json({ error: 'Viagem não pode ser concluída' });
            return;
        }

        const formatted = formatViagem(viagem);

        // Liberar veículo
        if (formatted.veiculo[0]) {
            await prisma.veiculo.update({
                where: { id: formatted.veiculo[0].id },
                data: { status: VEICULOS_STATUS.INATIVO },
            });
        }

        // Atualizar status dos passageiros
        for (const p of formatted.passageiros) {
            await prisma.paciente.update({
                where: { id: p.paciente.id },
                data: { status: PACIENTE_STATUS.HOSPEDADO },
            });
        }

        const updatedViagem = await prisma.viagem.update({
            where: { id },
            data: { status: VIAGEM_STATUS.CONCLUIDA },
            include: viagemIncludes,
        });

        res.json(formatViagem(updatedViagem));
    } catch (error) {
        console.error('Erro ao concluir viagem:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

export default router;
