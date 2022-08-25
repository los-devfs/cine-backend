import express from 'express';
import projectionRoutes from './routes/projectionRoutes.js';

const api = express();

//TODO: registrar middlewares y rutas
api.use(express.json());

api.get('/status', (_, res) => {
  return res.json({
    msg: 'server on',
  });
});

//registrar ruta de projection:
api.use('/projections', projectionRoutes);

export default api;
