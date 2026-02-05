import "dotenv/config";
import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth";
import usersRoutes from "./routes/users";
import pacientesRoutes from "./routes/pacientes";
import motoristasRoutes from "./routes/motoristas";
import veiculosRoutes from "./routes/veiculos";
import casasApoioRoutes from "./routes/casasApoio";
import viagensRoutes from "./routes/viagens";
import { authMiddleware } from "./middleware/auth";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

// Rotas públicas
app.use("/api/auth", authRoutes);

// Rotas protegidas
app.use("/api/users", authMiddleware, usersRoutes);
app.use("/api/pacientes", authMiddleware, pacientesRoutes);
app.use("/api/motoristas", authMiddleware, motoristasRoutes);
app.use("/api/veiculos", authMiddleware, veiculosRoutes);
app.use("/api/casas-apoio", authMiddleware, casasApoioRoutes);
app.use("/api/viagens", authMiddleware, viagensRoutes);

// Rota de health check
app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Handler de erro 404
app.use((req, res) => {
    res.status(404).json({ error: "Rota não encontrada" });
});

// Handler de erros globais
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error("Erro:", err);
    res.status(500).json({ error: "Erro interno do servidor" });
});

export default app;
