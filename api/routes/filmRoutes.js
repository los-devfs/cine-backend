import { Router } from "express";
import * as filmController from "../controllers/filmController.js";
import createFilmValidator from "../middlewares/createFilmValidator.js";

const router = Router();

router
  .route("/")
  .get(filmController.getAllFilms)
  .post(createFilmValidator, filmController.createFilm);

router
  .route("/:id")
  .get(filmController.getFilmById)
  .put(filmController.updateFilmById)
  .delete(filmController.deleteFilmById);

export default router;
