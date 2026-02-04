import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';
import { generateToken } from '../middleware/auth';
import { AuthCredentials } from '../types';

const router = Router();

// POST /auth/login
router.post('/login', async (req: Request, res: Response) => {
    try {
        const { matricula, password } = req.body as AuthCredentials;

        if (!matricula || !password) {
            res.status(400).json({ error: 'Matrícula e senha são obrigatórios' });
            return;
        }

        const user = await prisma.user.findUnique({
            where: { matricula }
        });

        if (!user) {
            res.status(401).json({ error: 'Credenciais inválidas' });
            return;
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            res.status(401).json({ error: 'Credenciais inválidas' });
            return;
        }

        const token = generateToken({
            userId: user.id,
            matricula: user.matricula,
        });

        // Retorna usuário sem a senha
        const { password: _, ...userWithoutPassword } = user;

        res.json({
            token,
            user: userWithoutPassword,
        });
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// POST /auth/validate - Valida token e retorna dados do usuário
router.post('/validate', async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({ valid: false });
        return;
    }

    const token = authHeader.replace('Bearer ', '');

    try {
        const JWT_SECRET = process.env.JWT_SECRET || 'sigflux-secret-key-2024';
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
        
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId }
        });
        
        if (!user) {
            res.status(401).json({ valid: false });
            return;
        }

        const { password: _, ...userWithoutPassword } = user;
        res.json({ valid: true, user: userWithoutPassword });
    } catch {
        res.status(401).json({ valid: false });
    }
});

export default router;
