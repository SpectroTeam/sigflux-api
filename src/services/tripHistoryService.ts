import prisma from "../lib/prisma";

export class TripHistoryService {
    static async getPatientTripHistory(personId: string) {
        if (!personId) {
            throw new Error("Person ID is required");
        }

        const trips = await prisma.tripPassenger.findMany({
            where: { personId },
            include: {
                trip: {
                    include: {
                        vehicle: true,
                        driver: true,
                        routes: {
                            include: {
                                supportHouse: true,
                            },
                            orderBy: {
                                sequence: "asc"
                            },
                        },
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return trips.map((tripPassenger) =>
            this.formatTripHistoryResponse(tripPassenger)
        )
    }

    private static formatTripHistoryResponse(tripPassenger: any) {
        const { trip } = tripPassenger;

        return {
            id: tripPassenger.id,
            personId: tripPassenger.personId,
            createdAt: tripPassenger.createdAt.toISOString(),

            trip: trip
                ? {
                    id: trip.id,
                    date: trip.departureDate.toISOString(),
                    status: trip.status,
                    createdAt: trip.createdAt.toISOString(),
                    updatedAt: trip.updatedAt.toISOString(),

                    vehicle: trip.vehicle,
                    driver: trip.driver,
                    routes: trip.routes ?? [],
                }
                : null,
        };
    }
}
