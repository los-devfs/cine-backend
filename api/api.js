import express from 'express';
import projectionRoutes from './routes/projectionRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import roomRoutes from './routes/roomRoutes.js';
import userRoutes from './routes/userRoutes.js';

const api = express();

//TODO: registrar middlewares y rutas
api.use(express.json());

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use(userRoutes);
api.use(movieRoutes);
api.use(roomRoutes);

//registrar ruta de projection:
api.use('/projections', projectionRoutes);

export default api;