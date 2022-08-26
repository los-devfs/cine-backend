import Ticket from '../models/Ticket.js';

const createTicket = async (req, res) => {
  try {
    const newTicket = await Ticket.create(req.body);
    return res.json({
      msg: 'Ticket creado',
      data: {
        ticket: newTicket,
      },
    });    
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al crear un ticket',
      error,
    });
  }
};

export { createTicket };