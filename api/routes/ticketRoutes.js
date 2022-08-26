import express from 'express';
import * as ticketController from '../controllers/ticketController.js';
import createTicketValidator from '../middlewares/createTicketValidator.js';

const router = express.Router();

router.route('/ticket').post(createTicketValidator, ticketController.createTicket);

export default router;
