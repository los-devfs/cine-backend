import express from 'express';
import userRouter from './routes/userRoutes.js'

const api = express();

//TODO: registrar middlewares y rutas

api.get('/status', (_, res) => {
  retun;
});

// aca se registran las rutas
api.use(userRouter);

export default api;
