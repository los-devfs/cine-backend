import express from "express";
import updateReviewValidator from "../middlewares/updateReviewValidator.js";
import * as reviewController from '../controllers/reviewController.js';

const router = express.Router();

router.put('/review/:id', updateReviewValidator, reviewController.updateReviewById);

export default router;