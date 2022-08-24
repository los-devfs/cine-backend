import express from 'express';
import movieRoutes from './routes/movieRoutes.js'

const api = express();

//TODO: registrar middlewares y rutas

api.get('/status', (_, res) => {
  retun;
});

api.use(movieRoutes);

export default api;
