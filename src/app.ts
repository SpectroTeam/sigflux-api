import express, { Express } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { config } from './config';
import { errorHandler } from './middleware/errorHandler';
import routes from './routes';
import { getSwaggerSpec } from './config/swagger';

const app: Express = express();
const swaggerSpec = getSwaggerSpec();

// config middlawares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// api routes
app.use(`/api/${config.apiVersion}`, routes);
// swagger docs
app.use(`/api/${config.apiVersion}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// error handler
app.use(errorHandler);

export default app;
