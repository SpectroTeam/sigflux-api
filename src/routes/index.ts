import { Router } from 'express';
import healthRoutes from './health';
import authRoutes from './auth';
import patientRoutes from './patients';

const router = Router();

router.use('/health', healthRoutes);
router.use('/auth', authRoutes);
router.use('/patients', patientRoutes);

export default router;