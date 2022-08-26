import express from 'express';
import * as projectionController from '../controllers/projectionController.js';
import updateProjectionValidator from '../middlewares/updateProjectionValidator.js';

const router = express.Router();

router
  .route('/projections/:id')
  .put(updateProjectionValidator, projectionController.updateProjectionById)
  .delete(projectionController.deleteProjectionById);

export default router;
