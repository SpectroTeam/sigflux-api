import { createDocument } from 'zod-openapi';
import swaggerJsdoc from 'swagger-jsdoc';
import { z } from 'zod';
import { version } from '../../package.json';
import { loginSchema, registerSchema } from '../schemas/authSchema';
import { createPatientSchema, updatePatientSchema } from '../schemas/patientSchema';
import { createVehicleSchema, updateVehicleSchema, vehicleResponseSchema } from '../schemas/vehicleSchema';
import { createTripSchema, updateTripSchema, updateTripStatusSchema, tripResponseSchema } from '../schemas/tripSchema';


const authResponseSchema = z
  .object({
    token: z.string().meta({ description: 'JWT authentication token' }),
    employee: z.object({
      id: z.string().meta({ description: 'Employee ID' }),
      email: z.string().meta({ description: 'Employee email' }),
      registrationNumber: z.string().meta({ description: 'Registration number' }),
      type: z.string().meta({ description: 'Employee type' }),
    }).meta({ description: 'Employee data' }),
  })
  .meta({
    id: 'AuthResponse',
    description: 'Authentication response with token and employee data',
  });

const errorResponseSchema = z
  .object({
    error: z.string().meta({ description: 'Error message' }),
  })
  .meta({
    id: 'ErrorResponse',
    description: 'Error response payload',
  });

const patientResponseSchema = z
  .object({
    id: z.string().meta({ description: 'Patient ID' }),
    cpf: z.string().meta({ description: 'Patient CPF' }),
    name: z.string().meta({ description: 'Patient name' }),
    birthDate: z.string().meta({ description: 'Birth date' }),
    rg: z.string().optional().meta({ description: 'RG number' }),
    medicalNotes: z.string().optional().meta({ description: 'Medical notes' }),
    createdAt: z.string().meta({ description: 'Creation date' }),
    updatedAt: z.string().meta({ description: 'Last update date' }),
  })
  .meta({
    id: 'PatientResponse',
    description: 'Patient response data',
  });

const patientDetailsResponseSchema = z.object({
  id: z.string().meta({ description: 'Patient ID' }),
  name: z.string().meta({ description: 'Patient name' }),
  cpf: z.string().meta({ description: 'Patient CPF' }),
  birthDate: z.string().or(z.date()).meta({ description: 'Birth date' }),
  rg: z.string().nullable().optional().meta({ description: 'RG number' }),
  medicalNotes: z.string().nullable().optional().meta({ description: 'Medical notes' }),
  phones: z.array(z.object({
    id: z.string(),
    number: z.string()
  })).meta({ description: 'Contact phones' }),
  address: z.object({
    street: z.string(),
    number: z.string().nullable().optional(),
    neighborhood: z.string().nullable().optional(),
    city: z.string(),
    state: z.string(),
    zipCode: z.string().nullable().optional()
  }).nullable().optional().meta({ description: 'Address' }),
  documents: z.array(z.object({
    id: z.string(),
    name: z.string(),
    type: z.string(),
    path: z.string(),
    uploadDate: z.string().or(z.date())
  })).meta({ description: 'Attached documents' }),
  companions: z.array(z.object({
    id: z.string(),
    name: z.string(),
    relationship: z.string()
  })).meta({ description: 'Linked companions' }),
  travelHistory: z.array(z.object({
    id: z.string(),
    origin: z.string(),
    destination: z.string(),
    departureDate: z.string().or(z.date()),
    status: z.string(),
    driverName: z.string().optional(),
    vehiclePlate: z.string().optional()
  })).meta({ description: 'Travel history' })
}).meta({
  id: 'PatientDetailsResponse',
  description: 'Detailed patient information including related data'
});

const zodiocDoc = createDocument({
  openapi: '3.1.0',
  info: {
    title: 'SigFlux API',
    version,
    description: 'Backend API for SigFlux - Fleet Management System',
    contact: {
      name: 'SigFlux Team',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
  components: {
    schemas: {
      LoginRequest: loginSchema,
      RegisterRequest: registerSchema,
      CreatePatientRequest: createPatientSchema,
      UpdatePatientRequest: updatePatientSchema,
      CreateVehicleRequest: createVehicleSchema,
      UpdateVehicleRequest: updateVehicleSchema,
      VehicleResponse: vehicleResponseSchema,
      AuthResponse: authResponseSchema,
      ErrorResponse: errorResponseSchema,
      PatientResponse: patientResponseSchema,
      PatientDetailsResponse: patientDetailsResponseSchema,
      CreateTripRequest: createTripSchema,
      UpdateTripRequest: updateTripSchema,
      TripResponse: tripResponseSchema,
      UpdateTripStatusRequest: updateTripStatusSchema,
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  paths: {},
});

const jsdocOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'SigFlux API',
      version,
    },
  },
  apis: ['./src/routes/*.ts'],
};

const jsdocSpec = swaggerJsdoc(jsdocOptions) as any;

export function getSwaggerSpec() {
  const doc = zodiocDoc as any;
  return {
    ...doc,
    paths: jsdocSpec.paths || {},
    components: {
      ...doc.components,
      schemas: {
        ...doc.components?.schemas,
        ...jsdocSpec.components?.schemas,
      },
      securitySchemes: {
        ...doc.components?.securitySchemes,
        ...jsdocSpec.components?.securitySchemes,
      },
    },
  };
}
