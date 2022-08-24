import express from 'express';
import * as userController from '../controllers/userController.js';
import updateUserValidator from '../middlewares/updateUserValidator.js';


const router = express.Router();

    
router
    .route('/user/:id')
    .put(updateUserValidator, userController.updateUserById);

export default router;