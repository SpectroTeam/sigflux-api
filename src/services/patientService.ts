import prisma from '../lib/prisma';
import { CreatePatientInput, UpdatePatientInput } from '../schemas/patientSchema';
import { PatientResponse, PatientWithDetails, PatientDetailsResponse } from '../types/patient';
import { PersonType } from '../types/enums';

export class PatientService {
  static async createPatient(data: CreatePatientInput): Promise<PatientWithDetails> {
    const existingPerson = await prisma.person.findUnique({
      where: { cpf: data.cpf },
    });

    if (existingPerson) {
      throw new Error('Patient with this CPF already exists');
    }

    const patient = await prisma.person.create({
      data: {
        cpf: data.cpf,
        name: data.name,
        birthDate: new Date(data.birthDate),
        ...(data.rg ? { rg: data.rg } : {}),
        ...(data.medicalNotes ? { medicalNotes: data.medicalNotes } : {}),
        type: PersonType.PATIENT,
        ...(data.phones
          ? {
            phones: {
              create: data.phones.map((phone) => ({
                number: phone.number,
              })),
            },
          }
          : {}),
        ...(data.address
          ? {
            address: {
              create: {
                street: data.address.street,
                number: data.address.number ?? null,
                neighborhood: data.address.neighborhood ?? null,
                city: data.address.city,
                state: data.address.state,
                zipCode: data.address.zipCode ?? null,
              },
            },
          }
          : {}),
      },
      include: {
        phones: true,
        address: true,
      },
    });

    return this.formatPatientResponse(patient);
  }

  static async getPatientById(patientId: string): Promise<PatientWithDetails> {
    const patient = await prisma.person.findUnique({
      where: { id: patientId },
      include: {
        phones: true,
        address: true,
      },
    });

    if (!patient || patient.type !== PersonType.PATIENT) {
      throw new Error('Patient not found');
    }

    return this.formatPatientResponse(patient);
  }

  static async getPatientByCpf(cpf: string): Promise<PatientWithDetails> {
    const patient = await prisma.person.findUnique({
      where: { cpf },
      include: {
        phones: true,
        address: true,
      },
    });

    if (!patient || patient.type !== PersonType.PATIENT) {
      throw new Error('Patient not found');
    }

    return this.formatPatientResponse(patient);
  }

  static async searchPatients(
    search: string | undefined,
    skip = 0,
    take = 10
  ): Promise<{ patients: PatientResponse[]; total: number }> {

    let whereClause: any = {
      type: PersonType.PATIENT
    };

    const trimmedSearch = search?.trim();
    const numericSearch = trimmedSearch?.replace(/\D/g, '');

    if (numericSearch && /^\d+$/.test(numericSearch)) {
      whereClause.cpf = {
        startsWith: numericSearch,
      };
    } else if (trimmedSearch) {
      whereClause.name = {
        contains: trimmedSearch,
        mode: 'insensitive',
      };
    }

    const [patients, total] = await Promise.all([
      prisma.person.findMany({
        where: whereClause,
        skip,
        take,
        include: {
          phones: true,
          address: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.person.count({
        where: whereClause,
      }),
    ]);

    return {
      patients: patients.map((p: any) => this.formatPatientResponse(p)),
      total,
    };
  }

  static async updatePatient(patientId: string, data: UpdatePatientInput): Promise<PatientWithDetails> {
    const patient = await prisma.person.findUnique({
      where: { id: patientId },
    });

    if (!patient || patient.type !== PersonType.PATIENT) {
      throw new Error('Patient not found');
    }

    if (data.cpf && data.cpf !== patient.cpf) {
      const existingCpf = await prisma.person.findUnique({
        where: { cpf: data.cpf },
      });
      if (existingCpf) {
        throw new Error('CPF already in use');
      }
    }

    const updatedPatient = await prisma.person.update({
      where: { id: patientId },
      data: {
        ...(data.cpf ? { cpf: data.cpf } : {}),
        ...(data.name ? { name: data.name } : {}),
        ...(data.birthDate ? { birthDate: new Date(data.birthDate) } : {}),
        ...(data.rg ? { rg: data.rg } : {}),
        ...(data.medicalNotes ? { medicalNotes: data.medicalNotes } : {}),
      },
      include: {
        phones: true,
        address: true,
      },
    });

    return this.formatPatientResponse(updatedPatient);
  }

  static async deletePatient(patientId: string): Promise<void> {
    const patient = await prisma.person.findUnique({
      where: { id: patientId },
    });

    if (!patient || patient.type !== PersonType.PATIENT) {
      throw new Error('Patient not found');
    }

    await prisma.person.delete({
      where: { id: patientId },
    });
  }

  static async getPatientDetails(patientId: string): Promise<PatientDetailsResponse> {
    const patient = await prisma.person.findUnique({
      where: { id: patientId },
      include: {
        phones: true,
        address: true,
        documents: true,
        patientGuardianships: {
          include: {
            companion: true,
          },
        },
        tripPassengers: {
          include: {
            trip: {
              include: {
                driver: {
                  include: {
                    person: true,
                  },
                },
                vehicle: true,
              },
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    if (!patient || patient.type !== PersonType.PATIENT) {
      throw new Error('Patient not found');
    }

    return {
      id: patient.id,
      name: patient.name,
      cpf: patient.cpf,
      birthDate: patient.birthDate,
      rg: patient.rg,
      medicalNotes: patient.medicalNotes,
      phones: patient.phones.map((p) => ({ id: p.id, number: p.number })),
      address: patient.address
        ? {
          street: patient.address.street,
          number: patient.address.number,
          neighborhood: patient.address.neighborhood,
          city: patient.address.city,
          state: patient.address.state,
          zipCode: patient.address.zipCode,
        }
        : null,
      documents: patient.documents.map((d) => ({
        id: d.id,
        name: d.name,
        type: d.type,
        path: d.path,
        uploadDate: d.uploadDate,
      })),
      companions: patient.patientGuardianships.map((g) => ({
        id: g.companion.id,
        name: g.companion.name,
        relationship: g.relationship,
      })),
      travelHistory: patient.tripPassengers.map((tp) => ({
        id: tp.trip.id,
        origin: tp.trip.origin,
        destination: tp.trip.destination,
        departureDate: tp.trip.departureDate,
        status: tp.trip.status,
        driverName: tp.trip.driver.person.name,
        vehiclePlate: tp.trip.vehicle.plate,
      })),
    };
  }

  private static formatPatientResponse(patient: any): PatientWithDetails {
    const birthDate = (patient.birthDate as Date).toISOString().split('T')[0] as string;
    const createdAt = (patient.createdAt as Date).toISOString();
    const updatedAt = (patient.updatedAt as Date).toISOString();

    return {
      id: patient.id,
      cpf: patient.cpf,
      name: patient.name,
      birthDate,
      rg: patient.rg ?? undefined,
      medicalNotes: patient.medicalNotes ?? undefined,
      createdAt,
      updatedAt,
      phones:
        patient.phones && patient.phones.length > 0
          ? patient.phones.map((phone: any) => ({
            id: phone.id,
            number: phone.number,
          }))
          : undefined,
      address: patient.address
        ? {
          id: patient.address.id,
          street: patient.address.street,
          number: patient.address.number ?? undefined,
          neighborhood: patient.address.neighborhood ?? undefined,
          city: patient.address.city,
          state: patient.address.state,
          zipCode: patient.address.zipCode ?? undefined,
        }
        : undefined,
    };
  }
}
