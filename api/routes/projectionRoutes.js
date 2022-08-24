import express from 'express';
import * as projectionController from '../controllers/projectionController.js';

const router = express.Router();

router
    .route('/projections')
    .get(projectionController.getAllProjections)
    .post(projectionController.createProjection);

router
    .route('/projections/:id')
    .get(projectionController.getProjectionById)
    .put(projectionController.updateProjectionById)
    .delete(projectionController.deleteProjectionById);

export default router;