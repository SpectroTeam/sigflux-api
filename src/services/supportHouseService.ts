import prisma from '../lib/prisma';
import { createSupportHouse } from '../types/supportHouse';

export class SupportHouseService {

    static async createSupportHouse(data: createSupportHouse) {
        const supportHouse = await prisma.supportHouse.create({
            data: {
                name: data.name,
                address: data.address,
                phone: data.phone ?? null,
                capacity: data.capacity ?? null,

            }
        })
        return supportHouse;

    };
    static async findAllSupportHouses() {
        return await prisma.supportHouse.findMany({
            include: {
                accommodations: true,
            }
        });
    };

    static async findById(id: string) {
        return await prisma.supportHouse.findUnique({
            where: { id },
            include: {
                accommodations: true,
            }
        })
    }

    static async updateSupportHouse(id: string, data: Partial<createSupportHouse>) {
        return await prisma.supportHouse.update({
            where: { id },
            data
        })
    }

    static async deleteSupportHouse(id: string) {
        return await prisma.supportHouse.delete({
            where: {
                id
            }
        })
    }

    static async getOccupancyByPeriod(supportHouseId: string, startDate: Date, endDate: Date) {
        if (!supportHouseId || !startDate || !endDate) {
            throw new Error("supportHouseId, startDate e endDate são obrigatórios");
        }

        const supportHouse = await prisma.supportHouse.findUnique({
            where: { id: supportHouseId },
        });

        if (!supportHouse) {
            throw new Error("Casa de Apoio não encontrada");
        }

        const routes = await prisma.tripRoute.findMany({
            where: {
                supportHouseId,
                trip: {
                    departureDate: { lte: endDate },
                    OR: [
                        { arrivalDate: null },
                        { arrivalDate: { gte: startDate } }
                    ]
                }
            },
            include: {
                trip: {
                    include: {
                        passengers: {
                            include: {
                                person: true
                            }
                        }
                    }
                }
            }
        });

        // Map daily occupation
        const dailyOccupancy: Record<string, {
            date: string;
            totalPassengers: number;
            availableSpots: number | null;
            patients: any[];
        }> = {};

        for (const route of routes) {
            const tripStart = route.trip.departureDate;
            const tripEnd = route.trip.arrivalDate ?? endDate;

            for (
                let date = new Date(tripStart);
                date <= tripEnd;
                date.setDate(date.getDate() + 1)
            ) {
                const dayKey = date.toISOString().split("T")[0] as string;

                if (!dailyOccupancy[dayKey]) {
                    dailyOccupancy[dayKey] = {
                        date: dayKey,
                        totalPassengers: 0,
                        availableSpots: supportHouse.capacity,
                        patients: []
                    };
                }

                dailyOccupancy[dayKey].totalPassengers +=
                    route.trip.passengers.length;

                dailyOccupancy[dayKey].patients.push(
                    ...route.trip.passengers.map(p => p.person)
                );
            }
        }

        // Calc available slots
        Object.values(dailyOccupancy).forEach(day => {
            if (supportHouse.capacity !== null) {
                day.availableSpots = Math.max(
                    supportHouse.capacity - day.totalPassengers,
                    0
                );
            }
        });

        return {
            supportHouseId,
            supportHouseName: supportHouse.name,
            capacity: supportHouse.capacity,
            period: {
                startDate,
                endDate
            },
            days: Object.values(dailyOccupancy)
        };
    }
}