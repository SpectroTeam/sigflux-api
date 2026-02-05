import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma';
import { CreatePacienteDto, UpdatePacienteDto, CreateAcompanhanteDto, UpdateAcompanhanteDto } from '../types';

const router = Router();

// GET /pacientes - Lista todos os pacientes
router.get('/', async (req: Request, res: Response) => {
    try {
        const pacientes = await prisma.paciente.findMany({
            include: {
                acompanhantes: true,
                historicoViagens: true,
            }
        });
        res.json(pacientes);
    } catch (error) {
        console.error('Erro ao listar pacientes:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// GET /pacientes/:id - Busca paciente por ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const paciente = await prisma.paciente.findUnique({
            where: { id },
            include: {
                acompanhantes: true,
                historicoViagens: true,
            }
        });

        if (!paciente) {
            res.status(404).json({ error: 'Paciente não encontrado' });
            return;
        }

        res.json(paciente);
    } catch (error) {
        console.error('Erro ao buscar paciente:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// POST /pacientes - Cria novo paciente
router.post('/', async (req: Request, res: Response) => {
    try {
        const data = req.body as CreatePacienteDto;

        const newPaciente = await prisma.paciente.create({
            data: {
                nomeCompleto: data.nomeCompleto,
                cpf: data.cpf,
                rg: data.rg,
                dataNascimento: data.dataNascimento,
                telefone: data.telefone,
                endereco: data.endereco,
                documentosAnexados: data.documentosAnexados || [],
                acompanhantes: data.acompanhantes ? {
                    create: data.acompanhantes.map(a => ({
                        nome: a.nomeCompleto,
                        cpf: a.cpf,
                        telefone: a.telefone,
                        parentesco: a.parentesco,
                    }))
                } : undefined,
            },
            include: {
                acompanhantes: true,
                historicoViagens: true,
            }
        });

        res.status(201).json(newPaciente);
    } catch (error: any) {
        console.error('Erro ao criar paciente:', error);
        if (error.code === 'P2002') {
            res.status(400).json({ error: 'CPF já cadastrado no sistema' });
            return;
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// PUT /pacientes/:id - Atualiza paciente
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body as UpdatePacienteDto;

        // Remove acompanhantes do objeto para evitar erro
        const { acompanhantes, ...updateData } = data;

        const paciente = await prisma.paciente.update({
            where: { id },
            data: updateData,
            include: {
                acompanhantes: true,
                historicoViagens: true,
            }
        });

        res.json(paciente);
    } catch (error: any) {
        console.error('Erro ao atualizar paciente:', error);
        if (error.code === 'P2025') {
            res.status(404).json({ error: 'Paciente não encontrado' });
            return;
        }
        if (error.code === 'P2002') {
            res.status(400).json({ error: 'CPF já cadastrado no sistema' });
            return;
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// DELETE /pacientes/:id - Remove paciente
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        
        // Primeiro remove acompanhantes
        await prisma.acompanhante.deleteMany({
            where: { pacienteId: id }
        });
        
        await prisma.paciente.delete({ where: { id } });
        res.status(204).send();
    } catch (error: any) {
        console.error('Erro ao remover paciente:', error);
        if (error.code === 'P2025') {
            res.status(404).json({ error: 'Paciente não encontrado' });
            return;
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// ==================== ACOMPANHANTES ====================

// POST /pacientes/:id/acompanhantes - Adiciona acompanhante
router.post('/:id/acompanhantes', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body as CreateAcompanhanteDto;

        // Verificar se paciente existe
        const paciente = await prisma.paciente.findUnique({ where: { id } });

        if (!paciente) {
            res.status(404).json({ error: 'Paciente não encontrado' });
            return;
        }

        const newAcompanhante = await prisma.acompanhante.create({
            data: {
                nomeCompleto: data.nomeCompleto,
                cpf: data.cpf,
                telefone: data.telefone,
                parentesco: data.parentesco,
                pacienteId: id,
            }
        });

        res.status(201).json(newAcompanhante);
    } catch (error: any) {
        console.error('Erro ao adicionar acompanhante:', error);
        if (error.code === 'P2002') {
            res.status(400).json({ error: 'Acompanhante com este CPF já cadastrado' });
            return;
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// PUT /pacientes/:pacienteId/acompanhantes/:acompanhanteId - Atualiza acompanhante
router.put('/:pacienteId/acompanhantes/:acompanhanteId', async (req: Request, res: Response) => {
    try {
        const { pacienteId, acompanhanteId } = req.params;
        const data = req.body as UpdateAcompanhanteDto;

        // Verificar se paciente existe
        const paciente = await prisma.paciente.findUnique({ where: { id: pacienteId } });

        if (!paciente) {
            res.status(404).json({ error: 'Paciente não encontrado' });
            return;
        }

        const acompanhante = await prisma.acompanhante.update({
            where: { id: acompanhanteId },
            data,
        });

        res.json(acompanhante);
    } catch (error: any) {
        console.error('Erro ao atualizar acompanhante:', error);
        if (error.code === 'P2025') {
            res.status(404).json({ error: 'Acompanhante não encontrado' });
            return;
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// DELETE /pacientes/:pacienteId/acompanhantes/:acompanhanteId - Remove acompanhante
router.delete('/:pacienteId/acompanhantes/:acompanhanteId', async (req: Request, res: Response) => {
    try {
        const { pacienteId, acompanhanteId } = req.params;

        // Verificar se paciente existe
        const paciente = await prisma.paciente.findUnique({ where: { id: pacienteId } });

        if (!paciente) {
            res.status(404).json({ error: 'Paciente não encontrado' });
            return;
        }

        await prisma.acompanhante.delete({ where: { id: acompanhanteId } });
        res.status(204).send();
    } catch (error: any) {
        console.error('Erro ao remover acompanhante:', error);
        if (error.code === 'P2025') {
            res.status(404).json({ error: 'Acompanhante não encontrado' });
            return;
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

export default router;
