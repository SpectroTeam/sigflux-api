import { Router } from 'express';
import healthRoutes from './health';
import authRoutes from './auth';
import patientRoutes from './patients';
import companionRouter from "./companion";

const router = Router();

router.use('/health', healthRoutes);
router.use('/auth', authRoutes);
router.use('/patients', patientRoutes);
router.use('/companions', companionRouter);

export default router;