import express from "express";
import * as movieController from "../controllers/movieController.js";
import * as reviewController from "../controllers/reviewController.js";
import createMovieValidator from "../middlewares/createMovieValidator.js";
import createReviewValidator from "../middlewares/createReviewValidator.js";

const router = express.Router();

router.route("/movies").get(movieController.getAllMovies);
router.route("/movies").post(createMovieValidator, movieController.createMovie);
router
  .route("/movies/:idMovie/review")
  .post(createReviewValidator, reviewController.createReview);

export default router;
