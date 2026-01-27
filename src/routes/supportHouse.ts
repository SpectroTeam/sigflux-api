import { Router } from "express";
import {SupportHouseController} from "../controllers/supportHouseController"
import {createSupportHouseSchema, updateSupportHouseSchema} from "../schemas/supportHouseSchema";
import { validate } from '../middleware/validate';
import { authenticate } from '../middleware/auth';
import { requireManager } from '../middleware/authorization';

const router = Router();

router.use(authenticate);
router.use(requireManager);

/**
 * @swagger
 * /api/v1/supporthouse:
 *   post:
 *     summary: Create a new support house
 *     description: Register a new support house facility in the system
 *     tags: [Support House]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Support house created successfully
 *       400:
 *         description: Invalid input data
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.post('/', validate(createSupportHouseSchema), SupportHouseController.createSupportHouse);

/**
 * @swagger
 * /api/v1/supporthouse:
 *   get:
 *     summary: List all support houses
 *     description: Retrieve a list of all support house facilities
 *     tags: [Support House]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of support houses retrieved successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get('/', SupportHouseController.findAllSupportHouses);

/**
 * @swagger
 * /api/v1/supporthouse/{id}:
 *   get:
 *     summary: Get support house by ID
 *     description: Retrieve a specific support house by their unique identifier
 *     tags: [Support House]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Support House ID
 *     responses:
 *       200:
 *         description: Support house retrieved successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Support house not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', SupportHouseController.findById);

/**
 * @swagger
 * /api/v1/supporthouse/{id}:
 *   put:
 *     summary: Update support house information
 *     description: Update the details of an existing support house
 *     tags: [Support House]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Support House ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Support house updated successfully
 *       400:
 *         description: Invalid input data
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Support house not found
 *       500:
 *         description: Internal server error
 */
router.put('/:id', validate(updateSupportHouseSchema), SupportHouseController.updateSupportHouse);

/**
 * @swagger
 * /api/v1/supporthouse/{id}:
 *   delete:
 *     summary: Delete a support house
 *     description: Remove a support house from the system
 *     tags: [Support House]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Support House ID
 *     responses:
 *       200:
 *         description: Support house deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Support house not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', SupportHouseController.deleteSupportHouse);

export default router;