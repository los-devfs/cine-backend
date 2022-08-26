import express from 'express';
import projectionRoutes from './routes/projectionRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import roomRoutes from './routes/roomRoutes.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js'

const api = express();
api.use(express.json());

//TODO: registrar middlewares y rutas

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});
api.use(authRoutes);
api.use(movieRoutes);
api.use(userRoutes);
api.use(roomRoutes);
api.use(projectionRoutes);

export default api;
