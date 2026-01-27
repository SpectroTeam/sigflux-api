import { Router } from "express";
import { TripHistoryController } from "../controllers/tripHistoryController";
import { authenticate } from "../middleware/auth";
import { TripBoardingController } from "../controllers/tripBoardingController";

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

/**
 * @swagger
 * /api/v1/trips/{tripId}/depart:
 *   patch:
 *     summary: Confirm trip departure (boarding)
 *     description: |
 *       Confirms the departure of a trip.
 *       This action updates the trip status to IN_PROGRESS
 *       and registers the departure date/time.
 *     tags: [Trips]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tripId
 *         required: true
 *         schema:
 *           type: string
 *         description: Trip ID
 *     responses:
 *       200:
 *         description: Trip departure confirmed successfully
 *         content:
 *           application/json:
 *             example:
 *               id: "trip-uuid"
 *               status: "IN_PROGRESS"
 *               departureDate: "2026-01-27T10:30:00.000Z"
 *       400:
 *         description: Invalid request or trip already departed
 *         content:
 *           application/json:
 *             examples:
 *               invalidId:
 *                 summary: Invalid trip ID
 *                 value:
 *                   error: Invalid trip ID
 *               alreadyDeparted:
 *                 summary: Trip already in progress or finished
 *                 value:
 *                   error: Trip has already departed
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               error: Unauthorized
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             example:
 *               error: Forbidden
 *       404:
 *         description: Trip not found
 *         content:
 *           application/json:
 *             example:
 *               error: Trip not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Internal server error
 */
router.patch("/:tripId/depart", TripBoardingController.depart);

/**
 * @swagger
 * /api/v1/trips/{tripId}/arrive:
 *   patch:
 *     summary: Confirm trip arrival (disembark)
 *     description: |
 *       Confirms the arrival of a trip.
 *       This action updates the trip status to FINISHED
 *       and registers the arrival date/time.
 *     tags: [Trips]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tripId
 *         required: true
 *         schema:
 *           type: string
 *         description: Trip ID
 *     responses:
 *       200:
 *         description: Trip arrival confirmed successfully
 *         content:
 *           application/json:
 *             example:
 *               id: "trip-uuid"
 *               status: "FINISHED"
 *               arrivalDate: "2026-01-27T14:45:00.000Z"
 *       400:
 *         description: Invalid request or trip not in progress
 *         content:
 *           application/json:
 *             examples:
 *               invalidId:
 *                 summary: Invalid trip ID
 *                 value:
 *                   error: Invalid trip ID
 *               notInProgress:
 *                 summary: Trip has not departed yet
 *                 value:
 *                   error: Trip is not in progress
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               error: Unauthorized
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             example:
 *               error: Forbidden
 *       404:
 *         description: Trip not found
 *         content:
 *           application/json:
 *             example:
 *               error: Trip not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Internal server error
 */
router.patch("/:tripId/arrive", TripBoardingController.arrive);

export default router;
