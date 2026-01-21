import { createDocument } from 'zod-openapi';
import swaggerJsdoc from 'swagger-jsdoc';
import { z } from 'zod';
import { version } from '../../package.json';
import { loginSchema, registerSchema } from '../schemas/authSchema';
import { createPatientSchema, updatePatientSchema } from '../schemas/patientSchema';


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
      AuthResponse: authResponseSchema,
      ErrorResponse: errorResponseSchema,
      PatientResponse: patientResponseSchema,
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

const jsdocSpec = swaggerJsdoc(jsdocOptions);

export function getSwaggerSpec() {
  return {
    ...zodiocDoc,
    paths: jsdocSpec.paths || {},
    components: {
      ...zodiocDoc.components,
      schemas: {
        ...zodiocDoc.components?.schemas,
        ...jsdocSpec.components?.schemas,
      },
      securitySchemes: {
        ...zodiocDoc.components?.securitySchemes,
        ...jsdocSpec.components?.securitySchemes,
      },
    },
  };
}
