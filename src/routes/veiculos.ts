import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma';
import { CreateVeiculoDto, UpdateVeiculoDto, VEICULOS_STATUS } from '../types';

const router = Router();

// GET /veiculos - Lista todos os veículos
router.get('/', async (req: Request, res: Response) => {
    try {
        const veiculos = await prisma.veiculo.findMany();
        res.json(veiculos);
    } catch (error) {
        console.error('Erro ao listar veículos:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// GET /veiculos/available - Lista veículos disponíveis
router.get('/available', async (req: Request, res: Response) => {
    try {
        const veiculos = await prisma.veiculo.findMany({
            where: { status: VEICULOS_STATUS.INATIVO }
        });
        res.json(veiculos);
    } catch (error) {
        console.error('Erro ao listar veículos disponíveis:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// GET /veiculos/:id - Busca veículo por ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const veiculo = await prisma.veiculo.findUnique({ where: { id } });

        if (!veiculo) {
            res.status(404).json({ error: 'Veículo não encontrado' });
            return;
        }

        res.json(veiculo);
    } catch (error) {
        console.error('Erro ao buscar veículo:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// POST /veiculos - Cria novo veículo
router.post('/', async (req: Request, res: Response) => {
    try {
        const data = req.body as CreateVeiculoDto;

        const newVeiculo = await prisma.veiculo.create({
            data: {
                placa: data.placa,
                chassi: data.chassi,
                modelo: data.modelo,
                ano: Number(data.ano),
                cor: data.cor,
                capacidade: Number(data.capacidade),
                status: data.status || VEICULOS_STATUS.INATIVO,
                documentosAnexados: data.documentosAnexados || [],
            }
        });

        res.status(201).json(newVeiculo);
    } catch (error: any) {
        console.error('Erro ao criar veículo:', error);
        if (error.code === 'P2002') {
            const field = error.meta?.target?.[0];
            if (field === 'placa') {
                res.status(400).json({ error: 'Placa já cadastrada no sistema' });
            } else if (field === 'chassi') {
                res.status(400).json({ error: 'Chassi já cadastrado no sistema' });
            } else if (field === 'renavam') {
                res.status(400).json({ error: 'Renavam já cadastrado no sistema' });
            } else {
                res.status(400).json({ error: 'Registro duplicado' });
            }
            return;
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// PUT /veiculos/:id - Atualiza veículo
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body as UpdateVeiculoDto;
        if (data.ano) {
            data.ano = Number(data.ano);
        }
        if (data.capacidade) {
            data.capacidade = Number(data.capacidade);
        }

        const veiculo = await prisma.veiculo.update({
            where: { id },
            data,
        });

        res.json(veiculo);
    } catch (error: any) {
        console.error('Erro ao atualizar veículo:', error);
        if (error.code === 'P2025') {
            res.status(404).json({ error: 'Veículo não encontrado' });
            return;
        }
        if (error.code === 'P2002') {
            const field = error.meta?.target?.[0];
            if (field === 'placa') {
                res.status(400).json({ error: 'Placa já cadastrada no sistema' });
            } else if (field === 'chassi') {
                res.status(400).json({ error: 'Chassi já cadastrado no sistema' });
            } else {
                res.status(400).json({ error: 'Registro duplicado' });
            }
            return;
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// DELETE /veiculos/:id - Remove veículo
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.veiculo.delete({ where: { id } });
        res.status(204).send();
    } catch (error: any) {
        console.error('Erro ao remover veículo:', error);
        if (error.code === 'P2025') {
            res.status(404).json({ error: 'Veículo não encontrado' });
            return;
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

export default router;
