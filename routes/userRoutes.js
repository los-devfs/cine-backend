import express from 'express';
import * as userController from '../controllers/userController.js';
import createUserValidator from '../middlewares/createClientValidator.js';


const routerClients = express.Router();

routerClients
    .route('/clients')
    .get(clientController.getAllClients)
    .post(createClientValidator, clientController.createClient);
    
routerClients
    .route('/clients/:id')
    .get(clientController.getClientById)
    .put(clientController.updateClientById);

export default routerClients;