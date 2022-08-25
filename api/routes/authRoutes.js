import express from 'express';
import {register} from '../controllers/authController.js'
import createUserValidator from '../middlewares/createUserValidator.js';

const router = express.Router();

router.post('/register',createUserValidator, register)

export default router;