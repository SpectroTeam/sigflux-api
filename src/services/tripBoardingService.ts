import prisma from "../lib/prisma";

export class TripBoardingService {
    static async confirmDeparture(tripId: string) {
        return prisma.trip.update({
            where: { id: tripId },
            data: {
                status: "IN_PROGRESS",
                departureDate: new Date(),
            },
        });
    }

    static async confirmArrival(tripId: string) {
        return prisma.trip.update({
            where: { id: tripId },
            data: {
                status: "COMPLETED",
                arrivalDate: new Date(),
            },
        });
    }
}
