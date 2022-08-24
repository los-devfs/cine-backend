import express from 'express';
import projectionRoutes from './routes/projectionRoutes.js';

const api = express();

//TODO: registrar middlewares y rutas

api.get('/status', (_, res) => {
  retun;
});

//registrar ruta de projection:
api.use('/projections', projectionRoutes);

export default api;
