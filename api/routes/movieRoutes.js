import express from 'express';
import * as movieController from '../controllers/movieController.js';
import createMovieValidator from '../middlewares/createMovieValidator.js';

const router = express.Router();

router.route('/movies').get(movieController.getAllMovies);
router.route('/movies').post(createMovieValidator, movieController.createMovie);

export default router;
