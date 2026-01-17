import { Router } from "express";
import {SupportHouseController} from "../controllers/supportHouseController"
import {createSupportHouseSchema, updateSupportHouseSchema} from "../schemas/supportHouseSchema";
import { validate } from '../middleware/validate';
import { authenticate } from '../middleware/auth';
import { requireManager } from '../middleware/authorization';

const router = Router();

router.use(authenticate);
router.use(requireManager);

router.post('/', validate(createSupportHouseSchema), SupportHouseController.createSupportHouse);
router.get('/', SupportHouseController.findAllSupportHouses);
router.get('/:id', SupportHouseController.findById);
router.put('/:id', validate(updateSupportHouseSchema), SupportHouseController.updateSupportHouse);
router.delete('/:id', SupportHouseController.deleteSupportHouse);

export default router;