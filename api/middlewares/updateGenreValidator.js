import Joi from "joi";

const schemaUpdateGenre = Joi.object({
  name: Joi.string().trim().required(),
});

export default async (req, res, next) => {
  try {
    await schemaUpdateGenre.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "Ocurrió error al validar los datos",
      error,
    })
  }
}