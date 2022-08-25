import { Router } from "express";
import * as movieController from "../controllers/movieController.js";
import createMovieValidator from "../middlewares/createMovieValidator.js";

const router = Router();

router.route("/movies").post(createMovieValidator, movieController.createMovie);
router.route("/movies/:titleMovie").post(movieController.movieWithReview)

export default router;
