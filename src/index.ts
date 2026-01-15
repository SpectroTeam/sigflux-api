import express, { Express } from 'express';
import cors from 'cors';
import { config } from './config.js';
import { errorHandler } from './middleware/errorHandler.js';
import healthRoutes from './routes/health.js';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', healthRoutes);

app.use(errorHandler);

const startServer = (): void => {
  app.listen(config.port, () => {
    console.log(`Server running at http://localhost:${config.port}`);
    console.log(`Environment: ${config.nodeEnv}`);
  });
};

startServer();

export default app;
