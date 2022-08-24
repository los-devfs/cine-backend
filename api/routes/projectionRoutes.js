import express from 'express';
import * as projectionController from '../controllers/projectionController.js';

const router = express.Router();

router
  .route('/:id')
  .put(projectionController.updateProjectionById);

export default router;