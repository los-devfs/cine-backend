import express from 'express';
import projectionRoutes from './routes/projectionRoutes.js';
import movieRoutes from './routes/movieRoutes.js';

const api = express();
api.use(express.json());

//TODO: registrar middlewares y rutas
api.use(express.json());

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});
api.use(movieRoutes);

//registrar ruta de projection:
api.use('/projections', projectionRoutes);

export default api;
