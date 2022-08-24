import express from 'express';
import { getAllMovies } from './controllers/movieController.js';

const api = express();

//TODO: registrar middlewares y rutas

api.get('/status', (_, res) => {
  retun;
});

api.get('/peliculas', getAllMovies);

export default api;
