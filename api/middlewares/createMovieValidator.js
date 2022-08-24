import joi from "joi";

const genreSchema = joi.object().keys({
  type: joi
    .string()
    .valid(
      "action",
      "comedy",
      "drama",
      "horror",
      "romance",
      "thriller",
      "western"
    ),
});

const createMovieSchema = joi.object({
  name: joi.string().required(),
  director: joi.string().required(),
  producer: joi.string().required(),
  releaseDate: joi.date(),
  rated: joi.number().integer().positive().min(1).max(5),
  genre: genreSchema,
});

export default async (req, res, next) => {
  try {
    console.log(req.body);
    await createMovieSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "Error de validación",
      error,
    });
  }
};
