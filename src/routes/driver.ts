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

/**
 * @swagger
 * /api/v1/drivers:
 *   post:
 *     summary: Create a new driver
 *     description: Register a new driver with profile photo and details
 *     tags: [Drivers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Driver created successfully
 *       400:
 *         description: Invalid input data
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.post("/", uploadFileMiddleware, validate(createDriverSchema), DriverController.createDriver);

/**
 * @swagger
 * /api/v1/drivers/{id}:
 *   get:
 *     summary: Get driver by ID
 *     description: Retrieve a specific driver by their unique identifier
 *     tags: [Drivers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Driver ID
 *     responses:
 *       200:
 *         description: Driver retrieved successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Driver not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", DriverController.findById);

/**
 * @swagger
 * /api/v1/drivers:
 *   get:
 *     summary: List all drivers
 *     description: Retrieve a list of all drivers in the system
 *     tags: [Drivers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of drivers retrieved successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get("/", DriverController.findAllDriver);

/**
 * @swagger
 * /api/v1/drivers/{id}:
 *   put:
 *     summary: Update driver information
 *     description: Update the details of an existing driver, including profile photo
 *     tags: [Drivers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Driver ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Driver updated successfully
 *       400:
 *         description: Invalid input data
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Driver not found
 *       500:
 *         description: Internal server error
 */
router.put("/:id", uploadFileMiddleware, validate(updateDriverSchema), DriverController.updateDriver);

/**
 * @swagger
 * /api/v1/drivers/{personId}:
 *   delete:
 *     summary: Delete a driver
 *     description: Remove a driver from the system
 *     tags: [Drivers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: personId
 *         required: true
 *         schema:
 *           type: string
 *         description: Driver Person ID
 *     responses:
 *       200:
 *         description: Driver deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Driver not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:personId", DriverController.deleteDriver);

export default router;

