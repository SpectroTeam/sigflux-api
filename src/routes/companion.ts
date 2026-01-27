import { Router } from "express";
import {CompanionController} from "../controllers/companionController";
import {createCompanionSchema} from "../schemas/companionSchema";
import { validate } from '../middleware/validate';
import { authenticate } from '../middleware/auth';
import { requireManager } from '../middleware/authorization';

const router = Router();

router.use(authenticate);
router.use(requireManager);

/**
 * @swagger
 * /api/v1/companions:
 *   post:
 *     summary: Create a new companion
 *     description: Register a new companion for a patient
 *     tags: [Companions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCompanionRequest'
 *     responses:
 *       201:
 *         description: Companion created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CompanionResponse'
 *       400:
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post("/", validate(createCompanionSchema), CompanionController.createCompanion);

/**
 * @swagger
 * /api/v1/companions/patient/{patientId}:
 *   get:
 *     summary: List companions by patient
 *     description: Get all companions associated with a specific patient
 *     tags: [Companions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: patientId
 *         required: true
 *         schema:
 *           type: string
 *         description: Patient ID
 *     responses:
 *       200:
 *         description: List of companions retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CompanionResponse'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Patient not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/patient/:patientId", CompanionController.findAllByPatient);

/**
 * @swagger
 * /api/v1/companions/{id}:
 *   get:
 *     summary: Get companion by ID
 *     description: Retrieve a specific companion by their unique identifier
 *     tags: [Companions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Companion ID
 *     responses:
 *       200:
 *         description: Companion retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CompanionResponse'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Companion not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/:id", CompanionController.findById);

export default router;



