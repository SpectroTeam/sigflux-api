import { Router } from 'express';
import { PatientController } from '../controllers/patientController';
import { authenticate } from '../middleware/auth';
import { requireManager } from '../middleware/authorization';
import { validate } from '../middleware/validate';
import { createPatientSchema, updatePatientSchema } from '../schemas/patientSchema';

const router = Router();

router.use(authenticate);
router.use(requireManager);

router.post('/', validate(createPatientSchema), PatientController.createPatient);
router.get('/', PatientController.getAllPatients);
router.get('/id/:id', PatientController.getPatientById);
router.get('/cpf/:cpf', PatientController.getPatientByCpf);
router.put('/:id', validate(updatePatientSchema), PatientController.updatePatient);
router.delete('/:id', PatientController.deletePatient);

export default router;
