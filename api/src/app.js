import express from 'express';
import { pokemonRouter } from './routes/pokemon.routes.js';
import { authRouter } from './routes/auth.routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';

export function createApp() {
  const app = express();

  app.use(express.json());

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use('/api/auth', authRouter);
  app.use('/api/pokemon', pokemonRouter);

  // 404
    app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
    });
  return app;
}
