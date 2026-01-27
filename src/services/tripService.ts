import prisma from '../lib/prisma';
import { CreateTripInput, UpdateTripInput, UpdateTripStatusInput, TripResponse } from '../schemas/tripSchema';
import { TripStatus, VehicleStatus, EmployeeType } from '../types/enums';

export class TripService {
    static async createTrip(data: CreateTripInput): Promise<TripResponse> {

        const vehicle = await prisma.vehicle.findUnique({
            where: { id: data.vehicleId },
        });

        if (!vehicle) {
            throw new Error('Vehicle not found');
        }

        if (vehicle.status !== VehicleStatus.ACTIVE) {
            throw new Error('Vehicle is not active');
        }

        const driver = await prisma.employee.findUnique({
            where: { id: data.driverId },
            include: { person: true },
        });

        if (!driver) {
            throw new Error('Driver not found');
        }

        if (driver.type !== EmployeeType.DRIVER && driver.type !== EmployeeType.ADMIN) {
            throw new Error('Employee is not a qualified driver');
        }

        if (data.passengerIds.length > vehicle.maxCapacity) {
            throw new Error(`Vehicle capacity exceeded. Max: ${vehicle.maxCapacity}, Passengers: ${data.passengerIds.length}`);
        }

        const passengersCount = await prisma.person.count({
            where: {
                id: { in: data.passengerIds },
            },
        });

        if (passengersCount !== data.passengerIds.length) {
            throw new Error('One or more passengers not found');
        }

        const trip = await prisma.trip.create({
            data: {
                vehicleId: data.vehicleId,
                driverId: data.driverId,
                origin: data.origin,
                destination: data.destination,
                departureDate: data.departureDate ? new Date(data.departureDate) : null,
                arrivalDate: data.arrivalDate ? new Date(data.arrivalDate) : null,
                status: TripStatus.SCHEDULED,
                type: data.type,

                passengers: {
                    create: data.passengerIds.map((pid) => ({
                        personId: pid,
                    })),
                },

                ...(data.routeSupportHouseIds
                    ? {
                        routes: {
                            create: data.routeSupportHouseIds.map((hid, index) => ({
                                supportHouseId: hid,
                                sequence: index + 1,
                            })),
                        },
                    }
                    : {}),
            },
            include: {
                vehicle: true,
                driver: {
                    include: { person: true },
                },
                passengers: {
                    include: { person: true },
                },
            },
        });

        return this.formatTripResponse(trip);
    }

    static async getTripById(id: string): Promise<TripResponse> {
        const trip = await prisma.trip.findUnique({
            where: { id },
            include: {
                vehicle: true,
                driver: {
                    include: { person: true },
                },
                passengers: {
                    include: { person: true },
                },
            },
        });

        if (!trip) {
            throw new Error('Trip not found');
        }

        return this.formatTripResponse(trip);
    }

    static async listTrips(
        skip = 0,
        take = 10,
        status?: TripStatus,
        driverId?: string,
        vehicleId?: string
    ): Promise<{ trips: TripResponse[]; total: number }> {
        const where: any = {};

        if (status) where.status = status;
        if (driverId) where.driverId = driverId;
        if (vehicleId) where.vehicleId = vehicleId;

        const [trips, total] = await Promise.all([
            prisma.trip.findMany({
                where,
                skip,
                take,
                include: {
                    vehicle: true,
                    driver: {
                        include: { person: true },
                    },
                    passengers: {
                        include: { person: true },
                    },
                },
                orderBy: { departureDate: 'desc' },
            }),
            prisma.trip.count({ where }),
        ]);

        return {
            trips: trips.map((t) => this.formatTripResponse(t)),
            total,
        };
    }

    static async updateTrip(id: string, data: UpdateTripInput): Promise<TripResponse> {
        const trip = await prisma.trip.findUnique({ where: { id } });

        if (!trip) {
            throw new Error('Trip not found');
        }

        if (data.vehicleId) {
            const vehicle = await prisma.vehicle.findUnique({ where: { id: data.vehicleId } });
            if (!vehicle || vehicle.status !== VehicleStatus.ACTIVE) throw new Error('Invalid Vehicle');
        }

        const updatedTrip = await prisma.trip.update({
            where: { id },
            data: {
                ...(data.vehicleId ? { vehicleId: data.vehicleId } : {}),
                ...(data.driverId ? { driverId: data.driverId } : {}),
                ...(data.origin ? { origin: data.origin } : {}),
                ...(data.destination ? { destination: data.destination } : {}),
                ...(data.departureDate ? { departureDate: new Date(data.departureDate) } : {}),
                ...(data.arrivalDate ? { arrivalDate: new Date(data.arrivalDate) } : {}),
                ...(data.status ? { status: data.status as TripStatus } : {}),

                ...(data.passengerIds ? {
                    passengers: {
                        deleteMany: {},
                        create: data.passengerIds.map(pid => ({ personId: pid }))
                    }
                } : {}),

                ...(data.routeSupportHouseIds ? {
                    routes: {
                        deleteMany: {},
                        create: data.routeSupportHouseIds.map((hid, index) => ({
                            supportHouseId: hid,
                            sequence: index + 1
                        }))
                    }
                } : {}),
            },
            include: {
                vehicle: true,
                driver: {
                    include: { person: true },
                },
                passengers: {
                    include: { person: true },
                },
            },
        });

        return this.formatTripResponse(updatedTrip);
    }

    static async updateTripStatus(id: string, status: TripStatus): Promise<TripResponse> {
        const trip = await prisma.trip.findUnique({ where: { id } });
        if (!trip) throw new Error('Trip not found');

        const updatedTrip = await prisma.trip.update({
            where: { id },
            data: { status },
            include: {
                vehicle: true,
                driver: { include: { person: true } },
                passengers: { include: { person: true } },
            },
        });

        return this.formatTripResponse(updatedTrip);
    }

    static async deleteTrip(id: string): Promise<void> {
        const trip = await prisma.trip.findUnique({ where: { id } });
        if (!trip) throw new Error('Trip not found');

        await prisma.trip.delete({ where: { id } });
    }

    private static formatTripResponse(trip: any): TripResponse {
        return {
            id: trip.id,
            vehicleId: trip.vehicleId,
            driverId: trip.driverId,
            origin: trip.origin,
            destination: trip.destination,
            departureDate: trip.departureDate.toISOString(),
            arrivalDate: trip.arrivalDate ? trip.arrivalDate.toISOString() : undefined,
            status: trip.status,
            type: trip.type,
            vehicle: trip.vehicle ? {
                plate: trip.vehicle.plate,
                model: trip.vehicle.model
            } : undefined,
            driver: trip.driver && trip.driver.person ? {
                name: trip.driver.person.name
            } : undefined,
            passengers: trip.passengers ? trip.passengers.map((p: any) => ({
                id: p.person.id,
                name: p.person.name
            })) : [],
            createdAt: trip.createdAt.toISOString(),
            updatedAt: trip.updatedAt.toISOString(),
        };
    }
}
