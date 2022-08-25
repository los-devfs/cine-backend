import express from "express";
import updateUserValidator from '../middlewares/updateUserValidator.js';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.put('/desableUser/:id', userController.disableUserbyId);

router
  .route('/user/:id')
  .put(updateUserValidator, userController.updateUserById);


export default router;