import joi from 'joi';

const createTicketSchema = joi.object({
  code: joi.string().required(),
  price: joi.number().integer().required(),
  discount: joi.number().integer().required(),
  user: joi.required(),
  projection: joi.required(),
});

export default async (req, res, next) => {
  try {
    await createTicketSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Error de validación',
      error,
    });
  }
};