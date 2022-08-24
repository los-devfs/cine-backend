import joi from 'joi';

const updateUserSchema = joi.object({
  name: joi.string(),
  lastName: joi.string(),
  email: joi.string(),
});

export default async (req, res, next) => {
  try {
    await updateUserSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Error de validación al actualizar usuario',
      error,
    });
  }
};