import express from "express";
import * as roomController from "../controllers/roomController.js";
import createRoomValidator from "../middlewares/createRoomValidator.js";

const router = express.Router();

router.route('/room').post(createRoomValidator, roomController.createRoom);

export default router;