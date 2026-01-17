import { Router } from "express";
import {CompanionController} from "../controllers/companionController";
import {createCompanionSchema} from "../schemas/companionSchema";
import { validate } from '../middleware/validate';
import { authenticate } from '../middleware/auth';
import { requireManager } from '../middleware/authorization';

const router = Router();

router.use(authenticate);
router.use(requireManager);

// Cadastrar acompanhante
router.post("/", validate(createCompanionSchema), CompanionController.createCompanion);

// Listar acompanhantes de um paciente
router.get("/patient/:patientId", CompanionController.findAllByPatient);

// Buscar acompanhante por id 
router.get("/:id", CompanionController.findById);

export default router;



