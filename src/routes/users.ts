import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import prisma from "../lib/prisma";
import { CreateUserDto, UpdateUserDto } from "../types";

const router = Router();

// GET /users - Lista todos os usuários
router.get("/", async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                nomeCompleto: true,
                cpf: true,
                email: true,
                matricula: true,
                telefone: true,
                cargo: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        res.json(users);
    } catch (error) {
        console.error("Erro ao listar usuários:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

// GET /users/:id - Busca usuário por ID
router.get("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                nomeCompleto: true,
                cpf: true,
                email: true,
                matricula: true,
                telefone: true,
                cargo: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (!user) {
            res.status(404).json({ error: "Usuário não encontrado" });
            return;
        }

        res.json(user);
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

// POST /users - Cria novo usuário
router.post("/", async (req: Request, res: Response) => {
    try {
        const data = req.body as CreateUserDto;

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const newUser = await prisma.user.create({
            data: {
                nomeCompleto: data.nomeCompleto,
                cpf: data.cpf,
                email: data.email,
                matricula: data.matricula,
                telefone: data.telefone,
                cargo: data.cargo,
                password: hashedPassword,
            },
            select: {
                id: true,
                nomeCompleto: true,
                cpf: true,
                email: true,
                matricula: true,
                telefone: true,
                cargo: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        res.status(201).json(newUser);
    } catch (error: any) {
        console.error("Erro ao criar usuário:", error);
        if (error.code === "P2002") {
            const field = error.meta?.target?.[0];
            if (field === "matricula") {
                res.status(400).json({ error: "Matrícula já cadastrada no sistema" });
            } else if (field === "cpf") {
                res.status(400).json({ error: "CPF já cadastrado no sistema" });
            } else if (field === "email") {
                res.status(400).json({ error: "Email já cadastrado no sistema" });
            } else {
                res.status(400).json({ error: "Registro duplicado" });
            }
            return;
        }
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

// PUT /users/:id - Atualiza usuário
router.put("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body as UpdateUserDto;

        const updateData: any = { ...data };
        if (data.password) {
            updateData.password = await bcrypt.hash(data.password, 10);
        }

        const user = await prisma.user.update({
            where: { id },
            data: updateData,
            select: {
                id: true,
                nomeCompleto: true,
                cpf: true,
                email: true,
                matricula: true,
                telefone: true,
                cargo: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        res.json(user);
    } catch (error: any) {
        console.error("Erro ao atualizar usuário:", error);
        if (error.code === "P2025") {
            res.status(404).json({ error: "Usuário não encontrado" });
            return;
        }
        if (error.code === "P2002") {
            const field = error.meta?.target?.[0];
            if (field === "matricula") {
                res.status(400).json({ error: "Matrícula já cadastrada no sistema" });
            } else if (field === "cpf") {
                res.status(400).json({ error: "CPF já cadastrado no sistema" });
            } else {
                res.status(400).json({ error: "Registro duplicado" });
            }
            return;
        }
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

// DELETE /users/:id - Remove usuário
router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.user.delete({ where: { id } });
        res.status(204).send();
    } catch (error: any) {
        console.error("Erro ao remover usuário:", error);
        if (error.code === "P2025") {
            res.status(404).json({ error: "Usuário não encontrado" });
            return;
        }
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

// PUT /users/:id/password - Altera senha do usuário
router.put("/:id/password", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { currentPassword, newPassword } = req.body;

        const user = await prisma.user.findUnique({ where: { id } });

        if (!user) {
            res.status(404).json({ error: "Usuário não encontrado" });
            return;
        }

        const isValidPassword = await bcrypt.compare(currentPassword, user.password);

        if (!isValidPassword) {
            res.status(400).json({ error: "Senha atual incorreta" });
            return;
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        const updatedUser = await prisma.user.update({
            where: { id },
            data: { password: hashedPassword },
            select: {
                id: true,
                nomeCompleto: true,
                cpf: true,
                email: true,
                matricula: true,
                telefone: true,
                cargo: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        res.json(updatedUser);
    } catch (error) {
        console.error("Erro ao alterar senha:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

export default router;
