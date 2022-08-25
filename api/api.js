import express from 'express';
import movieRoutes from './routes/movieRoutes.js';
import authRoutes from './routes/authRoutes.js';

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

export default api;
