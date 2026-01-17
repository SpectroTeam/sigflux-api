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

    static async findById(id: string){
        return  await prisma.supportHouse.findUnique({
            where:{id},
            include:{
                accommodations: true,
            }
        })
    }

    static async updateSupportHouse(id: string, data: Partial<createSupportHouse>){
        return await prisma.supportHouse.update({
            where:{id},
            data
        })
    }

    static async deleteSupportHouse(id: string){
        return await prisma.supportHouse.delete({
            where:{
                id
            }
        })
    }
}