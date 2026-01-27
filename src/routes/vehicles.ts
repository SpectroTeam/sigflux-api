import { Router } from 'express';
import { VehicleController } from '../controllers/vehicleController';
import { authenticate } from '../middleware/auth';
import { requireManager } from '../middleware/authorization';
import { validate } from '../middleware/validate';
import { createVehicleSchema, updateVehicleSchema } from '../schemas/vehicleSchema';

const router = Router();

router.use(authenticate);
router.use(requireManager);

/**
 * @swagger
 * /api/v1/vehicles:
 *   post:
 *     summary: Create a new vehicle
 *     description: Register a new vehicle in the system
 *     tags: [Vehicles]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateVehicleRequest'
 *     responses:
 *       201:
 *         description: Vehicle created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 vehicle:
 *                   $ref: '#/components/schemas/VehicleResponse'
 *       400:
 *         description: Invalid input data
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.post('/', validate(createVehicleSchema), VehicleController.createVehicle);

/**
 * @swagger
 * /api/v1/vehicles:
 *   get:
 *     summary: List all vehicles
 *     description: Retrieve a paginated list of all vehicles
 *     tags: [Vehicles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *           example: "Toyota"
 *         description: Search vehicles by plate, model or chassis
 *       - in: query
 *         name: skip
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Number of records to skip
 *       - in: query
 *         name: take
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of records to take
 *     responses:
 *       200:
 *         description: List of vehicles retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 vehicles:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/VehicleResponse'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     skip:
 *                       type: integer
 *                     take:
 *                       type: integer
 *                     total:
 *                       type: integer
 *                     pages:
 *                       type: integer
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get('/', VehicleController.searchVehicles);

/**
 * @swagger
 * /api/v1/vehicles/id/{id}:
 *   get:
 *     summary: Get vehicle by ID
 *     description: Retrieve a specific vehicle by their unique identifier
 *     tags: [Vehicles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Vehicle ID
 *     responses:
 *       200:
 *         description: Vehicle retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VehicleResponse'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Vehicle not found
 *       500:
 *         description: Internal server error
 */
router.get('/id/:id', VehicleController.getVehicleById);

/**
 * @swagger
 * /api/v1/vehicles/plate/{plate}:
 *   get:
 *     summary: Get vehicle by Plate
 *     description: Retrieve a specific vehicle by their Plate
 *     tags: [Vehicles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: plate
 *         required: true
 *         schema:
 *           type: string
 *         description: Vehicle Plate
 *     responses:
 *       200:
 *         description: Vehicle retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VehicleResponse'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Vehicle not found
 *       500:
 *         description: Internal server error
 */
router.get('/plate/:plate', VehicleController.getVehicleByPlate);

/**
 * @swagger
 * /api/v1/vehicles/{id}:
 *   put:
 *     summary: Update vehicle information
 *     description: Update the details of an existing vehicle
 *     tags: [Vehicles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Vehicle ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateVehicleRequest'
 *     responses:
 *       200:
 *         description: Vehicle updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 vehicle:
 *                   $ref: '#/components/schemas/VehicleResponse'
 *       400:
 *         description: Invalid input data
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Vehicle not found
 *       500:
 *         description: Internal server error
 */
router.put('/:id', validate(updateVehicleSchema), VehicleController.updateVehicle);

/**
 * @swagger
 * /api/v1/vehicles/{id}:
 *   delete:
 *     summary: Delete a vehicle
 *     description: Remove a vehicle from the system
 *     tags: [Vehicles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Vehicle ID
 *     responses:
 *       200:
 *         description: Vehicle deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Vehicle not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', VehicleController.deleteVehicle);

export default router;
