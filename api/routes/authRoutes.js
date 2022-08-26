import express from 'express';
import {register, login} from '../controllers/authController.js'
import createUserValidator from '../middlewares/createUserValidator.js';
import loginUserValidator from '../middlewares/loginUserValidator.js';

const router = express.Router();

router.post('/register',createUserValidator, register)
router.post('/login',loginUserValidator,login)

export default router;