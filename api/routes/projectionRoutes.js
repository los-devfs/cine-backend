import express from 'express';
import { projectionControllerById } from '../controllers/projectionController.js'
import deleteProjectionValidator from '../middlewares/deleteProjectionValidator.js';

const router = express.Router();

router
    .post('/delete', deleteProjectionValidator, projectionControllerById)

export default router;