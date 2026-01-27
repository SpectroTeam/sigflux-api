import prisma from '../lib/prisma';
import { CreateVehicleInput, UpdateVehicleInput } from '../schemas/vehicleSchema';
import { VehicleWithDetails } from '../types/vehicle';
import { VehicleStatus } from '../types/enums';

export class VehicleService {
    static async createVehicle(data: CreateVehicleInput): Promise<VehicleWithDetails> {
        const existingPlate = await prisma.vehicle.findUnique({
            where: { plate: data.plate },
        });

        if (existingPlate) {
            throw new Error('Vehicle with this plate already exists');
        }

        const existingChassis = await prisma.vehicle.findUnique({
            where: { chassis: data.chassis },
        });

        if (existingChassis) {
            throw new Error('Vehicle with this chassis already exists');
        }

        const vehicle = await prisma.vehicle.create({
            data: {
                plate: data.plate,
                chassis: data.chassis,
                model: data.model,
                year: data.year,
                color: data.color,
                maxCapacity: data.maxCapacity,
                status: data.status || VehicleStatus.ACTIVE,
            },
            include: {
                documents: true,
            },
        });

        return this.formatVehicleResponse(vehicle);
    }

    static async getVehicleById(vehicleId: string): Promise<VehicleWithDetails> {
        const vehicle = await prisma.vehicle.findUnique({
            where: { id: vehicleId },
            include: {
                documents: true,
            },
        });

        if (!vehicle) {
            throw new Error('Vehicle not found');
        }

        return this.formatVehicleResponse(vehicle);
    }

    static async getVehicleByPlate(plate: string): Promise<VehicleWithDetails> {
        const vehicle = await prisma.vehicle.findUnique({
            where: { plate },
            include: {
                documents: true,
            },
        });

        if (!vehicle) {
            throw new Error('Vehicle not found');
        }

        return this.formatVehicleResponse(vehicle);
    }

    static async searchVehicles(
        search: string | undefined,
        skip = 0,
        take = 10
    ): Promise<{ vehicles: VehicleWithDetails[]; total: number }> {
        let whereClause: any = {};

        const trimmedSearch = search?.trim();

        if (trimmedSearch) {
            whereClause.OR = [
                { plate: { contains: trimmedSearch, mode: 'insensitive' } },
                { model: { contains: trimmedSearch, mode: 'insensitive' } },
                { chassis: { contains: trimmedSearch, mode: 'insensitive' } },
            ];
        }

        const [vehicles, total] = await Promise.all([
            prisma.vehicle.findMany({
                where: whereClause,
                skip,
                take,
                include: {
                    documents: true,
                },
                orderBy: {
                    createdAt: 'desc',
                },
            }),
            prisma.vehicle.count({
                where: whereClause,
            }),
        ]);

        return {
            vehicles: vehicles.map((v: any) => this.formatVehicleResponse(v)),
            total,
        };
    }

    static async updateVehicle(vehicleId: string, data: UpdateVehicleInput): Promise<VehicleWithDetails> {
        const vehicle = await prisma.vehicle.findUnique({
            where: { id: vehicleId },
        });

        if (!vehicle) {
            throw new Error('Vehicle not found');
        }

        if (data.plate && data.plate !== vehicle.plate) {
            const existingPlate = await prisma.vehicle.findUnique({
                where: { plate: data.plate },
            });
            if (existingPlate) {
                throw new Error('Plate already in use');
            }
        }

        if (data.chassis && data.chassis !== vehicle.chassis) {
            const existingChassis = await prisma.vehicle.findUnique({
                where: { chassis: data.chassis },
            });
            if (existingChassis) {
                throw new Error('Chassis already in use');
            }
        }

        const updateData: any = {};
        if (data.plate) updateData.plate = data.plate;
        if (data.chassis) updateData.chassis = data.chassis;
        if (data.model) updateData.model = data.model;
        if (data.year) updateData.year = data.year;
        if (data.color) updateData.color = data.color;
        if (data.maxCapacity) updateData.maxCapacity = data.maxCapacity;
        if (data.status) updateData.status = data.status;

        const updatedVehicle = await prisma.vehicle.update({
            where: { id: vehicleId },
            data: updateData,
            include: {
                documents: true,
            },
        });

        return this.formatVehicleResponse(updatedVehicle);
    }

    static async deleteVehicle(vehicleId: string): Promise<void> {
        const vehicle = await prisma.vehicle.findUnique({
            where: { id: vehicleId },
        });

        if (!vehicle) {
            throw new Error('Vehicle not found');
        }

        try {
            await prisma.vehicle.delete({
                where: { id: vehicleId },
            });
        } catch (error: any) {
            if (error.code === 'P2003') {
                throw new Error('Cannot delete vehicle involved in specific trips. Archive it instead or remove trips first.');
            }
            throw error;
        }
    }

    private static formatVehicleResponse(vehicle: any): VehicleWithDetails {
        const createdAt = (vehicle.createdAt as Date).toISOString();
        const updatedAt = (vehicle.updatedAt as Date).toISOString();

        return {
            id: vehicle.id,
            plate: vehicle.plate,
            chassis: vehicle.chassis,
            model: vehicle.model,
            year: vehicle.year,
            color: vehicle.color,
            maxCapacity: vehicle.maxCapacity,
            status: vehicle.status as VehicleStatus,
            createdAt,
            updatedAt,
            documents: vehicle.documents || [],
        };
    }
}
