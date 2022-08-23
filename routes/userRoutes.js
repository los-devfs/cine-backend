import express from 'express';
import * as userController from '../controllers/userController.js';
import createUserValidator from '../middlewares/createUserValidator.js';


const router = express.Router();

router
    .route('/users')
    .get(userController.getAllUsers)
    .post(createUserValidator, userController.createUser);
    
router
    .route('/user/:id')
    .get(userController.getUserById)
    .put(userController.updateUserById);

export default router;