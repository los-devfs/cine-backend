import { Router } from "express";
import * as movieController from "../controllers/movieController.js";
import createMovieValidator from "../middlewares/createMovieValidator.js";

const router = Router();

router.route("/").post(createMovieValidator, movieController.createMovie);

export default router;
