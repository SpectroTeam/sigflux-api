import express, { Express } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { config } from './config';
import { errorHandler } from './middleware/errorHandler';
import routes from './routes';
import { getSwaggerSpec } from './config/swagger';
import prisma from './lib/prisma';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerSpec = getSwaggerSpec();
app.use(`/api/${config.apiVersion}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(`/api/${config.apiVersion}`, routes);

app.use(errorHandler);

async function startServer(): Promise<void> {
  await dbHealthCheck();
  app.listen(config.port, () => {
    console.log(`Server running at http://localhost:${config.port}`);
    console.log(`Environment: ${config.nodeEnv}`);
  });
};

startServer();

// verifica conexão com o banco de dados
async function dbHealthCheck() {
  try {
    const result = (await prisma.$queryRaw`
      SELECT version() as version, 
             current_database() as database,
             current_user as user
    `) as string[];

    console.log("✅ Database Info:", result);
    return {
      status: "healthy",
      timestamp: new Date().toISOString(),
      database: result[0],
    };
  } catch (error: unknown) {
    let errMessage = "Unknown error";
    if (error instanceof Error) {
      errMessage = error.message;
    }
    console.error("❌ Database health check failed:", errMessage);
    process.exit(1);
  }
}

export default app;
