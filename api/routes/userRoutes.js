import express from "express";
import User from "../models/User.js";
import updateUserValidator from '../middlewares/updateUserValidator.js';
import createUserValidator from "../middlewares/createUserValidator.js";
import * as userController from '../controllers/userController.js';
import { register } from "../controllers/authController.js";

const router = express.Router();

router.post('/createUser', createUserValidator, register)

router.put('/desableUser/:id', userController.disableUserbyId);

router
  .route('/user/:id')
  .put(updateUserValidator, userController.updateUserById);


export default router;