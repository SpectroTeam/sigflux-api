import { Router } from "express";
import { TripHistoryController } from "../controllers/tripHistoryController";
import { authenticate } from "../middleware/auth";

const router = Router();

router.use(authenticate);

/**
 * @swagger
 * /api/v1/trips/history/patient/{personId}:
 *   get:
 *     summary: Get patient trip history
 *     description: Retrieve the trip history of a specific patient
 *     tags: [Trip History]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: personId
 *         required: true
 *         schema:
 *           type: string
 *         description: Patient ID
 *     responses:
 *       200:
 *         description: Trip history retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 history:
 *                   type: array
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get("history/patient/:personId", TripHistoryController.getPatientHistory);

export default router;
