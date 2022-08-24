import express from "express";
import * as movieController from '../controllers/movieController.js';

const router = express.Router();

router
    .route('/peliculas')
    .get(movieController.getAllMovies);

export default router;