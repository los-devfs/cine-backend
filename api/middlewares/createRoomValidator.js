import joi from 'joi';

const createRoomSchema = joi.object({
  address: joi.string().required(),
  roomNumber: joi.number().integer().positive().required(),
  seat: joi.number().integer().positive().required(),
  name: joi.string().required(),
});

export default async (req, res, next) => {
  try {
    await createRoomSchema.validateAsync(req.body);
    next();     
  } catch (error) {
    return res.status(400).json({
      msg: 'Error de validación',
      error,
    });
  }
};