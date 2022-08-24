import express from 'express';
import { projectionControllerById } from '../controllers/projectionController.js'


const router = express.Router();

router
    .post('/delete/:id', projectionControllerById)

export default router;