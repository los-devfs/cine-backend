import express from 'express';
import * as genreController from '../controllers/genreController.js';
import createGenreValidator from '../middlewares/createGenreValidator.js';
import updateGenreValidator from '../middlewares/updateGenreValidator.js';

const router = express.Router();

<<<<<<< HEAD
router.route('/genres').post(createGenreValidator, genreController.createGenre);
router.route('/genres/:id').delete(genreController.deleteGenreById);
=======
router.route('/genres')
  .post(createGenreValidator, genreController.createGenre);
>>>>>>> c2a847a91712f8ee01adcc00b96e9cf88c2d5251

router.route('/genres/:id')
  .put(updateGenreValidator, genreController.updateGenreById);

export default router;
