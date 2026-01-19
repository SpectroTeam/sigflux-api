import { Router } from 'express';
import healthRoutes from './health';
import authRoutes from './auth';
import patientRoutes from './patients';
import companionRoutes from "./companion";
import supportHouseRoutes from './supportHouse';
import driverRoutes from "./driver";

const router = Router();

router.use('/health', healthRoutes);
router.use('/auth', authRoutes);
router.use('/patients', patientRoutes);
router.use('/companions', companionRoutes);
router.use('/supporthouse', supportHouseRoutes);
router.use('/drivers', driverRoutes)

export default router;