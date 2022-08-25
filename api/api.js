import express from 'express';
import movieRoutes from './routes/movieRoutes.js';
import roomRoutes from './routes/roomRoutes.js';

const api = express();
api.use(express.json());

//TODO: registrar middlewares y rutas

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});
api.use(movieRoutes);
api.use(roomRoutes);

export default api;
