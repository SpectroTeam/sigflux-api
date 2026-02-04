import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma';
import { CreateMotoristaDto, UpdateMotoristaDto } from '../types';

const router = Router();

// GET /motoristas - Lista todos os motoristas
router.get('/', async (req: Request, res: Response) => {
    try {
        const motoristas = await prisma.motorista.findMany();
        res.json(motoristas);
    } catch (error) {
        console.error('Erro ao listar motoristas:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// GET /motoristas/:id - Busca motorista por ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const motorista = await prisma.motorista.findUnique({ where: { id } });

        if (!motorista) {
            res.status(404).json({ error: 'Motorista não encontrado' });
            return;
        }

        res.json(motorista);
    } catch (error) {
        console.error('Erro ao buscar motorista:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// POST /motoristas - Cria novo motorista
router.post('/', async (req: Request, res: Response) => {
    try {
        const data = req.body as CreateMotoristaDto;

        const newMotorista = await prisma.motorista.create({
            data: {
                nomeCompleto: data.nomeCompleto,
                telefone: data.telefone,
                matricula: data.matricula,
                status: data.status || 'ativo',
                documentosAnexados: data.documentosAnexados || [],
            }
        });

        res.status(201).json(newMotorista);
    } catch (error: any) {
        console.error('Erro ao criar motorista:', error);
        if (error.code === 'P2002') {
            const field = error.meta?.target?.[0];
            if (field === 'matricula') {
                res.status(400).json({ error: 'Matrícula já cadastrada no sistema' });
            } else if (field === 'cpf') {
                res.status(400).json({ error: 'CPF já cadastrado no sistema' });
            } else if (field === 'cnh') {
                res.status(400).json({ error: 'CNH já cadastrada no sistema' });
            } else {
                res.status(400).json({ error: 'Registro duplicado' });
            }
            return;
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// PUT /motoristas/:id - Atualiza motorista
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body as UpdateMotoristaDto;

        const motorista = await prisma.motorista.update({
            where: { id },
            data,
        });

        res.json(motorista);
    } catch (error: any) {
        console.error('Erro ao atualizar motorista:', error);
        if (error.code === 'P2025') {
            res.status(404).json({ error: 'Motorista não encontrado' });
            return;
        }
        if (error.code === 'P2002') {
            const field = error.meta?.target?.[0];
            if (field === 'matricula') {
                res.status(400).json({ error: 'Matrícula já cadastrada no sistema' });
            } else if (field === 'cpf') {
                res.status(400).json({ error: 'CPF já cadastrado no sistema' });
            } else {
                res.status(400).json({ error: 'Registro duplicado' });
            }
            return;
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// DELETE /motoristas/:id - Remove motorista
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.motorista.delete({ where: { id } });
        res.status(204).send();
    } catch (error: any) {
        console.error('Erro ao remover motorista:', error);
        if (error.code === 'P2025') {
            res.status(404).json({ error: 'Motorista não encontrado' });
            return;
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

export default router;
