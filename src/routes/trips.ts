import { Router } from 'express';
import { TripController } from '../controllers/tripController';
import { TripHistoryController } from '../controllers/tripHistoryController';
import { TripBoardingController } from '../controllers/tripBoardingController';
import { authenticate } from '../middleware/auth';

const router = Router();

router.use(authenticate);

/**
 * @swagger
 * /api/v1/trips:
 *   post:
 *     summary: Create a new trip
 *     description: Schedule a new trip
 *     tags: [Trips]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTripRequest'
 *     responses:
 *       201:
 *         description: Trip created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TripResponse'
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Internal server error
 */
router.post('/', TripController.createTrip);

/**
 * @swagger
 * /api/v1/trips:
 *   get:
 *     summary: List all trips
 *     description: Retrieve a paginated list of all trips
 *     tags: [Trips]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of records per page
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [SCHEDULED, IN_PROGRESS, COMPLETED, CANCELLED]
 *         description: Filter by trip status
 *       - in: query
 *         name: driverId
 *         schema:
 *           type: string
 *         description: Filter by driver ID
 *       - in: query
 *         name: vehicleId
 *         schema:
 *           type: string
 *         description: Filter by vehicle ID
 *     responses:
 *       200:
 *         description: List of trips retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/TripResponse'
 *                 meta:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     pages:
 *                       type: integer
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get('/', TripController.listTrips);

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
 *               type: array
 *       400:
 *         description: Invalid person ID
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get('/history/patient/:personId', TripHistoryController.getPatientHistory);

/**
 * @swagger
 * /api/v1/trips/{id}:
 *   get:
 *     summary: Get trip by ID
 *     description: Retrieve a specific trip by its unique identifier
 *     tags: [Trips]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Trip ID
 *     responses:
 *       200:
 *         description: Trip retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TripResponse'
 *       404:
 *         description: Trip not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', TripController.getTripById);

/**
 * @swagger
 * /api/v1/trips/{id}:
 *   put:
 *     summary: Update trip information
 *     description: Update the details of an existing trip
 *     tags: [Trips]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Trip ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateTripRequest'
 *     responses:
 *       200:
 *         description: Trip updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TripResponse'
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Trip not found
 *       500:
 *         description: Internal server error
 */
router.put('/:id', TripController.updateTrip);

/**
 * @swagger
 * /api/v1/trips/{id}/status:
 *   patch:
 *     summary: Update trip status
 *     description: Update only the status of a trip
 *     tags: [Trips]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Trip ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateTripStatusRequest'
 *     responses:
 *       200:
 *         description: Trip status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TripResponse'
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Trip not found
 *       500:
 *         description: Internal server error
 */
router.patch('/:id/status', TripController.updateTripStatus);

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
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Trip not found
 *       500:
 *         description: Internal server error
 */
router.patch('/:tripId/depart', TripBoardingController.depart);

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
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Trip not found
 *       500:
 *         description: Internal server error
 */
router.patch('/:tripId/arrive', TripBoardingController.arrive);

/**
 * @swagger
 * /api/v1/trips/{id}:
 *   delete:
 *     summary: Delete a trip
 *     description: Remove a trip from the system
 *     tags: [Trips]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Trip ID
 *     responses:
 *       204:
 *         description: Trip deleted successfully
 *       404:
 *         description: Trip not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', TripController.deleteTrip);

export default router;
