import express from "express";
import User from "../models/User.js";
import { disableUserbyId } from "../controllers/userController.js";

const router = express.Router();

router.get('/desableUser/:id', disableUserbyId);


export default router;