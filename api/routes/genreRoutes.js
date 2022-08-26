import express from 'express';
import * as genreController from '../controllers/genreController.js';
import createGenreValidator from '../middlewares/createGenreValidator.js';

const router = express.Router();

router.route('/genres').post(createGenreValidator, genreController.createGenre);
router.route('/genres/:id').delete(genreController.deleteGenreById);


export default router;
