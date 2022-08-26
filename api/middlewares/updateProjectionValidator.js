import joi from 'joi';


const updateProjectionSchema = joi.object({
  room: joi.string(),
  schedule: joi.date(),
  movie: joi.string().trim().min(1),
  mainLanguage: joi.string().trim().min(1),
  subtitled: joi.boolean(),
  subtitlingLanguage: joi.string().trim().allow(''),
  price: joi.number()
})

export default async (req, res, next) => {
  try {
    await updateProjectionSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Error de validación de la data',
      error,
    })
  }
}
