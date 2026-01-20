import { Router } from "express";
import {DriverController} from "../controllers/driverController";
import {createDriverSchema, updateDriverSchema} from "../schemas/driverSchema";
import { validate } from '../middleware/validate';
import { authenticate } from '../middleware/auth';
import { requireManager } from '../middleware/authorization';
import {uploadFileMiddleware} from "../middleware/uploadFileMiddleware";

const router = Router();

router.use(authenticate);
router.use(requireManager);

router.post("/", uploadFileMiddleware, validate(createDriverSchema), DriverController.createDriver);
router.get("/:id", DriverController.findById);
router.get("/", DriverController.findAllDriver);
router.put("/:id", uploadFileMiddleware, validate(updateDriverSchema), DriverController.updateDriver);
router.delete("/:personId", DriverController.deleteDriver);

export default router;

