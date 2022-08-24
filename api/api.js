import express from 'express';
import projectionRoutes from './routes/projectionRoutes.js'

const api = express();

//TODO: registrar middlewares y rutas
api.use(express.json());

api.get('/status', (_, res) => {
  retun;
});

api.use(projectionRoutes)

export default api;
