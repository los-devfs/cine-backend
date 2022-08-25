import express from 'express';
import userRouter from './routes/userRoutes.js';
import movieRoutes from './routes/movieRoutes.js'

const api = express();
api.use(express.json());

//TODO: registrar middlewares y rutas

api.get("/status", (_, res) => {
  retun;
});


// aca se registran las rutas
api.use(userRouter);
api.use(movieRoutes);

export default api;
