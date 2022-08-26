import express from 'express';
import projectionRoutes from './routes/projectionRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import authRoutes from './routes/authRoutes.js';
import roomRoutes from './routes/roomRoutes.js';
import userRoutes from './routes/userRoutes.js';
import genreRoutes from './routes/genreRoutes.js';

const api = express();
api.use(express.json());

//TODO: registrar middlewares y rutas

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use(movieRoutes);
api.use(authRoutes);
api.use(userRoutes);
api.use(roomRoutes);
api.use(projectionRoutes);
api.use(genreRoutes);

export default api;
