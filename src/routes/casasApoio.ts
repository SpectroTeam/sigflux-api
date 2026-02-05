import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma';
import { CreateCasaApoioDto, UpdateCasaApoioDto } from '../types';

const router = Router();

// GET /casas-apoio - Lista todas as casas de apoio
router.get('/', async (req: Request, res: Response) => {
    try {
        const casasApoio = await prisma.casaApoio.findMany();
        res.json(casasApoio);
    } catch (error) {
        console.error('Erro ao listar casas de apoio:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// GET /casas-apoio/:id - Busca casa de apoio por ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const casa = await prisma.casaApoio.findUnique({ where: { id } });

        if (!casa) {
            res.status(404).json({ error: 'Casa de apoio não encontrada' });
            return;
        }

        res.json(casa);
    } catch (error) {
        console.error('Erro ao buscar casa de apoio:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// POST /casas-apoio - Cria nova casa de apoio
router.post('/', async (req: Request, res: Response) => {
    try {
        const data = req.body as CreateCasaApoioDto;

        const newCasa = await prisma.casaApoio.create({
            data: {
                nome: data.nome,
                endereco: data.endereco,
                capacidadeMaxima: data.capacidadeMaxima,
                lotacaoAtual: data.lotacaoAtual,
                // acomodacoes: data.acomodacoes || [],
            }
        });

        res.status(201).json(newCasa);
    } catch (error) {
        console.error('Erro ao criar casa de apoio:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// PUT /casas-apoio/:id - Atualiza casa de apoio
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body as UpdateCasaApoioDto;

        const casa = await prisma.casaApoio.update({
            where: { id },
            data,
        });

        res.json(casa);
    } catch (error: any) {
        console.error('Erro ao atualizar casa de apoio:', error);
        if (error.code === 'P2025') {
            res.status(404).json({ error: 'Casa de apoio não encontrada' });
            return;
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// DELETE /casas-apoio/:id - Remove casa de apoio
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.casaApoio.delete({ where: { id } });
        res.status(204).send();
    } catch (error: any) {
        console.error('Erro ao remover casa de apoio:', error);
        if (error.code === 'P2025') {
            res.status(404).json({ error: 'Casa de apoio não encontrada' });
            return;
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

export default router;
